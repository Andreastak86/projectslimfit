import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth/next";
import SessionProvider from "./components/SessionProvider";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ProjectSlimFit",
    description: "Track your fitness journey",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    return (
        <html lang='no'>
            <body className={inter.className}>
                <SessionProvider session={session}>{children}</SessionProvider>
            </body>
        </html>
    );
}
