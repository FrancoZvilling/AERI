import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const padronData = require('./data/padron.json');

/**
 * Serverless API handler para consultar el Padrón Electoral.
 * Seguridad:
 * - Filtra en el servidor: nunca envía el padrón completo al cliente.
 * - Requiere un mínimo de 5 dígitos para disparar la búsqueda.
 * - Limita la respuesta a un máximo de 10 resultados para evitar scraping masivo.
 */
export default function handler(req, res) {
    // Configuración de cabeceras de respuesta y seguridad
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'no-store, max-age=0');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método no permitido. Use GET.' });
    }

    // Extraer DNI de query params
    const { dni } = req.query || {};

    if (!dni) {
        return res.status(400).json({ error: 'El parámetro DNI es requerido.' });
    }

    // Sanitizar entrada: quitar puntos, espacios, guiones
    const cleanDni = dni.toString().replace(/\D/g, '');

    // Validación de longitud mínima (mínimo 5 dígitos por seguridad)
    if (cleanDni.length < 5) {
        return res.status(400).json({ error: 'Debe ingresar al menos 5 dígitos para buscar.' });
    }

    try {
        // Filtrar coincidencias parciales o exactas
        const matches = padronData.filter(person => {
            const doc = (person['DOCUMENTO'] || '').toString();
            return doc.includes(cleanDni);
        });

        // Ordenar: si hay coincidencia exacta con el DNI, colocarla primera
        matches.sort((a, b) => {
            const docA = (a['DOCUMENTO'] || '').toString();
            const docB = (b['DOCUMENTO'] || '').toString();
            if (docA === cleanDni && docB !== cleanDni) return -1;
            if (docB === cleanDni && docA !== cleanDni) return 1;
            return 0;
        });

        // Retornar solo las primeras 10 coincidencias
        return res.status(200).json(matches.slice(0, 10));
    } catch (error) {
        console.error('Error al consultar el padrón:', error);
        return res.status(500).json({ error: 'Error interno del servidor al procesar la consulta.' });
    }
}
