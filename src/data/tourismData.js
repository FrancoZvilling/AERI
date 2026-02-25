import aranaImg from '../assets/Turismo/arana.jpeg';
import sosbaImg from '../assets/Turismo/sosba.jpeg';
import laColoniaImg from '../assets/Turismo/convenio-la-colonia.jpeg';
import hotelesSosbaImg from '../assets/Turismo/hoteles-sosba.jpeg';
import apjaeImg from '../assets/Turismo/conveio-apjae.jpeg';
import sankataImg from '../assets/Turismo/sankata.jpeg';
import sanCarlosImg from '../assets/Turismo/san-carlos.jpeg';

export const tourismData = [
    // --- CATEGORÍA: TARIFAS VERANO 2026 (LA COLONIA) ---
    {
        "id": "parque-bonito",
        "nombre": "Hotel Parque Bonito",
        "ubicacion": "Villa Gesell",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": "parque_bonito.jpg",
        "vigencia": "23/12/2025 al 12/03/2026",
        "regimen": "Pensión Completa",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "standard": { "mayor": 100000, "menor": 69000 },
            "especial": { "mayor": 109000, "menor": 75000 },
            "anexo": { "mayor": 93000, "menor": 65000 }
        }
    },
    {
        "id": "hotel-marcela",
        "nombre": "Hotel Marcela",
        "ubicacion": "Mar de Ajó",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": "hotel_marcela.jpg",
        "vigencia": "28/12/2025 al 12/03/2026",
        "regimen": "Pensión Completa",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "standard": { "mayor": 93000, "menor": 62000 },
            "especial": { "mayor": 99000, "menor": 68000 }
        }
    },
    {
        "id": "santa-elia",
        "nombre": "Hotel Santa Elia",
        "ubicacion": "Mar del Plata",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": "santa_elia.jpg",
        "vigencia": "23/12/2025 al 12/03/2026",
        "regimen": "Desayuno",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "standard": { "mayor": 49000, "menor": 37000 },
            "especial": { "mayor": 53000, "menor": 42000 }
        }
    },
    {
        "id": "colonia-tanti-hotel",
        "nombre": "Complejo Colonia Tanti (Hotel)",
        "ubicacion": "Tanti, Córdoba",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": "tanti_hotel.jpg",
        "destacado": "Incluye Splash Park",
        "vigencia": "23/12/2025 al 12/03/2026",
        "regimen": "Pensión Completa",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "standard": { "mayor": 112000, "menor": 76000 },
            "especial": { "mayor": 123000, "menor": 86000 }
        }
    },
    {
        "id": "colonia-tanti-cabanas",
        "nombre": "Complejo Colonia Tanti (Cabañas)",
        "ubicacion": "Tanti, Córdoba",
        "categoria": "Verano 2026",
        "tipo": "Cabaña",
        "imagen": "tanti_cabanas.jpg",
        "vigencia": "23/12/2025 al 12/03/2026",
        "regimen": "Alquiler (sin comidas/limpieza)",
        "detalles": "Atención médica 24hs, seguridad privada, recreación incluida.",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "hasta_3_pax": 159000,
            "hasta_5_pax": 192000
        }
    },
    {
        "id": "hotel-chamonix",
        "nombre": "Hotel Chamonix",
        "ubicacion": "Bariloche",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": "chamonix.jpg",
        "vigencia": "23/12/2025 al 12/03/2026",
        "regimen": "Media Pensión",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "standard": { "mayor": 100000, "menor": 71000 },
            "especial": { "mayor": 114000, "menor": 81000 }
        }
    },
    {
        "id": "san-carlos-inn",
        "nombre": "Hotel San Carlos Inn",
        "ubicacion": "Concordia, Entre Ríos",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": sanCarlosImg,
        "info_adicional": "Descubrí el encanto de Concordia alojándote en el Hotel San Carlos Inn, un oasis enclavado en la belleza natural del Parque San Carlos y a orillas del majestuoso Río Uruguay. \n\nDisfrutá de sus piletas climatizadas y al aire libre, relajate en su exclusivo spa, y deleitate con su restaurante de excelencia. La ubicación ideal para quienes buscan conectar con la naturaleza, con rápido acceso al histórico Castillo San Carlos y a los principales atractivos de Entre Ríos.",
        "vigencia": "23/12/2025 al 12/03/2026",
        "regimen": "Media Pensión",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "standard": { "mayor": 91000, "menor": 61000 },
            "especial": { "mayor": 99000, "menor": 67000 }
        }
    },
    {
        "id": "isla-delta",
        "nombre": "Complejo Isla del Delta",
        "ubicacion": "Tigre, Bs As",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": "isla_delta.jpg",
        "vigencia": "Hasta 28/02/2026 (Cerrado fiestas)",
        "regimen": "Pensión Completa (Incluye lancha)",
        "detalles": "Ingreso Martes / Egreso Domingos",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "mayor_11_anos": 82000,
            "menor_3_10": 55000
        }
    },
    {
        "id": "hotel-del-sol",
        "nombre": "Hotel Del Sol",
        "ubicacion": "Buenos Aires",
        "categoria": "Verano 2026",
        "tipo": "Hotel",
        "imagen": "hotel_del_sol.jpg",
        "vigencia": "Cerrado 02/01 al 25/01 por refacciones",
        "regimen": "Con Desayuno",
        "contacto": "(011) 5236-3900 | consultas@lacoloniabp.com.ar",
        "tarifas": {
            "standard_mayor": 49000,
            "standard_menor": 37000
        }
    },

    // --- CATEGORÍA: CONVENIOS MULTIDESTINO ---
    {
        "id": "convenio-la-colonia",
        "nombre": "Convenio con Asociación 'La Colonia'",
        "ubicacion": "Múltiples Destinos",
        "categoria": "Convenios Multidestino",
        "tipo": "Convenio",
        "imagen": laColoniaImg,
        "entidad_prestadora": "Asociación 'La Colonia'",
        "info_adicional": "Este convenio le permite a nuestros afiliados y afiliadas, y su grupo familiar hacer uso, con el pago de una tarifa especial, de los complejos turísticos y hoteles de 'La Colonia'.",
        "servicios_destacados": [
            "BARILOCHE, Hotel Chamonix",
            "BUENOS AIRES, Hotel del Sol",
            "CÓRDOBA, Residencia Serrana de Tanti",
            "ENTRE RÍOS, Residencia San Carlos Inn",
            "MAR DEL PLATA, Hotel Santa Elia I",
            "MAR DE AJO, Hotel Marcela",
            "MENDOZA, Hotel Providencia",
            "SALTA, Hotel Huaico",
            "TIGRE, Complejo Isla del Delta",
            "VILLA GESELL, Residencia Parque Bonito"
        ],
        "contacto": "lacolonia@lacoloniabp.com.ar"
    },
    {
        "id": "convenio-apjae",
        "nombre": "Convenio APJAE",
        "ubicacion": "Múltiples Destinos",
        "categoria": "Convenios Multidestino",
        "tipo": "Convenio",
        "imagen": apjaeImg,
        "info_adicional": "Este convenio le permite a nuestros afiliados y afiliadas, y su grupo familiar hacer uso, con el pago de una tarifa especial, de los complejos turísticos y hoteles de APJAE. Sujeto a disponibilidad.",
        "descripcion": "Acceso a hoteles y cabañas en: Mar del Plata, Las Grutas, Bariloche, San Martín de los Andes, Ushuaia, Tolhuin, Corrientes, Misiones, Mendoza, Jujuy, Córdoba y CABA.",
        "requisito": "Requiere autorización previa de Turismo AERI.",
        "contacto": "Reservas (WhatsApp): 11 5996-3746 (Agostina/Natalia)"
    },

    // --- CATEGORÍA: ESCAPADAS Y NUEVOS ---
    {
        "id": "la-sankata",
        "nombre": "Posada Serrana La Sankata",
        "ubicacion": "Traslasierra, Córdoba",
        "categoria": "Escapadas",
        "tipo": "Posada",
        "imagen": sankataImg,
        "info_adicional": `Este convenio le ofrece un descuento de 10% a nuestros afiliados, afiliadas y su grupo familiar.
La poblacion esta a 40 km de la villa de Merlo, San Luis y a 50 km de Mina Clavero por ruta 14 km 143/5.

Servicios: habitación con baño privado, wifi, Pileta, 4 hectáreas de parque con vegetación autóctona, Desayuno y Restaurante.`,
        "contacto": "posadalasankata@gmail.com | +54 9 3544 552353"
    },
    {
        "id": "sol-mediterraneo",
        "nombre": "Sol Mediterráneo",
        "ubicacion": "Panaholma, Córdoba",
        "categoria": "Escapadas",
        "tipo": "Departamentos/Cabañas",
        "imagen": "sol_mediterraneo.jpg",
        "servicios": "Piletas climatizadas solar, Quincho, Aire Acondicionado.",
        "contacto": "351-5104356 (Jorge Gaspari)"
    },

    // --- CATEGORÍA: CONVENIOS (EX HOTELERÍA GREMIAL) ---
    {
        "id": "hoteles-sosba",
        "nombre": "Hoteles Gremio SOSBA",
        "ubicacion": "Mar del Plata y Monte Hermoso",
        "categoria": "Convenios Multidestino",
        "tipo": "Hotel",
        "imagen": hotelesSosbaImg,
        "info_adicional": `MAR DEL PLATA
Dirección: Hipólito Yrigoyen nº 2029 e/ Moreno y Bolivar

MONTE HERMOSO
Dirección: Chascomús N 535 e/ Río Salado y Río Negro

SERVICIOS: WIFI, Salón comedor con heladera, microondas y utensilios de cocina, Estacionamiento privado (se abona en el hotel y es sin reserva, sujeto a disponibilidad).

RESERVA:
Secretaria Acc Social y Turismo SOSBA
Dir.: 5 N° 315`,
        "contacto": "Solo WhatsApp: 221 3563688 | cosegurososba@gmail.com"
    },
    {
        "id": "sec-la-plata",
        "nombre": "Hotel y Cabañas SEC",
        "ubicacion": "Cosquín y Mar del Plata",
        "categoria": "Convenios Multidestino",
        "tipo": "Hotel/Cabaña",
        "imagen": "sec_laplata.jpg",
        "contacto": "WhatsApp: 221 504-7204 | Turismo@seclaplata.org.ar"
    },

    // --- CATEGORÍA: CAMPING Y RECREACIÓN ---
    {
        "id": "arana",
        "nombre": "Campo Recreativo Arana",
        "ubicacion": "La Plata (137 e/ 605 y 610)",
        "categoria": "Camping y Recreación",
        "tipo": "Camping",
        "imagen": aranaImg,
        "destacado": "25 hectáreas, Piletas, Canchas.",
        "entidad_prestadora": "Sindicato de Empleados de Comercio La Plata",
        "servicios_destacados": [
            "Predio de 25 hectáreas",
            "Piletas de natación",
            "Canchas de fútbol",
            "Cancha de tenis, padle y tejo",
            "Sector de juegos infantiles"
        ],
        "ingreso_predio": [
            "Se abona el 50% del valor que paga un invitado/a",
            "Estacionamiento gratuito",
            "Menores de 6 años ingreso al predio sin cargo"
        ],
        "requisito_obligatorio": "Ingreso obligatorio con carnet de afiliado/a y DNI físico de todas las personas del grupo.",
        "contacto": "Sindicato Empleados de Comercio LP"
    },
    {
        "id": "camping-sosba",
        "nombre": "Camping y Salón SOSBA",
        "ubicacion": "Ensenada (48 N 319 e/ 1 y 2)",
        "categoria": "Camping y Recreación",
        "tipo": "Camping",
        "imagen": sosbaImg,
        "entidad_prestadora": "S.O.S.B.A.",
        "ingreso_predio": [
            "A partir del 02/01/25",
            "Martes a Domingo de 10:00 a 20:00 hs"
        ],
        "servicios_destacados": [
            "Salón de Fiestas (Diurno: 10 a 16:30 hs)",
            "Salón de Fiestas (Nocturno: 19 a 04 hs)"
        ],
        "requisito_obligatorio": "Ingreso con carnet o recibo de sueldo.",
        "contacto": "221-6442316"
    }
];

export const tourismCategories = [
    "Todos",
    "Verano 2026",
    "Convenios Multidestino",
    "Escapadas",
    "Camping y Recreación"
];
