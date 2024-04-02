import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-100 py-4 px-8 flex justify-between items-center">
            {/* Logo de la empresa a la izquierda */}
            <div className="flex items-center">
                <img src="ruta/al/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
                <span className="text-blue-600 text-lg font-bold">EdTech</span>
            </div>
            
            {/* Botón para el menú en dispositivos móviles */}
            <div className="block md:hidden">
                <button className="text-gray-700 focus:outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Rutas a la derecha */}
            <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-700 hover:text-gray-400">Ayuda</a>
                <a href="#" className="text-gray-700 hover:text-gray-400">Conócenos</a>
                <a href="#" className="text-gray-700 hover:text-gray-400">Experiencias</a>
                <a href="#" className="text-gray-700 hover:text-gray-400">Acceso</a>
            </div>
        </nav>
    );
}

export default Navbar;
