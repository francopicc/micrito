import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-center mt-10 p-5 justify-around flex flex-row">
                  <div className="flex flex-col text-white text-start">
                  <a href='https://cafecito.app/micrito' rel='noopener' target='_blank'><img width="120" className="mb-2" srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' /></a>
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