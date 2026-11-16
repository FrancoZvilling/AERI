/**
 * Datos oficiales del Escrutinio Provisorio - Elecciones Generales AERI
 * Jueves 12 de Noviembre de 2026
 */

export const escrutinioIntro = {
    title: "Escrutinio Provisorio",
    subtitle: "Elecciones Generales - Jueves 12 de Noviembre de 2026",
    fecha: "12 de Noviembre de 2026",
    resumen: "Resultados provisorios oficiales correspondientes a la totalidad de las mesas escrutadas para Comisión Directiva y Comisiones Seccionales."
};

export const actasOficiales = [
    {
        id: 1,
        title: "Acta Oficial de Escrutinio - Parte 1",
        subtitle: "Mesas 1 a 21 (Casa Central, Conurbano e Interior)",
        src: "/escrutinio/1.webp"
    },
    {
        id: 2,
        title: "Acta Oficial de Escrutinio - Parte 2",
        subtitle: "Mesas 22 a 26, Jubilados, Correo y Totales Generales",
        src: "/escrutinio/2.webp"
    }
];

export const totalesGenerales = {
    afiliados_votaron: 2037,
    sobres: 2037,
    diferencia: 0,
    comision_directiva: {
        lista_blanca: 1025,
        lista_azul: 998,
        votos_nulos: 6,
        votos_recurridos: 1,
        votos_en_blanco: 7,
        porcentaje_blanca: 50.32,
        porcentaje_azul: 48.99
    },
    seccionales: {
        lista_blanca: 1025,
        lista_azul: 998,
        votos_nulos: 5,
        votos_recurridos: 1,
        votos_en_blanco: 7,
        porcentaje_blanca: 50.32,
        porcentaje_azul: 48.99
    }
};

export const subtotalesPorSeccional = {
    detalle: [
        { seccional: "CASA CENTRAL", lista_blanca: 312, lista_azul: 490, total: 802 },
        { seccional: "MINISTERIO DE ECONOMIA", lista_blanca: 89, lista_azul: 42, total: 131 },
        { seccional: "REGISTRO DE LA PROPIEDAD Y LOTERIA", lista_blanca: 113, lista_azul: 139, total: 252 },
        { seccional: "INTERIOR", lista_blanca: 200, lista_azul: 100, total: 300 },
        { seccional: "CABA Y GBA", lista_blanca: 206, lista_azul: 150, total: 356 },
        { seccional: "JUBILADOS", lista_blanca: 105, lista_azul: 77, total: 182 }
    ],
    totales: {
        lista_blanca: 1025,
        lista_azul: 998,
        total: 2023
    }
};

