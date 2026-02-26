import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Lightbulb, CheckCircle2 } from 'lucide-react';

const IdeaForm = () => {
    const [formData, setFormData] = useState({ title: '', description: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.description.trim()) return;

        // Simulate sending the form
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ title: '', description: '' });
        }, 3000);
    };

    return (
        <section className="py-16 bg-gradient-to-br from-[#002855] to-[#004080] rounded-[3rem] text-white relative overflow-hidden shadow-2xl my-12 hidden-scrollbar">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
                {/* Info Text */}
                <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-yellow-500/20 p-3 rounded-full">
                            <Lightbulb className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold">Buzón de Ideas</h2>
                    </div>
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                        ¿Tenés alguna propuesta o taller que te gustaría ver en la Secretaría de Cultura y Capacitación?
                        <br /><br />
                        Dejanos tu idea. Este es un espacio colaborativo donde construimos juntos las mejores propuestas para nuestros afiliados y afiliadas de AERI.
                    </p>
                </div>

                {/* Form */}
                <div className="md:w-1/2 w-full bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl relative min-h-[350px]">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div>
                                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                                        Título de tu Idea
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="Ej: Taller de Fotografía"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-200/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                                        Descripción
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="Contanos brevemente de qué se trata..."
                                        rows="4"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-200/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!formData.title.trim() || !formData.description.trim()}
                                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#002855] px-6 py-3 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    <span>Enviar Propuesta</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="bg-green-500/20 p-4 rounded-full mb-4">
                                    <CheckCircle2 className="w-16 h-16 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">¡Idea Enviada!</h3>
                                <p className="text-blue-100">
                                    Muchas gracias por sumar tu aporte al equipo de Cultura de AERI.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default IdeaForm;
