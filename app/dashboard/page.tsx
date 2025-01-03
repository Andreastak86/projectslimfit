import { Metadata } from "next";
import MeasurementForm from "../components/MeasurementForm";
import DailyStats from "../components/DailyStats";

export const metadata: Metadata = {
    title: "Dashboard - ProjectSlimFit",
    description: "Registrer og følg dine daglige målinger",
};

export default function DashboardPage() {
    return (
        <div className='min-h-screen bg-gray-100'>
            <main className='container mx-auto px-4 py-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-8'>
                    Min Dashboard
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <MeasurementForm />
                    <DailyStats />
                </div>
            </main>
        </div>
    );
}
