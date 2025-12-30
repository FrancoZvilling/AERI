import { User } from 'lucide-react';

// Texto introductorio
export const introContent = {
    title: "Comisión AERI",
    subtitle: "Un gremio cerca de la gente",
    paragraphs: [
        "Asumimos la conducción con la premisa de hacer un gremio distinto, mejor, al servicio de todos los trabajadores.",
        "Es por ello que los que hoy tenemos la responsabilidad de administrar y dirigir, debemos realizar la transformación hacia un sindicato moderno, con más servicios en salud, en esparcimiento, en turismo, en educación, en capacitación y en todas las necesidades de las y los trabajadores y sus familias.",
        "AERI reúne las condiciones fundamentales que con responsabilidad y prudencia permitirán edificar un nuevo sindicato, con democracia, pluralismo y libertad.",
        "Es nuestro anhelo que cada trabajador/a sienta la pertenencia a la unión y vea en sus compañeros a un hermano, para que la solidaridad y el compañerismo sean los motores principales de nuestro andar.",
        "Los valores sindicales prevalecerán y nunca serán destruidos."
    ],
    highlights: [
        "Un gremio cerca de la gente",
        "Una conducción generosa y sin intereses",
        "Acción de lucha y conquista de una vida mejor"
    ]
};

// Autoridades principales para el Carrusel (Fotos placeholders por ahora)
export const mainAuthorities = [
    { name: "SEQUEIRA, ROBERTO AGUSTÍN", role: "SECRETARIO GENERAL", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { name: "DE RITO, PABLO SEBASTIÁN", role: "SECRETARIO ADJUNTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
    { name: "MARTIN, CLAUDIO GERMÁN", role: "SECRETARIO GREMIAL", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
    { name: "MATTEOZZI, JORGE AMILCAR", role: "PROSECRETARIO GREMIAL", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
    { name: "COSSU, MAURICIO ADRIÁN", role: "SECRETARIO DE ORGANIZACIÓN", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
    { name: "GIMÉNEZ, MARCOS LUIS", role: "SECRETARIO DE SERVICIOS SOCIALES", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop" },
    { name: "ARCIDIACONO, JOSE IGNACIO", role: "PROSECRETARIO DE SERVICIOS SOCIALES", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" }, // Placeholder female for variety if needed, but names are male. Resetting to generic or male implies. Keeping diverse placeholders for generic feeling if specific photos aren't available.
    { name: "GOMEZ DE SARAVIA, CARLOS ALBERTO", role: "SECRETARIO DE FINANZAS", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop" },
    { name: "LÓPEZ CARBALLO, GABRIELA BEATRIZ", role: "SECRETARIA DE PRENSA Y PROPAGANDA", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
    { name: "DELGADO, MARIA CECILIA", role: "SECRETARIA DE LA MUJER Y LA FAMILIA", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
    { name: "IMANONI, EZEQUIEL HÉCTOR", role: "SECRETARIO DE CULTURA Y CAPACITACION", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop" },
    { name: "BAZÁN, PEDRO JORGE", role: "SECRETARIA DE TURISMO Y DEPORTE", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop" },
    { name: "CAPANO, GISELA CAROLINA", role: "SECRETARIA DE ACTAS", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" }
];

// Listado Completo para Acordeones
export const staffGroups = [
    {
        title: "COMISIÓN DIRECTIVA",
        members: [
            { role: "SECRETARIO GENERAL", name: "SEQUEIRA, ROBERTO AGUSTÍN" },
            { role: "SECRETARIO ADJUNTO", name: "DE RITO, PABLO SEBASTIÁN" },
            { role: "SECRETARIO GREMIAL", name: "MARTIN, CLAUDIO GERMÁN" },
            { role: "PROSECRETARIO GREMIAL", name: "MATTEOZZI, JORGE AMILCAR" },
            { role: "SECRETARIO DE ORGANIZACIÓN", name: "COSSU, MAURICIO ADRIÁN" },
            { role: "SECRETARIO DE SERVICIOS SOCIALES", name: "GIMÉNEZ, MARCOS LUIS" },
            { role: "PROSECRETARIO DE SERVICIOS SOCIALES", name: "ARCIDIACONO, JOSE IGNACIO" },
            { role: "SECRETARIO DE FINANZAS", name: "GOMEZ DE SARAVIA, CARLOS ALBERTO" },
            { role: "PROSECRETARIO DE FINANZAS", name: "BRANCIFORTI DE LEONFORTE, PABLO ANTONIO" },
            { role: "SECRETARIA DE PRENSA Y PROPAGANDA", name: "LÓPEZ CARBALLO, GABRIELA BEATRIZ" },
            { role: "SECRETARIA DE LA MUJER Y LA FAMILIA", name: "DELGADO, MARIA CECILIA" },
            { role: "SECRETARIO DE CULTURA Y CAPACITACION", name: "IMANONI, EZEQUIEL HÉCTOR" },
            { role: "SECRETARIA DE TURISMO Y DEPORTE", name: "BAZÁN, PEDRO JORGE" },
            { role: "SECRETARIA DE ACTAS", name: "CAPANO, GISELA CAROLINA" },
            { role: "VOCAL TITULAR 1°", name: "SÍVORI, SAUL ALEJANDRO" },
            { role: "VOCAL TITULAR 2°", name: "LOCUOCO, DANIEL HORACIO" },
            { role: "VOCAL TITULAR 3°", name: "ALTAMORE, SILVANA ESTELA" },
            { role: "VOCAL TITULAR 4°", name: "ARIAS, NEMESIO" },
            { role: "VOCAL TITULAR 5°", name: "BELLANTIG, MIRANDA ELISA" },
            { role: "VOCAL TITULAR 6°", name: "MENA, MARIO ALBERTO" },
            { role: "VOCAL SUPLENTE 1°", name: "SENDÓN, JOSE LUIS" },
            { role: "VOCAL SUPLENTE 2°", name: "RENDE, ARIEL EUGENIO AGUSTÍN" },
            { role: "VOCAL SUPLENTE 3°", name: "NADAL, MARIA BELÉN" },
            { role: "VOCAL SUPLENTE 4°", name: "FERNÁNDEZ, ADRIANA BEATRIZ" }
        ]
    },
    {
        title: "COMISION REVISORA DE CUENTAS",
        members: [
            { role: "TITULAR", name: "OBREGÓN, JULIO RICARDO" },
            { role: "TITULAR", name: "RUEDA, WALTER ALFREDO" },
            { role: "TITULAR", name: "PLASENCIA LINARES, DENNIS MILTÓN" },
            { role: "SUPLENTE", name: "MEITÍN FIRPO, VALERIA LEONOR" },
            { role: "SUPLENTE", name: "PALLANZA, PABLO JAVIER" }
        ]
    },
    {
        title: "SECCIONAL ARBA CASA CENTRAL",
        members: [
            { role: "SECRETARIO", name: "BUSS, JUAN IGNACIO" },
            { role: "VOCAL TITULAR 1°", name: "DOMíNGUEZ, JULIO ROBERTO" },
            { role: "VOCAL TITULAR 2°", name: "MIRANDA, ALEJANDRA MARCELA" },
            { role: "VOCAL TITULAR 3°", name: "ALFREDO, MARTÍN IGNACIO" },
            { role: "VOCAL TITULAR 4°", name: "TOLOSA, LUIS MANUEL" },
            { role: "VOCAL SUPLENTE 1°", name: "KRAKOVER, GRACIELA VIRGINIA" },
            { role: "VOCAL SUPLENTE 2°", name: "ODO, MARTÍN MIGUEL" },
            { role: "VOCAL SUPLENTE 3°", name: "LEIVA, PAULA BEATRIZ" },
            { role: "VOCAL SUPLENTE 4°", name: "LEBAN, GUSTAVO LEOPOLDO" }
        ]
    },
    {
        title: "DELEGADOS AL CONGRESO SECCIONAL ARBA CASA CENTRAL",
        members: [
            { role: "DELEGADO AL CONGRESO TITULAR 1°", name: "VIDELA, RODRIGO JOSE" },
            { role: "DELEGADO AL CONGRESO TITULAR 2°", name: "GIANTOMASI, GABRIEL EDUARDO" },
            { role: "DELEGADA AL CONGRESO TITULAR 3°", name: "MICELI, LAURA MARICEL" },
            { role: "DELEGADO AL CONGRESO TITULAR 4°", name: "GONZÁLEZ, FERNANDO GUSTAVO" },
            { role: "DELEGADA AL CONGRESO TITULAR 5°", name: "CENSABELLA, HAYDEE LILIANA" },
            { role: "DELEGADO AL CONGRESO TITULAR 6°", name: "CABASSI, GERARDO HERNAN" },
            { role: "DELEGADO AL CONGRESO TITULAR 7°", name: "BIN, RICARDO OMAR" },
            { role: "DELEGADO AL CONGRESO TITULAR 8°", name: "GALLUZZI, JORGE RICARDO" },
            { role: "DELEGADO AL CONGRESO TITULAR 9°", name: "NIELSEN, HERNÁN PABLO" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 1°", name: "FRAGASSO, MICAELA" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 2°", name: "FERRARI, ROSANA LEONOR" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 3°", name: "CARRAZZONI, JULIO MARIO" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 4°", name: "MARTÍNEZ, VALERIA ROMINA" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 5°", name: "ALBERTI, SANTIAGO NICOLAS" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 6°", name: "SABATINI, CARINA ANABELLA" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 7°", name: "CAPANO, MELISA YANINA" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 8°", name: "ROMANDETTA, ANGEL MARTIN" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 9°", name: "CARRI SARAVI, ANDREA VIVIANA" }
        ]
    },
    {
        title: "SECCIONAL ARBA INTERIOR",
        members: [
            { role: "SECRETARIA", name: "MARTIN, ADRIANA GUILLERMINA" },
            { role: "VOCAL TITULAR 1°", name: "RODRÍGUEZ, AGUSTIN ELEODORO" },
            { role: "VOCAL TITULAR 2°", name: "RIGO, VIVIAN LYDIA" },
            { role: "VOCAL TITULAR 3°", name: "ROCHA, LUCRECIA MABEL" },
            { role: "VOCAL TITULAR 4°", name: "HOJRAJ, JOSE FABRICIO" },
            { role: "VOCAL SUPLENTE 1°", name: "BUGARIN, GASTÓN EDUARDO" },
            { role: "VOCAL SUPLENTE 2°", name: "PUSTILNICK, BETTIANA ROMINA" },
            { role: "VOCAL SUPLENTE 3°", name: "TAYLOR, CLAUDIO GABRIEL" },
            { role: "VOCAL SUPLENTE 4°", name: "CARDASCIA, MARCOS PABLO" }
        ]
    },
    {
        title: "DELEGADOS AL CONGRESO SECCIONAL ARBA INTERIOR",
        members: [
            { role: "DELEGADO AL CONGRESO TITULAR 1°", name: "PEÑA, RUBEN PEDRO" },
            { role: "DELEGADA AL CONGRESO TITULAR 2°", name: "PEÑACORADA, MARÍA JULIA" },
            { role: "DELEGADA AL CONGRESO TITULAR 3°", name: "MUTIO, GRACIELA BEATRIZ" },
            { role: "DELEGADO AL CONGRESO TITULAR 4°", name: "MACHADO, ANGEL FABIAN" },
            { role: "DELEGADO AL CONGRESO TITULAR 5°", name: "BELATTI, CARLOS RUBEN" },
            { role: "DELEGADO AL CONGRESO TITULAR 6°", name: "CUELLO, JUAN MANUEL" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 1°", name: "RAMOS, VIRGINIA ALEJANDRA" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 2°", name: "RODRÍGUEZ, PABLO ARMANDO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 3°", name: "URRA, IGNACIO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 4°", name: "SARDÓN, ADOLFO GERARDO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 5°", name: "CORIA, PABLO RUBÉN" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 6°", name: "OILLATAGUERRE, ALEJANDRO MARTIN" }
        ]
    },
    {
        title: "SECCIONAL ARBA CAP.FED. Y G.B.A.",
        members: [
            { role: "SECRETARIO", name: "PONTE, NESTOR HUGO" },
            { role: "VOCAL TITULAR 1°", name: "FISCELLA, NATALIA JIMENA" },
            { role: "VOCAL TITULAR 2°", name: "CHACÓN, CARLOS PATRICIO" },
            { role: "VOCAL TITULAR 3°", name: "FIGUEREDO, ZULMA ELISABETH" },
            { role: "VOCAL TITULAR 4°", name: "CIALDELLA, GUSTAVO ANTONIO" },
            { role: "VOCAL SUPLENTE 1°", name: "CLEMENTINO, HERNAN MARCELO" },
            { role: "VOCAL SUPLENTE 2°", name: "SOSA, MARIA TERESA" },
            { role: "VOCAL SUPLENTE 3°", name: "MAIDANA, ALFREDO DANIEL" },
            { role: "VOCAL SUPLENTE 4°", name: "PIZARRO, MARCELA ALEJANDRA" }
        ]
    },
    {
        title: "DELEGADOS AL CONGRESO SECCIONAL ARBA CAP.FED. Y G.B.A.",
        members: [
            { role: "DELEGADA AL CONGRESO TITULAR 1°", name: "RACCA, SANDRA MARIA" },
            { role: "DELEGADO AL CONGRESO TITULAR 2°", name: "VERÓN, DIEGO HERNAN" },
            { role: "DELEGADA AL CONGRESO TITULAR 3°", name: "CRISTOFARO, ROXANA KARINA" },
            { role: "DELEGADO AL CONGRESO TITULAR 4°", name: "REDRUELLO, WALTER JORGE" },
            { role: "DELEGADA AL CONGRESO TITULAR 5°", name: "ALANIS, SILVIA BEATRIZ" },
            { role: "DELEGADO AL CONGRESO TITULAR 6°", name: "CARUSO, PABLO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 1°", name: "MONTES DE OCA, ADALBERTO" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 2°", name: "ROMERO, SANDRA EDITH" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 3°", name: "ARECO, CRISTIAN DANIEL" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 4°", name: "TEGLIA, NESTOR CARLOS" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 5°", name: "HURTADO FERNÁNDEZ, JUDITH ELIZABETH" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 6°", name: "MOREY, GLADYS NOEMí" }
        ]
    },
    {
        title: "SECCIONAL REGISTRO DE LA PROPIEDAD e INSTITUTO DE LOTERIA Y CASINOS",
        members: [
            { role: "SECRETARIO", name: "VERA, GUILLERMO ANTONIO" },
            { role: "VOCAL TITULAR 1º", name: "PANEBIANCO, LEONARDO MAXIMILIANO" },
            { role: "VOCAL TITULAR 2º", name: "RODRíGUEZ, GUSTAVO JAVIER" },
            { role: "VOCAL TITULAR 3º", name: "DE SÁBATO, BETIANA" },
            { role: "VOCAL TITULAR 4º", name: "LONGOBUCCO, CLAUDIA ALEJANDRA" },
            { role: "VOCAL SUPLENTE 1º", name: "BARRALES, CHRISTIAN" },
            { role: "VOCAL SUPLENTE 2º", name: "MARCÓ, MARCELO JAVIER" },
            { role: "VOCAL SUPLENTE 3º", name: "PÉREZ, GUSTAVO ALEJANDRO" },
            { role: "VOCAL SUPLENTE 4º", name: "DOMíNGUEZ, SANTIAGO AGUSTIN" }
        ]
    },
    {
        title: "DELEGADOS AL CONGRESO SECCIONAL REGISTRO DE LA PROPIEDAD",
        members: [
            { role: "DELEGADO AL CONGRESO TITULAR 1º", name: "SILVA, LUIS GASTÓN" },
            { role: "DELEGADO AL CONGRESO TITULAR 2º", name: "STEFANIZZI, OMAR HORACIO" },
            { role: "DELEGADO AL CONGRESO TITULAR 3º", name: "SANTÁNGELO, NORBERTO MIGUEL" },
            { role: "DELEGADA AL CONGRESO TITULAR 4º", name: "VENEZIANO, IRMA ESTER" },
            { role: "DELEGADA AL CONGRESO TITULAR 5º", name: "HERRERA, MARÍA BEATRIZ" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 1º", name: "PIROLA, STELLA MARIS" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 2º", name: "MENGOTTI, GABRIEL EDUARDO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 3º", name: "STEFANIZZI, NESTOR LEANDRO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 4º", name: "MARTIN, MARCELO HÉCTOR" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 5º", name: "BALBÍN, LEOPOLDO ARIEL" }
        ]
    },
    {
        title: "SECCIONAL MINISTERIO DE ECONOMIA",
        members: [
            { role: "SECRETARIA", name: "CARENA, LAURA MARIEL" },
            { role: "VOCAL TITULAR 1º", name: "LEONARDI, FERNANDO ADRIAN" },
            { role: "VOCAL TITULAR 2º", name: "RAMÍREZ, JORGELINA INES" },
            { role: "VOCAL TITULAR 3º", name: "GENOVÉS, ALEJANDRO DAVID" },
            { role: "VOCAL TITULAR 4º", name: "BONZI, ALBERTO DOMINGO" },
            { role: "VOCAL SUPLENTE 1º", name: "GUERRIERI, ROMINA SOLEDAD" },
            { role: "VOCAL SUPLENTE 2º", name: "ZARZA, MARCELO ARNALDO" },
            { role: "VOCAL SUPLENTE 3º", name: "GHIONE, MARIA SOLEDAD" },
            { role: "VOCAL SUPLENTE 4º", name: "CARDOZO, GUSTAVO CARLOS" }
        ]
    },
    {
        title: "DELEGADOS AL CONGRESO SECCIONAL MINISTERIO DE ECONOMIA",
        members: [
            { role: "DELEGADO AL CONGRESO TITULAR 1º", name: "RIVERO, PABLO CÉSAR" },
            { role: "DELEGADO AL CONGRESO TITULAR 2º", name: "ILÍAS, ANDRES ISMAEL" },
            { role: "DELEGADA AL CONGRESO TITULAR 3º", name: "LEMOS, MARTHA MABEL" },
            { role: "DELEGADO AL CONGRESO TITULAR 4º", name: "MICHELLOD, IGNACIO" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 1º", name: "SALAS ROSSI, MERCEDES" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 2º", name: "MANCINI, NATALIA" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 3º", name: "VALLEJO, NICOLÁS RAMIRO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 4º", name: "GONZÁLEZ, JORGE MANUEL" }
        ]
    },
    {
        title: "SECCIONAL JUBILADOS",
        members: [
            { role: "SECRETARIA", name: "SANZ, SILVIA BEATRIZ" },
            { role: "VOCAL TITULAR 1º", name: "PARODI, LAURA ROSARIO" },
            { role: "VOCAL TITULAR 2º", name: "SUÁREZ, OSCAR ALFREDO" },
            { role: "VOCAL TITULAR 3º", name: "GUICHON, MAGDALENA MARIA" },
            { role: "VOCAL TITULAR 4º", name: "PLAZAS, MARISA CRISTINA" },
            { role: "VOCAL SUPLENTE 1º", name: "SUÁREZ, ISABEL CRISTINA" },
            { role: "VOCAL SUPLENTE 2º", name: "FONTI, PATRICIA RITA BEATRIZ" },
            { role: "VOCAL SUPLENTE 3º", name: "FLORES, MARIA ANGELITA" },
            { role: "VOCAL SUPLENTE 4º", name: "SALAS, LUIS ALBERTO" }
        ]
    },
    {
        title: "DELEGADOS AL CONGRESO SECCIONAL JUBILADOS",
        members: [
            { role: "DELEGADO AL CONGRESO TITULAR 1º", name: "GILLY, CARLOS ALBERTO" },
            { role: "DELEGADO AL CONGRESO TITULAR 2º", name: "GARCIA ESCUDERO, HÉCTOR OSCAR" },
            { role: "DELEGADO AL CONGRESO TITULAR 3º", name: "RIVA, RODOLFO ERNESTO" },
            { role: "DELEGADO AL CONGRESO TITULAR 4º", name: "SCIUTTI, GUSTAVO ALFREDO" },
            { role: "DELEGADO AL CONGRESO TITULAR 5º", name: "GIUSTI, JUAN MAURICIO" },
            { role: "DELEGADO AL CONGRESO TITULAR 6º", name: "D´ALESSANDRO, IDELFREDO HUGO" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 1º", name: "AGUÉDA, LIDIA ETHEL" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 2º", name: "ZOIA, CARLOS MANUEL" },
            { role: "DELEGADA AL CONGRESO SUPLENTE 3º", name: "CIRIACO, WALTER JORGE" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 4º", name: "CUARTAS, JUAN ABEL" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 5º", name: "DEMARCO, NANCY BEATRIZ" },
            { role: "DELEGADO AL CONGRESO SUPLENTE 6º", name: "MOLY, SUSANA LILIANA" }
        ]
    }
];
