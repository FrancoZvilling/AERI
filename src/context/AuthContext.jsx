import React, { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [loading, setLoading] = useState(true);

    // Al cargar la app, verifica si existe sesión en localStorage
    useEffect(() => {
        const storedJwt = localStorage.getItem('aeri_jwt');
        const storedUser = localStorage.getItem('aeri_user');

        if (storedJwt && storedUser) {
            setJwt(storedJwt);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Función para manejar el inicio de sesión exitoso
    const login = (token, userData) => {
        setJwt(token);
        setUser(userData);
        localStorage.setItem('aeri_jwt', token);
        localStorage.setItem('aeri_user', JSON.stringify(userData));
    };

    // Función para cerrar sesión
    const logout = () => {
        setJwt(null);
        setUser(null);
        localStorage.removeItem('aeri_jwt');
        localStorage.removeItem('aeri_user');
    };

    const value = {
        user,
        jwt,
        login,
        logout,
        isAuthenticated: !!jwt
    };

    // Muestra pantalla en blanco mientras verifica sesión inicial para evitar parpadeos
    if (loading) {
        return null;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
