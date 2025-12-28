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
        title: 'Consulta Médica',
        icon: Stethoscope,
        ioma: [
            'Categoría A: sin costo para el afiliado (bono a cargo de IOMA)',
            'Categoría B: $140',
            'Categoría C: $220'
        ],
        aeri: [], // No AERI data provided for this specific item
        requirements: []
    },
    {
        id: 'bioquimicas',
        title: 'Prácticas Bioquímicas',
        icon: FlaskConical,
        ioma: ['Paga sólo el valor del bono único de $200'],
        aeri: [
            'Se entrega el bono sin cargo en la sede social y en el local del Ministerio de Economía.',
            'En el interior de la provincia, lo entregan los delegados.'
        ],
        requirements: [
            'Fotocopia de la orden médica',
            'Fotocopia de la historia clínica o del diagnóstico',
            'Rechazo de FABA',
            'Factura original',
            'Verificación de AFIP',
            'CBU',
            'Fotocopia del carnet de IOMA, DNI, recibo de sueldo',
            'Resultado de los análisis'
        ]
    },
    {
        id: 'kinesiologia',
        title: 'Kinesiología',
        icon: Activity,
        ioma: ['Primeras 10 sesiones: $600', 'Adquirir el bono en el consultorio del profesional'],
        aeri: ['Por reintegro 100%'],
        requirements: ['Orden médica', 'Bono de IOMA']
    },
    {
        id: 'fonoaudiologia',
        title: 'Fonoaudiología / Foniatría',
        icon: Ear,
        ioma: ['Bono válido para 8 sesiones mensuales', 'Adquirir el bono en el consultorio del profesional'],
        aeri: ['Por reintegro 100%'],
        requirements: ['Orden médica', 'Bono de IOMA']
    },
    {
        id: 'audiologia',
        title: 'Audiología',
        icon: Ear,
        ioma: [
            'Audiometría tonal en adultos: $84',
            'Audiometría tonal en niños: $92',
            'Logoaudiometría: $84',
            'Pruebas supraliminares: $50',
            'Impedanciometría y timpanometría: $97',
            'Selección de otoamplífonos: $152',
            'Otoemisiones acústicas: $157',
            'Adquirir los bonos del profesional'
        ],
        aeri: ['Por reintegro 100%'],
        requirements: ['Orden médica', 'Bono de IOMA']
    },
    {
        id: 'odontologia',
        title: 'Odontología General',
        icon: Smile,
        ioma: [
            'Bonos por mes calendario: $75',
            'Incluye: consultas, preventiva, operatoria, endodoncia, radiología, extracciones simples, biopsias, etc.',
            'Valores extra para prácticas específicas.',
            'Restauración: $154',
            'Tratamiento de conducto: $124',
            'Extracciones: $115',
            'Consulta prótesis: $157',
            'Bono prótesis removible parcial: $490',
            'Bono prótesis completa: $292',
            'ICI (extra): $250'
        ],
        aeri: ['Se entrega sin cargo el bono de $75'],
        requirements: ['Interior: reintegro del bono y factura de ICI']
    },
    {
        id: 'ortodoncia',
        title: 'Ortodoncia',
        icon: SmilePlus,
        ioma: ['Cobertura según valores preestablecidos por IOMA hasta los 15 años inclusive'],
        aeri: [],
        requirements: []
    },
    {
        id: 'lentes',
        title: 'Lentes aéreos y de contacto',
        icon: Glasses,
        ioma: ['Cobertura según valores preestablecidos por IOMA (según dioptrías)'],
        aeri: ['Se reconoce hasta $1300'],
        requirements: ['Interior: orden médica y factura de pago']
    },
    {
        id: 'cirugia_ojos',
        title: 'Cirugía de miopía y astigmatismo',
        icon: Eye,
        ioma: ['Cobertura según valores preestablecidos por IOMA previa autorización'],
        aeri: [],
        requirements: []
    },
    {
        id: 'campo_visual',
        title: 'Campo visual computarizado',
        icon: ScanEye,
        ioma: ['Valor del bono que se autoriza en Círculo Médico'],
        aeri: ['Por reintegro'],
        requirements: []
    },
    {
        id: 'audifonos',
        title: 'Audífonos',
        icon: Ear,
        ioma: ['Cobertura según valores preestablecidos por IOMA'],
        aeri: ['Hasta el 20% del valor presupuestado'],
        requirements: [
            'Orden del profesional',
            'Presupuesto',
            'Resultado de la audiometría',
            'Fotocopia carnet IOMA, DNI, recibo',
            'Fotocopia presentación IOMA',
            'Resolución IOMA',
            'Comprobante depósito IOMA'
        ]
    },
    {
        id: 'protesis_ortesis',
        title: 'Prótesis y órtesis',
        icon: ActivitySquare, // Changed from Bone (not in Lucide basic or imports) to ActivitySquare
        ioma: ['Cobertura según valores preestablecidos por IOMA'],
        aeri: ['Hasta el 20% del valor presupuestado'],
        requirements: [
            'Orden del profesional',
            'Presupuesto',
            'Fotocopia carnet IOMA, DNI, recibo',
            'Fotocopia presentación IOMA',
            'Resolución IOMA',
            'Comprobante depósito IOMA'
        ]
    },
    {
        id: 'discapacidad',
        title: 'Discapacidad',
        icon: HeartPulse, // Changed from Wheelchair
        ioma: ['Cobertura según valores preestablecidos por IOMA'],
        aeri: [],
        requirements: []
    },
    {
        id: 'estimulacion',
        title: 'Estimulación Temprana y Rehabilitación',
        icon: Baby,
        ioma: [
            'Escuela especial, centro de día, hogar',
            'Acompañamiento terapéutico',
            'Tratamiento ambulatorio (fono, psico, etc.)',
            'Rehabilitación, equipamiento, transporte',
            'Internación domiciliaria'
        ],
        aeri: [],
        requirements: []
    },
    {
        id: 'practicas_baja',
        title: 'Prácticas de Baja Complejidad',
        icon: Activity,
        ioma: ['Se paga sólo el valor indicado del bono', 'Ecografía, mamografía, densitometría, etc.'],
        aeri: [],
        requirements: []
    },
    {
        id: 'practicas_media',
        title: 'Prácticas de Mediana Complejidad',
        icon: Microscope,
        ioma: ['Cobertura del 100%', 'Videocolonoscopía, espirometría, etc.'],
        aeri: [],
        requirements: []
    },
    {
        id: 'practicas_alta',
        title: 'Prácticas de Alta Complejidad',
        icon: ScanEye,
        ioma: ['Cobertura del 100%', 'TAC, RMN, ecoDoppler, angiografía'],
        aeri: [],
        requirements: []
    },
    {
        id: 'internaciones',
        title: 'Internaciones',
        icon: Bed,
        ioma: ['Cobertura del 100%'],
        aeri: [],
        requirements: []
    },
    {
        id: 'medicamentos',
        title: 'Medicamentos',
        icon: Pill,
        ioma: ['Promedio 70% ambulatorios', '100% patologías crónicas/prevalentes'],
        aeri: [
            'AERI cubre hasta 2 recetas por mes y por grupo familiar.',
            'Coseguro IOMA: cobertura 100% en vademecum.',
            'Hasta 60% fuera del vademecum.'
        ],
        requirements: []
    },
    {
        id: 'meppes',
        title: 'Plan MEPPES (Alta Complejidad)',
        icon: Pill,
        ioma: ['Cobertura 100% (Oncológicos, HIV, Esclerosis, etc.)'],
        aeri: [],
        requirements: []
    },
    {
        id: 'alta_complejidad_internacion',
        title: 'Alta Complejidad en Internación',
        icon: Bed,
        ioma: ['Cobertura del 100%'],
        aeri: [],
        requirements: []
    },
    {
        id: 'anestesia',
        title: 'Anestesia',
        icon: Syringe,
        ioma: ['Cobertura del 100%'],
        aeri: [],
        requirements: []
    }
].sort((a, b) => a.title.localeCompare(b.title));

