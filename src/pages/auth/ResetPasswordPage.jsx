import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Loader2, AlertCircle, CheckCircle2, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';

const ResetPasswordPage = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        password: '',
        passwordConfirmation: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!code) {
            setError('Enlace inválido o expirado. Por favor solicitá uno nuevo.');
            return;
        }

        if (!formData.password || !formData.passwordConfirmation) {
            setError('Por favor completá ambos campos.');
            return;
        }

        if (formData.password !== formData.passwordConfirmation) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        if (formData.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: code,
                    password: formData.password,
                    passwordConfirmation: formData.passwordConfirmation,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error?.message || 'Hubo un error al restablecer la contraseña.');
            }

            // Success
            setSuccess(true);
        } catch (err) {
            console.error('Reset password error:', err);
            setError(err.message === 'Incorrect code provided' 
                ? 'El enlace ya fue utilizado o caducó. Volvé a solicitar el cambio de contraseña.'
                : 'Error al cambiar la contraseña. Intentá nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2000&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-[#002855]/90 backdrop-blur-sm"></div>

            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/">
                    <img src="/icon.png" alt="AERI Icon" className="mx-auto h-16 w-auto drop-shadow-md cursor-pointer hover:scale-105 transition-transform" />
                </Link>
                <h2 className="mt-6 text-center text-4xl font-extrabold text-white drop-shadow-md">Nueva Contraseña</h2>
                <p className="mt-2 text-center text-sm text-blue-200">
                    Establecé tu nueva clave de acceso
                </p>
            </div>

            <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 overflow-hidden">
                    
                    {!code && !success ? (
                        <div className="text-center py-6">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                                <AlertCircle className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Enlace inválido</h3>
                            <p className="text-gray-500 text-sm mb-6">No detectamos un código de seguridad válido en la URL. Es posible que el enlace esté incompleto o haya expirado.</p>
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-[#002855] transition-colors"
                            >
                                Volver al Login
                            </button>
                        </div>
                    ) : success ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-6"
                        >
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                                <CheckCircle2 className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Contraseña actualizada!</h3>
                            <p className="text-gray-500 text-sm mb-8">Tu contraseña ha sido restablecida exitosamente. Ya podés volver a ingresar a Mi AERI con tu nueva clave.</p>
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-[#002855] transition-colors"
                            >
                                Ingresar ahora <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </motion.div>
                    ) : (
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

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nueva Contraseña</label>
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
                                        placeholder="Min. 6 caracteres"
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

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="passwordConfirmation"
                                        value={formData.passwordConfirmation}
                                        onChange={handleChange}
                                        className="pl-10 pr-10 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 border"
                                        placeholder="Repetí la contraseña"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                    >
                                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
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
                                        Guardando...
                                    </>
                                ) : (
                                    'Restablecer Contraseña'
                                )}
                            </motion.button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
