"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ParadaSkeleton from "@/components/ParadaSkeleton";

export default function Paradas() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, isLoading] = useState(true);
  const [paradas, setParadas] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // New state for the search query

  if (status === "unauthenticated") {
    router.push('/');
  }

  const obtenerParadas = async () => {
    try {
      const response = await fetch(`http://146.190.139.198:3000/api/paradas`);
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

  // Handler for updating the search query state
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered bus stops based on the search query
  const filteredParadas = paradas
    ? paradas.filter((parada) =>
        parada.intersecciones.some(
          (interseccion) =>
            interseccion.paradas.some((parada) =>
              parada.identificadorParada
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
        )
      )
    : [];

  return (
    <>
      <Navbar session={session} />
      <div className="mt-[55px] ml-[30px] md:ml-[45px]">
        <p className="font-semibold text-stone-300 text-xs cursor-pointer" onClick={() => router.back()}>Regresar a la pagina anterior</p>
        <h1 className="text-white font-extrabold text-4xl mt-2">
          Todas las paradas disponibles
        </h1>
        <p className="font-bold text-xs mt-3 md:text-lg text-gray-400">
          Las calles y las intersecciones son buenos inicios para descubrir una
          parada.
        </p>
      </div>
      <div className="text-white ml-[30px] md:ml-[45px] w-[60rem] md:w-[110rem]">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Buscar paradas por codigo"
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-[#383838] mt-3 text-white p-2.5 w-4/12 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        {/* Display filtered bus stops */}
        {loading && <ParadaSkeleton paradas={10} />}
        {filteredParadas.length === 0 && !loading ? (
          <p className="mt-3 text-lg">No existen paradas por el nombre que indicaste 😟 </p>
        ) : (
          filteredParadas.map((parada) =>
            parada.intersecciones.map((interseccion) =>
              interseccion.paradas.map((parada, key) => (
                <Link
                  href={`/paradas/${parada.identificadorParada.replace(
                    " ",
                    ""
                  )}`}
                  key={key}
                >
                  <div
                    key={parada.identificadorParada}
                    className="bg-[#383838] mt-2 p-3 w-4/12 rounded shadow hover:bg-[#262626] transition-all"
                  >
                    <h2>{parada.identificadorParada.replace(" ", "")}</h2>
                    <p className="text-xs text-stone-400">
                      Ubicado en{" "}
                      {parada.descripcionCalle.replace("-", "")} y{" "}
                      {parada.descripcionInterseccion.replace("-", "")}
                    </p>
                  </div>
                </Link>
              ))
            )
          )
        )}
      </div>
      <Footer />
    </>
  );
}
