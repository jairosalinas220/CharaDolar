import { Link } from 'react-router-dom'
import { House, Newspaper, Scale } from 'lucide-react'
const Navbar = () => {
    return (
        <nav style={{"borderBottom": "1px solid rgba(15,23,42,0.08)"}} className='flex justify-between items-center p-4 border-1 border-b-gray-600'>
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold'>CharaDolar</h1>
            </div>
            <div className='flex gap-4'>
                <Link className="flex gap-2" to="/home">
                    Inicio
                    <House/>
                </Link>
                <Link className="flex gap-2" to="/compare">
                    Comparar
                    <Scale />
                </Link>
                <Link className="flex gap-2" to="/newsletter">
                    Noticias
                    <Newspaper/>
                </Link>
            </div>
            <a href="#contact" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Iniciar Sesión</a>
        </nav>
    )
}

export default Navbar