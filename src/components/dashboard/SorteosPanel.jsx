import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, Ticket } from 'lucide-react';

const FAKE_NAMES = [
    "AGUSTINA LOPEZ", "MARCELO BIANCHI", "LUCAS ROMERO", "VALERIA GOMEZ",
    "GUSTAVO SILVA", "MARIA FERNANDEZ", "ROBERTO DIAZ", "CAMILA SANCHEZ",
    "DIEGO ALVAREZ", "SOFIA MARTINEZ", "JAVIER PEREZ", "FLORENCIA RUIZ"
];

const getSecondsUntilNextDraw = () => {
    const now = new Date();

    // ============================================
    // MODO DEMO:
    // Próximo sorteo en el segundo 0 del próximo minuto
    // ============================================
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0, 0);

    // ============================================
    // MODO PRODUCCIÓN:
    // Próximo sorteo el día 1 del próximo mes a las 00:00:00 hs
    // Para activarlo, comentá la línea 'target' de arriba y descomentá esta:
    // ============================================
    // const target = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0, 0);

    const diff = target.getTime() - now.getTime();
    return Math.max(0, Math.floor(diff / 1000));
};

const SorteosPanel = () => {
    const [phase, setPhase] = useState('WAITING'); // 'WAITING', 'SPINNING', 'REVEAL'
    const [countdown, setCountdown] = useState(getSecondsUntilNextDraw);
    const [lastWinner, setLastWinner] = useState(null);
    const [nextWinner, setNextWinner] = useState(null);

    // Initial fetch to get the current last winner immediately
    useEffect(() => {
        const fetchInitialWinner = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sorteos?populate=ganador&sort=createdAt:desc&pagination[limit]=1`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                        setLastWinner(data.data[0]);
                    }
                }
            } catch (error) {
                console.error("Error fetching initial winner:", error);
            }
        };
        fetchInitialWinner();
    }, []);

    // Countdown logic
    useEffect(() => {
        let timer;
        if (phase === 'WAITING') {
            setCountdown(getSecondsUntilNextDraw());

            timer = setInterval(() => {
                const remaining = getSecondsUntilNextDraw();
                if (remaining <= 0) {
                    clearInterval(timer);
                    setPhase('SPINNING');
                } else {
                    setCountdown(remaining);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [phase]);

    // Spinning logic
    useEffect(() => {
        if (phase === 'SPINNING') {
            const fetchWinner = async () => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sorteos?populate=ganador&sort=createdAt:desc&pagination[limit]=1`);
                    if (response.ok) {
                        const data = await response.json();
                        if (data.data && data.data.length > 0) {
                            setNextWinner(data.data[0]);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching winner:", error);
                }
            };

            // Fetch after a tiny delay to ensure the request goes through while spinning
            fetchWinner();

            // the "Show" lasts 10 seconds
            const spinTimeout = setTimeout(() => {
                setPhase('REVEAL');
            }, 10000);

            return () => clearTimeout(spinTimeout);
        }
    }, [phase]);

    // Reveal logic
    useEffect(() => {
        if (phase === 'REVEAL') {
            if (nextWinner) {
                setLastWinner(nextWinner);
            }
            // Show winner for 8 seconds, then go back to waiting
            const revealTimeout = setTimeout(() => {
                setPhase('WAITING');
            }, 8000);

            return () => clearTimeout(revealTimeout);
        }
    }, [phase, nextWinner]);

    const formatCountdown = (seconds) => {
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return {
            d: d.toString().padStart(2, '0'),
            h: h.toString().padStart(2, '0'),
            m: m.toString().padStart(2, '0'),
            s: s.toString().padStart(2, '0')
        };
    };

    const time = formatCountdown(countdown);

    const renderWinnerData = (winnerObj) => {
        if (!winnerObj) return null;

        let nombre = null;
        let socio = "S/N";

        // Try to safely extract from Strapi 5 relation using optional chaining
        const ganadorRel = winnerObj.ganador;
        if (ganadorRel) {
            if (ganadorRel.nombre || ganadorRel.apellido) {
                nombre = `${ganadorRel.nombre || ''} ${ganadorRel.apellido || ''}`.trim();
            }
            if (ganadorRel.numero_socio) {
                socio = ganadorRel.numero_socio;
            }
        }

        if (!nombre) return null;

        return { nombre, socio };
    };

    const lastWinnerData = renderWinnerData(lastWinner);
    const nextWinnerData = renderWinnerData(nextWinner);

    return (
        <div className="bg-white rounded-xl h-full flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-primary rounded-full mb-4">
                    <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sorteo de Afiliados</h3>
                <p className="text-gray-500 mt-2">Participá automáticamente por estar al día</p>
            </div>

            {/* Main Stage */}
            <div className="flex-grow flex flex-col justify-center items-center relative z-10 min-h-[300px]">
                <AnimatePresence mode="wait">
                    {/* STATE 1: WAITING */}
                    {phase === 'WAITING' && (
                        <motion.div
                            key="waiting"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                            className="w-full flex flex-col items-center"
                        >
                            <div className="mb-4 text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center">
                                <Clock className="w-4 h-4 mr-2" /> PRÓXIMO SORTEO EN
                            </div>

                            {/* Countdown Timer */}
                            <div className="flex space-x-4 text-center mb-10">
                                <div className="flex flex-col">
                                    <div className="w-20 h-24 bg-gray-900 rounded-lg flex items-center justify-center shadow-inner border border-gray-800">
                                        <span className="text-4xl font-mono font-bold text-white">{time.d}</span>
                                    </div>
                                    <span className="text-xs text-gray-500 font-bold uppercase mt-2">DÍAS</span>
                                </div>
                                <div className="text-3xl font-bold text-gray-300 mt-6">:</div>
                                <div className="flex flex-col">
                                    <div className="w-20 h-24 bg-gray-900 rounded-lg flex items-center justify-center shadow-inner border border-gray-800">
                                        <span className="text-4xl font-mono font-bold text-white">{time.h}</span>
                                    </div>
                                    <span className="text-xs text-gray-500 font-bold uppercase mt-2">HRS</span>
                                </div>
                                <div className="text-3xl font-bold text-gray-300 mt-6">:</div>
                                <div className="flex flex-col">
                                    <div className="w-20 h-24 bg-gray-900 rounded-lg flex items-center justify-center shadow-inner border border-gray-800">
                                        <span className="text-4xl font-mono font-bold text-white">{time.m}</span>
                                    </div>
                                    <span className="text-xs text-gray-500 font-bold uppercase mt-2">MIN</span>
                                </div>
                                <div className="text-3xl font-bold text-gray-300 mt-6">:</div>
                                <div className="flex flex-col">
                                    <div className="w-20 h-24 bg-primary rounded-lg flex items-center justify-center shadow-lg border border-primary">
                                        <span className="text-4xl font-mono font-bold text-white">{time.s}</span>
                                    </div>
                                    <span className="text-xs text-primary font-bold uppercase mt-2">SEG</span>
                                </div>
                            </div>

                            {/* Last Winner Card */}
                            {lastWinnerData ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-blue-50 border border-blue-100 rounded-xl p-6 w-full max-w-md text-center shadow-sm"
                                >
                                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Último Ganador</p>
                                    <h4 className="text-xl font-bold text-gray-900">{lastWinnerData.nombre}</h4>
                                    <div className="inline-flex mt-2 items-center px-3 py-1 bg-white rounded-full text-sm font-mono text-gray-600 border border-gray-200">
                                        Socio N° {lastWinnerData.socio}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-gray-50 border border-gray-200 rounded-xl p-6 w-full max-w-md text-center shadow-sm flex flex-col items-center justify-center text-gray-500"
                                >
                                    <Clock className="w-6 h-6 mb-2 opacity-50" />
                                    <p className="text-sm font-medium">Esperando el resultado del sorteo...</p>
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {/* STATE 2: SPINNING */}
                    {phase === 'SPINNING' && (
                        <motion.div
                            key="spinning"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full flex flex-col items-center justify-center py-10"
                        >
                            <h3 className="text-xl font-bold text-primary mb-6 animate-pulse">¡Sorteando ganador!</h3>

                            {/* Slot Machine Window */}
                            <div className="w-full max-w-md h-32 bg-gray-900 rounded-2xl shadow-inner border-4 border-gray-800 overflow-hidden relative flex items-center justify-center">
                                {/* Gradient overlays for physical slot machine look */}
                                <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute w-full h-[2px] bg-primary/50 z-20 top-1/2 transform -translate-y-1/2 blur-[1px]"></div>

                                <motion.div
                                    animate={{
                                        // create a very long translation so it looks like it's spinning infinitely
                                        y: ["0%", "-80%"]
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{ filter: "blur(2px)" }}
                                    className="pt-32 pb-32 text-center"
                                >
                                    {/* Repeat names many times to create a reel */}
                                    {Array(10).fill(FAKE_NAMES).flat().map((name, i) => (
                                        <div key={i} className="h-16 flex items-center justify-center text-2xl font-bold text-white uppercase tracking-wider opacity-80">
                                            {name}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* STATE 3: REVEAL */}
                    {phase === 'REVEAL' && nextWinnerData && (
                        <motion.div
                            key="reveal"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: [0.5, 1.1, 1],
                                opacity: 1
                            }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                            className="w-full flex flex-col items-center justify-center"
                        >
                            <div className="absolute -inset-10 bg-gradient-to-r from-yellow-400/20 via-yellow-300/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse -z-10"></div>

                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mb-6 flex justify-center"
                            >
                                <div className="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest flex items-center border border-yellow-200">
                                    <Trophy className="w-4 h-4 mr-2" /> ¡TENEMOS UN GANADOR!
                                </div>
                            </motion.div>

                            <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-2xl p-8 w-full max-w-md text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative">
                                <h4 className="text-3xl font-extrabold text-gray-900 mb-2 uppercase tracking-tight">
                                    {nextWinnerData.nombre}
                                </h4>
                                <div className="inline-flex mt-4 items-center px-4 py-2 bg-gray-900 rounded-lg text-lg font-mono font-bold text-white shadow-inner">
                                    <Ticket className="w-5 h-5 mr-3 text-primary" />
                                    N° {nextWinnerData.socio}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SorteosPanel;
