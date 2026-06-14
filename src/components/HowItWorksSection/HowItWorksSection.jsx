import { SlidersHorizontal, ChartColumn, BellRing } from 'lucide-react';
const HowqItWorksSection = () => {
    return (
        <section className="py-4 bg-gray-100">
            <div className="mx-auto px-4 py-16 flex flex-col items-center max-w-5xl">
                <div className="bg-blue-100 inline-block px-4 py-2 rounded-full mb-4 border border-indigo-300">
                    <span className="text-sm text-blue-600 font-semibold">Proceso Simple</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo funciona?</h2>
                <h3 className="text-lg text-gray-600">Tres pasos simples para nunca perder una buena oportunidad de compra.</h3>
            </div>
            <div className="mx-auto px-4 flex flex-col items-center justify-center md:flex-row gap-8">
                <div className="p-6 rounded-lg flex flex-col items-center max-w-xl">
                    <div style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(37, 99, 235, 0.06))', border: '1.5px solid rgba(37, 99, 235, 0.125)', boxShadow: 'rgba(37, 99, 235, 0.125) 0px 4px 20px' }} className="text-blue-500 mb-4 p-5 rounded-xl inline-block">
                        <SlidersHorizontal size={38} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Configura tu precio objetivo</h4>
                    <p className="text-gray-600 text-center">Define el tipo de cambio al que deseas comprar dólares. Puedes configurar múltiples alertas para distintas casas de cambio.</p>
                </div>
                <div className="p-6 rounded-lg flex flex-col items-center max-w-xl">
                    <div style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(37, 99, 235, 0.06))', border: '1.5px solid rgba(37, 99, 235, 0.125)', boxShadow: 'rgba(37, 99, 235, 0.125) 0px 4px 20px' }} className="text-blue-500 mb-4 p-5 rounded-xl inline-block">
                        <ChartColumn size={38}/>
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Monitoreo en tiempo real</h4>
                    <p className="text-gray-600 text-center">Nuestro sistema monitorea el tipo de cambio en tiempo real para detectar las mejores oportunidades.</p>
                </div>
                <div className="p-6 rounded-lg flex flex-col items-center max-w-xl">
                    <div style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(37, 99, 235, 0.06))', border: '1.5px solid rgba(37, 99, 235, 0.125)', boxShadow: 'rgba(37, 99, 235, 0.125) 0px 4px 20px' }} className="text-blue-500 mb-4 p-5 rounded-xl inline-block">
                        <BellRing size={38}/>
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Recibe tus alertas</h4>
                    <p className="text-gray-600 text-center">Te notificamos inmediatamente cuando se detecta una oportunidad de compra que coincide con tus criterios.</p>
                </div>
            </div>
        </section>
    );
}
export default HowqItWorksSection;