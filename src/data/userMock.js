export const userData = {
    name: "Juan",
    lastname: "Pérez",
    affiliateNumber: "12.345",
    seniority: "15 años",
    role: "Afiliado Titular",
    status: "Activo",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    lastLogin: "07/01/2026 17:05",
    notifications: 3
};

export const virtualCardData = {
    cardNumber: "9000 1234 5678 9010",
    validThru: "12/28",
    type: "Classic"
};

export const activeVouchers = [
    {
        id: 1,
        title: "Descuento Farmacia",
        description: "30% off en farmacias adheridas",
        code: "FARM-2026",
        expiry: "30/01/2026",
        status: "active",
        category: "Salud"
    },
    {
        id: 2,
        title: "Turismo AERI",
        description: "Reserva confirmada - Hotel del Sol",
        code: "TRSM-9988",
        expiry: "15/02/2026",
        status: "used",
        category: "Turismo"
    },
    {
        id: 3,
        title: "Kit Escolar",
        description: "Voucher para retiro de kit escolar",
        code: "ESC-2026-AB",
        expiry: "01/03/2026",
        status: "active",
        category: "Beneficio"
    }
];

export const quickStats = [
    { label: "Ahorro Total", value: "$45.000", trend: "+12%" },
    { label: "Consultas", value: "2", trend: "0" },
    { label: "Puntos AERI", value: "1.250", trend: "+50" }
];
