"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import ArrivalSkeleton from "@/components/ArrivalSkeleton";

export default function AcercaParada ({ params }) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [Parada, setParada] = useState(null);
    const [loading, setLoading] = useState(true);

    if (status === "unauthenticated") {
        router.push('/')
    }

    const obtenerArrivals = async () => {
        try {
        const response = await fetch(
            'http://146.190.139.198:3000/api/arribos?parada=' + params.parada
        );
        const arrivals = await response.json();
        if (response.ok) {
            setLoading(false);
        }
        const firstArrivalData = (arrivals || []).slice(0, 5);
        setParada(firstArrivalData);
        } catch (error) {
        console.error('Error al obtener los arribos:', error);
        }
    };

    useEffect(() => {
        if (session) {
            obtenerArrivals();
        }
    }, [session]);

    useEffect(() => {
        const interval = setInterval(obtenerArrivals, 60000);
        return () => clearInterval(interval);
    }, [Parada]);

    const cachedArrivals = useMemo(() => Parada, [Parada]);
    return (
        <>
            <Navbar session={session} />
            <div className="mt-[55px] ml-[30px] md:ml-[45px]">
                <p className="font-semibold text-stone-300 text-xs cursor-pointer" onClick={() => router.back()}>Regresar a la pagina anterior</p>
                <p className="text-stone-600 text-xs font-bold mt-2">PARADA</p>
                <h1 className="text-white font-extrabold text-4xl mt-2">
                    🚏 {params.parada}
                </h1>
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-gray-300">👀 ¿Que micros estan pasando ahora?</h3>
                    <p className="text-stone-600 text-xs font-bold mt-2 w-8/12">Enterate de quien pasa por cada parada, mientras chusmeas.</p>
                    <div className="overflow-y-hidden overflow-x-auto scroll-mt-[50px] md:mt-4 space-x-5 flex flex-row mt-3">
                        {loading && <ArrivalSkeleton arrivals={5}/>}
                        {Parada && Parada.map((arrival, key) => (
                            <div className="bg-[#383838] min-w-max h-28 md:w-64 p-2 rounded md:h-32 shadow" key={key}>
                            <h4 className="font-semibold text-white">{arrival.descripcionBandera}</h4>
                            <h5 className="font-semibold text-stone-300 mb-2 mt-1 text-xs"> 🧔 {arrival.identificadorChofer}</h5>
                            <p className="text-stone-400 font-semibold text-xs">🕐 {arrival.tiempoRestanteArribo}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}