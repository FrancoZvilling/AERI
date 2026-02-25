export const userData = {
    name: "Juan",
    lastname: "Pérez",
    affiliateNumber: "12.345",
    seniority: "15 años",
    role: "Afiliado Titular",
    status: "Activo",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    lastLogin: "07/01/2026 17:05",
    notifications: 3,
    dependents: [
        { name: "María Alejandra Gómez", dni: "31.444.555", affiliateNumber: "12.345-01" },
        { name: "Mateo Pérez Gómez", dni: "50.111.222", affiliateNumber: "12.345-02" },
        { name: "Sofía Pérez Gómez", dni: "52.333.444", affiliateNumber: "12.345-03" }
    ]
};

export const virtualCardData = {
    cardNumber: "9000 1234 5678 9010",
    validThru: "12/28",
    type: "Classic"
};

export const activeVouchers = [
    {
        id: 1,
        title: "Consulta Clínica",
        description: "Bono para Médico Clínico - Dr. Álvarez",
        code: "MED-2026-CL",
        expiry: "30/01/2026",
        status: "active",
        category: "Salud"
    },
    {
        id: 2,
        title: "Estudio Especializado",
        description: "Bono Radiografía de Tórax",
        code: "RAD-9988-RX",
        expiry: "15/02/2026",
        status: "used",
        category: "Salud"
    },
    {
        id: 3,
        title: "Consulta Especialista",
        description: "Bono para Traumatología",
        code: "MED-2026-TR",
        expiry: "01/03/2026",
        status: "active",
        category: "Salud"
    }
];

export const quickStats = [
    { label: "Consultas", value: "2", trend: "0" }
];
