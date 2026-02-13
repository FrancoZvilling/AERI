import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Heart, X, Send, Lightbulb } from 'lucide-react';

const IdeaWall = () => {
    // Mock Data Inicial
    const [ideas, setIdeas] = useState([
        { id: 1, title: 'Clases de Yoga al aire libre', description: 'Sería genial aprovechar el predio para actividades de bienestar físico y mental.', votes: 12, voted: false },
        { id: 2, title: 'Taller de Fotografía', description: 'Aprender a usar cámaras y edición básica para documentar eventos.', votes: 8, voted: false },
        { id: 3, title: 'Club de Lectura', description: 'Reuniones mensuales para debatir libros de interés general y sindical.', votes: 5, voted: false },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newIdea, setNewIdea] = useState({ title: '', description: '' });

    const handleVote = (id) => {
        setIdeas(ideas.map(idea => {
            if (idea.id === id) {
                return {
                    ...idea,
                    votes: idea.voted ? idea.votes - 1 : idea.votes + 1,
                    voted: !idea.voted
                };
            }
            return idea;
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newIdea.title.trim() || !newIdea.description.trim()) return;

        const newItem = {
            id: Date.now(),
            title: newIdea.title,
            description: newIdea.description,
            votes: 0,
            voted: false
        };

        setIdeas([newItem, ...ideas]);
        setNewIdea({ title: '', description: '' });
        setIsModalOpen(false);
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl relative overflow-hidden border border-gray-200 shadow-inner">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Lightbulb className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-gray-800">Muro de Ideas</h2>
                        </div>
                        <p className="text-gray-600 max-w-xl">
                            ¿Tenés una propuesta para Cultura y Capacitación? ¡Compartila!
                            Este es un espacio colaborativo donde construimos juntos.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-[#023e73] to-[#005bb5] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 cursor-pointer"
                    >
                        <Plus className="w-5 h-5" />
                        <span>Proponer una Idea</span>
                    </motion.button>
                </div>

                {/* Grid de Tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {ideas.map((idea) => (
                            <motion.div
                                key={idea.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-[#004080] p-6 rounded-2xl shadow-md border border-white/20 flex flex-col hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-white mb-2">{idea.title}</h3>
                                <p className="text-white/90 text-sm mb-6 flex-grow">{idea.description}</p>

                                <div className="mt-auto flex items-center justify-end border-t border-white/20 pt-4">
                                    <motion.button
                                        whileTap={{ scale: 1.2 }}
                                        onClick={() => handleVote(idea.id)}
                                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-colors ${idea.voted
                                            ? 'bg-white text-red-500'
                                            : 'bg-white/20 text-white hover:bg-white/30'
                                            }`}
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${idea.voted ? 'fill-current' : ''}`}
                                        />
                                        <span className="font-bold text-lg">{idea.votes}</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Modal Formulario */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden"
                        >
                            <div className="bg-[#023e73] p-6 text-white flex justify-between items-center">
                                <h3 className="text-xl font-bold flex items-center">
                                    <Plus className="w-5 h-5 mr-2" /> Nueva Propuesta
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Título de la Idea
                                        </label>
                                        <input
                                            type="text"
                                            value={newIdea.title}
                                            onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
                                            placeholder="Ej: Torneo de Ajedrez"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#39c3ef] focus:border-transparent outline-none transition-all"
                                            autoFocus
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Descripción
                                        </label>
                                        <textarea
                                            value={newIdea.description}
                                            onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
                                            placeholder="Contanos brevemente de qué se trata..."
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#39c3ef] focus:border-transparent outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-6 py-2.5 rounded-full text-gray-500 hover:bg-gray-100 font-medium mr-3 transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={!newIdea.title.trim() || !newIdea.description.trim()}
                                        className="bg-[#023e73] text-white px-8 py-2.5 rounded-full font-bold shadow-md hover:bg-[#002855] transition-all flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Publicar Idea
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default IdeaWall;
