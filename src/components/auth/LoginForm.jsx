import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Loader2, AlertCircle } from 'lucide-react';
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

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
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 border"
                        placeholder="Ingresá tu contraseña"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm">
                    <a href="#" className="font-medium text-primary hover:text-blue-800">
                        ¿Olvidaste tu contraseña?
                    </a>
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
        </form>
    );
};

export default LoginForm;
