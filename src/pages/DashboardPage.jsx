import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import {
    User, CreditCard, Download, Bell, Settings,
    Gift, Calendar, TrendingUp, LogOut, CheckCircle, Clock, MessageSquare, Ticket, AlertCircle, Phone
} from 'lucide-react';
import { activeVouchers, quickStats } from '../data/userMock';
import { useAuth } from '../context/AuthContext';

import InstallModal from '../components/ui/InstallModal';
import SorteosPanel from '../components/dashboard/SorteosPanel';
import SorteoStatusCard from '../components/dashboard/SorteoStatusCard';
import AfiliadosCargoCard from '../components/dashboard/AfiliadosCargoCard';
import DigitalCredential from '../components/dashboard/DigitalCredential';
import BonosPanel from '../components/dashboard/BonosPanel';
import MensajesPanel from '../components/dashboard/MensajesPanel';
import RecentNotifications from '../components/dashboard/RecentNotifications';
import QRCode from 'react-qr-code';

const DashboardPage = () => {
    const { user, token } = useAuth();
    const [affiliateData, setAffiliateData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const [isFlipped, setIsFlipped] = useState(false);
    const [activeTab, setActiveTab] = useState('resumen');

    // PWA Install State
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallModal, setShowInstallModal] = useState(false);

    // Fetch Affiliate Data
    React.useEffect(() => {
        const fetchAffiliateData = async () => {
            if (!user || !user.username) {
                setError('No se pudo identificar al usuario.');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/afiliados?filters[dni][$eq]=${user.username}&populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error?.message || 'Error fetching affiliate data');
                }

                if (data.data && data.data.length > 0) {
                    const afiliado = data.data[0];
                    console.log('Perfil del afiliado:', afiliado);
                    setAffiliateData(afiliado);
                } else {
                    setError('No se encontró su expediente de afiliación. Por favor contáctese con el sindicato.');
                }
            } catch (err) {
                console.error("Error fetching data:", err);
                setError('Error de conexión al cargar el perfil.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchAffiliateData();
    }, [user, token]);

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

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-32 pb-20 flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p className="text-gray-500 font-medium">Cargando credencial digital...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 pt-32 pb-20 flex flex-col items-center justify-center px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Error de Carga</h3>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button onClick={() => window.location.reload()} className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-[#002855] transition-colors">
                        Intentar Nuevamente
                    </button>
                </div>
            </div>
        );
    }

    const { nombre, apellido, numero_socio, estado, zona } = affiliateData || {};

    // vCard format is natively supported by both iOS and Android cameras
    const qrPayload = `BEGIN:VCARD
VERSION:3.0
N:${apellido || ''};${nombre || ''};;;
FN:${nombre || ''} ${apellido || ''}
ORG:AERI Sindicato
TITLE:Afiliado ${estado} - Socio N° ${numero_socio || 'N/A'}
NOTE:DNI: ${user?.username || 'N/A'}\\nZona: ${zona ? zona.replace('_', ' ') : 'N/A'}
END:VCARD`;

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <InstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
            />
            {/* Short Hero / Header */}
            <div className={`pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${estado === 'BAJA' ? 'bg-red-600' : 'bg-primary'}`}>
                <div className="absolute right-0 top-0 opacity-10">
                    <User className="w-96 h-96 text-white transform translate-x-1/3 -translate-y-1/4" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center md:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-center md:text-left"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Hola, {nombre}
                        </h1>
                        <p className="text-blue-100 flex items-center justify-center md:justify-start">
                            {estado === 'ACTIVO' && <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>}
                            {estado === 'PENDIENTE' && <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>}
                            {estado === 'BAJA' && <span className="w-2 h-2 bg-red-900 rounded-full mr-2"></span>}
                            Afiliado {estado} {numero_socio ? `• N° ${numero_socio}` : ''}
                        </p>
                    </motion.div>

                    {estado === 'ACTIVO' && (
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
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">

                {/* STATUS: BAJA */}
                {estado === 'BAJA' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 border border-red-100 text-center max-w-2xl mx-auto mt-12 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
                        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertCircle className="w-10 h-10 text-red-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Afiliación Inactiva</h2>
                        <p className="text-gray-600 md:text-lg mb-8">
                            ❌ Su afiliación se encuentra actualmente dada de baja o suspendida. Para reactivar su cuenta y volver a acceder a la credencial digital, beneficios y sorteos, por favor comuníquese con secretaría gremial.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-xl flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="flex items-center text-gray-700">
                                <Phone className="w-5 h-5 mr-2 text-primary" />
                                <span className="font-medium">(0221) 483-3051</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                                <span className="font-medium">afiliaciones@aeri.org.ar</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* STATUS: PENDIENTE */}
                {estado === 'PENDIENTE' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100 text-center max-w-2xl mx-auto mt-12 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
                        <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-10 h-10 text-yellow-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">En proceso de Revisión</h2>
                        <p className="text-gray-600 md:text-lg mb-8">
                            ⏳ Su solicitud de afiliación está siendo analizada por nuestro equipo.
                            Nos pondremos en contacto con usted a la brevedad para finalizar el trámite y habilitar su perfil.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-xl inline-block">
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">DNI Registrado</p>
                            <p className="font-mono text-xl text-primary">{user.username}</p>
                        </div>
                    </motion.div>
                )}

                {/* STATUS: ACTIVO */}
                {estado === 'ACTIVO' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* LEFT COLUMN: VIRTUAL CARD & PROFILE */}
                        <div className="lg:col-span-1 space-y-8">

                            {/* Virtual Card Component */}
                            <DigitalCredential
                                nombre={nombre}
                                apellido={apellido}
                                numero_socio={numero_socio}
                                zona={zona}
                                qrPayload={qrPayload}
                                variant="titular"
                            />

                            {/* Status Card & Afiliados a Cargo */}
                            <div className="flex flex-col gap-4">
                                <SorteoStatusCard />
                                <AfiliadosCargoCard 
                                    familiares={affiliateData?.familiares_a_cargo} 
                                    externos={affiliateData?.familiar_externos} 
                                    titularNumeroSocio={numero_socio}
                                    titularZona={zona}
                                />
                            </div>
                        </div>

                        {/* RIGHT COLUMN: TABS & CONTENT */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden min-h-[600px]">
                                {/* Tabs Header */}
                                <div className="flex border-b border-gray-100 overflow-x-auto">
                                    {[
                                        { id: 'resumen', icon: User, label: 'Mis Datos' },
                                        { id: 'vouchers', icon: Gift, label: 'Órdenes de Farmacia' },
                                        { id: 'beneficios', icon: MessageSquare, label: 'Mensajería Gremial' },
                                        { id: 'turnos', icon: Ticket, label: 'Sorteos' },
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
                                                            <p className="font-semibold text-gray-900">{apellido}, {nombre}</p>
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
                                                                ACTIVO
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* More placeholder fields can go here */}
                                                </div>

                                                <RecentNotifications documentId={affiliateData?.documentId} />
                                            </motion.div>
                                        )}

                                        {activeTab === 'vouchers' && (
                                            <motion.div
                                                key="vouchers"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="h-full"
                                            >
                                                <BonosPanel affiliateData={affiliateData} />
                                            </motion.div>
                                        )}

                                        {activeTab === 'beneficios' && (
                                            <motion.div
                                                key="beneficios"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="h-full"
                                            >
                                                <MensajesPanel />
                                            </motion.div>
                                        )}

                                        {activeTab === 'turnos' && (
                                            <motion.div
                                                key="sorteos"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="h-full"
                                            >
                                                <SorteosPanel />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
