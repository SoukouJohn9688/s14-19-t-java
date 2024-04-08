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
        <div className={`flex flex-col xl:flex-row xl:items-center xl:justify-between ${isExpanded ? 'w-full' : 'w-[15%]'} xl:max-w-2xl mx-auto sombra-sidebar rounded-br-xl xl:rounded-none h-screen xl:h-auto gap-5 py-5 xl:py-2 fixed xl:relative transition-all duration-500 ease-in-out`}>
            <div className='flex border-b-[1px] xl:border-none pb-3 xl:pb-0 border-slate-200 gap-5 cursor-pointer' onClick={toggleSidebarSize}>
                <img src={musica} className={`ring-[1px] ring-gray-300 w-12 rounded-full drop shadow ${!isExpanded ? 'mx-auto' : 'mx-3'}`} alt="" />
                {(isExpanded || window.innerWidth >= 1280) && (
                    <div>
                        <h2 className="text-lg font-semibold">Título</h2>
                        <p className="text-sm">Descripción</p>
                    </div>
                )}
            </div>
            <div className={`flex flex-col xl:flex-row xl:space-x-4 mt-2 xl:mt-0 w-full ${isExpanded ? 'gap-4' : 'gap-5'} ${isExpanded ? 'px-2' : 'px-0'}`}>
                {icons.map((icon, index) => (
                    <div key={index} className={`flex items-center ${!isExpanded ? 'justify-center' : ''}`}>
                        <img src={icon.icon} className={`icons rounded-lg p-1 ${isExpanded ? 'w-8' : 'w-7'} ${!isExpanded && 'hover:bg-[#009AD6] hover:rounded-md hover:transition hover:scale-95 hover:duration-200'}`} alt={icon.name} title={icon.name} />
                        {isExpanded && <span className='hover:text-[#009AD6] cursor-pointer ml-2'>{icon.name}</span>}
                    </div>
                ))}
            </div>
            <div className={`flex items-center ${!isExpanded ? 'justify-center' : ''} border-t-[1px] xl:border-none border-slate-200 pt-5 xl:pt-0 ${isExpanded ? 'px-2' : 'px-0'}`}>
                <img src={salir} className={`rounded-lg p-1 ${isExpanded ? 'w-10' : 'w-9'} ${!isExpanded && 'hover:bg-[#009AD6] hover:rounded-lg hover:p-2'}`} alt="Cerrar sesión" title="Cerrar sesión" />
                {isExpanded && <span className='hover:text-[#009AD6] ml-2'>Cerrar sesión</span>}
            </div>
            {isExpanded && <div className={`flex mt-4 ${isExpanded ? 'px-3 space-x-1' : 'm-auto'}`}>
                <img src={light} alt="" />
                <input
                    type="checkbox"
                    id="darkModeToggle"
                    className="switch"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                <img src={dark} alt="" />
            </div>}
        </div>
    );
};
