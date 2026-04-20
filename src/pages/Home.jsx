import React, { useState, useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import NewsCard from '../components/ui/NewsCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Banknote, Plane, Heart, FileText, ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, UserPlus, Loader2, AlertCircle, MessageCircle, Clock, Shield, MonitorSmartphone } from 'lucide-react';
import mockData from '../data/mockData.json';
import aeriEdificio from '../assets/aeri-edificio.jpeg';
import heroCover from '../assets/hero-cover.jpeg';

const iconMap = {
    Banknote: Banknote,
    Plane: Plane,
    Heart: Heart,
    FileText: FileText,
    UserPlus: UserPlus,
};

const Home = () => {
    const { quickAccess } = mockData;

    // State for latest news from Strapi
    const [latestNews, setLatestNews] = useState([]);
    const [loadingNews, setLoadingNews] = useState(true);

    useEffect(() => {
        const fetchLatestNews = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/noticias?sort=fecha:desc&pagination[pageSize]=3&populate=*`);
                if (response.ok) {
                    const json = await response.json();
                    setLatestNews(json.data || []);
                }
            } catch (error) {
                console.error("Error fetching latest news for Home:", error);
                setLatestNews([]); // Fallback to empty if error
            } finally {
                setLoadingNews(false);
            }
        };

        fetchLatestNews();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="bg-gray-50 pb-20">
            {/* Hero Section */}
            <HeroSection
                title="Acompañar, defender y representar a las y los trabajadores."
                subtitle="Organización sindical al servicio de las y los trabajadores. Trabajando juntos por más y mejores beneficios."
                backgroundImage={heroCover}
                overlayOpacity="bg-black/40"
                className="pb-16 md:pb-0 -translate-y-5 md:-translate-y-9"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">

                {/* Quick Access Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {quickAccess.map((item) => {
                        const Icon = iconMap[item.icon] || FileText;
                        return (
                            <motion.div variants={itemVariants} key={item.id}>
                                <Link to={item.link} className="block group">
                                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-[#39c3ef] h-full flex flex-col items-center justify-center text-center">
                                        <div className="bg-[#39c3ef]/10 p-4 rounded-full mb-4 group-hover:bg-[#39c3ef] group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-[#39c3ef] group-hover:text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* News Section (Sites of Interest) */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-primary border-l-4 border-[#00a0e1] pl-4">
                            Novedades Gremiales
                        </h2>
                        <Link to="/noticias" className="hidden md:flex items-center text-[#023e73] font-semibold hover:text-primary transition-colors">
                            Ver todas <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {loadingNews ? (
                            // Loading Skeletons
                            [1, 2, 3].map(i => (
                                <div key={i} className="bg-white rounded-2xl h-96 animate-pulse border border-gray-200 shadow-sm">
                                    <div className="h-48 bg-gray-200 rounded-t-2xl"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                        <div className="h-6 bg-gray-300 rounded w-full"></div>
                                    </div>
                                </div>
                            ))
                        ) : latestNews.length > 0 ? (
                            // Render actual news from Strapi
                            latestNews.map((item) => (
                                <div key={item.id} className="h-96">
                                    <NewsCard noticia={item} />
                                </div>
                            ))
                        ) : (
                            // Fallback if no news are returned (or error)
                            <div className="col-span-3 text-center text-gray-500 py-10">
                                No hay noticias recientes disponibles en este momento.
                            </div>
                        )}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/noticias" className="inline-flex items-center text-[#39c3ef] font-semibold hover:text-primary transition-colors">
                            Ver todas <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </section>

                {/* Contact & Location Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-primary border-l-4 border-[#00a0e1] pl-4 mb-8">
                        Cómo llegar a nuestras oficinas
                    </h2>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-3">

                        {/* 1. Building Photo */}
                        <div className="relative min-h-[300px] lg:min-h-full group overflow-hidden">
                            <img
                                src={aeriEdificio}
                                alt="Sede Central AERI"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="bg-[#00a0e1] w-12 h-1 mb-3 rounded-full"></div>
                                <h3 className="text-2xl font-bold mb-1">Sede Central</h3>
                                <p className="text-gray-200 text-sm">Nuestra casa, tu casa.</p>
                            </div>
                        </div>

                        {/* 2. Contact Info */}
                        <div className="p-8 flex flex-col justify-center bg-gray-50/50">
                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start">
                                    <div className="bg-[#39c3ef]/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#023e73]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">Dirección</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Calle 45 N° 535<br />
                                            La Plata, Buenos Aires<br />
                                            <span className="text-xs text-gray-400 mt-1 block">Lun a Vie de 8:30 a 15:00 hs</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="bg-[#39c3ef]/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#023e73]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">Teléfonos</h3>
                                        <div className="space-y-1 text-sm">
                                            <a href="tel:02214894470" className="block text-gray-600 hover:text-[#1e6df9] transition-colors">
                                                Línea 1: <span className="font-semibold">0221 489-4470</span>
                                            </a>
                                            <a href="tel:02214270973" className="block text-gray-600 hover:text-[#1e6df9] transition-colors">
                                                Línea 2: <span className="font-semibold">0221 427-0973</span>
                                            </a>
                                            <a href="tel:02214248142" className="block text-gray-600 hover:text-[#1e6df9] transition-colors">
                                                Línea 3: <span className="font-semibold">0221 424-8142</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="bg-[#39c3ef]/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#023e73]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">Correo</h3>
                                        <a href="mailto:info@aeri.org.ar" className="text-gray-600 hover:text-[#1e6df9] font-medium text-sm transition-colors">
                                            info@aeri.org.ar
                                        </a>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="pt-6 border-t border-gray-200">
                                    <div className="flex space-x-3 justify-center">
                                        <a href="https://www.instagram.com/sindicatoaeri/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm text-pink-600 hover:bg-pink-50 hover:scale-110 transition-all border border-gray-100">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.facebook.com/Sindicatoaeri?mibextid=wwXIfr&rdid=HtioyaTm1mmAy6w1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AxwLkGEJU%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all border border-gray-100">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://x.com/PrensaAeri" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm text-gray-900 hover:bg-gray-100 hover:scale-110 transition-all border border-gray-100">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Map */}
                        <div className="h-80 lg:h-auto min-h-[300px]">
                            <iframe
                                title="Ubicación AERI"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.782875389657!2d-57.95764122345585!3d-34.91197777353986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e635c947514d%3A0x6b7218697669d2f2!2sCalle%2045%20535%2C%20B1900%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1703350000000!5m2!1sen!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full bg-gray-200"
                            />
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN EMERGENCIAS ANIMADA --- */}
                <section className="relative w-full max-w-7xl mx-auto mt-8 mb-16">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl overflow-hidden shadow-2xl relative p-8 md:p-12 z-10 border-4 border-white border-opacity-20">

                        {/* Animated Ambulance */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: ["-20vw", "40vw", "40vw", "120vw"] }}
                            transition={{ repeat: Infinity, duration: 8, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
                            className="absolute top-1/2 -translate-y-1/2 left-0 z-0 pointer-events-none select-none opacity-20"
                        >
                            <span className="inline-block text-8xl md:text-[12rem] drop-shadow-2xl filter blur-[1px] scale-x-[-1]">🚑</span>
                        </motion.div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1 space-y-6 text-center md:text-left w-full">
                                <div className="bg-white/20 inline-block px-4 py-1 rounded-full text-white font-bold text-sm tracking-widest uppercase mb-2 animate-pulse shadow-sm">
                                    Atención 24 Horas
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight opacity-90">
                                        EMERGENCIAS MÉDICAS AERI
                                    </h3>
                                    <div className="flex flex-col sm:flex-row items-center sm:gap-4 justify-center md:justify-start">
                                        <a href="tel:08006668256" className="text-3xl md:text-4xl font-black text-white hover:text-red-200 transition-colors drop-shadow-md">
                                            0800-666-8256
                                        </a>
                                        <span className="hidden sm:block text-white/50 text-3xl font-light">|</span>
                                        <a href="tel:08009992996" className="text-3xl md:text-4xl font-black text-white hover:text-red-200 transition-colors drop-shadow-md">
                                            0800-999-2996
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/20">
                                    <h4 className="text-lg md:text-xl font-bold text-white/90 mb-2 tracking-tight">
                                        ASISTENCIA MÉDICA AERI ASSISTE
                                    </h4>
                                    <a href="tel:08003338425" className="text-2xl md:text-3xl font-black text-white hover:text-red-200 transition-colors drop-shadow-md">
                                        0800-333-8425
                                    </a>
                                </div>
                            </div>

                            {/* Icon / Decorator */}
                            <div className="hidden md:flex flex-shrink-0 bg-white p-6 rounded-full shadow-2xl relative">
                                <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-ping opacity-20"></div>
                                <Phone className="w-12 h-12 text-red-600 animate-bounce" />
                            </div>
                        </div>
                    </div>
                </section>



            </div >
        </div >
    );
};

export default Home;
