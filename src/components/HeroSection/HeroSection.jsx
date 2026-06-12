import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4 py-16 text-center max-w-5xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Recibe alertas cuando sea el <span className="text-blue-500">momento perfecto</span> para comprar dólares</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-500 font-medium py-3">Monitoreamos el tipo de cambio en tiempo real y te notificamos cuando aparezcan las mejores oportunidades para ahorrar dinero.</p>
                <Link to="/register" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">Iniciar ahora</Link>
            </div>
        </section>
    );
}
export default HeroSection;