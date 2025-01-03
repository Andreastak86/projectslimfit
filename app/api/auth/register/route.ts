import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Sjekk om brukeren allerede eksisterer
        const existingUser = await kv.hget(`user:${email}`, "password");
        if (existingUser) {
            return NextResponse.json(
                { error: "Brukeren eksisterer allerede" },
                { status: 400 }
            );
        }

        // Hash passordet
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lagre brukeren
        await kv.hset(`user:${email}`, {
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Registreringsfeil:", error);
        return NextResponse.json(
            { error: "Intern serverfeil" },
            { status: 500 }
        );
    }
}
