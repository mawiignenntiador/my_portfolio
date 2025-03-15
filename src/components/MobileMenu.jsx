import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div 
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out 
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
            overflow-hidden`}
        >
            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <nav>
                <a 
                    href="#home" 
                    onClick={() => setMenuOpen(false)}
                    className={`block text-2xl text-white font-semibold my-4 transform transition-transform duration-300 ease-in-out
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`} 
                    aria-label="Home"
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    onClick={() => setMenuOpen(false)}
                    className={`block text-2xl text-white font-semibold my-4 transform transition-transform duration-300 ease-in-out
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}  
                    aria-label="About"
                >
                    About
                </a>
                <a 
                    href="#projects" 
                    onClick={() => setMenuOpen(false)}
                    className={`block text-2xl text-white font-semibold my-4 transform transition-transform duration-300 ease-in-out
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`} 
                    aria-label="Projects"
                >
                    Projects
                </a>
                <a 
                    href="#contact" 
                    onClick={() => setMenuOpen(false)}
                    className={`block text-2xl text-white font-semibold my-4 transform transition-transform duration-300 ease-in-out
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}  
                    aria-label="Contact"
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};