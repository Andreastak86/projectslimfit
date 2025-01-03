import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    console.log("Registreringsprosess startet");
    try {
        const { email, password } = await request.json();
        console.log("Mottatt registreringsforespørsel for:", email);

        if (!email || !password) {
            console.log("Manglende e-post eller passord");
            return NextResponse.json(
                { error: "E-post og passord er påkrevd" },
                { status: 400 }
            );
        }

        // Generer en unik bruker-ID
        const userId = `user_${Date.now()}`;
        const userKey = `user:${email}`;

        console.log("Sjekker om bruker eksisterer");
        const existingUser = await kv.hget(userKey, "email");
        if (existingUser) {
            console.log("Bruker eksisterer allerede:", email);
            return NextResponse.json(
                { error: "Brukeren eksisterer allerede" },
                { status: 400 }
            );
        }

        console.log("Hasher passord");
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("Lagrer bruker");
        await kv.hset(userKey, {
            id: userId,
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
        });

        console.log("Bruker registrert:", email);
        return NextResponse.json({
            success: true,
            message: "Bruker opprettet",
        });
    } catch (error) {
        console.error("Detaljert registreringsfeil:", error);
        if (error instanceof Error) {
            console.error("Feilmelding:", error.message);
            console.error("Stack trace:", error.stack);
        }
        return NextResponse.json(
            {
                error: "Intern serverfeil",
                details: error instanceof Error ? error.message : "Ukjent feil",
            },
            { status: 500 }
        );
    }
}
