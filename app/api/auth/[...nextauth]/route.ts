import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { kv } from "@vercel/kv";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "E-post", type: "text" },
                password: { label: "Passord", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await kv.hgetall(`user:${credentials.email}`);

                if (
                    user &&
                    (await bcrypt.compare(credentials.password, user.password))
                ) {
                    return { id: credentials.email, email: credentials.email };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST };
