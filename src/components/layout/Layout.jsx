import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PadronModal from '../padron/PadronModal';
import FloatingElectoralButton from '../padron/FloatingElectoralButton';

const Layout = ({ children }) => {
    const location = useLocation();
    const [isPadronOpen, setIsPadronOpen] = useState(location.pathname === '/');
    const [modalView, setModalView] = useState('announcement');

    // Al cargar o navegar a la Home, abrir automáticamente en vista de anuncio
    useEffect(() => {
        if (location.pathname === '/') {
            setModalView('announcement');
            setIsPadronOpen(true);
        }
    }, [location.pathname]);

    // Al tocar el botón flotante, abrir directamente el buscador de DNI
    const handleOpenSearch = () => {
        setModalView('search');
        setIsPadronOpen(true);
    };

    return (
        <div className="flex flex-col min-h-screen font-sans relative">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />

            {/* Botón flotante "Elecciones 2026" adaptable a móviles */}
            <FloatingElectoralButton onClick={handleOpenSearch} />

            {/* Modal emergente del Padrón Electoral */}
            <PadronModal
                isOpen={isPadronOpen}
                onClose={() => setIsPadronOpen(false)}
                initialView={modalView}
            />
        </div>
    );
};

export default Layout;
