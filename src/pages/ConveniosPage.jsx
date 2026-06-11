import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, MapPin, ExternalLink, Filter, ChevronRight, 
    HeartPulse, GraduationCap, Plane, Utensils, Star, Building2,
    Dumbbell, Sparkles, PawPrint, BookOpen, ShieldCheck, Home, 
    ShoppingBasket, PartyPopper, ShoppingBag, X, Phone, Mail, Globe,
    Instagram, Facebook, MessageCircle
} from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';

import imgSosba from '../assets/convenios/SOSBA.webp';
import imgBoomer from '../assets/convenios/boomer_studio.webp';
import imgBrewBar from '../assets/convenios/brow_bar.webp';
import imgCavalletti from '../assets/convenios/casa_cavalleti.webp';
import imgCerrajeria from '../assets/convenios/cerrajeria_gente.webp';
import imgChikipatakum from '../assets/convenios/chikipatakum.webp';
import imgClubBell from '../assets/convenios/club_bell.webp';
import imgCalp from '../assets/convenios/colegio_abogados.webp';
import imgCrisoles from '../assets/convenios/crisoles.webp';
import imgD73 from '../assets/convenios/d73_gym.webp';
import imgPatio from '../assets/convenios/el_patio.webp';
import imgEstancia from '../assets/convenios/estancia_guau.webp';
import imgGrandBrizo from '../assets/convenios/grand_brizo.webp';
import imgHernandez from '../assets/convenios/grupo_hernandez.webp';
import imgInfinito from '../assets/convenios/infinito_mas_vos.webp';
import imgOnFit from '../assets/convenios/on_fit.webp';
import imgOrtopedia59 from '../assets/convenios/ortopedia_59.webp';
import imgPapelTec from '../assets/convenios/papel_tec.webp';
import imgRaGym from '../assets/convenios/ra_gimnasio.webp';
import imgSpinelli from '../assets/convenios/spinelli_ortopedia.webp';
import imgPanaderia from '../assets/convenios/panaderia.webp';
import imgCentral from '../assets/convenios/central_empanadas.webp';
import imgGatti from '../assets/convenios/gatti_veterinaria.webp';
import imgJota from '../assets/convenios/jota.webp';
import imgPintorcitos from '../assets/convenios/pintorcitos.webp';
import imgPortofino from '../assets/convenios/porofino.webp';
import imgRayuela from '../assets/convenios/rayuela.webp';
import imgVeraUnas from '../assets/convenios/vera_uñas.webp';
import imgBelleDeco from '../assets/convenios/belle_deco.webp';
import imgCoquitos from '../assets/convenios/cosquitos.webp';
import imgLaBianca from '../assets/convenios/la_bianca.webp';
import imgVuCosmiatria from '../assets/convenios/vu.webp';

// -------------------------------------------------------------
// 1. CATEGORIAS Y MAPEO DE ICONOS
// -------------------------------------------------------------
const CATEGORIAS = [
    { id: 'todos', name: 'Todos', icon: Star },
    { id: 'gimnasios', name: 'Gimnasios y Recreación', icon: Dumbbell },
    { id: 'belleza', name: 'Belleza y Estética', icon: Sparkles },
    { id: 'gastronomia', name: 'Gastronomía', icon: Utensils },
    { id: 'mascotas', name: 'Mascotas', icon: PawPrint },
    { id: 'librerias', name: 'Librerías', icon: BookOpen },
    { id: 'seguros', name: 'Seguros', icon: ShieldCheck },
    { id: 'hogar', name: 'Hogar y Decoración', icon: Home },
    { id: 'alimentos', name: 'Alimentos y Proveeduría', icon: ShoppingBasket },
    { id: 'salud', name: 'Salud y Ortopedia', icon: HeartPulse },
    { id: 'eventos', name: 'Eventos y Entretenimiento', icon: PartyPopper },
    { id: 'compras', name: 'Compras Generales', icon: ShoppingBag }
];

// Helper images for generic placeholders since we don't have images for all 31
const imgMap = {
    gimnasios: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
    belleza: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
    gastronomia: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
    mascotas: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
    librerias: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
    seguros: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
    hogar: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    alimentos: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    salud: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
    eventos: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600",
    compras: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600"
};

