import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-center mt-10 p-5 justify-around flex flex-row">
                  <div className="flex flex-col text-white text-start">
                    <h4 className="text-white font-bold text-lg">Mas informacion</h4>
                    <Link href="/acerca"><p>Acerca de</p></Link>
                    <p>Terminos y Condiciones</p>
                    <p>Politicas de Privacidad</p>
                    <p>F.A.Q</p>
                  </div>
                  <div className="flex flex-col text-white text-start">
                    <h4 className="text-white font-bold text-lg">Encontranos en:</h4>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Contacto</p>
                  </div>
        </footer>
    )
}

export default Footer