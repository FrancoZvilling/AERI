import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ title, subtitle, backgroundImage, backgroundColor, children, className = "" }) => {
    return (
        <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image or Color */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: backgroundImage ? `url("${backgroundImage}")` : 'none',
                    backgroundColor: backgroundColor || 'transparent'
                }}
            >
                {/* Dark Overlay - Simplified for SVG clarity */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white ${className}`}>
                <motion.h1
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        className="text-lg md:text-2xl font-light text-gray-200 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Optional Children (Buttons, etc.) */}
                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
