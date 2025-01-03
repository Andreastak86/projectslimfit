"use client";

import { useState } from "react";

export default function MeasurementForm() {
    const [formData, setFormData] = useState({
        weight: "",
        waistSize: "",
        breakfast: "",
        lunch: "",
        dinner: "",
        snacks: "",
        coffeeCount: "",
        waterCount: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/measurements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Kunne ikke lagre målingene");

            // Nullstill skjema etter vellykket lagring
            setFormData({
                weight: "",
                waistSize: "",
                breakfast: "",
                lunch: "",
                dinner: "",
                snacks: "",
                coffeeCount: "",
                waterCount: "",
            });

            alert("Målingene ble lagret!");
        } catch (error) {
            console.error("Feil ved lagring:", error);
            alert("Kunne ikke lagre målingene. Prøv igjen senere.");
        }
    };

    return (
        <div className='bg-white shadow-sm rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-4'>
                Registrer dagens målinger
            </h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Vekt (kg)
                        </label>
                        <input
                            type='number'
                            step='0.1'
                            value={formData.weight}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    weight: e.target.value,
                                })
                            }
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Midjemål (cm)
                        </label>
                        <input
                            type='number'
                            step='0.1'
                            value={formData.waistSize}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    waistSize: e.target.value,
                                })
                            }
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        />
                    </div>
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Frokost
                    </label>
                    <textarea
                        value={formData.breakfast}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                breakfast: e.target.value,
                            })
                        }
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        rows={2}
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Lunsj
                    </label>
                    <textarea
                        value={formData.lunch}
                        onChange={(e) =>
                            setFormData({ ...formData, lunch: e.target.value })
                        }
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        rows={2}
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Middag
                    </label>
                    <textarea
                        value={formData.dinner}
                        onChange={(e) =>
                            setFormData({ ...formData, dinner: e.target.value })
                        }
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        rows={2}
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Mellommåltider/Snacks
                    </label>
                    <textarea
                        value={formData.snacks}
                        onChange={(e) =>
                            setFormData({ ...formData, snacks: e.target.value })
                        }
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        rows={2}
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Antall kaffekopper
                        </label>
                        <input
                            type='number'
                            value={formData.coffeeCount}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    coffeeCount: e.target.value,
                                })
                            }
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Antall glass vann
                        </label>
                        <input
                            type='number'
                            value={formData.waterCount}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    waterCount: e.target.value,
                                })
                            }
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                    Lagre dagens målinger
                </button>
            </form>
        </div>
    );
}