export const mesas = [
    {
        mesa: "MESA 1 (Arba Casa Central)",
        afiliados_votaron: 165,
        sobres: 165,
        diferencia: 0,
        comision_directiva: { lista_blanca: 64, lista_azul: 99, votos_nulos: 1, votos_recurridos: 0, votos_en_blanco: 1 },
        seccionales: { lista_blanca: 64, lista_azul: 99, votos_nulos: 1, votos_recurridos: 0, votos_en_blanco: 1 }
    },
    {
        mesa: "MESA 2 (Arba-Casa Central)",
        afiliados_votaron: 169,
        sobres: 169,
        diferencia: 0,
        comision_directiva: { lista_blanca: 70, lista_azul: 96, votos_nulos: 2, votos_recurridos: 0, votos_en_blanco: 1 },
        seccionales: { lista_blanca: 69, lista_azul: 97, votos_nulos: 2, votos_recurridos: 0, votos_en_blanco: 1 }
    },
    {
        mesa: "MESA 3 (Arba-Casa Central)",
        afiliados_votaron: 156,
        sobres: 156,
        diferencia: 0,
        comision_directiva: { lista_blanca: 60, lista_azul: 96, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 60, lista_azul: 96, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 4 (Arba-Casa Central)",
        afiliados_votaron: 149,
        sobres: 149,
        diferencia: 0,
        comision_directiva: { lista_blanca: 53, lista_azul: 96, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 55, lista_azul: 94, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 5 (CALL Y SCLP)",
        afiliados_votaron: 63,
        sobres: 63,
        diferencia: 0,
        comision_directiva: { lista_blanca: 22, lista_azul: 41, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 22, lista_azul: 41, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 6 (TOLOSA)",
        afiliados_votaron: 70,
        sobres: 70,
        diferencia: 0,
        comision_directiva: { lista_blanca: 30, lista_azul: 40, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 30, lista_azul: 40, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 7 (VOLANTE SEC ARBA)",
        afiliados_votaron: 35,
        sobres: 35,
        diferencia: 0,
        comision_directiva: { lista_blanca: 13, lista_azul: 22, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 12, lista_azul: 23, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 7 (VOLANTE SEC ECONO)",
        afiliados_votaron: 15,
        sobres: 15,
        diferencia: 0,
        comision_directiva: { lista_blanca: 11, lista_azul: 4, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 11, lista_azul: 4, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 8 (Min. De Economía)",
        afiliados_votaron: 67,
        sobres: 67,
        diferencia: 0,
        comision_directiva: { lista_blanca: 41, lista_azul: 26, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 42, lista_azul: 25, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 9 (Min. De Economía)",
        afiliados_votaron: 49,
        sobres: 49,
        diferencia: 0,
        comision_directiva: { lista_blanca: 36, lista_azul: 13, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 36, lista_azul: 13, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 10 (IPLyC)",
        afiliados_votaron: 83,
        sobres: 83,
        diferencia: 0,
        comision_directiva: { lista_blanca: 41, lista_azul: 42, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 40, "lista_azul": 43, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 11 (Reg. Prop.)",
        afiliados_votaron: 92,
        sobres: 92,
        diferencia: 0,
        comision_directiva: { lista_blanca: 42, lista_azul: 50, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 41, lista_azul: 51, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 12 (Reg. Prop.)",
        afiliados_votaron: 75,
        sobres: 75,
        diferencia: 0,
        comision_directiva: { lista_blanca: 29, lista_azul: 46, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 30, lista_azul: 45, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 13 (Azul)",
        afiliados_votaron: 29,
        sobres: 29,
        diferencia: 0,
        comision_directiva: { lista_blanca: 10, lista_azul: 18, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 },
        seccionales: { lista_blanca: 10, lista_azul: 18, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 }
    },
    {
        mesa: "MESA 14 (Bahía Blanca)",
        afiliados_votaron: 53,
        sobres: 53,
        diferencia: 0,
        comision_directiva: { lista_blanca: 28, lista_azul: 24, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 },
        seccionales: { lista_blanca: 28, lista_azul: 24, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 }
    },
    {
        mesa: "MESA 15 (Dolores)",
        afiliados_votaron: 28,
        sobres: 28,
        diferencia: 0,
        comision_directiva: { lista_blanca: 21, lista_azul: 6, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 },
        seccionales: { lista_blanca: 21, lista_azul: 6, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 }
    },
    {
        mesa: "MESA 16 (Junín)",
        afiliados_votaron: 24,
        sobres: 24,
        diferencia: 0,
        comision_directiva: { lista_blanca: 19, lista_azul: 5, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 19, lista_azul: 5, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 17 (Mar del Plata)",
        afiliados_votaron: 65,
        sobres: 65,
        diferencia: 0,
        comision_directiva: { lista_blanca: 54, lista_azul: 11, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 55, lista_azul: 10, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 18 (Mercedes)",
        afiliados_votaron: 23,
        sobres: 23,
        diferencia: 0,
        comision_directiva: { lista_blanca: 20, lista_azul: 2, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 },
        seccionales: { lista_blanca: 20, lista_azul: 2, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 }
    },
    {
        mesa: "MESA 19 (Trenque Lauquen)",
        afiliados_votaron: 15,
        sobres: 15,
        diferencia: 0,
        comision_directiva: { lista_blanca: 7, lista_azul: 8, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 7, lista_azul: 8, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 20 (Avellaneda)",
        afiliados_votaron: 68,
        sobres: 68,
        diferencia: 0,
        comision_directiva: { lista_blanca: 51, lista_azul: 17, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 51, lista_azul: 17, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 21 (CABA)",
        afiliados_votaron: 76,
        sobres: 76,
        diferencia: 0,
        comision_directiva: { lista_blanca: 29, lista_azul: 46, votos_nulos: 1, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 28, lista_azul: 47, votos_nulos: 1, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 22 (Lomas de Zamora)",
        afiliados_votaron: 78,
        sobres: 78,
        diferencia: 0,
        comision_directiva: { lista_blanca: 39, lista_azul: 39, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 39, lista_azul: 39, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 23 (Vicente Lopez)",
        afiliados_votaron: 56,
        sobres: 56,
        diferencia: 0,
        comision_directiva: { lista_blanca: 39, lista_azul: 17, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 39, lista_azul: 17, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 24 (Merlo)",
        afiliados_votaron: 77,
        sobres: 77,
        diferencia: 0,
        comision_directiva: { lista_blanca: 47, lista_azul: 30, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 47, lista_azul: 30, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 25 (Jubilados)",
        afiliados_votaron: 164,
        sobres: 164,
        diferencia: 0,
        comision_directiva: { lista_blanca: 89, lista_azul: 73, votos_nulos: 1, votos_recurridos: 1, votos_en_blanco: 0 },
        seccionales: { lista_blanca: 89, lista_azul: 73, votos_nulos: 1, votos_recurridos: 1, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 26 (Correo - CABA)",
        afiliados_votaron: 93,
        sobres: 93,
        diferencia: 0,
        comision_directiva: { lista_blanca: 60, lista_azul: 31, votos_nulos: 1, votos_recurridos: 0, votos_en_blanco: 1 },
        seccionales: { lista_blanca: 2, lista_azul: 0, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 26 (Correo - INTERIOR)",
        afiliados_votaron: null,
        sobres: null,
        diferencia: null,
        comision_directiva: { lista_blanca: null, lista_azul: null, votos_nulos: null, votos_recurridos: null, votos_en_blanco: null },
        seccionales: { lista_blanca: 40, lista_azul: 27, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 26 (Correo - REGISTRO)",
        afiliados_votaron: null,
        sobres: null,
        diferencia: null,
        comision_directiva: { lista_blanca: null, lista_azul: null, votos_nulos: null, votos_recurridos: null, votos_en_blanco: null },
        seccionales: { lista_blanca: 2, lista_azul: 0, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 0 }
    },
    {
        mesa: "MESA 26 (Correo - JUBILADOS)",
        afiliados_votaron: null,
        sobres: null,
        diferencia: null,
        comision_directiva: { lista_blanca: null, lista_azul: null, votos_nulos: null, votos_recurridos: null, votos_en_blanco: null },
        seccionales: { lista_blanca: 16, lista_azul: 4, votos_nulos: 0, votos_recurridos: 0, votos_en_blanco: 1 }
    }
];
