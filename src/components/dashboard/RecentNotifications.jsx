import React, { useState, useEffect } from 'react';
import { Bell, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const RecentNotifications = ({ documentId }) => {
    const { token } = useAuth();
    const [canjesEsteMes, setCanjesEsteMes] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCanjes = async () => {
            if (!documentId) return;
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/canjes?filters[afiliado][documentId][$eq]=${documentId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();

                    const now = new Date();
                    const currentMonth = now.getMonth();
                    const currentYear = now.getFullYear();

                    const canjesActuales = data.data.filter(canje => {
                        const canjeDate = new Date(canje.createdAt);
                        return canjeDate.getMonth() === currentMonth && canjeDate.getFullYear() === currentYear;
                    });

                    setCanjesEsteMes(canjesActuales.length);
                }
            } catch (err) {
                console.error("Error fetching canjes for notifications:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCanjes();
    }, [documentId, token]);

    // Calcular próximo mes
    const getNextMonthDate = () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        date.setDate(1); // Primer día del mes que viene

        return date.toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const fecha_proximo_mes = getNextMonthDate();
    const disponibles = Math.max(0, 2 - canjesEsteMes);

    const getBonoMessage = () => {
        if (disponibles === 0) {
            return `No te quedan bonos. Se renovarán los canjes de bonos el día ${fecha_proximo_mes}.`;
        } else if (disponibles === 1) {
            return `Te queda 1 bono disponible este mes. Se renovarán los canjes de bonos el día ${fecha_proximo_mes}.`;
        } else {
            return `Te quedan 2 bonos disponibles este mes. Se renovarán los canjes de bonos el día ${fecha_proximo_mes}.`;
        }
    };

    return (
        <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl flex items-start">
            <Bell className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
            <div className="w-full">
                <h4 className="font-bold text-primary mb-1">Notificaciones Recientes</h4>
                {loading ? (
                    <div className="flex items-center space-x-2 mt-4 text-gray-500">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">Cargando notificaciones...</span>
                    </div>
                ) : (
                    <ul className="space-y-2 mt-2">
                        <li className="text-sm text-gray-600">
                            • El próximo sorteo será el día {fecha_proximo_mes} a las 20:00 hs.
                        </li>
                        <li className="text-sm text-gray-600">
                            • {getBonoMessage()}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default RecentNotifications;
