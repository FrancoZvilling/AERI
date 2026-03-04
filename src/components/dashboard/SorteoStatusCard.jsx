import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Loader2, PhoneCall, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SorteoStatusCard = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [isWinner, setIsWinner] = useState(false);
    const [showNumbers, setShowNumbers] = useState(false);

    useEffect(() => {
        const checkWinner = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sorteos?populate=ganador&sort=createdAt:desc&pagination[limit]=1`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                        const winner = data.data[0].ganador;
                        if (winner) {
                            // Comparamos el DNI del ganador con el DNI del usuario logueado
                            if (user && user.username && winner.dni && String(winner.dni) === String(user.username)) {
                                setIsWinner(true);
                            } else {
                                setIsWinner(false); // reseteamos por si cambia
                            }
                        }
                    }
                }
            } catch (error) {
                console.error("Error checking winner for status card:", error);
            } finally {
                setLoading(false);
            }
        };
        checkWinner();

        // Hacemos un breve polling para mantenerlo sincronizado con la prop de la Demo
        const interval = setInterval(checkWinner, 60000);
        return () => clearInterval(interval);
    }, [user]);

    return (
        <div className={`relative overflow-hidden rounded-xl shadow-sm border p-5 transition-colors duration-500 ${isWinner && !loading ? 'bg-gradient-to-r from-green-100 to-green-50 border-green-300' : 'bg-white border-gray-100'}`}>
            <p className={`text-xs uppercase font-bold mb-3 tracking-widest ${isWinner && !loading ? 'text-green-700' : 'text-gray-400'}`}>Sorteo Mensual</p>

            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center text-gray-400 py-2"
                    >
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        <span className="text-sm font-medium">Verificando resultados...</span>
                    </motion.div>
                ) : isWinner ? (
                    <motion.div
                        key="winner"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center text-green-600 mb-2">
                            <Trophy className="w-6 h-6 mr-2 animate-bounce" />
                            <h4 className="text-lg font-black uppercase tracking-tight">¡Felicitaciones!</h4>
                        </div>
                        <p className="text-sm text-green-800 font-medium leading-relaxed mb-3">
                            Sos el ganador del sorteo de este mes. Comunicate por llamada telefonica para reclamar tu premio.
                        </p>

                        <button
                            onClick={() => setShowNumbers(!showNumbers)}
                            className="flex items-center text-sm font-bold text-green-700 bg-green-200/50 hover:bg-green-200 px-3 py-1.5 rounded-full transition-colors"
                        >
                            <PhoneCall className="w-4 h-4 mr-2" />
                            Ver números
                            <motion.div animate={{ rotate: showNumbers ? 180 : 0 }} className="ml-1">
                                <ChevronDown className="w-4 h-4" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {showNumbers && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-green-200/50 space-y-2">
                                        <a href="tel:02214894470" className="flex items-center justify-between text-green-800 hover:text-green-600 transition-colors font-medium text-sm">
                                            0221 489-4470
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><PhoneCall className="w-3 h-3 text-green-600" /></div>
                                        </a>
                                        <div className="h-px w-full bg-green-200/50"></div>
                                        <a href="tel:02214270973" className="flex items-center justify-between text-green-800 hover:text-green-600 transition-colors font-medium text-sm">
                                            0221 427-0973
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><PhoneCall className="w-3 h-3 text-green-600" /></div>
                                        </a>
                                        <div className="h-px w-full bg-green-200/50"></div>
                                        <a href="tel:02214248142" className="flex items-center justify-between text-green-800 hover:text-green-600 transition-colors font-medium text-sm">
                                            0221 424-8142
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><PhoneCall className="w-3 h-3 text-green-600" /></div>
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        key="loser"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h4 className="text-lg font-bold text-gray-800">No has ganado este mes</h4>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">¡Mucha suerte en el próximo sorteo de AERI!</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Winner Background Decoration */}
            {isWinner && !loading && (
                <div className="absolute right-[-20px] top-[-20px] opacity-10 pointer-events-none">
                    <Trophy className="w-32 h-32 text-green-600" />
                </div>
            )}
        </div>
    );
};

export default SorteoStatusCard;
