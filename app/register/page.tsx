"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                router.push("/login?registered=true");
            } else {
                const data = await response.json();
                setError(data.error || "Noe gikk galt ved registrering.");
            }
        } catch (error) {
            setError("Noe gikk galt. Vennligst prøv igjen senere.");
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <div>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                        Registrer ny konto
                    </h2>
                </div>
                <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                    <input type='hidden' name='remember' defaultValue='true' />
                    <div className='rounded-md shadow-sm -space-y-px'>
                        <div>
                            <label htmlFor='email-address' className='sr-only'>
                                E-postadresse
                            </label>
                            <input
                                id='email-address'
                                name='email'
                                type='email'
                                autoComplete='email'
                                required
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                placeholder='E-postadresse'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='sr-only'>
                                Passord
                            </label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                autoComplete='new-password'
                                required
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                placeholder='Passord'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className='text-red-500 text-sm mt-2'>{error}</div>
                    )}

                    <div>
                        <button
                            type='submit'
                            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                            Registrer
                        </button>
                    </div>
                </form>
                <div className='text-sm text-center'>
                    <Link
                        href='/login'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                        Har du allerede en konto? Logg inn her
                    </Link>
                </div>
            </div>
        </div>
    );
}
