import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Banknote, Plane, Heart, FileText, ArrowRight, Calendar, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import mockData from '../data/mockData.json';

const iconMap = {
    Banknote: Banknote,
    Plane: Plane,
    Heart: Heart,
    FileText: FileText,
};

const Home = () => {
    const { news, quickAccess } = mockData;

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

    // Custom SVG background to control text size precisely
    const heroBackground = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23002855'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-weight='bold' font-size='200' fill='white' opacity='0.1' text-anchor='middle' dominant-baseline='middle'%3EAERI%3C/text%3E%3C/svg%3E`;

    return (
        <div className="bg-gray-50 pb-20">
            {/* Hero Section */}
            <HeroSection
                title="Un gremio presente, un futuro seguro"
                subtitle="Asociación Empleados de Rentas e Inmobiliaria. Trabajando juntos por más y mejores beneficios."
                backgroundImage={heroBackground}
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
                                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-secondary h-full flex flex-col items-center justify-center text-center">
                                        <div className="bg-secondary/10 p-4 rounded-full mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-secondary group-hover:text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* News Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-primary border-l-4 border-secondary pl-4">
                            Novedades Gremiales
                        </h2>
                        <Link to="/noticias" className="hidden md:flex items-center text-secondary font-semibold hover:text-green-700 transition-colors">
                            Ver todas <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-gray-500 text-sm mb-3">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {new Date(item.date).toLocaleDateString()}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-secondary transition-colors cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                                        {item.summary}
                                    </p>
                                    <button className="text-secondary font-semibold hover:text-green-700 transition-colors self-start mt-auto">
                                        Leer más
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/noticias" className="inline-flex items-center text-secondary font-semibold hover:text-green-700 transition-colors">
                            Ver todas <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </section>

                {/* Contact & Location Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-primary border-l-4 border-secondary pl-4 mb-8">
                        Cómo llegar a nuestras oficinas
                    </h2>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
                        {/* Map Column */}
                        <div className="lg:w-1/2 h-80 lg:h-auto min-h-[400px]">
                            <iframe
                                title="Ubicación AERI"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.782875389657!2d-57.95764122345585!3d-34.91197777353986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e635c947514d%3A0x6b7218697669d2f2!2sCalle%2045%20535%2C%20B1900%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1703350000000!5m2!1sen!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>

                        {/* Contact Info Column */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-gray-50/50">

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Dirección</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Calle 45 N° 535<br />
                                            La Plata, Buenos Aires<br />
                                            <span className="text-sm text-gray-400">Lunes a Viernes de 8:00 a 16:00 hs</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Phone className="w-6 h-6 text-green-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Teléfonos</h3>
                                        <div className="space-y-1">
                                            <a href="tel:02214248142" className="block text-gray-600 hover:text-secondary transition-colors">
                                                Fijo: <span className="font-semibold">0221 4248142</span>
                                            </a>
                                            <a href="https://wa.me/5492215083285" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-green-600 transition-colors">
                                                WhatsApp: <span className="font-semibold">+54 9 221 5083285</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Correo Electrónico</h3>
                                        <a href="mailto:consultas@aeri.org.ar" className="text-gray-600 hover:text-secondary font-medium transition-colors">
                                            consultas@aeri.org.ar
                                        </a>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="pt-8 border-t border-gray-200">
                                    <h3 className="font-bold text-gray-900 text-lg mb-4">Seguinos en redes</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="bg-white p-3 rounded-full shadow-md text-pink-600 hover:bg-pink-50 hover:scale-110 transition-all">
                                            <Instagram className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="bg-white p-3 rounded-full shadow-md text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all">
                                            <Facebook className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="bg-white p-3 rounded-full shadow-md text-red-600 hover:bg-red-50 hover:scale-110 transition-all">
                                            <Youtube className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;