// -------------------------------------------------------------
// 2. DATA COMPLETA (31 Convenios)
// -------------------------------------------------------------
const CONVENIOS_DATA = [
    {
        id: 1,
        title: "SOSBA",
        category: "gimnasios",
        discount: "Instalaciones",
        description: "Uso de predio, pileta y salón de fiestas.",
        fullDescription: "El Sindicato Obras Sanitarias (SOSBA) ofrece sus instalaciones con descuento para afiliados AERI.\nEl camping está abierto solo en época de temporada de verano, después se cierra. El salón de fiestas está habilitado todo el año. Reservas al 221-540-2166.",
        location: "Ensenada",
        address: "Predio: 32 E/ 127 Y 128 (Ensenada). Reservas: 48 N 319 e/ 1 y 2 (La Plata)",
        phone: "2215402166",
        image: imgSosba
    },
    {
        id: 2,
        title: "Boomer Studio",
        category: "belleza",
        discount: "15% OFF",
        description: "Esmaltado, podología, perfilado de cejas y lifting.",
        fullDescription: "15% OFF para afiliados de AERI. Servicios: Esmaltado semi y tradicional, Kapping, Soft Gel, Podología, Pedicuría, Diseño y perfilado de cejas, Lifting y tinte de pestañas, Reflexología.",
        location: "La Plata",
        address: "57 e/ 18 y 19 N 1198",
        whatsapp: "5492214287089",
        instagram: "boomer.estudio",
        image: imgBoomer
    },
    {
        id: 3,
        title: "INFINITO MÁS VOS",
        category: "compras",
        discount: "15% OFF",
        description: "Descuento del 15% para afiliados de AERI.",
        fullDescription: "15% de descuento exclusivo para nuestros afiliados y afiliadas (AERI). Comunicate por redes para conocer más de los productos y servicios.",
        location: "Consultar",
        whatsapp: "5492214203740",
        instagram: "infinitomasvos",
        image: imgInfinito
    },
    {
        id: 4,
        title: "Brow Bar",
        category: "gastronomia",
        discount: "15% OFF (Efectivo)",
        description: "Domingos de Bodegón (11am a 16pm).",
        fullDescription: "Domingo de Bodegón. ¡Te esperamos para que disfrutes de nuestros platos! 15% OFF en efectivo para afiliados de AERI. Aclaración: No se cobra servicio de mesa.",
        location: "La Plata",
        address: "Calle 61 e/ 12 y 13",
        whatsapp: "5492213076127",
        image: imgBrewBar
    },
    {
        id: 5,
        title: "Estancia Guau! Hotel Canino",
        category: "mascotas",
        discount: "20% OFF",
        description: "Hotel canino con cámaras 24hs, predio enorme y box exclusivos.",
        fullDescription: "¡Vas a decir GUAU! 20% de descuento para afiliados de AERI. Cuenta con cámaras online 24hs, predio de 20.000m2, box exclusivos de 30m2 con protección térmica y staff altamente calificado.",
        location: "Abasto, La Plata",
        whatsapp: "5492214940001",
        instagram: "estanciaguau",
        image: imgEstancia
    },
    {
        id: 6,
        title: "Grand Brizo La Plata Hotel",
        category: "eventos",
        discount: "Tarifas corporativas",
        description: "Reserva de habitaciones, salones y eventos.",
        fullDescription: "Convenio con precios corporativos para afiliados y afiliadas de AERI aplicables a reservas de habitaciones, salones y eventos.\nCel. Habitaciones: 221-437-5607\nCel. Salones y Eventos: 221-304-3865",
        location: "La Plata",
        address: "Calle 51 N° 715 e/9 y 10",
        phone: "2214375607",
        email: "reservas.lp@grandbrizohoteles.com",
        image: imgGrandBrizo
    },
    {
        id: 7,
        title: "CALP (Colegio de la Abogacía)",
        category: "gimnasios",
        discount: "Tarifa Invitado",
        description: "Uso de las instalaciones de la Casa de Campo y Deportes.",
        fullDescription: "Uso de todas las instalaciones de la Casa de Campo y Deportes 'Alejandro Carlos Larrechart'. Afiliados/as pagan arancel de 'invitados/as'. Descuentos especiales para grupos familiares. Sujeto a cupo y/o reservas. Requisito: presentar credencial de afiliación.\nConsultas y reservas por el salón de fiestas: Damián Lagos 221-656-1174",
        location: "Villa Elisa",
        address: "Calle 436 entre 148 y 150, Villa Elisa",
        phone: "2216561174",
        instagram: "sindicatoaeri",
        website: "https://www.aeri.org.ar",
        image: imgCalp
    },
    {
        id: 8,
        title: "CASA Cavalletti",
        category: "librerias",
        discount: "15% OFF",
        description: "Librería y artículos escolares.",
        fullDescription: "Descuento del 15% para afiliados presentando carnet o recibo de haberes. Válido pagando en efectivo o cuenta DNI. *No acumulable con otras promociones.",
        location: "La Plata",
        address: "Av. 7 711 E/ 46 y 47",
        image: imgCavalletti
    },
    {
        id: 9,
        title: "Cerrajería Gente",
        category: "hogar",
        discount: "10% OFF",
        description: "Descuento en compra de bienes o servicios generales (efectivo).",
        fullDescription: "10% OFF en la compra de cualquier bien o servicio general por pago en efectivo. Horario regular de lunes a sábado de 8am a 5pm, con urgencias las 24hs.",
        location: "La Plata",
        address: "Calle 2 N°616 e/ 44 y 45",
        phone: "2214826723",
        image: imgCerrajeria
    },
    {
        id: 10,
        title: "CHIKIPAKATUM",
        category: "eventos",
        discount: "20% OFF en cuota",
        description: "Espacio musical para niñxs de 6 a 11 años.",
        fullDescription: "Infancias Nonthue. ¡Cantar, jugar y compartir la música! 20% de descuento en la cuota mensual para afiliados. Encuentros semanales los martes de 17:30 a 19 hs.",
        location: "La Plata",
        address: "La Salamanca, 5 Nro 1422 e/ 61 y 62",
        whatsapp: "5492216261122",
        image: imgChikipatakum
    },
    {
        id: 11,
        title: "CLUB BELL FITNESS & COFFEE",
        category: "gimnasios",
        discount: "15% OFF",
        description: "Gimnasio adherido para afiliado/a y grupo familiar primario.",
        fullDescription: "15% de descuento para el afiliado/a y su grupo familiar primario.",
        location: "City Bell",
        address: "Calle 472 N° 473 e/ 14 y 14A",
        phone: "2214089191",
        image: imgClubBell
    },
    {
        id: 12,
        title: "Crisoles Centro de Arte",
        category: "eventos",
        discount: "100% Matrícula",
        description: "20% descuento en actividades y entradas de obras de teatro.",
        fullDescription: "Centro Recreativo Intercultural de Artes - Biblioteca Popular\n• 100% descuento matricula anual en todas actividades\n• 20% actividades culturales y artisticas\n• 20% descuento en entradas para las obras de teatro",
        location: "La Plata",
        address: "1 N° 477 E/ 41 y 42",
        whatsapp: "5492215580207",
        instagram: "CRISOLESLP",
        image: imgCrisoles
    },
    {
        id: 13,
        title: "EL PATIO",
        category: "gastronomia",
        discount: "10% OFF",
        description: "Club de arte, pizza & cerveza.",
        fullDescription: "10% de descuento para nuestros afiliados/as pagando en efectivo, cuenta DNI o MercadoPago.\nEl descuento es en los dias jueves a domingo de 19:00 hs a 23:30 hs.",
        location: "City Bell",
        address: "Calle 12 y 471",
        image: imgPatio
    },
    {
        id: 14,
        title: "RA Gimnasio Adultos Mayores",
        category: "gimnasios",
        discount: "15% OFF (Efectivo)",
        description: "Gimnasio para adultos mayores con sedes en La Plata y City Bell.",
        fullDescription: "15% pagando en efectivo, 10% pagando con transferencia. Sedes: La Plata (Calle 27 e/ 35 y 36 n°173) y City Bell (Calle 467 e/ 15A y 17 n° 1070).",
        location: "La Plata y City Bell",
        whatsapp: "5492215615173",
        image: imgRaGym
    },
    {
        id: 15,
        title: "Grupo Hernández Seguros",
        category: "seguros",
        discount: "Hasta 20% OFF",
        description: "Seguros Rivadavia y La Segunda (Vida, Salud, Hogar, Auto).",
        fullDescription: "Condiciones preferenciales y hasta 20% de descuento (sobre cotización oficial) en contratación de seguros con cualquier medio de pago. ¡Solicitá tu cotización hoy con Fernando!",
        location: "Digital / Telefónico",
        phone: "2215064314",
        image: imgHernandez
    },
    {
        id: 16,
        title: "GYM D73 FITNESS CLUB",
        category: "gimnasios",
        discount: "15% OFF",
        description: "Gimnasio adherido para afiliado/a y grupo familiar.",
        fullDescription: "15% de descuento para el afiliado/a y su grupo familiar primario.",
        location: "La Plata",
        address: "Bv. 82 N° 25 e/ 35 y 36",
        phone: "2214089191",
        image: imgD73
    },
    {
        id: 17,
        title: "ON FIT",
        category: "gimnasios",
        discount: "Tarifa Especial",
        description: "Mes a $33.990. Sin mínimo de permanencia.",
        fullDescription: "¡Tu bienestar empieza ahora! Mes a $33.990 (descuento sobre valor efectivo mensual). Pago por débito automático (Visa/Mastercard bancarizada). Sin mínimo de permanencia. Activá por WhatsApp.",
        location: "Múltiples Sedes",
        whatsapp: "https://wa.me/message/3YOMGHBYK6RCN1",
        image: imgOnFit
    },
    {
        id: 18,
        title: "Ortopedia 59 Técnica",
        category: "salud",
        discount: "15% OFF",
        description: "Descuento abonando en efectivo o débito.",
        fullDescription: "15% de descuento presentando carnet o recibo de haberes. Pago en efectivo o débito. *No acumulable con otras promociones.\nURGENCIAS: 221-459-0346",
        location: "La Plata",
        address: "59 N 1098 esquina 17",
        phone: "2214590346",
        image: imgOrtopedia59
    },
    {
        id: 19,
        title: "Ortopedia Spinelli",
        category: "salud",
        discount: "Hasta 20% OFF",
        description: "Descuentos en productos de fabricación propia y generales.",
        fullDescription: "20% de descuento en productos de fabricación propia y 15% en los demás productos. Aplica con todos los medios de pago.",
        location: "La Plata",
        address: "Calle 59 N°677",
        phone: "02214250125",
        email: "ortopediaspinelli@speedy.com.ar",
        image: imgSpinelli
    },
    {
        id: 20,
        title: "PapelTec",
        category: "librerias",
        discount: "15% OFF",
        description: "Librería, juguetería y regalos.",
        fullDescription: "15% de descuento para afiliados. Requiere presentar carnet o recibo de haberes. Válido pagando en efectivo o cuenta DNI. *No acumulable.",
        location: "La Plata",
        address: "Av. 7 1135 e/ 55 y 56",
        image: imgPapelTec
    },
    {
        id: 21,
        title: "Pintorcitos Kids",
        category: "eventos",
        discount: "Hasta 20% OFF",
        description: "Servicio de alquiler de atriles infantiles.",
        fullDescription: "Servicio de alquiler de atriles.\n20% de descuento de lunes a viernes y 15% sábados y domingos. Válido por pago de contado o MercadoPago.",
        location: "La Plata",
        whatsapp: "5492215991359",
        instagram: "pintorcitoskids.lp",
        image: imgPintorcitos
    },
    {
        id: 22,
        title: "Portofino Restobar",
        category: "gastronomia",
        discount: "15% OFF",
        description: "Válido para el afiliado y un acompañante.",
        fullDescription: "15% de descuento para el afiliado/a y UN acompañante. Válido por pago en efectivo o Cuenta DNI presentando DNI y carnet de afiliado.",
        location: "La Plata",
        address: "Av. 13 esquina 42",
        image: imgPortofino
    },
    {
        id: 23,
        title: "Rayuela Libros",
        category: "librerias",
        discount: "10% OFF",
        description: "Descuento en material de libros y lectura en efectivo.",
        fullDescription: "10% de descuento en material de libros y lectura pagando en efectivo. No incluye manuales en inglés ni textos escolares.",
        location: "La Plata",
        address: "Plaza Italia n° 187 e/ 44 y diagonal 77",
        image: imgRayuela
    },
    {
        id: 24,
        title: "VU (Vera Uñas)",
        category: "belleza",
        discount: "30% OFF",
        description: "Beneficio abonando en efectivo de lunes a miércoles.",
        fullDescription: "30% de descuento para afiliados/as y grupo familiar primario. Abonando en efectivo de lunes a miércoles. Sedes en La Plata y City Bell.",
        location: "La Plata y City Bell",
        address: "Calle 8 N° 616 (LP) / Cantilo y 14 N° 320 PA (City Bell)",
        phone: "2215628490",
        image: imgVeraUnas
    },
    {
        id: 25,
        title: "Veterinaria Gatti",
        category: "mascotas",
        discount: "Hasta 20% OFF",
        description: "Descuentos en vacunas, cirugías y medicamentos.",
        fullDescription: "Tratamientos y vacunas: 20% (efectivo). Cirugías: 10% (Efectivo/QR). Medicamentos: 10% (QR).",
        location: "La Plata",
        address: "Calle 6 N°643",
        phone: "2216196085",
        image: imgGatti
    },
    {
        id: 26,
        title: "Central Pizzas & Empanadas",
        category: "gastronomia",
        discount: "10% OFF",
        description: "Aplica en efectivo, exclusivo en el local.",
        fullDescription: "10% de descuento pagando en efectivo. Descuento exclusivo en local.",
        location: "La Plata",
        address: "Calle 46 N 606 ½ en 7 y 8",
        image: imgCentral
    },
    {
        id: 27,
        title: "JOTA Eventos",
        category: "eventos",
        discount: "Hasta 15% OFF",
        description: "Juegos inflables, pelotero, salón equipado.",
        fullDescription: "15% de descuento de lunes a jueves. 10% los viernes, domingos y feriados. ¡Reserva ahora!",
        location: "La Plata",
        address: "7 n°1756 e/ 68 y 69",
        phone: "2215348635",
        image: imgJota
    },
    {
        id: 28,
        title: "Belldecō Casa de Diseño",
        category: "hogar",
        discount: "10% Adicional",
        description: "Descuento en toda la decoración con cualquier medio de pago.",
        fullDescription: "10% de descuento ADICIONAL para afiliados/as, pagando con cualquier medio de pago.",
        location: "La Plata",
        address: "Plaza Italia y Diagonal 74",
        image: imgBelleDeco
    },
    {
        id: 29,
        title: "Coquito's Natural Market",
        category: "alimentos",
        discount: "20% OFF",
        description: "Tienda Saludable. Descuento abonando en efectivo.",
        fullDescription: "Tienda Saludable. 20% de descuento para afiliados abonando en efectivo.",
        location: "La Plata",
        address: "46 N° 608 entre 7 y 8",
        whatsapp: "5492215083642",
        instagram: "coquitos_zapatilleria",
        image: imgCoquitos
    },
    {
        id: 30,
        title: "La Bianca Pastas Caseras",
        category: "alimentos",
        discount: "15% OFF",
        description: "Descuento de martes a viernes (todos los medios de pago).",
        fullDescription: "15% de descuento válido de martes a viernes con TODAS las formas de pago. Sucursales:\n- Av. 38 e/ 9 y 10 N° 704\n- Calle 57 esq 6 N° 548\n- Diagonal 73 N° 1243 e/ 7 y 8\n- Camino Gral. Belgrano N° 239 (City Bell)\n- Camino Centenario e/ 51 y 52 (Villa Elisa)\n- San Carlos, Chascomús y Los Hornos.",
        location: "Varias Sucursales",
        address: "Múltiples sucursales (ver detalle)",
        image: imgLaBianca
    },
    {
        id: 31,
        title: "Vu Cosmiatría",
        category: "belleza",
        discount: "20% OFF",
        description: "Radiofrecuencia, dermapen, hidraglos, peeling, electroporación, limpieza.",
        fullDescription: "Servicios: Radiofrecuencia, Dermapen, Hidraglos en labios, Peeling primavera, Electroporación, Limpieza con extracción.\nBeneficio para afiliadas/os y grupo familiar primario.\nProfesional a cargo: Patricia Viviana Pizarro (Mat. 20986).\n\nSucursales y WhatsApp:\n- La Plata 1 (Calle 8 N° 616 e/ 44 y 45): 221-562-8490\n- City Bell (Cantilo y 14 N° 320 PA): 221-586-2949\n- La Plata 2 (34 N° 1168): 221-507-7910",
        location: "La Plata y City Bell",
        address: "Múltiples sucursales (Ver detalle)",
        whatsapp: "5492215628490",
        image: imgVuCosmiatria
    },
    {
        id: 32,
        title: "LOS TRIGALES (Panadería y Pastelería)",
        category: "alimentos",
        discount: "Hasta 20% OFF",
        description: "20% OFF en efectivo y 10% OFF con tarjeta/billetera virtual.",
        fullDescription: "Beneficios para afiliados AERI: 20% OFF pagando en efectivo y 10% OFF pagando con tarjeta o billetera virtual. Válido en todos sus productos. Requisito para acceder: Presentar DNI, recibo de sueldo y/o carnet de afiliación.",
        location: "La Plata",
        address: "Calle 10 N° 416 entre 40 y 41",
        phone: "02214215249",
        image: imgPanaderia
    }
];

