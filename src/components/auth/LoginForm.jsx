import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Loader2, AlertCircle, Eye, EyeOff, Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        dni: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isForgotPasswordView, setIsForgotPasswordView] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {
        setError('');
        setSuccessMessage('');

        if (!formData.dni || !formData.password) {
            setError('Por favor completá todos los campos.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Strapi expects 'identifier' which we map to DNI
                    identifier: formData.dni,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle Strapi errors smoothly
                throw new Error(data.error?.message || 'Error al iniciar sesión. Verificá tus credenciales.');
            }

            // Success: Update Auth Context and redirect to Dashboard
            login(data.jwt, data.user);
            navigate('/mi-aeri');

        } catch (err) {
            console.error('Login error:', err);
            setError(err.message === 'Invalid identifier or password'
                ? 'DNI o contraseña incorrectos.'
                : 'Hubo un error al intentar conectarse. Intentá nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        setError('');
        setSuccessMessage('');

        if (!forgotEmail) {
            setError('Por favor ingresá tu correo electrónico.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: forgotEmail }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error?.message || 'Error al solicitar la recuperación. Verificá que el correo sea correcto.');
            }

            setSuccessMessage('¡Listo! Te enviamos un correo con un enlace para restablecer tu contraseña. Revisá tu bandeja de entrada o spam.');
            setForgotEmail('');
        } catch (err) {
            console.error('Forgot password error:', err);
            setError('Error al procesar la solicitud. Es posible que el correo no esté registrado.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isForgotPasswordView) {
            await handleForgotPassword();
        } else {
            await handleLogin();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start text-sm"
                >
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                </motion.div>
            )}

            {successMessage && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 p-4 rounded-xl flex items-start text-sm border border-green-200"
                >
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{successMessage}</span>
                </motion.div>
            )}

            {!isForgotPasswordView ? (
                <>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">DNI</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="dni"
                                value={formData.dni}
                                onChange={handleChange}
                                className="pl-10 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 border"
                                placeholder="Ingresá tu DNI sin puntos"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="pl-10 pr-10 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 border"
                                placeholder="Ingresá tu contraseña"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <button 
                                type="button" 
                                onClick={() => { setIsForgotPasswordView(true); setError(''); setSuccessMessage(''); }}
                                className="font-medium text-primary hover:text-blue-800 focus:outline-none cursor-pointer"
                            >
                                ¿Olvidaste tu contraseña?
                            </button>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-[#002855] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                                Iniciando sesión...
                            </>
                        ) : (
                            'Ingresar a Mi AERI'
                        )}
                    </motion.button>
                </>
            ) : (
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Recuperar contraseña</h3>
                        <p className="text-sm text-gray-500 mt-2">Ingresá el correo asociado a tu cuenta y te enviaremos un enlace para cambiarla.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                value={forgotEmail}
                                onChange={(e) => setForgotEmail(e.target.value)}
                                className="pl-10 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 border"
                                placeholder="tu@correo.com"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-[#002855] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar enlace de recuperación'
                            )}
                        </motion.button>

                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={() => { setIsForgotPasswordView(false); setError(''); setSuccessMessage(''); }}
                            className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Login
                        </button>
                    </div>
                </motion.div>
            )}
        </form>
    );
};

export default LoginForm;
