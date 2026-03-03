import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Key, LogIn, UserPlus } from 'lucide-react';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';

const AuthPage = () => {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2000&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-[#002855]/90 backdrop-blur-sm"></div>

            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
                <img src="/icon.png" alt="AERI Icon" className="mx-auto h-16 w-auto drop-shadow-md" />
                <h2 className="mt-6 text-center text-4xl font-extrabold text-white drop-shadow-md">Mi AERI</h2>
                <p className="mt-2 text-center text-sm text-blue-200">
                    Tu portal de autogestión gremial exclusivo
                </p>
            </div>

            <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
                <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 overflow-hidden transform transition-all">

                    {/* View Toggle */}
                    <div className="flex mb-8 bg-gray-100 p-1 rounded-full relative">
                        <motion.div
                            className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-white shadow-md rounded-full z-0"
                            initial={false}
                            animate={{ x: isLoginView ? 0 : '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            type="button"
                            onClick={() => setIsLoginView(true)}
                            className={`flex-1 flex justify-center items-center py-2.5 text-sm font-bold z-10 rounded-full transition-colors cursor-pointer ${isLoginView ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <LogIn className="w-4 h-4 mr-2" /> Iniciar Sesión
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLoginView(false)}
                            className={`flex-1 flex justify-center items-center py-2.5 text-sm font-bold z-10 rounded-full transition-colors cursor-pointer ${!isLoginView ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <UserPlus className="w-4 h-4 mr-2" /> Crear Cuenta
                        </button>
                    </div>

                    {/* Forms logic */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLoginView ? 'login' : 'register'}
                            initial={{ opacity: 0, x: isLoginView ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isLoginView ? 20 : -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isLoginView ? (
                                <LoginForm />
                            ) : (
                                <RegisterForm />
                            )}
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
            {/* Footer decoration */}
            <div className="relative z-10 mt-8 text-center text-white/50 text-xs">
                © {new Date().getFullYear()} Asociación de Empleados de Rentas e Inmobiliaria.
            </div>
        </div>
    );
};

export default AuthPage;