// -------------------------------------------------------------
// 3. COMPONENTE DE FORMATO VISUAL PARA DESCRIPCIONES
// -------------------------------------------------------------
const FormatDescription = ({ text }) => {
    if (!text) return null;

    const boldKeywords = (str) => {
        const regex = /(\d+% OFF|\d+%|Gratis|Sin cargo|efectivo|Cuenta DNI|MercadoPago|débito|tarjeta|DNI|recibo de sueldo|carnet de afiliación)/gi;
        const parts = str.split(regex);
        return parts.map((part, i) => {
            if (part.match(regex)) {
                return <strong key={i} className="text-[#00a0e1] font-black">{part}</strong>;
            }
            return part;
        });
    };

    const blocks = text.split('\n\n');

    return (
        <div className="space-y-4">
            {blocks.map((block, i) => {
                const lines = block.split('\n');
                
                // If it's a pure list block
                const isList = lines.length > 1 && lines.every(l => l.trim().startsWith('-') || l.trim().startsWith('•'));
                
                if (isList) {
                    return (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                            {lines.map((line, j) => {
                                const cleanLine = line.trim().replace(/^[-•]\s*/, '');
                                return (
                                    <div key={j} className="flex items-start">
                                        <Sparkles className="w-4 h-4 text-[#00a0e1] mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700 leading-snug">{boldKeywords(cleanLine)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }

                return (
                    <div key={i} className="space-y-2">
                        {lines.map((line, j) => {
                            const trimmed = line.trim();
                            
                            // Mixed lists / bullets
                            if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
                                const cleanLine = trimmed.replace(/^[-•]\s*/, '');
                                return (
                                    <div key={j} className="flex items-start ml-2 bg-gray-50/50 rounded-lg p-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00a0e1] mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{boldKeywords(cleanLine)}</span>
                                    </div>
                                );
                            }
                            
                            // Detect headers (ends with colon or contains colon in short text)
                            if (trimmed.includes(':') && trimmed.split(':')[0].length < 45 && !trimmed.startsWith('http')) {
                                const [header, ...rest] = trimmed.split(':');
                                const content = rest.join(':').trim();
                                
                                if (!content) {
                                    return <h5 key={j} className="font-bold text-gray-900 border-b border-gray-200 pb-1 mt-4 mb-2 uppercase text-xs tracking-wider">{header}</h5>;
                                }
                                
                                return (
                                    <div key={j} className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 mt-2 flex flex-col sm:flex-row sm:items-baseline">
                                        <strong className="text-gray-900 sm:mr-2 flex-shrink-0">{header}:</strong> 
                                        <span className="text-gray-700 mt-1 sm:mt-0">{boldKeywords(content)}</span>
                                    </div>
                                );
                            }

                            return (
                                <p key={j} className="text-gray-600 leading-relaxed text-base">
                                    {boldKeywords(trimmed)}
                                </p>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

// -------------------------------------------------------------
// 4. COMPONENTE MODAL DE CONVENIO
// -------------------------------------------------------------
const ConvenioModal = ({ convenio, onClose }) => {
    const [showPhone, setShowPhone] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (convenio) {
            setShowPhone(false);
            setCopied(false);
        }
    }, [convenio]);

    // Cerrar si presiona ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!convenio) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    onClick={(e) => e.stopPropagation()} // Evitar que el clic cierre el modal
                    className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                >
                    {/* Modal Header Image */}
                    <div className="relative h-48 md:h-64 flex-shrink-0">
                        <img src={convenio.image} alt={convenio.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="absolute bottom-4 left-6 right-6">
                            <span className="inline-block bg-[#00a0e1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                                {CATEGORIAS.find(c => c.id === convenio.category)?.name}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">{convenio.title}</h2>
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 md:p-8 overflow-y-auto">
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                            <div>
                                <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Beneficio Exclusivo</h4>
                                <span className="text-xl md:text-2xl font-black text-[#00a0e1]">{convenio.discount}</span>
                            </div>
                            <div className="text-right">
                                <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Ubicación</h4>
                                <div className="flex items-center justify-end text-gray-700 font-medium">
                                    <MapPin className="w-4 h-4 mr-1 text-[#00a0e1]" />
                                    {convenio.location}
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Detalle del Convenio</h3>
                            <FormatDescription text={convenio.fullDescription} />
                            
                            {convenio.address && (
                                <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start">
                                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                                    <div>
                                        <span className="block text-sm font-bold text-gray-700">Dirección</span>
                                        <span className="text-sm text-gray-600">{convenio.address}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                            {convenio.whatsapp && (
                                <a 
                                    href={convenio.whatsapp.startsWith('http') ? convenio.whatsapp : `https://wa.me/${convenio.whatsapp.replace(/\D/g,'')}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors shadow-sm cursor-pointer"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                                </a>
                            )}
                            {convenio.phone && !convenio.whatsapp && (
                                <button 
                                    onClick={(e) => {
                                        if (!showPhone) {
                                            setShowPhone(true);
                                        } else {
                                            navigator.clipboard.writeText(convenio.phone);
                                            setCopied(true);
                                            setTimeout(() => setCopied(false), 2000);
                                        }
                                    }}
                                    className="flex items-center justify-center py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-bold transition-colors shadow-sm cursor-pointer overflow-hidden relative"
                                >
                                    <AnimatePresence mode="wait">
                                        {!showPhone ? (
                                            <motion.div 
                                                key="btn-call"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center"
                                            >
                                                <Phone className="w-5 h-5 mr-2" /> Llamar
                                            </motion.div>
                                        ) : (
                                            <motion.div 
                                                key="btn-number"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center text-sm tracking-wider"
                                            >
                                                {copied ? (
                                                    <span className="text-green-400">¡Copiado!</span>
                                                ) : (
                                                    <>
                                                        <Phone className="w-4 h-4 mr-2 opacity-50" />
                                                        {convenio.phone}
                                                    </>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            )}
                            {convenio.instagram && (
                                <a 
                                    href={`https://instagram.com/${convenio.instagram.replace('@', '')}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center py-3 px-4 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 hover:opacity-90 text-white rounded-xl font-bold transition-opacity shadow-sm cursor-pointer"
                                >
                                    <Instagram className="w-5 h-5 mr-2" /> Instagram
                                </a>
                            )}
                            {convenio.email && (
                                <a 
                                    href={`mailto:${convenio.email}`}
                                    className="flex items-center justify-center py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold transition-colors shadow-sm cursor-pointer"
                                >
                                    <Mail className="w-5 h-5 mr-2" /> Email
                                </a>
                            )}
                            {convenio.website && (
                                <a 
                                    href={convenio.website}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors shadow-sm cursor-pointer"
                                >
                                    <Globe className="w-5 h-5 mr-2" /> Sitio Web
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// -------------------------------------------------------------
// 4. COMPONENTE PRINCIPAL
// -------------------------------------------------------------
const ConveniosPage = () => {
    const [activeCategory, setActiveCategory] = useState('todos');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedConvenio, setSelectedConvenio] = useState(null); // Estado para el modal

    const filteredConvenios = CONVENIOS_DATA.filter(convenio => {
        const matchesCategory = activeCategory === 'todos' || convenio.category === activeCategory;
        const matchesSearch = convenio.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              convenio.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-gray-50 pb-20 min-h-screen font-sans">
            {/* Modal Overlay */}
            <ConvenioModal convenio={selectedConvenio} onClose={() => setSelectedConvenio(null)} />

            <HeroSection
                title="Convenios AERI"
                subtitle="Disfrutá de múltiples descuentos y beneficios exclusivos pensados para vos y tu familia en toda la provincia."
                backgroundColor="#00a0e1"
                overlayOpacity="bg-black/30"
                backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                {/* Search Header */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12"
                >
                    <div className="relative flex-grow max-w-full">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:border-[#00a0e1] focus:ring-2 focus:ring-[#00a0e1]/20 transition-all text-lg shadow-sm"
                            placeholder="Buscar por nombre, rubro o beneficio..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Categories Pills */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {CATEGORIAS.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`cursor-pointer flex items-center px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                                    activeCategory === cat.id
                                        ? 'bg-[#00a0e1] text-white shadow-[#00a0e1]/30 transform scale-105'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-[#00a0e1]'
                                }`}
                            >
                                <cat.icon className={`w-4 h-4 mr-2 ${activeCategory === cat.id ? 'text-white' : 'text-gray-400'}`} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Convenios Grid */}
                <div className="mb-12">
                    {filteredConvenios.length > 0 ? (
                        <motion.div 
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence>
                                {filteredConvenios.map((convenio) => (
                                    <motion.div
                                        key={convenio.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setSelectedConvenio(convenio)}
                                        className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                                    >
                                        <div className="relative h-56 overflow-hidden">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10 duration-500"></div>
                                            <img 
                                                src={convenio.image} 
                                                alt={convenio.title} 
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="bg-[#004080] text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-lg tracking-wide uppercase">
                                                    {CATEGORIAS.find(c => c.id === convenio.category)?.name}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-4 right-4 z-20">
                                                <span className="bg-[#00a0e1] text-white font-bold px-4 py-2 rounded-xl shadow-lg flex items-center">
                                                    {convenio.discount}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a0e1] transition-colors">{convenio.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{convenio.description}</p>
                                            
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                                <div className="flex items-center text-gray-500 text-xs font-medium">
                                                    <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                                                    {convenio.location}
                                                </div>
                                                <button className="cursor-pointer flex items-center justify-center px-4 py-2 rounded-full bg-gray-50 text-[#00a0e1] group-hover:bg-[#00a0e1] group-hover:text-white transition-colors text-sm font-bold">
                                                    Ver Beneficio
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron convenios</h3>
                            <p className="text-gray-500">Probá ajustando los filtros o tu búsqueda.</p>
                            <button 
                                onClick={() => { setSearchTerm(''); setActiveCategory('todos'); }}
                                className="cursor-pointer mt-6 text-[#00a0e1] font-bold hover:underline"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    )}
                </div>

                {/* Call To Action Block */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-[#004080] to-[#023e73] rounded-[3rem] p-10 md:p-14 text-white text-center relative overflow-hidden shadow-2xl mt-20"
                >
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00a0e1 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <Building2 className="w-16 h-16 text-[#00a0e1] mb-6" />
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">¿Tenés un comercio y querés sumarte a la red AERI?</h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Buscamos constantemente expandir nuestros beneficios. Si querés proponer un convenio o sumar tu comercio, ponete en contacto con nuestra Secretaría de Acción Social.
                        </p>
                        <a 
                            href="mailto:accionsocial@aeri.org.ar" 
                            className="bg-[#00a0e1] hover:bg-[#39c3ef] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-[#00a0e1]/50 flex items-center group cursor-pointer"
                        >
                            <ExternalLink className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                            Proponer un Convenio
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ConveniosPage;
