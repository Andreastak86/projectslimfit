import Link from "next/link";

export default function About() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
            <div className='container mx-auto px-4 py-16'>
                <div className='max-w-3xl mx-auto'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-6'>
                        Om ProjectSlimFit
                    </h1>

                    <div className='prose prose-lg'>
                        <p>
                            ProjectSlimFit er din personlige partner på reisen
                            mot en sunnere livsstil. Vi forstår at vektnedgang
                            og helseforbedring kan være utfordrende, og derfor
                            har vi skapt et verktøy som gjør det enklere for deg
                            å holde oversikt og motivasjonen oppe.
                        </p>

                        <h2>Vår Misjon</h2>
                        <p>
                            Vår misjon er å gi deg de verktøyene du trenger for
                            å ta kontroll over din helse og nå dine mål. Vi tror
                            på at konsistent oppfølging og databaserte innsikter
                            er nøkkelen til langvarig suksess.
                        </p>

                        <h2>Hva Vi Tilbyr</h2>
                        <ul>
                            <li>Daglig logging av vekt og midjemål</li>
                            <li>Detaljert måltidsregistrering</li>
                            <li>Oversikt over væskeinntak</li>
                            <li>
                                Deling av data med din personlige
                                kostholdskonsulent
                            </li>
                            <li>Visualisering av fremgang over tid</li>
                        </ul>

                        <h2>Personvern og Sikkerhet</h2>
                        <p>
                            Din personlige informasjon er viktig for oss. Vi
                            bruker moderne krypteringsteknologi for å sikre at
                            dine data forblir private og beskyttet.
                        </p>

                        <h2>Kom i Gang</h2>
                        <p>
                            Er du klar for å ta det første steget mot en sunnere
                            livsstil? Registrer deg i dag og begynn din reise
                            med ProjectSlimFit.
                        </p>
                    </div>

                    <div className='mt-10'>
                        <Link
                            href='/'
                            className='text-blue-600 hover:text-blue-800 font-semibold'
                        >
                            ← Tilbake til forsiden
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
