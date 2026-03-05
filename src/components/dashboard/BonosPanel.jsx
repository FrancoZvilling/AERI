import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Loader2, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const BonosPanel = ({ affiliateData }) => {
    const { token } = useAuth();
    const [bonos, setBonos] = useState([]);
    const [canjesEsteMes, setCanjesEsteMes] = useState(0);
    const [bonosCanjeadosIds, setBonosCanjeadosIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingCanjeId, setLoadingCanjeId] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBonosYCanjes = async () => {
            if (!affiliateData || !affiliateData.documentId) return;

            setLoading(true);
            setError('');

            try {
                // Fetch Bonos filtrados por la zona del afiliado
                const urlBonos = `${import.meta.env.VITE_API_URL}/api/bonos?filters[zona][$eq]=${affiliateData.zona}`;

                // Fetch Canjes del afiliado
                const urlCanjes = `${import.meta.env.VITE_API_URL}/api/canjes?filters[afiliado][documentId][$eq]=${affiliateData.documentId}&populate=bono`;

                const [bonosRes, canjesRes] = await Promise.all([
                    fetch(urlBonos, { headers: { Authorization: `Bearer ${token}` } }),
                    fetch(urlCanjes, { headers: { Authorization: `Bearer ${token}` } })
                ]);

                if (!bonosRes.ok || !canjesRes.ok) {
                    throw new Error('Error fetching data from server');
                }

                const bonosData = await bonosRes.json();
                const canjesData = await canjesRes.json();

                setBonos(bonosData.data || []);

                // Filtrar canjes del mes actual
                const now = new Date();
                const currentMonth = now.getMonth();
                const currentYear = now.getFullYear();

                const validCanjes = (canjesData.data || []).filter(canje => {
                    const canjeDate = new Date(canje.createdAt);
                    return canjeDate.getMonth() === currentMonth && canjeDate.getFullYear() === currentYear;
                });

                setCanjesEsteMes(validCanjes.length);

                const idsCanjeados = validCanjes.map(c => c.bono?.documentId).filter(Boolean);
                setBonosCanjeadosIds(idsCanjeados);

            } catch (err) {
                console.error('Error fetching bonos/canjes:', err);
                setError('No se pudieron cargar los bonos en este momento.');
            } finally {
                setLoading(false);
            }
        };

        fetchBonosYCanjes();
    }, [affiliateData, token]);

    const handleCanjear = async (bonoId) => {
        if (canjesEsteMes >= 2 || bonosCanjeadosIds.includes(bonoId)) return;

        setLoadingCanjeId(bonoId);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/canjes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    data: {
                        afiliado: affiliateData.documentId,
                        bono: bonoId,
                        // Strapi automatically handles createdAt
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Error al canjear el bono');
            }

            // Actualizar el estado local para reflejar el éxito
            setCanjesEsteMes(prev => prev + 1);
            setBonosCanjeadosIds(prev => [...prev, bonoId]);

        } catch (error) {
            console.error('Error durante el canje:', error);
            alert('Hubo un error al intentar canjear este bono. Por favor, intentá de nuevo.');
        } finally {
            setLoadingCanjeId(null);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                <p>Cargando bonos disponibles...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12 text-center">
                <p className="text-red-500 font-medium">{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                        <Gift className="w-5 h-5 mr-2 text-primary" />
                        Bonos Médicos en {affiliateData?.zona ? affiliateData.zona.replace('_', ' ').toUpperCase() : 'TU ZONA'}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Límite mensual: 2 bonos por afiliado.</p>
                </div>
                <div className="text-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                    <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">CUPOS MES</span>
                    <span className="text-2xl font-black text-primary">{Math.max(0, 2 - canjesEsteMes)}</span>
                    <span className="text-gray-400 text-sm">/2</span>
                </div>
            </div>

            {bonos.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <Info className="w-10 h-10 text-gray-400 mb-3 mx-auto" />
                    <p className="text-gray-600 font-medium">No hay bonos disponibles en tu zona actualmente.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {bonos.map((bono) => {
                        const isCanjeado = bonosCanjeadosIds.includes(bono.documentId);
                        const isLimitReached = canjesEsteMes >= 2 && !isCanjeado;
                        const isProcessing = loadingCanjeId === bono.documentId;

                        return (
                            <div key={bono.documentId} className={`border rounded-xl p-0 overflow-hidden transition-all duration-300 ${isCanjeado ? 'border-green-200 bg-green-50/30' : 'border-gray-200 hover:shadow-md bg-white'}`}>
                                <div className="flex flex-col md:flex-row">
                                    <div className={`w-full md:w-2 ${isCanjeado ? 'bg-green-400' : 'bg-primary'}`}></div>
                                    <div className="p-5 flex-grow flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${isCanjeado ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-primary'}`}>
                                                    Bono Médico
                                                </span>
                                                {bono.fecha_salida && (
                                                    <span className="text-xs text-gray-400 font-mono bg-gray-100 px-2 py-1 rounded">
                                                        Emisión: {new Date(bono.fecha_salida).toLocaleDateString('es-AR')}
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="font-bold text-lg text-gray-900 mt-2">{bono.titulo}</h4>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bono.descripcion}</p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-4 gap-4">
                                            {/* Código Clave (Oculto o Visible) */}
                                            {isCanjeado ? (
                                                <div className="bg-green-100/50 rounded-lg p-3 flex-grow max-w-sm border border-dashed border-green-300 w-full">
                                                    <p className="text-[10px] uppercase font-bold text-green-600 mb-1">CÓDIGO DE VALIDACIÓN</p>
                                                    <span className="text-green-800 font-mono text-lg font-bold tracking-widest">{bono.codigo_clave}</span>
                                                </div>
                                            ) : (
                                                <div className="bg-gray-100 rounded-lg p-3 flex-grow max-w-sm border border-dashed border-gray-300 w-full opacity-50 flex items-center justify-center">
                                                    <span className="text-gray-400 font-mono text-sm tracking-widest">••••••••••••</span>
                                                </div>
                                            )}

                                            {/* Action Button */}
                                            <div className="w-full sm:w-auto">
                                                {isCanjeado ? (
                                                    <button disabled className="w-full bg-green-100 text-green-700 px-6 py-3 rounded-lg font-bold cursor-not-allowed border border-green-200">
                                                        Ya canjeado
                                                    </button>
                                                ) : isLimitReached ? (
                                                    <button disabled className="w-full bg-gray-100 text-gray-400 px-6 py-3 rounded-lg font-bold cursor-not-allowed">
                                                        Límite alcanzado
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleCanjear(bono.documentId)}
                                                        disabled={isProcessing}
                                                        className="w-full bg-primary hover:bg-[#002855] text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center min-w-[140px]"
                                                    >
                                                        {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Canjear'}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BonosPanel;
