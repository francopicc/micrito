import Footer from "@/components/Footer";
import Link from "next/link";

export default function Acerca () {
    return (
      <div className="mt-[55px] ml-[45px]">
            <Link href="/"><p className="font-semibold text-stone-300 text-xs">Volver al inicio</p></Link>
            <h1 className="text-white font-extrabold text-4xl mt-2">
                Acerca de Micrito
            </h1>
            <div className="text-stone-400 mt-[25px] space-y-3">
                <p>Micrito es una plataforma dedicada a facilitar la movilidad urbana proporcionando información detallada sobre servicios de transporte en micros. Nuestro enfoque se centra en brindar a los usuarios datos precisos y actualizados sobre rutas, horarios y paradas, permitiéndoles planificar sus desplazamientos de manera confiada y eficiente.</p>
                <p>Nuestra misión en Micrito es simple pero fundamental: impulsar la movilidad urbana al poner en manos de nuestros usuarios una herramienta confiable que les permita conocer las opciones de transporte disponibles en la ciudad. Buscamos mejorar la calidad de vida de las personas, ahorrando tiempo y ofreciendo una experiencia de viaje más placentera.</p>
                <p>En Micrito, ofrecemos una plataforma intuitiva y fácil de usar que presenta información clara y concisa sobre las rutas de micros, sus horarios y ubicaciones de paradas. Nuestra base de datos se actualiza regularmente para garantizar que los usuarios dispongan de la información más actualizada para planificar sus trayectos diarios.</p>
                <p className="font-bold">Los datos en tiempo real de paradas, arribos, etc, son suministrados por el equipo de Smart Move y Cuando Llega Mi Micro.</p>
            </div>
      </div>
    )
}