"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Paradas() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, isLoading] = useState(true);
  const [paradas, setParadas] = useState(null);

  if (status === "unauthenticated") {
    router.push('/')
  }

  const obtenerParadas = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/paradas");
      const arrivals = await response.json();
      if (response.ok) {
        isLoading(false);
      }
      setParadas(arrivals);
    } catch (error) {
      console.error("Error al obtener las paradas:", error);
    }
  };

  useEffect(() => {
    if (session) {
      obtenerParadas();
    }
  }, [session]);

  return (
    <>
      <Navbar session={session} />
      <div className="mt-[55px] ml-[45px]">
        <Link href="/"><p className="font-semibold text-stone-300 text-xs">Volver al inicio</p></Link>
        <h1 className="text-white font-extrabold text-4xl">
          Todas las paradas disponibles
        </h1>
        <p className="font-bold text-lg text-gray-400">
          Las calles y las intersecciones son buenos inicios para descubrir una
          parada.
        </p>
      </div>
      <div className="text-white ml-[45px]">
        {paradas &&
          paradas.map((parada) =>
            parada.intersecciones.map((interseccion) =>
              interseccion.paradas.map((parada) => (
                <Link href={`/parada/${(parada.identificadorParada).replace(" ", "")}`}>
                  <div
                    key={parada.identificadorParada}
                    className="bg-[#383838] mt-2 p-3 w-4/12 rounded shadow hover:bg-[#262626] transition-all"
                  >
                    <h2>{(parada.identificadorParada).replace(" ", "")}</h2>
                    <p className="text-xs text-stone-400">Ubicado en {(parada.descripcionCalle).replace("-", "")} y {(parada.descripcionInterseccion).replace("-", "")}</p>
                  </div>
                </Link>
              ))
            )
          )}
      </div>
    </>
  );
}
