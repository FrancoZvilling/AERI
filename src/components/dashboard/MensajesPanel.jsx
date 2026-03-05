import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Loader2, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const MensajeCard = ({ mensaje }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Obtenemos título y descripción
    const titulo = mensaje.titulo || 'Comunicado Oficial';
    const descripcion = mensaje.descripcion || '';
    const fecha = new Date(mensaje.createdAt).toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const maxLength = 150;
    const shouldTruncate = descripcion.length > maxLength;

    return (
        <motion.div
            layout="position"
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
        >
            <div className="p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h4 className="font-bold text-lg text-gray-900 pr-4">{titulo}</h4>
                    <span className="flex items-center text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap self-start">
                        <Calendar className="w-3 h-3 mr-1" />
                        {fecha}
                    </span>
                </div>

                <AnimatePresence initial={false}>
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={{
                            expanded: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0.8, height: "auto" }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-gray-600 text-sm leading-relaxed"
                    >
                        {isExpanded ? (
                            <div className="whitespace-pre-wrap">{descripcion}</div>
                        ) : (
                            <div>
                                {shouldTruncate ? `${descripcion.substring(0, maxLength)}...` : descripcion}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {shouldTruncate && (
                    <motion.button
                        layout="position"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 flex items-center text-sm font-bold text-primary hover:text-[#002855] transition-colors focus:outline-none"
                    >
                        {isExpanded ? (
                            <>Cerrar <ChevronUp className="w-4 h-4 ml-1" /></>
                        ) : (
                            <>Ver más <ChevronDown className="w-4 h-4 ml-1" /></>
                        )}
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

const MensajesPanel = () => {
    const { token } = useAuth();
    const [mensajes, setMensajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMensajes = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/mensajes?sort[0]=createdAt:desc`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los mensajes');
                }

                const data = await response.json();
                setMensajes(data.data || []);
            } catch (err) {
                console.error("Error fetching mensajes:", err);
                setError('No se pudieron cargar los mensajes gremiales.');
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchMensajes();
        }
    }, [token]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                <p>Cargando mensajería gremial...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12 text-center text-red-500 font-medium bg-red-50 rounded-xl border border-red-100">
                <p>{error}</p>
            </div>
        );
    }

    if (mensajes.length === 0) {
        return (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-gray-400">
                    <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-500">Sin Mensajes</h3>
                <p className="text-gray-400 mt-2">No hay mensajes gremiales por el momento.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                    Comunicaciones Oficiales
                </h3>
                <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {mensajes.length} {mensajes.length === 1 ? 'Mensaje' : 'Mensajes'}
                </span>
            </div>

            <motion.div layout="position" className="grid grid-cols-1 gap-4">
                {mensajes.map((mensaje) => (
                    <MensajeCard key={mensaje.documentId || mensaje.id} mensaje={mensaje} />
                ))}
            </motion.div>
        </div>
    );
};

export default MensajesPanel;
