import { signOut } from "next-auth/react"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ session }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <nav className="flex justify-center items-center text-center mt-5 space-x-5">
              <Link href="/"><Image src="/assets/micrito-logo.svg" width={100} height={100} className="invert hover:opacity-80 transition-all duration-300"/></Link>
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full text-sm focus:outline-none"
                    id="user-menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={toggleMenu}
                  >
                    <img className="h-8 w-8 rounded-full" src={session?.user?.image} alt="" />
                    <i className="fa-solid fa-chevron-down mt-2 ml-2 text-stone-400"></i>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 flex flex-col origin-top-right text-start rounded-md bg-[#2e2e2e] text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    {/* Active: "bg-gray-100", Not Active: "" */}
                    <a href="/favoritos" className="flex flex-row space-x-3 px-4 py-2 text-sm hover:bg-[#424242] transition-all" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                      <i className="fa-sharp fa-solid fa-bookmark mt-1"></i>
                      <p className="ml-5">Favoritos</p>
                    </a>
                    <a onClick={() => { signOut({ callbackUrl: '/' }); }} className="cursor-pointer	flex flex-row space-x-3 px-4 py-2 text-sm hover:bg-[#424242] transition-all" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                      <i className="fa-solid fa-right-from-bracket mt-1"></i>
                      <p>Cerrar sesion</p>
                    </a>
                  </div>
                )}
              </div>
            </nav>
    )
}

export default Navbar;