export const optics = [
    { name: "BERMUDEZ I", address: "5 Y 43 N 499" },
    { name: "BERMUDEZ II", address: "7 Nº 1077 e/ 54 y 55 - La Plata" },
    { name: "BERMUDEZ QUILMES", address: "Paseo Rivadavia 324 - Quilmes" },
    { name: "LUMI", address: "Diag 80 ESQ. 3 n 797 y 7 y 43 (Nueva)" },
    { name: "EUROVISION", address: "8 N 780" },
    { name: "MULTIVISION", address: "48 N 614" },
    { name: "RENO", address: "Diag 79 N 735" },
    { name: "ESPACIO VISION", address: "47 E/ 11 Y 12 N 839 1/2" }
];

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
    // Adding a few notable ones for brevity in preview, user said "alphabetic organization"
    { city: "MAR DEL PLATA", name: "NUEVA CORDOBA", address: "Avda Cordoba 4546", phone: "0223 4941294" },
    { city: "MAR DEL PLATA", name: "AMERICANA", address: "Rivadavia 3201", phone: "0223 4950011" },
    { city: "TANDIL", name: "Crishec", address: "SARMIENTO nº 797 esq. ALEM", phone: "427246" },
    { city: "TANDIL", name: "ROVEDA", address: "9 DE JULIO 853", phone: "02293 425618" }
].sort((a, b) => a.city.localeCompare(b.city));

