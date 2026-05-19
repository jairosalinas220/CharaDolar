const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold'>CharaDolar</h1>
            </div>
            <ul className='flex gap-4'>
                <li>
                    <a href="#home">Dolar Hoy</a>
                </li>
                <li>
                    <a href="#about">Notificaciones</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar