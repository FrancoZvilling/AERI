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