export const safetyData = {
    definitions: [
        {
            title: "¿Qué debo hacer en el caso de accidente o enfermedad profesional?",
            content: "Debe informar el hecho ante su empleador, quien tiene la obligación de comunicar el accidente o enfermedad a la ART si la tuviera o brindarle en forma inmediata las prestaciones médicas y asistenciales si se trata de un empleador autoasegurado."
        },
        {
            title: "Accidente de trabajo",
            content: "Se considera accidente de trabajo a todo acontecimiento súbito y violento ocurrido por el hecho o en ocasión del trabajo, o en el trayecto entre el domicilio del trabajador y el lugar de trabajo, siempre y cuando el damnificado no hubiere interrumpido o alterado dicho trayecto por causas ajenas al trabajo. El trabajador podrá declarar por escrito ante el empleador, y éste dentro de las setenta y dos (72) horas ante el asegurador, que el in-itinere se modifica por razones de estudio, concurrencia a otro empleo o atención de familiar directo enfermo y no conviviente."
        },
        {
            title: "Enfermedad profesional",
            content: "Se consideran enfermedades profesionales aquellas que se encuentran incluidas en el listado de enfermedades profesionales que elaborará y revisará el Poder Ejecutivo anualmente. Las enfermedades no incluidas en el listado como sus consecuencias en ningún caso serán consideradas resarcibles."
        },
        {
            title: "Exclusiones",
            content: "Quedan excluidos: a) Los accidentes y enfermedades profesionales causados por dolo del trabajador o por fuerza mayor extraña al trabajo; b) Las incapacidades preexistentes acreditadas en el examen preocupacional."
        }
    ],
    rightsAndDuties: [
        {
            role: "Aseguradoras de Riesgos del Trabajo (ART)",
            items: [
                "Denunciarán ante la SRT los incumplimientos de sus afiliados.",
                "Tendrán acceso a la información necesaria para cumplir con las prestaciones.",
                "Promoverán la prevención e informarán a la SRT.",
                "Mantendrán un registro de siniestralidad por establecimiento.",
                "Informarán a los interesados sobre su composición y balances.",
                "No podrán realizar exámenes psicofísicos previos a la afiliación."
            ]
        },
        {
            role: "Empleadores",
            items: [
                "Recibirán información de la ART respecto de alícuotas y prestaciones.",
                "Notificarán a los trabajadores acerca de la ART a la que se encuentren afiliados.",
                "Denunciarán a la ART y a la SRT los accidentes y enfermedades.",
                "Cumplirán con las normas de higiene y seguridad.",
                "Mantendrán un registro de siniestralidad."
            ]
        },
        {
            role: "Trabajadores",
            items: [
                "Recibirán capacitación en prevención de riesgos del trabajo.",
                "Cumplirán con las normas de higiene y seguridad.",
                "Informarán al empleador hechos relacionados con riesgos.",
                "Se someterán a exámenes médicos y tratamientos de rehabilitación.",
                "Denunciarán ante el empleador los accidentes y enfermedades."
            ]
        }
    ],
    important: {
        text: "De acuerdo a la Ley de Riesgos del Trabajo, la credencial identificatoria del agente cubierto deberá portarse en forma permanente y presentarse obligatoriamente ante cualquier trámite relacionado con el autoseguro.",
        steps: "Para descargar credencial de ART, ingrese a Portal Siape > Inicio > Autoseguro > Click en Credencial > Descargar."
    },
    legislation: [
        "Ley 14.226 - Creación de CoMiSaSEP, Decreto Reglamentario 120b/2011.",
        "Recomendación 01/2017 Prevención enfermedades infectocontagiosas en ARBA.",
        "Recomendación 01/2018 Protocolo prevención en mudanzas (ARBA).",
        "Decreto 1338/96.- Servicios de Medicina y de Higiene y Seguridad.",
        "Resolución 523/07 de la Superintendencia de Riesgos de Trabajo.",
        "Ley 27348 - Modificatoria del Sistema de Riesgo del Trabajo.",
        "Resolución 925/15 SRT.",
        "Decreto 1521/14.",
        "Ley 19587 Ley de Seguridad e Higiene - Decreto 351/79 Reglamentario.",
        "Ley 13894 Ley Antitabaco - Decreto Reglamentario 1626.",
        "Resolución 07/14 SPPRRHH - Decreto 1047/09 Gripe A - Resolución Interna ARBA 178/09."
    ]
};
