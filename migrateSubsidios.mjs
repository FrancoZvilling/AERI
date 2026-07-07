

const TOKEN = "19cf8de3a6b67c00026962dfd64eaee38ac58ee6c75aec833865a197d11b15dfaf000d3cf7217f21786727b5d1177f389104ce285c7076a08791e4b1083c78eefff7c38f3e437d97c4d4cc0abf4fdfcc22aabcddc85ed8eaa15ad5f6ddce620a838bf44d8278a58349a31f7e276a522ac60819110ade502ad8f6872a08448a5f";
const API_URL = "https://aeri-backend-production-644e.up.railway.app/api/subsidios";

const subsidies = [
    {
        titulo: "Matrimonio",
        precio: "$50.000",
        descripcion_corta: "Subsidio único por enlace matrimonial.",
        icono: "Matrimonio",
        color: "rose"
    },
    {
        titulo: "Nacimiento",
        precio: "$50.000",
        descripcion_corta: "Por nacimiento de hijo/a. Incluye ajuar completo.",
        icono: "Nacimiento",
        color: "blue"
    },
    {
        titulo: "Adopción",
        precio: "$50.000",
        descripcion_corta: "Ayuda económica por adopción legal.",
        icono: "Adopcion",
        color: "indigo"
    },
    {
        titulo: "Fallecimiento",
        precio: "$100.000",
        descripcion_corta: "Subsidio de contención familiar.",
        icono: "Fallecimiento",
        color: "gray"
    },
    {
        titulo: "Anteojos Recetados",
        precio: "$50.000",
        detalle: "x par (2/año)",
        descripcion_corta: "Cobertura en cristales y armazones.",
        icono: "Anteojos",
        color: "teal"
    },
    {
        titulo: "Bono de Laboratorio",
        precio: "$2.000",
        descripcion_corta: "Cobertura para análisis clínicos.",
        icono: "Laboratorio",
        color: "purple"
    },
    {
        titulo: "Prácticas Médicas",
        precio: "$5.000",
        detalle: "por práctica",
        descripcion_corta: "Reintegro en prácticas especializadas.",
        icono: "PracticasMedicas",
        color: "green"
    }
];

async function migrate() {
    console.log("Iniciando migración de subsidios...");
    
    for (const sub of subsidies) {
        try {
            const body = { data: sub };
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN}`
                },
                body: JSON.stringify(body)
            });
            
            if (!res.ok) {
                const err = await res.text();
                console.error(`Error al subir ${sub.titulo}:`, err);
            } else {
                console.log(`Subsidio subido exitosamente: ${sub.titulo}`);
            }
        } catch (e) {
            console.error(`Excepción al subir ${sub.titulo}:`, e);
        }
    }
    
    console.log("Migración finalizada.");
}

migrate();
