"use client";
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession()
  const [firstArrival, setFirstArrival] = useState(null);

  const obtenerArrivals = async () => {
    try {
      const response = await fetch(process.env.LOCAL_URL);
      const arrivals = await response.json();
      const firstArrivalData = (arrivals.BE2002).slice(0, 5);
      setFirstArrival(firstArrivalData);
    } catch (error) {
      console.error('Error al obtener los arribos:', error);
    }
  };

  setInterval(() => {
    router.replace('/', undefined, { scroll: false })
  }, 60000)

  useEffect(() => {
    setInterval(() => {
      if (session) {
        obtenerArrivals();
      }
    }, 60000)
    if(session) {
      obtenerArrivals();
    }
  }, [session]);

  return (
    <main className="bg-[#202020]">
      {
        !session ? (
          <>
            <div className="text-start ml-[40px] mt-[120px]">
              <h1 className="text-5xl font-extrabold text-white">Te damos la bienvenida a Micro</h1>
              <p className="text-xl font-bold text-gray-300 ml-1 mt-1">La app mas avanzada a nivel de bondis 🚌🕐</p>
            </div>
            <div className="text-start ml-[40px] mt-[50px]">
              <p className="text-lg font-bold text-gray-600">Elegi el servicio con el cual te vas a autenticar:</p>
              <p className="text-xs mt-1 text-gray-200">Registrandote en Micro, se comprende que estas aceptando nuestros Terminos y Condiciones, junto a la Politica de Privacidad</p>
              <div className="flex flex-row space-x-5 ">
                <button className="flex flex-row space-x-2 text-white bg-gray-700 w-fit p-1.5 rounded px-4 mt-5 hover:bg-gray-800 transition-all">
                  <i className="fa-brands fa-google mt-1"></i>
                  <span className="font-semibold">Iniciar sesion con Google</span>
                </button>
                <button className="flex flex-row space-x-2 text-white bg-gray-700 w-fit p-1.5 rounded px-4 mt-5 hover:bg-gray-800 transition-all">
                  <i className="fa-brands fa-twitter mt-1"></i>
                  <span className="font-semibold">Iniciar sesion con Twitter</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <nav className="flex justify-center text-center mt-5">
              <input type="text" placeholder="Busca paradas, micros, etc." className="px-3 py-1 rounded w-96 bg-gray-700 text-white" />
            </nav>
            <div className="mt-[55px] ml-[45px]">
              <h1 className="text-white font-extrabold text-4xl">Bienvenido {session.user.name}</h1>
              <p className="font-bold text-lg text-gray-400">¿Que micros te vas a tomar el día de hoy?</p>
            </div>
            <div className="flex flex-row space-x-3 ml-[45px] mt-2 text-xs">
              <a className="bg-gray-700 text-white p-1.5 px-3 rounded">Todas las paradas disponibles</a>
              <a className="bg-gray-700 text-white p-1.5 px-3 rounded">Todos los micros disponibles</a>
              <a className="bg-gray-700 text-white p-1.5 px-3 rounded">Paradas cercanas a ti</a>
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
                <div className="mt-4 space-x-5 flex flex-row">
                  {firstArrival && firstArrival.map((arrival, key) => (
                    <div className="bg-[#383838] w-64 p-2 rounded h-32 shadow" key={key}>
                      <h4 className="font-semibold text-white">{arrival.descripcionCortaBandera}</h4>
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

    </main>
  )
}