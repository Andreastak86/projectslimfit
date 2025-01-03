"use client";

import { useEffect, useState } from "react";

type DailyStats = {
    weight: number;
    waistSize: number;
    coffeeCount: number;
    waterCount: number;
    date: string;
};

export default function DailyStats() {
    const [stats, setStats] = useState<DailyStats | null>(null);

    useEffect(() => {
        const fetchTodayStats = async () => {
            try {
                const response = await fetch("/api/measurements/today");
                if (!response.ok)
                    throw new Error("Kunne ikke hente dagens statistikk");
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error("Feil ved henting av statistikk:", error);
            }
        };

        fetchTodayStats();
    }, []);

    if (!stats) {
        return (
            <div className='bg-white shadow-sm rounded-lg p-6'>
                <h2 className='text-xl font-semibold mb-4'>
                    Dagens statistikk
                </h2>
                <p className='text-gray-500'>Laster inn statistikk...</p>
            </div>
        );
    }

    return (
        <div className='bg-white shadow-sm rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-4'>Dagens statistikk</h2>
            <div className='space-y-4'>
                <div>
                    <p className='text-sm text-gray-500'>Vekt</p>
                    <p className='text-lg font-medium'>{stats.weight} kg</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>Midjemål</p>
                    <p className='text-lg font-medium'>{stats.waistSize} cm</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>Kaffekopper</p>
                    <p className='text-lg font-medium'>{stats.coffeeCount}</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>Glass vann</p>
                    <p className='text-lg font-medium'>{stats.waterCount}</p>
                </div>
            </div>
        </div>
    );
}
