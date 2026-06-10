import { useEffect } from 'react';
import { APP_VERSION } from '../../version';

const VersionChecker = () => {
    useEffect(() => {
        const checkVersion = async () => {
            try {
                // Hacemos un fetch al version.json público.
                // Usamos un timestamp (?t=...) para engañar al caché del navegador
                // y obligarlo a buscar la versión real que está en el servidor.
                const response = await fetch(`/version.json?t=${new Date().getTime()}`);
                const data = await response.json();
                
                // Si la versión del servidor es diferente a la versión compilada en la app...
                if (data.version && data.version !== APP_VERSION) {
                    console.log(`Nueva versión detectada. Actualizando de ${APP_VERSION} a ${data.version}...`);
                    
                    // Borramos todas las cachés locales del navegador
                    if ('caches' in window) {
                        const cacheNames = await caches.keys();
                        await Promise.all(
                            cacheNames.map(name => caches.delete(name))
                        );
                    }
                    
                    // Forzamos la recarga de la página, saltándonos el caché.
                    window.location.reload(true);
                } else {
                    console.log(`AERI App Version: ${APP_VERSION} (Up to date)`);
                }
            } catch (error) {
                console.error('Error al verificar la versión de la aplicación:', error);
            }
        };

        // Chequear inmediatamente apenas el usuario abre la web
        checkVersion();
        
        // Chequear cada 30 minutos por si el usuario dejó la pestaña abierta todo el día
        const interval = setInterval(checkVersion, 1000 * 60 * 30);
        return () => clearInterval(interval);
    }, []);

    return null; // Este componente es invisible, trabaja en segundo plano
};

export default VersionChecker;
