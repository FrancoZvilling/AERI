import {
    Stethoscope,
    FlaskConical,
    Activity,
    Ear,
    Smile,
    SmilePlus,
    Glasses,
    Eye,
    ScanEye,
    Microscope,
    Baby,
    ActivitySquare,
    Bed,
    Pill,
    Syringe,
    HeartPulse
} from 'lucide-react';

export const medicalServices = [
    {
        id: 'consulta',
        title: 'Consultas Médicas',
        icon: Stethoscope,
        aeri: ['La cobertura es solo para el Instituto Central de Medicina'],
        requirements: []
    },
    {
        id: 'laboratorio',
        title: 'Bono de Laboratorio',
        icon: FlaskConical,
        aeri: [
            'Valor: $5.000,00',
            'Reintegro: $3.500,00'
        ],
        requirements: [
            'Fotocopia de la orden médica',
            'Fotocopia de la historia clínica o del diagnóstico',
            'Factura original',
            'CBU',
            'Fotocopia del carnet de IOMA, DNI, recibo de sueldo'
        ]
    },
    {
        id: 'kinesiologia',
        title: 'Bono de Kinesiología',
        icon: Activity,
        aeri: [
            'Valor: $10.000,00',
            'Reintegro: $5.000,00 (Cubre 10 sesiones)'
        ],
        requirements: ['Orden médica', 'Bono de IOMA / Comprobante de atención']
    },
    {
        id: 'audiologia',
        title: 'Audiología',
        icon: Ear,
        aeri: ['Valor: $3.500,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'audiometria_adultos',
        title: 'Audiometría Adultos',
        icon: Ear,
        aeri: ['Valor: $4.000,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'audiometria_ninos',
        title: 'Audiometría Niños',
        icon: Ear,
        aeri: ['Valor: $3.500,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'logoaudiometria',
        title: 'Logoaudiometría',
        icon: Ear,
        aeri: ['Valor: $4.000,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'pruebas_supraliminares',
        title: 'Pruebas Supraliminares',
        icon: Ear,
        aeri: ['Valor: $3.500,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'impedanciometria',
        title: 'Impedanciometría / Timpanometría',
        icon: Ear,
        aeri: ['Valor: $3.500,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'fonoaudiologia',
        title: 'Fonoaudiología',
        icon: Ear,
        aeri: ['Valor: $3.500,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'foniatria',
        title: 'Foniatría',
        icon: Ear,
        aeri: ['Valor: $3.500,00', 'Reintegro Total'],
        requirements: ['Orden médica', 'Comprobante de pago']
    },
    {
        id: 'odontologia',
        title: 'Bono Odontología',
        icon: Smile,
        aeri: ['Valor: $3.500,00', 'Reintegro Total'],
        requirements: ['Interior: reintegro del bono y factura']
    },
    {
        id: 'lentes',
        title: 'Ópticas (Lentes aéreos y de contacto)',
        icon: Glasses,
        aeri: [
            'Reintegro hasta $50.000 por par',
            'Incluye dos pares al año (de cerca y de lejos)'
        ],
        requirements: ['Orden médica y factura de pago']
    },
    {
        id: 'practicas_medicas',
        title: 'Prácticas Médicas',
        icon: Activity,
        aeri: ['Hasta $5.000 por prácticas médicas con código de IOMA'],
        requirements: []
    },
    {
        id: 'medicamentos',
        title: 'Cobertura en Medicación',
        icon: Pill,
        aeri: [
            '60% de lo que no cubre IOMA',
            '60% en medicación que está en vademécum',
            '60% en medicación por guardia',
            'Los productos de venta libre no tienen reintegro'
        ],
        requirements: []
    }
].sort((a, b) => a.title.localeCompare(b.title));

export const optics = [];

export const pharmacies = [
    { city: "25 de MAYO", name: "COL. FARMACEUTICO", address: "CALLE 30 Nº 493", phone: "0345 3706" },
    { city: "9 DE JULIO", name: "A.M.E.Co.N.J", address: "AVDA VEDIA Nº 849", phone: "" },
    { city: "9 DE JULIO", name: "9 DE JULIO", address: "AVDA VEDIA Nº 648", phone: "422350" },
    { city: "ALBERTI", name: "Vaccarezza", address: "Avda Vacarezza 111", phone: "470137" },
    { city: "AVELLANEDA", name: "Laprida", address: "AVDA MITRE 1002", phone: "" },
    { city: "AZUL", name: "Peroggi", address: "H.Yrigoyen n 548", phone: "54 2281" },
    { city: "AZUL", name: "Soncini", address: "H.Yrigoyen 7300", phone: "42 4189" },
    { city: "AZUL", name: "MARCHISIO", address: "COLON 652", phone: "422777" },
    { city: "AZUL", name: "Merlo", address: "Caneca 534", phone: "42 7267" },
    { city: "BAHIA BLANCA", name: "UNION", address: "ESTOMBA 131", phone: "02914526606" },
    { city: "BAHIA BLANCA", name: "Carabelli", address: "Mitre 198", phone: "0291 452 7280" },
    { city: "BOLIVAR", name: "GOMEZ", address: "ARROSPIDE CALFUCUPA Y 3 DE FEBRERO", phone: "27295" },
    { city: "BOLIVAR", name: "LOPEZ", address: "Avda SAN MARTIN 915", phone: "" },
    { city: "LA PLATA", name: "Farmacia Manes", address: "49 e/ 7 y 8", phone: "" },
    { city: "LA PLATA", name: "Farmacia Caruso", address: "6 y 44", phone: "" },
    { city: "LA PLATA", name: "Farmacia Zorich", address: "7 y 54", phone: "" },
    { city: "LA PLATA", name: "Farmacia Inglesa", address: "47 e/ 7 y 8", phone: "" },
    { city: "LA PLATA", name: "Farmacia La Doce", address: "12 e/ 59 y 60", phone: "" },
    { city: "MAR DEL PLATA", name: "NUEVA CORDOBA", address: "Avda Cordoba 4546", phone: "0223 4941294" },
    { city: "MAR DEL PLATA", name: "AMERICANA", address: "Rivadavia 3201", phone: "0223 4950011" },
    { city: "TANDIL", name: "Crishec", address: "SARMIENTO nº 797 esq. ALEM", phone: "427246" },
    { city: "TANDIL", name: "ROVEDA", address: "9 DE JULIO 853", phone: "02293 425618" }
].sort((a, b) => a.city.localeCompare(b.city));

export const safetyData = {
    definitions: [
        {
            title: "¿Qué debo hacer en el caso de accidente o enfermedad profesional?",
            content: "Debe informar el hecho ante su empleador, quien tiene la obligación de brindar en forma inmediata las prestaciones médicas y asistenciales."
        },
        {
            title: "Accidente de trabajo",
            content: "Se considera accidente de trabajo a todo acontecimiento súbito y violento ocurrido por el hecho o en ocasión del trabajo, o en el trayecto entre el domicilio del trabajador y el lugar de trabajo."
        },
        {
            title: "Enfermedad profesional",
            content: "Se consideran enfermedades profesionales aquellas causadas por agentes de riesgo en el ambiente laboral."
        }
    ],
    rightsAndDuties: [
        {
            role: "Empleadores",
            items: [
                "Notificarán a los trabajadores acerca de la ART.",
                "Denunciarán los accidentes y enfermedades.",
                "Cumplirán con las normas de higiene y seguridad."
            ]
        },
        {
            role: "Trabajadores",
            items: [
                "Cumplirán con las normas de higiene y seguridad.",
                "Informarán hechos relacionados con riesgos.",
                "Denunciarán ante el empleador los accidentes."
            ]
        }
    ],
    important: {
        text: "La credencial identificatoria del agente cubierto deberá portarse en forma permanente para cualquier trámite.",
        steps: "Descargar desde Portal Siape > Inicio > Autoseguro > Credencial."
    },
    legislation: [
        "Ley 14.226 - Creación de CoMiSaSEP",
        "Ley 27348 - Sistema de Riesgo del Trabajo",
        "Ley 19587 - Seguridad e Higiene"
    ]
};
