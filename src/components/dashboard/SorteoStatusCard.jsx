import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SorteoStatusCard = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [isWinner, setIsWinner] = useState(false);

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
                        <p className="text-sm text-green-800 font-medium leading-relaxed">
                            Sos el ganador del sorteo de este mes. Comunicate por llamada telefonica para reclamar tu premio.
                        </p>
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
