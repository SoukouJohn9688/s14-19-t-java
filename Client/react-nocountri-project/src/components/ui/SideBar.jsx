import { useState } from 'react';
import musica from '../../assets/musica-card.jpg';
import ajustes from '../../assets/ajustes.svg';
import estadisticas from '../../assets/stats.svg';
import home from '../../assets/home.svg';
import mensaje from '../../assets/mensaje.svg';
import config from '../../assets/config.svg';
import lupa from '../../assets/lupa.svg';
import salir from '../../assets/salir.svg';
import calendario from '../../assets/calendar.svg';
import left from '../../assets/left.svg';
import dark from '../../assets/dark.svg';
import light from '../../assets/light.svg';


const icons = [
    { name: 'Dashboard', icon: home },
    { name: 'Búsqueda', icon: lupa },
    { name: 'Calendario', icon: calendario },
    { name: 'Ajustes', icon: ajustes },
    { name: 'Estadisticas', icon: estadisticas },
    { name: 'Mensajes', icon: mensaje },
    { name: 'Configuración', icon: config },
];

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    

    const toggleSidebarSize = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`flex ${isExpanded ? 'w-[60%] md:w-[30%]' : 'w-[15%]'} sombra-sidebar rounded-br-xl rounded-tr-xl h-screen gap-5 py-5 flex flex-col fixed xl:hidden transition-all duration-500 ease-in-out`}>
            <div className='border-b-[1px] pb-3 border-slate-200 flex gap-5' onClick={toggleSidebarSize}>
                <img src={musica} className={`ring-[1px] ring-gray-300 w-12 rounded-full drop shadow ${!isExpanded ? 'mx-auto' : 'mx-3'}`} alt="" />
                {isExpanded && (
                    <div>
                        <h2 className="text-lg font-semibold">Título</h2>
                        <p className="text-sm">Descripción</p>
                    </div>
                )}
            </div>
            <div className={`flex flex-col mt-2 w-full ${isExpanded ? 'gap-4' : 'gap-5'} ${isExpanded ? 'px-2' : 'px-0'}`}>
                {icons.map((icon, index) => (
                    <div key={index} className={`flex items-center ${!isExpanded ? 'justify-center' : ''}`}>
                        <img src={icon.icon} className={`icons rounded-lg p-1 ${isExpanded ? 'w-8' : 'w-7'} ${!isExpanded && 'hover:bg-[#009AD6] hover:rounded-md hover:transition hover:scale-95 hover:duration-200'}`} alt={icon.name} title={icon.name} />
                        {isExpanded && <span className='hover:text-[#009AD6] cursor-pointer ml-2'>{icon.name}</span>}
                    </div>
                ))}
            </div>
            <div className={`border-t-[1px] border-slate-200 flex items-center  ${!isExpanded ? 'justify-center' : ''} ${!isExpanded ? 'pt-10' : 'pt-5'} ${isExpanded ? 'px-2' : 'px-0'}`}>
                <img src={salir} className={`rounded-lg p-1 ${isExpanded ? 'w-10' : 'w-9'} ${!isExpanded && 'hover:bg-[#009AD6] hover:rounded-lg hover:p-2'}`} alt="Cerrar sesión" title="Cerrar sesión" />
                {isExpanded && <span className='hover:text-[#009AD6] ml-2'>Cerrar sesión</span>}
            </div>
            <button onClick={toggleSidebarSize} className={`absolute top-9 left-48 w-5 h-5 flex justify-center items-center ${isExpanded ? '' : 'hidden'}`}>
                <img src={left} alt="Expand" title="Expand" />
            </button>
            <div className={`flex mt-4 ${isExpanded ? 'px-3 space-x-1' : 'm-auto'}`}>
                {isExpanded && <img src={light} alt="" />}
                <input
                    type="checkbox"
                    id="darkModeToggle"
                    className="switch"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                {isExpanded && <img src={dark} alt="" />}
            </div>
        </div>
    );
};

export default Sidebar;
