import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import {
    User, CreditCard, Download, Bell, Settings,
    Gift, Calendar, TrendingUp, LogOut, CheckCircle, Clock
} from 'lucide-react';
import { userData, virtualCardData, activeVouchers, quickStats } from '../data/userMock';

import InstallModal from '../components/ui/InstallModal';

const DashboardPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [activeTab, setActiveTab] = useState('resumen');

    // PWA Install State
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallModal, setShowInstallModal] = useState(false);

    React.useEffect(() => {
        const handler = (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            // NOTE: In production you might want to NOT prevent default immediately if you want the browser's mini-infobar to show.
            // But we want to control the experience.
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstallClick = async () => {
        // If no deferredPrompt (already installed, or iOS/Safari, or not fired yet)
        if (!deferredPrompt) {
            setShowInstallModal(true);
            return;
        }

        // Show the native prompt
        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        setDeferredPrompt(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <InstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
            />
            {/* Short Hero / Header */}
            <div className="bg-primary pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10">
                    <User className="w-96 h-96 text-white transform translate-x-1/3 -translate-y-1/4" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Hola, {userData.name}
                        </h1>
                        <p className="text-blue-100 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            Afiliado Activo • N° {userData.affiliateNumber}
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleInstallClick}
                        className="mt-6 md:mt-0 flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all shadow-lg"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        <span className="font-medium">Descargar App Móvil</span>
                    </motion.button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN: VIRTUAL CARD & PROFILE */}
                    <div className="lg:col-span-1 space-y-8">

                        {/* Virtual Card Component */}
                        <div className="group cursor-pointer" style={{ perspective: '1000px' }} onClick={() => setIsFlipped(!isFlipped)}>
                            <motion.div
                                className="relative w-full aspect-[1.586/1] transition-all duration-700"
                                style={{ transformStyle: 'preserve-3d' }}
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Front */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden border border-gray-700/50"
                                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                                >
                                    {/* Deco */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

                                    <div className="flex justify-between items-start relative z-10">
                                        <div>
                                            <h3 className="text-white/80 text-sm font-bold tracking-widest uppercase">Credencial Digital</h3>
                                            <div className="text-xs text-green-400 font-mono mt-1 flex items-center">
                                                <CheckCircle className="w-3 h-3 mr-1" /> Activa
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-white font-bold text-xl italic tracking-tighter">AERI</span>
                                            <span className="text-[10px] text-white/60">Socio Titular</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Afiliado</p>
                                            <p className="text-white font-medium text-lg tracking-wide">{userData.lastname.toUpperCase()}, {userData.name}</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Número</p>
                                                <p className="text-white font-mono text-lg tracking-widest">{userData.affiliateNumber}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Antigüedad</p>
                                                <p className="text-white font-medium">{userData.seniority}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 bg-gray-800 rounded-2xl p-6 shadow-2xl flex flex-col justify-center items-center border border-gray-700"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <div className="bg-white p-2 rounded-lg mb-4">
                                        {/* QR Placeholder */}
                                        <div className="w-32 h-32 bg-gray-900 flex items-center justify-center">
                                            <span className="text-white/50 text-xs">QR CODE</span>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-xs text-center">Escaneá este código para validar tu afiliación en comercios.</p>
                                </div>
                            </motion.div>
                            <p className="text-center text-sm text-gray-500 mt-3 flex items-center justify-center">
                                <Clock className="w-4 h-4 mr-1" /> Tocá la tarjeta para ver el código QR
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {quickStats.map((stat, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <p className="text-gray-500 text-xs uppercase font-bold">{stat.label}</p>
                                    <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                                    <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>
                                        {stat.trend} este mes
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: TABS & CONTENT */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden min-h-[600px]">
                            {/* Tabs Header */}
                            <div className="flex border-b border-gray-100 overflow-x-auto">
                                {[
                                    { id: 'resumen', icon: User, label: 'Mis Datos' },
                                    { id: 'vouchers', icon: Gift, label: 'Mis Vouchers' },
                                    { id: 'beneficios', icon: TrendingUp, label: 'Beneficios' },
                                    { id: 'turnos', icon: Calendar, label: 'Mis Turnos' },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center px-6 py-5 text-sm font-bold transition-all whitespace-nowrap
                                            ${activeTab === tab.id
                                                ? 'text-primary border-b-2 border-primary bg-primary/5'
                                                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <tab.icon className="w-5 h-5 mr-2" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div className="p-8">
                                <AnimatePresence mode='wait'>
                                    {activeTab === 'resumen' && (
                                        <motion.div
                                            key="resumen"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-xl font-bold text-gray-800 mb-4">Información Personal</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary mr-4">
                                                        <User />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-500 uppercase font-bold">Nombre Completo</p>
                                                        <p className="font-semibold text-gray-900">{userData.lastname}, {userData.name}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary mr-4">
                                                        <CreditCard />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-500 uppercase font-bold">Estado de Afiliación</p>
                                                        <p className="font-semibold text-green-600 flex items-center">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                            {userData.status}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* More placeholder fields can go here */}
                                            </div>

                                            <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl flex items-start">
                                                <Bell className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-primary mb-1">Notificaciones Recientes</h4>
                                                    <ul className="space-y-2 mt-2">
                                                        <li className="text-sm text-gray-600">• Tu último pago se acreditó correctamente.</li>
                                                        <li className="text-sm text-gray-600">• ¡Nuevo beneficio en Turismo disponible!</li>
                                                        <li className="text-sm text-gray-600">• Recordatorio: Retiro de kit escolar hasta el 01/03.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'vouchers' && (
                                        <motion.div
                                            key="vouchers"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-xl font-bold text-gray-800">Mis Vouchers Activos</h3>
                                                <button className="text-sm text-primary font-bold hover:underline">Ver Historial</button>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4">
                                                {activeVouchers.map((voucher) => (
                                                    <div key={voucher.id} className="border border-gray-200 rounded-xl p-0 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
                                                        <div className={`w-full md:w-2 bg-primary`}></div>
                                                        <div className="p-5 flex-grow">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <span className="text-xs font-bold uppercase text-primary bg-blue-50 px-2 py-1 rounded">{voucher.category}</span>
                                                                <span className="text-xs text-gray-400 font-mono">{voucher.expiry}</span>
                                                            </div>
                                                            <h4 className="font-bold text-lg text-gray-900">{voucher.title}</h4>
                                                            <p className="text-gray-600 text-sm mb-3">{voucher.description}</p>
                                                            <div className="bg-gray-100 rounded-lg p-3 flex justify-between items-center font-mono text-sm border border-dashed border-gray-300">
                                                                <span className="text-gray-500 select-all">{voucher.code}</span>
                                                                <span className="text-xs font-bold text-green-600 uppercase">
                                                                    {voucher.status === 'active' ? 'Disponible' : 'Usado'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {(activeTab === 'beneficios' || activeTab === 'turnos') && (
                                        <motion.div
                                            key="empty"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-center py-20"
                                        >
                                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                                {activeTab === 'beneficios' ? <TrendingUp className="w-8 h-8" /> : <Calendar className="w-8 h-8" />}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-400">Próximamente</h3>
                                            <p className="text-gray-500 mt-2">Esta sección estará disponible en la próxima actualización.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
