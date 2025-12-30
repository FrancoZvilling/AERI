
import { Calendar, Users, Building, ShieldAlert, Award, FileText } from 'lucide-react';

export const historyIntro = {
    title: "Nuestra Historia",
    subtitle: "Más de 60 años de lucha y conquistas",
    description: "AERI tiene su historia y fundamentos de su existencia, además de avatares que la fortalecieron a lo largo de los años. Desde nuestros orígenes en 1961 hasta la actualidad, cada paso ha sido en defensa de los trabajadores."
};

export const historyTimeline = [
    {
        year: "Pre-1961",
        title: "Los Orígenes y los '33 Orientales'",
        icon: Users,
        content: "Antes de la fundación formal, ya existía la necesidad de los trabajadores del Ministerio de Economía de tener una organización propia. Funcionaban por separado Rentas e Inmobiliaria. En este contexto surgieron los llamados '33 Orientales', un grupo de 33 empleados liderados por referentes como Dante Franz, Fotios Cunturis y Manuel Hernandez, quienes impulsaron los primeros reclamos y la organización sindical.",
        highlight: "Lograron el 'Premio Estímulo', antecedente histórico de la actual Cuenta Incentivo."
    },
    {
        year: "1961",
        title: "Fundación de AERI",
        icon: Calendar,
        content: "El 18 de abril de 1961, en el Teatro Lozano de La Plata, cientos de empleados celebraron la obtención de la Personería Gremial nro. 1.096. Nacía formalmente A.E.R.I. con el objetivo de defender los derechos específicos del organismo recaudador.",
        highlight: "El objetivo fundacional ya vislumbraba la Autarquía administrativa y financiera."
    },
    {
        year: "1966-1983",
        title: "Tiempos Difíciles y Resistencia",
        icon: ShieldAlert,
        content: "Durante los gobiernos dictatoriales, la entidad enfrentó grandes desafíos. Muchos dirigentes sufrieron cesantías y el 'Premio Estímulo' fue revocado. Sin embargo, la lucha continuó: en 1966 se realizó la primera manifestación frente a Gobernación. Con los años, se sumaron trabajadores de Catastro y el Registro de la Propiedad, fortaleciendo las bases gremiales.",
        highlight: ""
    },
    {
        year: "1983-1990",
        title: "Democracia y la Ley Convenio",
        icon: FileText,
        content: "Con el retorno de la democracia, nuevos cuadros sindicales se sumaron. Un hito fundamental fue la obtención de la 'Ley Convenio' (Ley 10.295) en el Registro de la Propiedad, que trajo mejoras significativas para los empleados.",
        highlight: "Se impidieron los primeros intentos de tercerizar la recaudación en los años 80."
    },
    {
        year: "2001",
        title: "El Bautismo de Fuego: No a la Privatización",
        icon: ShieldAlert,
        content: "El mayor desafío llegó en 2001. Un proyecto del gobierno provincial pretendía privatizar y tercerizar la recaudación, poniendo en riesgo la estabilidad laboral y la función pública. El 17 de mayo de 2001, AERI organizó una manifestación multitudinaria a la Legislatura que logró frenar el proyecto.",
        highlight: "Fue un antes y un después: la unidad de los trabajadores salvó al Organismo Recaudador."
    },
    {
        year: "2008",
        title: "Creación de ARBA y la Autarquía",
        icon: Building,
        content: "Bajo la gestión de Jorge Baldovino y Daniel Locuoco, se concretó un anhelo histórico: la Autarquía con la creación de ARBA. Esto unificó Rentas, Catastro y Procesamiento de Datos, jerarquizando la labor de los trabajadores.",
        highlight: "Se inauguró la Sede Central propia en calle 45, un símbolo del crecimiento patrimonial de AERI."
    },
    {
        year: "Actualidad",
        title: "Hacia el Futuro",
        icon: Award,
        content: "AERI inicia su segundo cincuentenario creciendo en servicios (Salud, Turismo) y organización. Con una conducción renovada, el gran objetivo pendiente y central para el futuro inmediato es la concreción de un Convenio Colectivo de Trabajo.",
        highlight: "Un gremio cerca de la gente, con una conducción generosa y sin intereses."
    }
];
