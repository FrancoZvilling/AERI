import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { CheckCircle, Clock } from 'lucide-react';

const DigitalCredential = ({ nombre, apellido, numero_socio, zona, qrPayload, variant = 'titular' }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const isTitular = variant === 'titular';
    
    return (
        <div className="group cursor-pointer w-full" style={{ perspective: '1000px' }} onClick={() => setIsFlipped(!isFlipped)}>
            <motion.div
                className="relative w-full aspect-[1.586/1] transition-all duration-700"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front */}
                <div
                    className={`absolute inset-0 rounded-2xl p-6 shadow-xl flex flex-col justify-between overflow-hidden border ${
                        isTitular 
                        ? 'bg-gradient-to-br from-[#002855] to-gray-800 border-gray-700/50' 
                        : 'bg-white border-gray-200'
                    }`}
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    {/* Deco */}
                    <div className={`absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl ${isTitular ? 'bg-white/10' : 'bg-[#002855]/5'}`}></div>
                    <div className={`absolute bottom-0 left-0 w-32 h-32 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl ${isTitular ? 'bg-[#39c3ef]/20' : 'bg-[#39c3ef]/10'}`}></div>

                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <h3 className={`text-sm font-bold tracking-widest uppercase ${isTitular ? 'text-white/80' : 'text-gray-500'}`}>
                                Credencial Digital
                            </h3>
                            <div className="text-xs text-green-500 font-mono mt-1 flex items-center font-bold">
                                <CheckCircle className="w-3 h-3 mr-1" /> Activa
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className={`font-black text-2xl italic tracking-tighter ${isTitular ? 'text-white' : 'text-[#002855]'}`}>AERI</span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isTitular ? 'text-white/60' : 'text-[#39c3ef]'}`}>
                                {isTitular ? 'Socio Titular' : 'Afiliado a Cargo'}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4 relative z-10">
                        <div>
                            <p className={`text-[10px] uppercase tracking-wider mb-1 font-bold ${isTitular ? 'text-white/40' : 'text-gray-400'}`}>Afiliado</p>
                            <p className={`font-bold text-lg tracking-wide ${isTitular ? 'text-white' : 'text-gray-800'}`}>
                                {apellido}, {nombre}
                            </p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className={`text-[10px] uppercase tracking-wider mb-1 font-bold ${isTitular ? 'text-white/40' : 'text-gray-400'}`}>Número</p>
                                <p className={`font-mono text-lg tracking-widest font-bold ${isTitular ? 'text-white' : 'text-gray-800'}`}>
                                    {numero_socio || 'N/A'}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className={`text-[10px] uppercase tracking-wider mb-1 font-bold ${isTitular ? 'text-white/40' : 'text-gray-400'}`}>ZONA</p>
                                <p className={`font-bold capitalize ${isTitular ? 'text-white' : 'text-gray-800'}`}>
                                    {zona ? zona.replace('_', ' ') : 'N/A'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back */}
                <div
                    className={`absolute inset-0 rounded-2xl p-6 shadow-xl flex flex-col justify-center items-center border ${
                        isTitular 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="bg-white p-2 rounded-xl mb-4 shadow-sm">
                        <QRCode
                            value={qrPayload}
                            size={128}
                            bgColor="#ffffff"
                            fgColor="#000000"
                            level="Q"
                        />
                    </div>
                    <p className={`text-xs text-center font-medium ${isTitular ? 'text-white/60' : 'text-gray-500'}`}>
                        Escaneá este código para validar tu afiliación en comercios.
                    </p>
                </div>
            </motion.div>
            <p className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center font-medium">
                <Clock className="w-4 h-4 mr-1" /> Tocá la tarjeta para ver el código QR
            </p>
        </div>
    );
};

export default DigitalCredential;
