"use client";
import { useState, useEffect, useMemo } from 'react';
import { useSession, getSession, signIn, signOut } from 'next-auth/react'
import 'react-loading-skeleton/dist/skeleton.css'
import ArrivalSkeleton from '@/components/ArrivalSkeleton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession();
  const [firstArrival, setFirstArrival] = useState(null);
  const [loading, setLoading] = useState(true);

  const obtenerArrivals = async () => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/arribos?parada=BE2002'
      );
      const arrivals = await response.json();
      if (response.ok) {
        setLoading(false);
      }
      const firstArrivalData = (arrivals || []).slice(0, 5);
      setFirstArrival(firstArrivalData);
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
  }, [firstArrival]);

  const cachedArrivals = useMemo(() => firstArrival, [firstArrival]);

  return (
    <main className="bg-[#202020]">
      {
        !session ? (
          <>
            <div className="text-start ml-[40px] mt-[120px]">
              <h1 className="text-5xl font-extrabold text-white mt-3">Te damos la bienvenida a Micrito</h1>
              <p className="text-xl font-bold text-gray-300 ml-1 mt-1">La app mas avanzada a nivel de bondis 🚌🕐</p>
            </div>
            <div className="text-start ml-[40px] mt-[50px]">
              <p className="text-lg font-bold text-gray-600">Elegi el servicio con el cual te vas a autenticar:</p>
              <p className="text-xs mt-1 text-gray-200">Registrandote en Micro, se comprende que estas aceptando nuestros Terminos y Condiciones, junto a la Politica de Privacidad</p>
              <div className="flex flex-row space-x-5 ">
                <button onClick={() => { signIn('google')}} className="flex flex-row space-x-2 text-white bg-gray-700 w-fit p-1.5 rounded px-4 mt-5 hover:bg-gray-800 transition-all">
                  <i className="fa-brands fa-google mt-1"></i>
                  <span className="font-semibold">Iniciar sesion con Google</span>
                </button>
                <button onClick={() => { signIn('twitter')}} className="flex flex-row space-x-2 text-white bg-gray-700 w-fit p-1.5 rounded px-4 mt-5 hover:bg-gray-800 transition-all">
                  <i className="fa-brands fa-twitter mt-1"></i>
                  <span className="font-semibold">Iniciar sesion con Twitter</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Navbar session={session}/>
            <div className="mt-[55px] ml-[45px]">
              <h1 className="text-white font-extrabold text-4xl">Bienvenido {session.user.name}</h1>
              <p className="font-bold text-lg text-gray-400">¿Que micros te vas a tomar el día de hoy?</p>
            </div>
            <div className="flex flex-row space-x-3 ml-[45px] mt-2 text-xs">
              <Link className="bg-gray-700 text-white p-1.5 px-3 rounded hover:bg-gray-800 transition-all" href='/paradas'><p>Todas las paradas disponibles</p></Link>
            </div>
            <div className="mt-[55px] ml-[45px]">
              <div>
                <h3 className="text-2xl font-semibold text-gray-300">🏁 Tus paradas favoritas</h3>
                <div className="mt-4 space-x-5 flex flex-row">
                  <div className="bg-[#383838] w-64 p-2 rounded h-32 shadow">
                    <h4 className="font-semibold text-white">BE2015 - 202</h4>
                    <h5 className="font-semibold text-stone-300 mb-2 mt-1 text-xs">📍 Ubicada en Avenida Montevideo, Berisso.</h5>
                    <p className="text-stone-400 font-semibold text-xs">🚩 Queda a 1km de tu ubicacion aproximadamente.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-300">🚌 Tus micros favoritos</h3>
                <div className="mt-4 space-x-5 flex flex-row">
                  <div className="bg-[#383838] w-64 p-2 rounded h-32 shadow">
                    <h4 className="font-semibold text-white">202 - FX1</h4>
                    <h5 className="font-semibold text-stone-300 mb-2 mt-1 text-xs"> 🧔 3288 CASTAGNANI</h5>
                    <p className="text-stone-400 font-semibold text-xs">🕐 Pasando en aproximadamente 5 minutos por tu ubicacion</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-300">🚏 Pasando ahora por BE2002</h3>
                <p className="text-stone-600 text-xs font-bold mt-1">Los valores son aproximativos, y pueden variar de entre 2 minutos a 5 minutos.</p>
                <div className="mt-4 space-x-5 flex flex-row">
                  {loading && <ArrivalSkeleton arrivals={5}/>}
                  {firstArrival && firstArrival.map((arrival, key) => (
                    <div className="bg-[#383838] w-64 p-2 rounded h-32 shadow" key={key}>
                      <h4 className="font-semibold text-white">{arrival.descripcionBandera}</h4>
                      <h5 className="font-semibold text-stone-300 mb-2 mt-1 text-xs"> 🧔 {arrival.identificadorChofer}</h5>
                      <p className="text-stone-400 font-semibold text-xs">🕐 {arrival.tiempoRestanteArribo}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-300">📌 ¿Por donde esta pasando el FX1 - IDA?</h3>
                <p className="text-stone-600 text-xs font-bold mt-2">En base a tus gustos y recomendaciones.</p>
              </div> */}
              {/* <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-300">⛔ Paros de micros en los siguientes dias</h3>
                <p className="text-stone-600 text-xs font-bold mt-2">Somos los primeros en avisarte.</p>
              </div> */}
            </div>
            <Footer />
          </>
        )
      }

    </main>
  )
}
