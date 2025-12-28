import React from 'react';
import HeroSection from '../ui/HeroSection';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const SecretariatLayout = ({ secretariat }) => {
    if (!secretariat) return null;

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title={secretariat.title}
                subtitle={secretariat.mission}
                backgroundImage={secretariat.image_url}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content / Benefits Grid */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6">Beneficios y Servicios</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {secretariat.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * index + 0.3 }}
                                        className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50 hover:bg-white group"
                                    >
                                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Layout */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-xl p-8 sticky top-24"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-6">Contacto</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Dirección</p>
                                        <p className="text-gray-600">{secretariat.contact.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Teléfono</p>
                                        <a href={`tel:${secretariat.contact.phone}`} className="text-gray-600 hover:text-secondary transition-colors">
                                            {secretariat.contact.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <a href={`mailto:${secretariat.contact.email}`} className="text-gray-600 hover:text-secondary transition-colors break-all">
                                            {secretariat.contact.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-secondary text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg shadow-secondary/20 flex items-center justify-center space-x-2">
                                <span>Contactar ahora</span>
                                <ExternalLink className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecretariatLayout;
