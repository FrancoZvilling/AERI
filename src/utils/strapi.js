/**
 * Normaliza las URLs de medios de Strapi.
 * Si la URL es absoluta (Cloudinary/S3), la devuelve tal cual.
 * Si es relativa (local), le prepende la URL de la API.
 * @param {string} url - La URL de la imagen/archivo.
 * @returns {string|null} - La URL completa o null.
 */
export function getStrapiMedia(url) {
    if (!url) return null;

    // Si ya es una URL absoluta (ej: Cloudinary), devolverla tal cual
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Si es relativa, agregarle el host de la API
    return `${import.meta.env.VITE_API_URL}${url}`;
}

/**
 * 
 * Extrae la URL de la imagen de un objeto de imagen de Strapi.
 * Maneja estructuras planas, anidadas (data.attributes) y arrays.
 * @param {any} imageData - El campo de imagen (ej: attributes.imagen)
 * @returns {string|null} - La URL completa o null.
 */
export function extractStrapiImage(imageData) {
    if (!imageData) return null;

    // Caso 1: string directa
    if (typeof imageData === 'string') {
        return getStrapiMedia(imageData);
    }

    // Caso 2: Objeto Strapi v4 standard { data: { attributes: { url } } }
    const data = imageData.data;

    // Si data es null, no hay imagen
    if (data === null) return null;

    // Si data es array (media multiple), tomamos el primero
    if (Array.isArray(data)) {
        if (data.length === 0) return null;
        return getStrapiMedia(data[0].attributes?.url || data[0].url);
    }

    // Si data es objeto simple
    if (typeof data === 'object') {
        return getStrapiMedia(data.attributes?.url || data.url);
    }

    // Caso 3: Objeto plano (v3 o plugin flatten) { url: "..." }
    if (imageData.url) {
        return getStrapiMedia(imageData.url);
    }

    return null;
}
