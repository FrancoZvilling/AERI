import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Lock, Mail, CreditCard, MapPin, Loader2, AlertCircle, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    // Estado inicial: null para obligar al usuario a elegir
    const [isAffiliate, setIsAffiliate] = useState(null);

    const [formData, setFormData] = useState({
        dni: '',
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        repeatPassword: '',
        zona: '',
        numero_socio: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [successState, setSuccessState] = useState(null); // 'linked' | 'pending' | null
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validaciones básicas
        if (!formData.dni || !formData.nombre || !formData.apellido || !formData.email || !formData.password || !formData.repeatPassword || !formData.zona) {
            setError('Por favor completá todos los campos obligatorios.');
            return;
        }

        if (formData.password !== formData.repeatPassword) {
            setError('Las contraseñas no coinciden. Por favor, revisalas.');
            return;
        }

        setIsLoading(true);

        // --- Función de Normalización (Capa de Seguridad antes de la BD) ---
        const normalizarTexto = (texto) => {
            if (!texto) return '';
            return texto
                .trim()
                .toUpperCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        };

        const datosNormalizados = {
            dni: formData.dni.trim(), // Removemos espacios accidentales del DNI
            numero_socio: formData.numero_socio ? formData.numero_socio.trim() : '',
            nombre: normalizarTexto(formData.nombre),
            apellido: normalizarTexto(formData.apellido)
        };

        try {
            if (isAffiliate) {
                // ESCENARIO A: Ya soy afiliado
                // 1. Check if affiliate exists in Strapi (Con DNI limpio)
                const checkResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/afiliados?filters[dni][$eq]=${datosNormalizados.dni}`);
                const checkData = await checkResponse.json();

                if (!checkResponse.ok || !checkData.data || checkData.data.length === 0) {
                    throw new Error('validacion_fallida');
                }

                // 2. Register Web User
                const regResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/local/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: datosNormalizados.dni,
                        email: formData.email,
                        password: formData.password
                    }),
                });

                const regData = await regResponse.json();
                if (!regResponse.ok) throw new Error(regData.error?.message || 'Error al crear usuario web.');

                // 3. Update existing Affiliate with Zone (Optional but good practice to sync)
                const affiliateId = checkData.data[0].documentId; // Strapi 5 uses documentId
                await fetch(`${import.meta.env.VITE_API_URL}/api/afiliados/${affiliateId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        data: {
                            zona: formData.zona
                            // Nota: En escenario A no sobreescribimos Nombre/Apellido pq se supone q ya están bien en BD.
                        }
                    })
                });

                // Auto login
                login(regData.jwt, regData.user);

                setSuccessState('linked');
                setTimeout(() => {
                    navigate('/mi-aeri');
                }, 1000);

            } else {
                // ESCENARIO B: Aún no soy afiliado
                // 1. Register Web User
                const regResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/local/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: datosNormalizados.dni,
                        email: formData.email,
                        password: formData.password
                    }),
                });

                const regData = await regResponse.json();
                if (!regResponse.ok) throw new Error(regData.error?.message || 'Error al crear usuario web.');

                // 2. Create PENDING Affiliate Record (Con Datos Normalizados)
                const createResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/afiliados`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        data: {
                            dni: datosNormalizados.dni,
                            nombre: datosNormalizados.nombre,
                            apellido: datosNormalizados.apellido,
                            zona: formData.zona,
                            estado: 'PENDIENTE'
                        }
                    })
                });

                if (!createResponse.ok) throw new Error('Error al registrar la solicitud de afiliación.');

                // Auto login
                login(regData.jwt, regData.user);

                setSuccessState('pending');
                // Removed setTimeout to make the screen persistent
            }

        } catch (err) {
            console.error('Registration error:', err);
            if (err.message === 'validacion_fallida') {
                setError('Los datos no coinciden con nuestros registros. Por favor, verificá tu DNI o comunicate con el sindicato.');
            } else if (err.message.includes('Email or Username')) {
                setError('El DNI o el Email ya se encuentran registrados en la plataforma web.');
            } else {
                setError(err.message || 'Hubo un error al intentar registrarse. Intentá nuevamente.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (successState) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                {successState === 'linked' ? (
                    <>
                        <h3 className="text-2xl font-bold text-gray-900">¡Registro Exitoso!</h3>
                        <p className="text-gray-500">Redirigiendo a Mi AERI...</p>
                    </>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-gray-900">Solicitud Enviada</h3>
                        <p className="text-gray-600 mt-2 px-4 leading-relaxed">
                            Sus datos se han enviado correctamente, para finalizar su trámite por favor comuníquese al siguiente número o por correo electrónico.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50/50 rounded-xl text-primary text-sm font-medium border border-blue-100">
                            <p className="mb-1">📞 (0221) 483-3051 / 483-3047</p>
                            <p>✉️ <a href="mailto:afiliaciones@aeri.org.ar" className="hover:underline">afiliaciones@aeri.org.ar</a></p>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="mt-6 w-full py-3 px-4 border border-transparent rounded-xl shadow-sm cursor-pointer text-sm font-medium text-white bg-primary hover:bg-[#002855] focus:outline-none transition-colors"
                        >
                            Volver al Inicio
                        </button>
                    </>
                )}
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            {/* 1. Selector de Estado */}
            <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-3 text-center">
                    Seleccioná tu estado actual:
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setIsAffiliate(true)}
                        className={`py-3 px-4 border rounded-xl text-sm font-medium transition-all cursor-pointer ${isAffiliate === true
                            ? 'bg-blue-50 border-primary text-primary ring-1 ring-primary'
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Ya soy afiliado
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsAffiliate(false)}
                        className={`py-3 px-4 border rounded-xl text-sm font-medium transition-all cursor-pointer ${isAffiliate === false
                            ? 'bg-blue-50 border-primary text-primary ring-1 ring-primary'
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Aún no soy afiliado
                    </button>
                </div>
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start text-sm overflow-hidden"
                    >
                        <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{error}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Form Fields - Solo se muestran si eligió un estado */}
            <AnimatePresence>
                {isAffiliate !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        {/* Fila: Nombre y Apellido */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-2.5 px-3 border"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-2.5 px-3 border"
                                    placeholder="Apellido"
                                />
                            </div>
                        </div>

                        {/* DNI */}
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">DNI</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        name="dni"
                                        value={formData.dni}
                                        onChange={handleChange}
                                        className="pl-8 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-2.5 pr-3 border"
                                        placeholder="Sin puntos"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Email y Contraseña */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Email (Contacto / Recuperación)</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-9 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-2.5 px-3 border"
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Crear Contraseña</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="pl-9 pr-10 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-2.5 px-3 border"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Repetir Contraseña</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type={showRepeatPassword ? "text" : "password"}
                                        name="repeatPassword"
                                        value={formData.repeatPassword}
                                        onChange={handleChange}
                                        className={`pl-9 pr-10 block w-full rounded-xl border shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-2.5 px-3 transition-colors ${formData.repeatPassword && formData.password !== formData.repeatPassword
                                            ? 'border-red-300 bg-red-50'
                                            : 'border-gray-300'
                                            }`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                    >
                                        {showRepeatPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Zona */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Zona</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPin className="h-4 w-4 text-gray-400" />
                                </div>
                                <select
                                    name="zona"
                                    value={formData.zona}
                                    onChange={handleChange}
                                    className="pl-9 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-2.5 px-3 border appearance-none bg-white"
                                >
                                    <option value="" disabled>Seleccioná tu zona...</option>
                                    <option value="CASA CENTRAL">Casa Central</option>
                                    <option value="CONURBANO">Conurbano</option>
                                    <option value="INTERIOR">Interior</option>
                                </select>
                            </div>
                        </div>

                        {/* Botón Submit */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className={`w-full mt-6 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm cursor-pointer text-sm font-medium text-white bg-primary hover:bg-[#002855] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                                    Registrando y verificando...
                                </>
                            ) : (
                                isAffiliate ? 'Vincular cuenta y entrar' : 'Crear cuenta PENDIENTE'
                            )}
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

        </form>
    );
};

export default RegisterForm;
