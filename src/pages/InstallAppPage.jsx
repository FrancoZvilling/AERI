import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Smartphone, CheckCircle, Video } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Paso 1: Menú de opciones",
        description: "Abrí nuestra web en tu navegador y tocá el menú de opciones (los tres puntitos arriba a la derecha).",
        image: "/tutorial/1-tutorial.jpeg"
    },
    {
        id: 2,
        title: "Paso 2: Buscar instalar",
        description: "En la lista que se despliega, buscá y seleccioná la opción 'Instalar aplicación' o 'Crear acceso directo'.",
        image: "/tutorial/2-tutorial.jpeg"
    },
    {
        id: 3,
        title: "Paso 3: Confirmación",
        description: "Aparecerá un cartel de confirmación con nuestro logo. Tocá el botón 'Instalar'.",
        image: "/tutorial/3-tutorial.jpeg"
    },
    {
        id: 4,
        title: "Paso 4: Esperar",
        description: "Esperá unos breves segundos hasta que tu celular te notifique que la instalación fue completada con éxito.",
        image: "/tutorial/4-tutorial.jpeg"
    },
    {
        id: 5,
        title: "Paso 5: ¡A disfrutar!",
        description: "¡Listo! Ya podés encontrar el ícono azul de Mi AERI en el menú de tu celular para entrar rápido y directo.",
        image: "/tutorial/5-tutorial.jpeg"
    }
];

const PhoneMockup = ({ imageSrc, alt }) => (
    <div className="relative mx-auto w-full max-w-[330px] aspect-[3/5] bg-black rounded-[2.5rem] p-2 md:p-3 shadow-2xl border-[6px] border-gray-800">
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-10">
            <div className="w-32 h-6 bg-black rounded-b-3xl"></div>
        </div>
        <div className="w-full h-full bg-gray-100 rounded-[1.8rem] overflow-hidden relative">
            <img src={imageSrc} alt={alt} className="w-full h-full object-cover" loading="lazy" />
        </div>
    </div>
);

const InstallAppPage = () => {
    useEffect(() => {
        document.title = "Cómo Instalar la APP | AERI";
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Section */}
            <div className="bg-[#002855] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#39c3ef] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#39c3ef] rounded-full blur-[120px]"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
                            <Smartphone className="w-8 h-8 text-[#39c3ef]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                            Llevá a AERI <span className="text-[#39c3ef]">siempre con vos</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                            Accedé a tu panel, novedades y beneficios a un solo toque. Instalá nuestra aplicación oficial sin consumir espacio extra en tu celular.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Video Placeholder Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-black text-[#002855] mb-4">Mirá el video tutorial</h2>
                        <p className="text-gray-600 text-lg">Te explicamos paso a paso cómo hacerlo en menos de un minuto.</p>
                    </div>
                    
                    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/16] bg-black rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center border-[6px] border-gray-800">
                        {/* Notch (Simula un celular) */}
                        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30 pointer-events-none">
                            <div className="w-32 h-6 bg-gray-800 rounded-b-3xl"></div>
                        </div>

                        <video 
                            controls 
                            playsInline
                            className="w-full h-full object-cover rounded-[1.8rem] z-20 relative"
                            poster="/tutorial/1-tutorial.jpeg"
                        >
                            <source src="/tutorial/video_tutorial.mp4" type="video/mp4" />
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </div>
                </motion.div>

                {/* Step by Step Tutorial */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-[#002855] mb-4">Guía paso a paso</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Seguí estas sencillas instrucciones desde el navegador de tu celular para instalar la aplicación en tu pantalla de inicio.</p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-y-16 gap-x-8"
                >
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id} 
                            variants={itemVariants}
                            className="flex flex-col items-center w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
                        >
                            <div className="w-full flex justify-center mb-8 relative">
                                <PhoneMockup imageSrc={step.image} alt={step.title} />
                            </div>
                            <div className="text-center px-4 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex-1 w-full max-w-[280px] relative mt-4">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#39c3ef] text-[#002855] rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                                    {step.id}
                                </div>
                                <h3 className="text-xl font-bold text-[#002855] mb-3 mt-4">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Final CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-32 text-center bg-[#002855] rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#39c3ef] via-transparent to-transparent"></div>
                    <div className="relative z-10">
                        <CheckCircle className="w-16 h-16 text-[#39c3ef] mx-auto mb-6" />
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                            ¡Estás listo para empezar!
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Disfrutá de la comodidad de tener toda la información, tu credencial y los servicios del sindicato siempre en tu bolsillo.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InstallAppPage;
