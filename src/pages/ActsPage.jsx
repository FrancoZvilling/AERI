import React, { useState } from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    ChevronDown,
    ChevronUp,
    FileText,
    Briefcase,
    Users,
    Heart,
    Sun,
    Search,
    BookOpen,
    Megaphone,
    ShieldCheck,
    DollarSign
} from 'lucide-react';

const ActsPage = () => {

    // Processed Data from User Input
    const actsData = [
        {
            id: 1,
            date: "18 de Julio de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Rendición de gestiones, elecciones de delegados y nuevos convenios.",
            topics: [
                { category: "General", content: "Secretario General: Rendición de las gestiones realizadas por las secretarias en el semestre pasado." },
                { category: "Gremial", content: "Registro de la Propiedad: Finalizó el 17 de julio la 'Tecnicatura Superior en Registración y Publicidad Inmobiliaria'. Se realizará el 19 de julio la primera elección formal de delegados en el Departamento de Cobro de Procesos Universales." },
                { category: "Mujer y Familia", content: "Programación del espectáculo interactivo 'Payaso Manotas' en Teatro Don Bosco (Vacaciones de Invierno). Planificación del sorteo del Día del Niño para el 16 de agosto (3 bicicletas)." },
                { category: "Organización", content: "Nuevos convenios: Juguetería Pandora, Centro de belleza Piú Bella y Óptica Bermúdez. Renovación y mantenimiento del edificio, revisión de matafuegos." },
                { category: "Servicios Sociales", content: "Cobertura de Emergencia Médica (Assisten) en toda la provincia para titulares y todo el país para afiliados al coseguro a partir de agosto." },
                { category: "Seccionales", content: "Creación de nuevas seccionales: Gerencia General de Técnica e Información (a cargo de Daniel Riccio) y Lotería y Casinos (a cargo de Leonardo Panevianco)." },
                { category: "Turismo", content: "Convenio con Termas del Salado en General Belgrano (descuentos del 20% y 40%)." },
                { category: "Jubilados", content: "Talleres de computación, evento 'TeCuento' gratuito, cena show en Club Estrella de La Loma y obra de teatro 'El Piloto' con descuento." },
                { category: "Capacitación", content: "Primer encuentro de charlas informativas a veedores de Aeri (17/7). Planificación de cursos de Autoseguro y Ley de Riesgo de Trabajo." }
            ]
        },
        {
            id: 2,
            date: "26 de Junio de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Gestiones favorables por paro CGT, flexibilidad horaria y nuevos ingresos.",
            topics: [
                { category: "Gremial", content: "Resolución requerimiento Dirección Política Económica (equiparación cargo función). Gestiones favorables para no descontar día por paro CGT (29/5). Flexibilidad horaria por cortes de luz/agua en zona norte. Tratamiento de 58 artículos del Convenio Colectivo. Resolución conflicto Relatoría Fiscalización Avellaneda. Bonificación choferes (Dec. 588/19)." },
                { category: "Administrativo", content: "Call Center: Ingreso de contratados profesionales y búsquedas internas. Remodelación edificio. Aprobación Resolución Interna Procesos de Selección nº 164/19 con modificaciones gremiales." },
                { category: "Mujer y Familia", content: "Informe sorteo Día del Padre. Planificación vacaciones de invierno y Día del Niño." },
                { category: "Finanzas", content: "Primer pago subsidio por escolaridad. Autorización salida 'Casa de Marga' para jubilados." },
                { category: "Servicios Sociales", content: "Tratativas con Instituto Central de Medicina. Búsqueda de farmacias y salones en el interior. Reunión por códigos de descuento." },
                { category: "Capacitación", content: "Informe cursos capacitación sindical. Lanzamiento áreas Planificación Sindical y Seguimiento. Análisis cursos autoseguro y veedores." },
                { category: "Interior", content: "Listado de empleados pasantes para reconocimiento de cargo deudor. Designación Mario Mena como delegado ante IPS." },
                { category: "Organización", content: "Convenio Juguetería Pandora (20% descuento)." }
            ]
        },
        {
            id: 3,
            date: "18 de Junio de 2019",
            type: "Asamblea General Ordinaria",
            summary: "Aprobación de Memoria y Balance 2018.",
            topics: [
                { category: "General", content: "Aprobación de Memoria, Balance General, Inventario, Cuenta de Ganancias y Pérdidas e Informe de la Comisión Revisora de Cuentas (Ejercicio 2018)." }
            ]
        },
        {
            id: 4,
            date: "10 de Mayo de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Compra de terreno, subsidio escolaridad y vacunación.",
            topics: [
                { category: "General", content: "Autorización compra terreno en calle 35 (La Plata). Gestiones concesión complejo vacacional. Estudio subsidio escolaridad ($1000). Planificación anticipos de sueldos." },
                { category: "Gremial", content: "Anticipo incentivo 2019 (69%). Selección en Junín y Mercedes. Expediente bonificación choferes. Problemática contratados ACARA. Construcción esparcimiento Registro Propiedad. Denuncia maltrato laboral Gerente Arba." },
                { category: "Servicios Sociales", content: "Éxito vacunación antigripal. Negociaciones Instituto Central de Medicina. Acuerdo con 'Blocking' (cortinas, 15% off). Búsqueda beneficios interior." },
                { category: "Turismo", content: "Promociones invernales y excursiones interior." },
                { category: "Mujer y Familia", content: "Estudio ampliación lactario Call Center. Planificación día del padre." },
                { category: "Capacitación", content: "Convocatoria Coro. Inicio jornadas formación sindical (22/5)." },
                { category: "Prensa", content: "Nuevo mail para Servicios Sociales." }
            ]
        },
        {
            id: 5,
            date: "23 de Abril de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Nueva Junta Electoral, paritarias y día de la mujer.",
            topics: [
                { category: "Gremial", content: "Informe nueva Junta Electoral (Presidente: Mario Enrique Santandrea). Gestión no descuento Día de la Mujer. Reclamo jornada laboral maestras jardineras. Alerta por cesantía compañero Mariano Aguirre. Pedido personal Call Center. Espera apertura paritarias generales." },
                { category: "General", content: "Convocatoria Asamblea General Ordinaria (18/6). Congreso Fegeppba (2/5)." },
                { category: "Turismo", content: "Convenio cabañas Selva Azul (Sierra de los Padres). Viaje al Tigre en Mayo." },
                { category: "Capacitación", content: "Actualización biblioteca digital. Aprobación Coro." },
                { category: "Mujer y Familia", content: "Informe actividades Día de la Mujer." },
                { category: "Jubilados", content: "Entrega medallas (24/4). Servicios pedicuría/manicuría. Taller de memoria e internet." },
                { category: "Seguridad", content: "Curso Autoseguro Provincial (11/4). Especialización Gestión y Seguridad (25/4)." },
                { category: "Servicios Sociales", content: "Vacunación antigripal mayo. Atención Dr. Becerra y Clínico. Convenios veterinarias (15% off)." }
            ]
        },
        {
            id: 6,
            date: "11 de Marzo de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Convocatoria Plenario y cambios en Farmacias.",
            topics: [
                { category: "Gremial", content: "Convocatoria Plenario General de Delegados (20/3) para designar Junta Electoral Central." },
                { category: "Servicios Sociales", content: "Desvinculación Farmacia Gatti. Incorporación Farmacias Carusso, Zorich, Inglesa y Doce." }
            ]
        },
        {
            id: 7,
            date: "28 de Febrero de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Procesos de selección, ética y planificación anual.",
            topics: [
                { category: "Gremial", content: "Modificación Resolución 1/18 procesos selección. Intervención nombramiento irregular MDQ. Solución guardería Risas y Sonrisas. Código de ética (familiares). Desplazamiento Subgerenta Arba." },
                { category: "Servicios Sociales", content: "Cursos Obra Social para delegados." },
                { category: "Prensa", content: "Construcción página web." },
                { category: "Capacitación", content: "Estudio cursos jornadas laborales. Seminario Violencia Género. Planificación coro." },
                { category: "Seguridad", content: "Cursos especialización salud y seguridad laboral." },
                { category: "Turismo", content: "Viajes con promociones 50% contado. Viaje al Tigre." },
                { category: "Mujer y Familia", content: "Planificación Día de la Mujer." }
            ]
        },
        {
            id: 8,
            date: "29 de Enero de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Designación paritarios y aumentos subsidios.",
            topics: [
                { category: "Gremial", content: "Designación paritarios 2019: Saúl Alejandro Sivori y Roberto Agustín Sequeira (titulares). Ratificación Hugo Cristina en Junta Disciplina." },
                { category: "Servicios Sociales", content: "Representantes ante IOMA: Marcos Luis Giménez y Hugo Cristina. Aumento subsidios matrimonio, nacimiento y adopción ($5000). Beneficio extra matrimonio (mini luna de miel)." }
            ]
        },
        {
            id: 9,
            date: "15 de Enero de 2019",
            type: "Reunión de Comisión Directiva",
            summary: "Asunción de nuevas autoridades.",
            topics: [
                { category: "General", content: "Lectura informe Junta Electoral elecciones 15/11/18 (Triunfo Lista Blanca). Asunción de nueva Comisión Directiva y Revisora de Cuentas. Traspaso de mando." }
            ]
        }
    ];

    const [expandedId, setExpandedId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const getCategoryIcon = (category) => {
        const catLower = category.toLowerCase();
        if (catLower.includes('gremial')) return <Briefcase className="w-5 h-5 text-blue-600" />;
        if (catLower.includes('mujer')) return <Heart className="w-5 h-5 text-pink-500" />;
        if (catLower.includes('turismo')) return <Sun className="w-5 h-5 text-orange-500" />;
        if (catLower.includes('capacitación')) return <BookOpen className="w-5 h-5 text-yellow-600" />;
        if (catLower.includes('prensa')) return <Megaphone className="w-5 h-5 text-indigo-500" />;
        if (catLower.includes('servicios')) return <ShieldCheck className="w-5 h-5 text-green-600" />;
        if (catLower.includes('finanzas')) return <DollarSign className="w-5 h-5 text-emerald-600" />;
        if (catLower.includes('general')) return <FileText className="w-5 h-5 text-gray-600" />;
        return <Users className="w-5 h-5 text-gray-500" />;
    };

    const filteredActs = actsData.filter(act =>
        act.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        act.topics.some(t => t.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
        act.date.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Secretaría de Actas"
                subtitle="Transparencia y registro. Memoria activa de nuestras decisiones y gestiones."
                backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Search Bar */}
                <div className="bg-white rounded-xl shadow-lg p-4 mb-8 flex items-center border border-gray-100">
                    <Search className="w-6 h-6 text-gray-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Buscar en las actas (ej: turismo, bonificación, 2019...)"
                        className="w-full text-lg focus:outline-none text-gray-700 placeholder-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Timeline Container */}
                <div className="space-y-6 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

                    {filteredActs.map((act) => (
                        <motion.div
                            key={act.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative md:pl-20"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm hidden md:block z-10"></div>

                            {/* Act Card */}
                            <div
                                className={`bg-white rounded-xl shadow-md border transition-all duration-300 overflow-hidden cursor-pointer ${expandedId === act.id ? 'border-primary ring-1 ring-primary/20 shadow-lg' : 'border-gray-100 hover:border-gray-300'
                                    }`}
                                onClick={() => toggleExpand(act.id)}
                            >
                                {/* Header */}
                                <div className="p-6 flex items-start justify-between">
                                    <div className="flex-grow pr-4">
                                        <div className="flex items-center text-sm text-gray-500 mb-1">
                                            <Calendar className="w-4 h-4 mr-1.5" />
                                            {act.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{act.type}</h3>
                                        <p className="text-gray-600 line-clamp-2">{act.summary}</p>
                                    </div>
                                    <div className={`p-2 rounded-full transition-colors ${expandedId === act.id ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                        {expandedId === act.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {expandedId === act.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="border-t border-gray-100 bg-gray-50/50"
                                        >
                                            <div className="p-6 space-y-4">
                                                {act.topics.map((topic, i) => (
                                                    <div key={i} className="flex items-start">
                                                        <div className="flex-shrink-0 mt-1 mr-4 p-2 bg-white rounded-lg shadow-sm">
                                                            {getCategoryIcon(topic.category)}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                                {topic.category}
                                                            </h4>
                                                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                                                                {topic.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}

                    {filteredActs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No se encontraron actas con ese criterio de búsqueda.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ActsPage;
