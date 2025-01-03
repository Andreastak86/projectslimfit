import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
    const session = await getServerSession();

    // Hvis brukeren er logget inn, redirect til dashboard
    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
            <div className='container mx-auto px-4 py-16'>
                <div className='max-w-3xl mx-auto text-center'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                        ProjectSlimFit
                    </h1>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Din personlige vektnedgangs- og helsetracker. Hold
                        oversikt over dine daglige målinger, måltider og
                        fremgang på en enkel og effektiv måte.
                    </p>
                    <div className='mt-10 flex items-center justify-center gap-x-6'>
                        <Link
                            href='/login'
                            className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                        >
                            Logg inn
                        </Link>
                        <Link
                            href='/about'
                            className='text-sm font-semibold leading-6 text-gray-900'
                        >
                            Les mer <span aria-hidden='true'>→</span>
                        </Link>
                    </div>
                </div>

                <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h2 className='text-lg font-semibold text-gray-900'>
                            Spor fremgangen
                        </h2>
                        <p className='mt-2 text-gray-600'>
                            Registrer vekt, midjemål og andre viktige målinger
                            for å følge din fremgang over tid.
                        </p>
                    </div>
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h2 className='text-lg font-semibold text-gray-900'>
                            Loggfør måltider
                        </h2>
                        <p className='mt-2 text-gray-600'>
                            Hold oversikt over dine daglige måltider og få bedre
                            innsikt i dine matvaner.
                        </p>
                    </div>
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h2 className='text-lg font-semibold text-gray-900'>
                            Del med din konsulent
                        </h2>
                        <p className='mt-2 text-gray-600'>
                            Del din fremgang direkte med din kostholdskonsulent
                            for bedre oppfølging.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
