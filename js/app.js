/**
 * ==============================================================================
 * KODIAK FORCELAB — MOTOR PRINCIPAL DE LA APLICACIÓN WEB (ES6+ VANILLA JS)
 * Plataforma: Kodiak ForceLab Commercial E-Commerce Platform
 * Dirección Técnica: Gabriel Zaul Hazim Martínez (Kodiak)
 * 
 * ARQUITECTURA DE CLIENTE:
 * - Catálogo extendido de Alto Rendimiento: Suplementos, Lucha de Brazos,
 *   Streetlifting, Cinturones de Lastre, Anillas y Mancuernas.
 * - Motor de Estado Local Reactivo sincronizado con localStorage.
 * - Audio Sintetizado por Web Audio API (Feedback háptico al interactuar).
 * - Algoritmo de filtrado multifactorial (texto, categorías, precio, orden).
 * - Pasarela de pago multi-método con emisión de Factura Fiscal y Código QR en SVG.
 * ==============================================================================
 */

// Tasa de cambio oficial del Banco Central de Venezuela (BCV)
let BCV_EXCHANGE_RATE = 871.37; // Respaldo oficial verificado
window.BCV_EXCHANGE_RATE = BCV_EXCHANGE_RATE;

/**
 * Conexión reactiva a la API oficial de DolarAPI / BCV en tiempo real
 */
async function fetchLiveBcvRate() {
  try {
    const res = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
    if (res.ok) {
      const data = await res.json();
      if (data && data.promedio) {
        BCV_EXCHANGE_RATE = parseFloat(data.promedio);
        window.BCV_EXCHANGE_RATE = BCV_EXCHANGE_RATE;
        console.log(`[BCV API] Tasa oficial BCV sincronizada en vivo: Bs. ${BCV_EXCHANGE_RATE}`);

        // Actualizar ticker superior
        const tickerEl = document.getElementById('bcvTickerSlot');
        if (tickerEl) {
          tickerEl.innerHTML = `
            <span class="stock-pulse-dot"></span>
            <span>BCV Oficial: <strong>Bs. ${BCV_EXCHANGE_RATE.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></span>
            <span class="badge bg-success bg-opacity-25 text-success ms-1" style="font-size: 0.65rem;">API EN VIVO</span>
          `;
        }

        // Si la tienda ya está inicializada, refrescar catálogo y carrito
        if (window.kodiakStore) {
          window.kodiakStore.filterCatalog();
          window.kodiakStore.renderCartUI();
        }
      }
    }
  } catch (err) {
    console.log('[BCV API] Modo local/offline. Manteniendo tasa de respaldo oficial:', BCV_EXCHANGE_RATE);
    const tickerEl = document.getElementById('bcvTickerSlot');
    if (tickerEl) {
      tickerEl.innerHTML = `
        <span class="stock-pulse-dot"></span>
        <span>BCV Oficial: <strong>Bs. ${BCV_EXCHANGE_RATE.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></span>
        <span class="badge bg-secondary bg-opacity-50 text-white ms-1" style="font-size: 0.65rem;">BCV OFICIAL</span>
      `;
    }
  }
}

// Disparar sincronización inmediata
fetchLiveBcvRate();

// CATÁLOGO OFICIAL KODIAK FORCELAB (14 PRODUCTOS DE GRADO PROFESIONAL)
const KODIAK_CATALOG = [
  // --- 1. LUCHA DE BRAZOS & AGARRE (ARMWRESTLING) ---
  {
    id: 1,
    name: 'Correas Profesionales de Armwrestling Kodiak Pro',
    category: 'armwrestling',
    price: 35.00,
    rating: 5.0,
    reviews: 94,
    badge: 'BESTSELLER OFICIAL',
    image: 'assets/images/strap_armwrestling.jpg',
    shortDesc: 'Correa oficial de competición con triple costura balística y hebilla inoxidable.',
    specs: [
      'Resistencia a tracción: 500 kg',
      'Material: Nylon balístico militar 1000D',
      'Hebilla: Aleación de zinc inoxidable 38mm',
      'Longitud: 110 cm x 3.8 cm calibrada'
    ],
    material: 'Nylon Balístico 1000D + Zinc',
    maxLoad: '500 kg de tensión directa',
    warranty: '2 Años de Garantía Estructural',
    stock: 24
  },
  {
    id: 2,
    name: 'Pronator Handle Biomecánico 60mm',
    category: 'armwrestling',
    price: 45.00,
    rating: 5.0,
    reviews: 68,
    badge: 'KODIAK LAB',
    image: 'assets/images/pronator_handle.jpg',
    shortDesc: 'Mango cónico excéntrico para hipertrofia del pronador redondo y palancas de muñeca.',
    specs: [
      'Diámetro cónico: 60 mm a 45 mm',
      'Acople: Mosquetón de acero templado',
      'Textura: Moleteado en espiral antideslizante',
      'Compatibilidad: Poleas y discos olímpicos'
    ],
    material: 'Polímero de Alta Densidad + Acero',
    maxLoad: '180 kg en tracción isométrica',
    warranty: '2 Años de Garantía',
    stock: 16
  },
  {
    id: 3,
    name: 'Fat Gripz / Rolling Adapter 60mm',
    category: 'armwrestling',
    price: 24.00,
    rating: 4.9,
    reviews: 52,
    badge: 'AGARRE GRUESO',
    image: 'assets/images/fat_gripz_cone.jpg',
    shortDesc: 'Adaptador de agarre grueso para convertir cualquier barra o mancuerna estándar en eje de 60mm.',
    specs: [
      'Diámetro exterior: 60 mm (2.36")',
      'Longitud: 125 mm apto para toda mancuerna',
      'Compuesto: Caucho militar de alta densidad',
      'Apertura: Hendidura ergonómica de colocación rápida'
    ],
    material: 'Compuesto Elastomérico Vulcanizado',
    maxLoad: 'Indestructible bajo compresión',
    warranty: 'Garantía de por Vida',
    stock: 30
  },

  // --- 2. STREETLIFTING & CALISTENIA DE PESO ---
  {
    id: 4,
    name: 'Cinturón de Lastre de Streetlifting Pro 300kg',
    category: 'streetlifting',
    price: 55.00,
    rating: 5.0,
    reviews: 81,
    badge: 'CARGA EXTREMA',
    image: 'assets/images/dip_belt_streetlifting.jpg',
    shortDesc: 'Cinturón ergonómico para fondos y dominadas con cadena de acero Grado 80 certificada.',
    specs: [
      'Capacidad de carga: 300 kg (660 lbs)',
      'Cadena: Acero templado soldado de 100 cm',
      'Soporte lumbar: 16 cm de ancho acolchado',
      'Mosquetón: Grado náutico con rosca de seguridad'
    ],
    material: 'Cordura 1000D + Acero Grado 80',
    maxLoad: '300 kg de lastre suspendido',
    warranty: '3 Años de Garantía',
    stock: 19
  },
  {
    id: 5,
    name: 'Anillas Olímpicas en Madera de Abedul 32mm',
    category: 'streetlifting',
    price: 48.00,
    rating: 4.9,
    reviews: 64,
    badge: 'ESTÁNDAR FIG',
    image: 'assets/images/gymnastics_rings.jpg',
    shortDesc: 'Anillas de madera noble de abedul báltico pulidas a mano con correas numeradas de 4.5m.',
    specs: [
      'Diámetro de agarre: 32 mm oficial FIG',
      'Correas: Nylon balístico de 4.5 metros con marcas',
      'Hebillas: Aleación de aluminio de cierre instantáneo',
      'Tracción por correa: 450 kg'
    ],
    material: 'Madera de Abedul Macizo + Nylon',
    maxLoad: '450 kg por correa',
    warranty: '2 Años de Garantía',
    stock: 22
  },

  // --- 3. FUERZA, MANCUERNAS & POWERLIFTING ---
  {
    id: 6,
    name: 'Mancuerna Ajustable C.P. Force 24kg',
    category: 'fuerza',
    price: 185.00,
    rating: 4.9,
    reviews: 42,
    badge: 'SELECTOR RÁPIDO',
    image: 'assets/images/dumbbell_force.jpg',
    shortDesc: 'Sistema selector de dial rotatorio que reemplaza 15 pares de mancuernas convencionales.',
    specs: [
      'Rango: 2.5 kg a 24 kg por mancuerna',
      'Mecanismo: Engranajes de acero al carbono micrométricos',
      'Empuñadura: Moleteado antideslizante cromado',
      'Incrementos: 15 ajustes mecánicos precisos'
    ],
    material: 'Acero al Carbono y Discos Engomados',
    maxLoad: '24 kg / 52.9 lbs',
    warranty: '3 Años de Garantía',
    stock: 12
  },
  {
    id: 7,
    name: 'Par de Mancuernas Hexagonales Engomadas 20kg',
    category: 'fuerza',
    price: 135.00,
    rating: 5.0,
    reviews: 38,
    badge: 'PAR COMPLETO',
    image: 'assets/images/dumbbell_hex_pair.jpg',
    shortDesc: 'Par de mancuernas de fundición monobloque con revestimiento de uretano virgen de alta densidad.',
    specs: [
      'Peso del set: 20 kg + 20 kg (40 kg total)',
      'Mango: Agarre ergonómico cromado de 34mm',
      'Cabezales: Hexagonales antivuelco con números grabados',
      'Absorción de impacto: Caucho virgen vulcanizado'
    ],
    material: 'Fundición de Hierro + Uretano',
    maxLoad: '40 kg en total',
    warranty: '5 Años de Garantía',
    stock: 14
  },
  {
    id: 8,
    name: 'Kettlebell de Competición 24kg Acero',
    category: 'fuerza',
    price: 95.00,
    rating: 4.8,
    reviews: 31,
    badge: 'CALIBRADA GIREVOY',
    image: 'assets/images/kettlebell_comp.jpg',
    shortDesc: 'Pesa rusa de acero monobloque con núcleo hueco y asa lisa pulida de 35mm para balance inercial.',
    specs: [
      'Peso exacto: 24 kg ± 0.1% de tolerancia',
      'Diámetro de asa: 35 mm estándar internacional',
      'Dimensiones: Uniformes en todas las cargas',
      'Color: Azul oficial Girevoy Sport'
    ],
    material: 'Acero Fundido Hueco Monobloque',
    maxLoad: '24 kg calibrado',
    warranty: 'Garantía de por Vida',
    stock: 18
  },
  {
    id: 9,
    name: 'Cinturón de Powerlifting de Palanca 10mm',
    category: 'fuerza',
    price: 110.00,
    rating: 5.0,
    reviews: 58,
    badge: 'TITANIUM LEVER',
    image: 'assets/images/lever_belt.jpg',
    shortDesc: 'Cuero genuino vacuno multicapa de 10mm con hebilla de palanca de bloqueo instantáneo.',
    specs: [
      'Grosor: 10 mm calibrado reglamentario',
      'Ancho: 4 pulgadas (10 cm) uniforme en todo el contorno',
      'Palanca: Aleación de titanio y magnesio pulida',
      'Costura: 6 hileras de hilo de nylon de alta resistencia'
    ],
    material: 'Cuero Genuino Vacuno + Titanio',
    maxLoad: 'Soporte ilimitado de presión intraabdominal',
    warranty: '5 Años de Garantía',
    sizes: ['S (65-80cm)', 'M (75-95cm)', 'L (90-110cm)', 'XL (105-125cm)'],
    defaultSize: 'M (75-95cm)',
    stock: 11
  },

  // --- 4. SUPLEMENTACIÓN DEPORTIVA BIOMECÁNICA ---
  {
    id: 10,
    name: 'Creatina Monohidrato Creapure® 500g',
    category: 'suplementos',
    price: 38.00,
    rating: 4.9,
    reviews: 142,
    badge: '100% PURA',
    image: 'assets/images/creatine_creapure.jpg',
    shortDesc: 'Sello Creapure® de manufactura alemana micronizada para resíntesis inmediata de fosfocreatina.',
    specs: [
      'Porciones: 100 servicios de 5g',
      'Pureza: > 99.99% HPLC verificada por lote',
      'Solubilidad: Ultra-micronizada malla 200 sin sedimentos',
      'Origen: Trostberg, Alemania'
    ],
    material: 'Creatina Monohidrato Grado Farmacéutico',
    maxLoad: 'N/A (Suplemento de Fuerza y Potencia)',
    warranty: 'Lote Certificado con QR',
    stock: 55
  },
  {
    id: 11,
    name: 'Proteína 100% Whey Isolate Hidrolizada 2kg',
    category: 'suplementos',
    price: 68.00,
    rating: 4.9,
    reviews: 97,
    badge: 'HYDRO WHEY',
    image: 'assets/images/whey_isolate.jpg',
    shortDesc: 'Aislado de suero lácteo microfiltrado por flujo cruzado (CFM) con 27g de proteína por servicio.',
    specs: [
      'Proteína neta: 27g por porción de 30g (90% concentración)',
      'BCAAs: 6.5g de aminoácidos ramificados',
      'Carbohidratos / Azúcar: 0g azúcar, < 0.5g carbohidratos',
      'Peso neto: 2000g (66 servicios completos)'
    ],
    material: 'Aislado de Suero Hidrolizado CFM',
    maxLoad: 'N/A (Nutrición Anabólica Pura)',
    warranty: 'Análisis de Laboratorio Certificado',
    stock: 40
  },
  {
    id: 12,
    name: 'Beta-Alanina CarnoSyn® 300g',
    category: 'suplementos',
    price: 26.00,
    rating: 4.8,
    reviews: 48,
    badge: 'BUFFER LÁCTICO',
    image: 'assets/images/beta_alanine.jpg',
    shortDesc: 'Patente CarnoSyn® para máxima síntesis de carnosina intramuscular y retardo de fatiga neuromuscular.',
    specs: [
      'Dosis por porción: 3200 mg de Beta-Alanina pura',
      'Rendimiento: 93 servicios por envase',
      'Efecto fisiológico: Aumento de la capacidad buffer ácida',
      'Sin sabor: Ideal para combinar con pre-entrenos o creatina'
    ],
    material: 'Beta-Alanina Pura CarnoSyn Grado USP',
    maxLoad: 'N/A (Tamponador Metabólico)',
    warranty: 'Sello de Patente Oficial',
    stock: 35
  },

  // --- 5. MUÑEQUERAS, SOPORTES & ACCESORIOS ---
  {
    id: 13,
    name: 'Muñequeras Heavy Duty Titan 24"',
    category: 'accesorios',
    price: 28.00,
    rating: 5.0,
    reviews: 86,
    badge: 'IPF COMPLIANT',
    image: 'assets/images/wrist_wraps.jpg',
    shortDesc: 'Soporte articular rígido de máxima compresión para cargas masivas en press banca y sentadilla.',
    specs: [
      'Longitud: 24 pulgadas (60 cm) con lazo elástico para pulgar',
      'Velcro: Grado aeroespacial 50mm de doble fijación',
      'Rigidez: Nivel 3 (Compresión pesada de levantamiento)',
      'Cumplimiento: Homologada para torneos de powerlifting'
    ],
    material: 'Elastano y Algodón Reforzado de Alta Tensión',
    maxLoad: 'Soporte articular sin límite',
    warranty: '1 Año de Garantía',
    sizes: ['18" (45cm)', '24" (60cm)', '36" (90cm)'],
    defaultSize: '24" (60cm)',
    stock: 45
  },
  {
    id: 14,
    name: 'Magnesio Líquido Antideslizante 250ml',
    category: 'accesorios',
    price: 15.00,
    rating: 4.8,
    reviews: 77,
    badge: 'ZERO SLIP',
    image: 'assets/images/liquid_chalk.jpg',
    shortDesc: 'Fórmula de carbonato de magnesio con base de secado ultra rápido en 15 segundos sin generar polvo.',
    specs: [
      'Volumen: 250 ml (aproximadamente 150 aplicaciones)',
      'Base: Alcohol isopropílico de evaporación instantánea',
      'Efecto: Agarre seco durante toda la sesión de levantamiento',
      'Higiene: Libre de manchas en ropa y equipamiento'
    ],
    material: 'Carbonato de Magnesio Grado USP',
    maxLoad: 'N/A (Fricción y Adherencia Dérmica)',
    warranty: 'Garantía de Satisfacción',
    stock: 60
  },

  // --- 6. MODELO 3D VINCULADO: DISCO BUMPER OLÍMPICO ---
  {
    id: 15,
    name: 'Disco Olímpico Bumper Calibrado 20kg',
    category: 'fuerza',
    price: 85.00,
    rating: 5.0,
    reviews: 42,
    badge: 'CALIBRADO IPF',
    image: 'assets/images/plate_20kg.jpg',
    shortDesc: 'Disco de uretano virgen de competición con buje central de acero inoxidable de 50.4mm y tolerancia de ±10g.',
    specs: [
      'Tolerancia de peso: ± 10 gramos calibrado',
      'Diámetro exterior: 450 mm estándar oficial IWF',
      'Grosor del disco: 54 mm perfil estrecho de carga masiva',
      'Propiedad de rebote: Rebote muerto inferior a 0.5m'
    ],
    material: 'Uretano Virgen de Alta Densidad + Acero Inoxidable',
    maxLoad: '20 kg certificado para barra olímpica de 20kg',
    warranty: '5 Años de Garantía de Impacto',
    stock: 20
  },

  // --- 7. INDUMENTARIA & CALZADO DEPORTIVO DE ALTO RENDIMIENTO ---
  {
    id: 16,
    name: 'Camiseta Oversized Kodiak Heavyweight 280 GSM',
    category: 'ropa',
    price: 34.00,
    rating: 4.9,
    reviews: 67,
    badge: 'HEAVYWEIGHT 280G',
    image: 'assets/images/apparel_tshirt.jpg',
    shortDesc: 'Algodón peinado premium de 280 g/m² con corte estructurado drop-shoulder para streetlifting y fuerza.',
    specs: [
      'Gramaje del tejido: 280 GSM de alta densidad',
      'Patrón de corte: Oversized Drop-Shoulder ergonómico',
      'Cuello: Ribete elástico de 3 cm antidealargamiento',
      'Resistencia: Costura doble en hombros y sisa para fricción de barras'
    ],
    material: '100% Algodón Peinado Ringspun',
    maxLoad: 'Resistente a fricción mecánica de moleteado y tiza',
    warranty: 'Garantía de Durabilidad Textil',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    defaultSize: 'L',
    stock: 35
  },
  {
    id: 17,
    name: 'Pantalón Jogger Táctico Kodiak Pro 4-Way Stretch',
    category: 'ropa',
    price: 48.00,
    rating: 4.9,
    reviews: 53,
    badge: '4-WAY STRETCH',
    image: 'assets/images/apparel_jogger.jpg',
    shortDesc: 'Tejido técnico ripstop ultraelástico con refuerzo en entrepierna y cremalleras YKK termoselladas.',
    specs: [
      'Elasticidad: 4-Way Stretch con rango libre de sentadilla profunda',
      'Bolsillos: 2 laterales con cremallera YKK impermeable',
      'Cintura: Cordón interno con elástico de compresión de 50mm',
      'Tobillos: Puños cónicos ajustados anti-atrapamiento'
    ],
    material: '88% Poliamida Técnica + 12% Spandex',
    maxLoad: '100% elasticidad sin deformación estructural',
    warranty: '1 Año de Garantía de Confección',
    sizes: ['S', 'M', 'L', 'XL'],
    defaultSize: 'M',
    stock: 28
  },
  {
    id: 18,
    name: 'Calzado de Levantamiento Kodiak Zero-Drop Barefoot',
    category: 'ropa',
    price: 75.00,
    rating: 5.0,
    reviews: 81,
    badge: 'ZERO DROP SOLE',
    image: 'assets/images/shoes_lifting.jpg',
    shortDesc: 'Zapatillas de suela plana de 3mm de caucho vulcanizado para máxima transferencia de fuerza en peso muerto.',
    specs: [
      'Perfil de suela: 3 mm Zero-Drop de contacto total con la plataforma',
      'Tracción: Patrón de microranuras hexagonales antideslizantes',
      'Ajuste: Doble correa de velcro en empeine con compresión metatarsal',
      'Puntera: Diseño Wide Toe Box para dispersión anatómica de dedos'
    ],
    material: 'Malla Balística Transpirable + Caucho Vulcanizado',
    maxLoad: 'Transferencia directa de fuerza sin amortiguación inestable',
    warranty: '2 Años de Garantía de Suela',
    sizes: ['40 EU', '41 EU', '42 EU', '43 EU', '44 EU', '45 EU'],
    defaultSize: '42 EU',
    stock: 22
  },

  // --- 8. EQUIPAMIENTO DE TRANSPORTE E HIDRATACIÓN ---
  {
    id: 19,
    name: 'Bolso Duffle Táctico Kodiak ForceLab 45L',
    category: 'accesorios',
    price: 58.00,
    rating: 4.9,
    reviews: 46,
    badge: 'CORDURA 1000D',
    image: 'assets/images/bag_duffle.jpg',
    shortDesc: 'Bolso de entrenamiento impermeable con túnel ventilado para zapatillas y correas externas para cinturón de palanca.',
    specs: [
      'Capacidad: 45 Litros con compartimento independiente para calzado',
      'Tejido: Cordura militar 1000D repelente al agua y cortes abrasivos',
      'Sujeción externa: Hebillas de compresión para cinturón de powerlifting',
      'Herrajes: Tiradores reforzados y cremalleras estancas de doble sentido'
    ],
    material: 'Cordura Militar 1000D Impermeable',
    maxLoad: 'Capacidad certificada de hasta 40 kg de equipamiento',
    warranty: '3 Años de Garantía Estructural',
    sizes: ['35 Litros (Compacto)', '45 Litros (Estándar)', '60 Litros (Competición)'],
    defaultSize: '45 Litros (Estándar)',
    stock: 19
  },
  {
    id: 20,
    name: 'Termo Cooler de Acero Inoxidable 1.5L Kodiak Hydro',
    category: 'accesorios',
    price: 28.00,
    rating: 4.8,
    reviews: 64,
    badge: '24H FRÍO EXT.',
    image: 'assets/images/cooler_thermo.jpg',
    shortDesc: 'Botellón térmico con aislamiento al vacío de triple capa que mantiene el agua helada hasta 24 horas continuas.',
    specs: [
      'Capacidad neta: 1500 ml (1.5 Litros / 50 oz)',
      'Retención de temperatura: 24h Frío / 12h Calor',
      'Boquilla: Tapa deportiva de flujo rápido libre de goteo hermética',
      'Base: Bota de silicona antigolpes removible para gimnasio'
    ],
    material: 'Acero Inoxidable Quirúrgico 18/8 (BPA Free)',
    maxLoad: 'Hermético y resistente a impactos mecánicos',
    warranty: 'Garantía Térmica de por Vida',
    sizes: ['1.0L (32 oz)', '1.5L (50 oz)', '2.2L (74 oz Galón)'],
    defaultSize: '1.5L (50 oz)',
    stock: 40
  }
];

/**
 * CLASE PRINCIPAL DEL SISTEMA WEB (KODIAK FORCELAB)
 */
class KodiakApp {
  constructor() {
    this.cartKey = 'kodiak_cart_items';
    this.compareKey = 'kodiak_compare_items';
    this.appliedDiscount = 0;
    this.activeCouponCode = '';
    this.selectedSizes = {};

    this.cart = this.loadCart();
    this.compareList = this.loadCompareList();

    this.zoomEngine = null;
    this.hero3DViewer = null;

    this.initAudioContext();
    this.init();
  }

  init() {
    this.renderCatalog(KODIAK_CATALOG);
    this.renderCartUI();
    this.updateCompareBadge();
    this.setupEventListeners();
    this.setupPaymentTabs();
    this.initZoomEngine();
    this.initHero3DViewer();
    this.update3DQuickBuyCard('dumbbell');
    this.setupCreditCardLivePreview();

    // Inicializar simulador de Google Auth
    window.kodiakAuth = new GoogleAuthSimulator();
  }

  /**
   * Sintetizador de audio sutil nativo con Web Audio API (Cero dependencias)
   */
  initAudioContext() {
    this.audioCtx = null;
  }

  playHapticTone(type = 'click') {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'click') {
        osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.08);
      } else if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, this.audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, this.audioCtx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, this.audioCtx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.35);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.35);
      }
    } catch (e) {
      // Audio silencioso en entornos restringidos
    }
  }

  // =========================================================================
  // PERSISTENCIA LOCAL (localStorage)
  // =========================================================================
  loadCart() {
    try {
      const saved = localStorage.getItem(this.cartKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    } catch (e) {
      console.error('Error al guardar carrito', e);
    }
    this.renderCartUI();
  }

  loadCompareList() {
    try {
      const saved = localStorage.getItem(this.compareKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCompareList() {
    try {
      localStorage.setItem(this.compareKey, JSON.stringify(this.compareList));
    } catch (e) {
      console.error('Error al guardar comparador', e);
    }
    this.updateCompareBadge();
  }

  // =========================================================================
  // RENDERIZADO DEL CATÁLOGO (<section id="catalogo">)
  // =========================================================================
  renderCatalog(products) {
    const container = document.getElementById('productGrid');
    if (!container) return;

    // Actualizar contador reactivo
    const countEl = document.getElementById('filterResultCount');
    if (countEl) {
      countEl.textContent = `Mostrando ${products.length} de ${KODIAK_CATALOG.length} productos`;
    }

    if (products.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-box-open fa-3x text-secondary mb-3"></i>
          <h4 class="text-white">No se encontraron productos con estos filtros</h4>
          <p class="text-secondary small">Prueba restablecer el rango de precio, calificación o la búsqueda.</p>
          <button class="btn btn-outline-success btn-sm mt-2 px-3" onclick="window.kodiakStore.resetAllFilters()">
            <i class="fa-solid fa-rotate-left me-1"></i> Restablecer Filtros
          </button>
        </div>
      `;
      return;
    }

    const CAT_LABELS = {
      armwrestling: 'Lucha de Brazos',
      streetlifting: 'Streetlifting',
      fuerza: 'Fuerza & Mancuernas',
      suplementos: 'Suplementación Pura',
      ropa: 'Indumentaria & Calzado',
      accesorios: 'Muñequeras & Grips'
    };

    container.innerHTML = products.map(prod => {
      const priceBsFormatted = (prod.price * BCV_EXCHANGE_RATE).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const isComparing = this.compareList.includes(prod.id);
      const catLabel = CAT_LABELS[prod.category] || prod.category;
      const isLowStock = prod.stock < 15;

      // Generar fila visual de estrellas doradas
      const fullStars = Math.floor(prod.rating);
      const hasHalfStar = (prod.rating % 1) >= 0.5;
      let starsHtml = '';
      for (let s = 1; s <= 5; s++) {
        if (s <= fullStars) {
          starsHtml += '<i class="fa-solid fa-star text-warning" style="font-size: 0.72rem;"></i>';
        } else if (s === fullStars + 1 && hasHalfStar) {
          starsHtml += '<i class="fa-solid fa-star-half-stroke text-warning" style="font-size: 0.72rem;"></i>';
        } else {
          starsHtml += '<i class="fa-regular fa-star text-secondary" style="font-size: 0.72rem;"></i>';
        }
      }

      // Selector de Tallas si aplica
      let sizeSelectorHtml = '';
      if (prod.sizes && prod.sizes.length > 0) {
        if (!this.selectedSizes[prod.id]) {
          this.selectedSizes[prod.id] = prod.defaultSize || prod.sizes[0];
        }
        const currentSize = this.selectedSizes[prod.id];
        sizeSelectorHtml = `
          <div class="product-size-box mb-2">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <span class="text-secondary text-uppercase fw-bold" style="font-size: 0.68rem; letter-spacing: 0.5px;">
                <i class="fa-solid fa-ruler-horizontal me-1 text-info"></i>Talla / Medida:
              </span>
              <span class="badge bg-dark border border-secondary text-info px-2 py-0 selected-size-label" style="font-size: 0.7rem;">
                ${currentSize}
              </span>
            </div>
            <div class="d-flex flex-wrap gap-1">
              ${prod.sizes.map(sz => `
                <button type="button" 
                        class="size-pill-btn ${sz === currentSize ? 'active' : ''}" 
                        data-size="${sz}"
                        onclick="window.kodiakStore.selectProductSize(${prod.id}, '${sz}', event)">
                  ${sz}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="col-md-6 col-lg-4 mb-4">
          <article class="product-card" data-product-id="${prod.id}">
            <div class="product-img-box" onclick="window.kodiakStore.openZoomModal(${prod.id})" title="Click para ver inspección y Zoom Mercado Libre">
              <span class="product-badge">${prod.badge}</span>
              <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.onerror=null; this.src=this.src.replace('.jpg', '.svg');">
            </div>

            <div class="p-3 d-flex flex-column flex-grow-1">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="product-category-tag tag-${prod.category}">
                  <i class="fa-solid fa-tag me-1" style="font-size: 0.65rem;"></i>${catLabel}
                </span>
                <div class="product-rating-badge" 
                     title="Calificación ${prod.rating.toFixed(1)}★ (${prod.reviews} reseñas) — Clic para filtrar por estrellas"
                     onclick="event.stopPropagation(); window.kodiakStore.setMinRating(${prod.rating}); window.kodiakStore.showToast('Filtrando por productos con calificación ${prod.rating}★');">
                  <span class="d-flex align-items-center gap-1">${starsHtml}</span>
                  <span class="fw-bold text-white ms-1" style="font-size: 0.75rem;">${prod.rating.toFixed(1)}</span>
                  <span class="text-secondary" style="font-size: 0.7rem;">(${prod.reviews})</span>
                </div>
              </div>

              <h3 class="product-title" onclick="window.kodiakStore.openZoomModal(${prod.id})" style="cursor: pointer;" title="Inspeccionar">${prod.name}</h3>
              <p class="small text-secondary mb-2" style="line-height: 1.4;">${prod.shortDesc}</p>

              <div class="mb-3">
                ${prod.specs.slice(0, 2).map(s => `<span class="spec-chip"><i class="fa-solid fa-check text-success me-1"></i>${s}</span>`).join('')}
              </div>

              ${sizeSelectorHtml}

              <div class="mt-auto pt-2 border-top border-secondary border-opacity-25">
                <div class="d-flex justify-content-between align-items-baseline mb-3">
                  <div>
                    <span class="product-price">$${prod.price.toFixed(2)}</span>
                    <div class="product-price-bs">Bs. ${priceBsFormatted}</div>
                  </div>
                  <span class="stock-pill ${isLowStock ? 'stock-pill-low' : 'stock-pill-ok'}">
                    <span class="stock-dot"></span>
                    ${isLowStock ? `¡Solo ${prod.stock} disp.!` : `En Stock (${prod.stock})`}
                  </span>
                </div>

                <div class="d-flex gap-2">
                  <button class="btn btn-kodiak-primary flex-grow-1 py-2" onclick="window.kodiakStore.addToCart(${prod.id})">
                    <i class="fa-solid fa-cart-plus me-1"></i> Añadir
                  </button>
                  <button class="btn ${isComparing ? 'btn-info' : 'btn-outline-light'} px-3" 
                          title="Comparar producto"
                          onclick="window.kodiakStore.toggleCompare(${prod.id})">
                    <i class="fa-solid fa-code-compare"></i>
                  </button>
                  <button class="btn btn-outline-light px-3" 
                          title="Ver en detalle y Zoom Mercado Libre"
                          onclick="window.kodiakStore.openZoomModal(${prod.id})">
                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      `;
    }).join('');
  }

  selectProductSize(prodId, size, event) {
    if (event) event.stopPropagation();
    this.selectedSizes[prodId] = size;
    this.playHapticTone('click');

    // 1. Actualizar botones en la tarjeta correspondiente del catálogo
    const card = document.querySelector(`.product-card[data-product-id="${prodId}"]`);
    if (card) {
      card.querySelectorAll('.size-pill-btn').forEach(btn => {
        if (btn.getAttribute('data-size') === size) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      const label = card.querySelector('.selected-size-label');
      if (label) label.textContent = size;
    }

    // 2. Actualizar botones y texto dentro del Modal de Zoom (si está abierto)
    const zoomModal = document.getElementById('productZoomModal');
    if (zoomModal) {
      zoomModal.querySelectorAll('.size-pill-btn').forEach(btn => {
        if (btn.getAttribute('data-size') === size) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      const zoomSizeLabel = document.getElementById('zoomModalSelectedSize');
      if (zoomSizeLabel) zoomSizeLabel.textContent = size;
    }
  }

  // =========================================================================
  // GESTIÓN DEL CARRITO DE COMPRAS (OFFCANVAS)
  // =========================================================================
  addToCart(productId, qty = 1, forcedSize = null) {
    const product = KODIAK_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const size = forcedSize || this.selectedSizes[productId] || (product.sizes ? (product.defaultSize || product.sizes[0]) : null);
    const cartItemId = size ? `${product.id}_${size}` : `${product.id}`;

    const existingIndex = this.cart.findIndex(item => item.cartItemId === cartItemId || (!item.cartItemId && item.id === product.id && item.size === size));
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
    } else {
      this.cart.push({
        cartItemId: cartItemId,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        qty: qty
      });
    }

    this.playHapticTone('click');
    this.saveCart();
    this.showToast(`¡${product.name} ${size ? `(Talla: ${size})` : ''} añadido al carrito!`);
  }

  updateQuantity(cartItemId, delta) {
    const item = this.cart.find(i => i.cartItemId === cartItemId || i.id == cartItemId);
    if (!item) return;

    item.qty += delta;
    this.playHapticTone('click');

    if (item.qty <= 0) {
      this.removeFromCart(cartItemId);
    } else {
      this.saveCart();
    }
  }

  removeFromCart(cartItemId) {
    this.cart = this.cart.filter(i => !(i.cartItemId === cartItemId || i.id == cartItemId));
    this.playHapticTone('click');
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  applyCoupon() {
    const input = document.getElementById('couponCodeInput');
    const msg = document.getElementById('couponFeedbackMsg');
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();
    if (code === 'KODIAK10') {
      this.appliedDiscount = 0.10;
      this.activeCouponCode = code;
      this.playHapticTone('success');
      msg.className = 'text-success small mt-1';
      msg.textContent = '¡Cupón KODIAK10 aplicado! Descuento del 10%';
    } else if (code === 'ELITE2026') {
      this.appliedDiscount = 0.20;
      this.activeCouponCode = code;
      this.playHapticTone('success');
      msg.className = 'text-success small mt-1';
      msg.textContent = '¡Cupón ELITE2026 aplicado! 20% Descuento Exclusivo Atletas VIP';
    } else {
      this.appliedDiscount = 0;
      this.activeCouponCode = '';
      msg.className = 'text-danger small mt-1';
      msg.textContent = 'Cupón inválido. Prueba KODIAK10 o ELITE2026';
    }

    this.renderCartUI();
  }

  renderCartUI() {
    const list = document.getElementById('cartItemsList');
    const badge = document.getElementById('cartBadgeCount');
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountEl = document.getElementById('cartDiscount');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');
    const totalBsEl = document.getElementById('cartTotalBs');

    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.textContent = totalItems;

    if (!list) return;

    if (this.cart.length === 0) {
      list.innerHTML = `
        <div class="text-center py-5">
          <i class="fa-solid fa-cart-shopping fa-3x text-secondary opacity-50 mb-3"></i>
          <h5 class="text-white">Tu carrito está vacío</h5>
          <p class="text-secondary small">Explora el catálogo y añade equipamiento de alto impacto.</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (discountEl) discountEl.textContent = '-$0.00';
      if (taxEl) taxEl.textContent = '$0.00';
      if (totalEl) totalEl.textContent = '$0.00';
      if (totalBsEl) totalBsEl.textContent = 'Bs. 0.00';
      return;
    }

    list.innerHTML = this.cart.map(item => {
      const cId = item.cartItemId || (item.size ? `${item.id}_${item.size}` : `${item.id}`);
      return `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src=this.src.replace('.jpg', '.svg');">
          <div class="flex-grow-1">
            <h6 class="text-white mb-1 small fw-bold">${item.name}</h6>
            ${item.size ? `<span class="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50 px-2 py-0 mb-1" style="font-size: 0.68rem; font-weight: 700;"><i class="fa-solid fa-ruler me-1"></i>Talla: ${item.size}</span>` : ''}
            <div class="text-success small fw-bold">$${item.price.toFixed(2)} c/u</div>
            <div class="d-flex align-items-center gap-2 mt-2">
              <button class="qty-btn" onclick="window.kodiakStore.updateQuantity('${cId}', -1)">-</button>
              <span class="text-white small fw-bold px-2">${item.qty}</span>
              <button class="qty-btn" onclick="window.kodiakStore.updateQuantity('${cId}', 1)">+</button>
              <button class="btn btn-link text-danger p-0 ms-auto small" onclick="window.kodiakStore.removeFromCart('${cId}')">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const discountAmount = subtotal * this.appliedDiscount;
    const taxableAmount = subtotal - discountAmount;
    const taxIVA = taxableAmount * 0.16;
    const grandTotal = taxableAmount + taxIVA;
    const grandTotalBs = grandTotal * BCV_EXCHANGE_RATE;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)} (${(this.appliedDiscount * 100)}%)`;
    if (taxEl) taxEl.textContent = `$${taxIVA.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
    if (totalBsEl) totalBsEl.textContent = `Bs. ${grandTotalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // =========================================================================
  // MODAL DE DETALLES Y ZOOM ESTILO MERCADO LIBRE
  // =========================================================================
  initZoomEngine() {
    this.zoomEngine = new MercadoLibreZoom({
      containerId: 'zoomInteractiveBox',
      imgId: 'zoomTargetImageEl',
      lensId: 'zoomLensIndicator',
      flyoutId: 'zoomFlyoutPreview'
    });

    const modalEl = document.getElementById('productZoomModal');
    if (modalEl) {
      modalEl.addEventListener('hidden.bs.modal', () => {
        if (this.zoomEngine) this.zoomEngine.onMouseLeave();
      });
    }
  }

  openZoomModal(productId) {
    const prod = KODIAK_CATALOG.find(p => p.id === productId);
    if (!prod) return;

    const titleEl = document.getElementById('zoomModalTitle');
    const descEl = document.getElementById('zoomModalDesc');
    const priceEl = document.getElementById('zoomModalPrice');
    const specsEl = document.getElementById('zoomModalSpecs');
    const addBtn = document.getElementById('zoomModalAddToCartBtn');

    if (titleEl) titleEl.textContent = prod.name;
    if (descEl) descEl.textContent = prod.shortDesc;
    if (priceEl) priceEl.textContent = `$${prod.price.toFixed(2)} USD (Bs. ${(prod.price * BCV_EXCHANGE_RATE).toFixed(2)})`;

    if (specsEl) {
      let sizeSnippet = '';
      if (prod.sizes && prod.sizes.length > 0) {
        if (!this.selectedSizes[prod.id]) {
          this.selectedSizes[prod.id] = prod.defaultSize || prod.sizes[0];
        }
        const currentSize = this.selectedSizes[prod.id];
        sizeSnippet = `
          <li class="mb-3 list-unstyled">
            <div class="p-2 rounded bg-dark border border-secondary border-opacity-50">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-info small fw-bold"><i class="fa-solid fa-ruler-horizontal me-1"></i>Seleccionar Talla / Medida:</span>
                <span class="badge bg-info text-dark fw-bold px-2 py-0" id="zoomModalSelectedSize">${currentSize}</span>
              </div>
              <div class="d-flex flex-wrap gap-1 mt-1">
                ${prod.sizes.map(sz => `
                  <button type="button" 
                          class="size-pill-btn ${sz === currentSize ? 'active' : ''}" 
                          data-size="${sz}"
                          onclick="window.kodiakStore.selectProductSize(${prod.id}, '${sz}', event)">
                    ${sz}
                  </button>
                `).join('')}
              </div>
            </div>
          </li>
        `;
      }
      specsEl.innerHTML = sizeSnippet + prod.specs.map(s => `<li class="mb-1"><i class="fa-solid fa-check text-success me-2"></i>${s}</li>`).join('');
    }

    if (addBtn) {
      addBtn.onclick = () => {
        this.addToCart(prod.id);
        if (window.safeCloseModal) {
          window.safeCloseModal('productZoomModal');
        } else {
          const modalEl = document.getElementById('productZoomModal');
          if (modalEl && window.bootstrap) {
            bootstrap.Modal.getOrCreateInstance(modalEl).hide();
          }
        }
      };
    }

    if (this.zoomEngine) {
      this.zoomEngine.setImage(prod.image);
    }

    const modalEl = document.getElementById('productZoomModal');
    if (modalEl && window.bootstrap) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }

  // =========================================================================
  // SIMULADOR DE COMPARACIÓN DE PRODUCTOS
  // =========================================================================
  toggleCompare(productId) {
    const index = this.compareList.indexOf(productId);
    if (index > -1) {
      this.compareList.splice(index, 1);
      this.showToast('Producto eliminado del comparador');
    } else {
      if (this.compareList.length >= 3) {
        this.showToast('Puedes comparar un máximo de 3 productos simultáneamente.');
        return;
      }
      this.compareList.push(productId);
      this.showToast('Producto añadido al comparador');
    }

    this.playHapticTone('click');
    this.saveCompareList();
    this.renderCatalog(KODIAK_CATALOG);
  }

  updateCompareBadge() {
    const badge = document.getElementById('compareBadgeCount');
    if (badge) badge.textContent = this.compareList.length;
  }

  openComparisonModal() {
    if (this.compareList.length === 0) {
      this.showToast('Selecciona al menos un producto para comparar usando el botón correspondiente.');
      return;
    }

    const selectedProducts = KODIAK_CATALOG.filter(p => this.compareList.includes(p.id));
    const container = document.getElementById('comparisonTableBody');
    if (!container) return;

    let html = `
      <tr>
        <th class="text-secondary">Foto</th>
        ${selectedProducts.map(p => `
          <td class="text-center">
            <img src="${p.image}" alt="${p.name}" style="height: 100px; width: 100px; object-fit: cover; border-radius: 8px;" onerror="this.onerror=null; this.src=this.src.replace('.jpg', '.svg');">
          </td>
        `).join('')}
      </tr>
      <tr>
        <th class="text-secondary">Nombre</th>
        ${selectedProducts.map(p => `<td class="fw-bold text-white">${p.name}</td>`).join('')}
      </tr>
      <tr>
        <th class="text-secondary">Precio</th>
        ${selectedProducts.map(p => `<td class="text-success fw-bold fs-5">$${p.price.toFixed(2)}</td>`).join('')}
      </tr>
      <tr>
        <th class="text-secondary">Categoría</th>
        ${selectedProducts.map(p => `<td class="text-info text-capitalize">${p.category}</td>`).join('')}
      </tr>
      <tr>
        <th class="text-secondary">Material / Estructura</th>
        ${selectedProducts.map(p => `<td>${p.material}</td>`).join('')}
      </tr>
      <tr>
        <th class="text-secondary">Capacidad de Carga</th>
        ${selectedProducts.map(p => `<td><span class="compare-badge-winner">${p.maxLoad}</span></td>`).join('')}
      </tr>
      <tr>
        <th class="text-secondary">Garantía Oficial</th>
        ${selectedProducts.map(p => `<td>${p.warranty}</td>`).join('')}
      </tr>
      <tr>
        <th class="text-secondary">Acción</th>
        ${selectedProducts.map(p => `
          <td>
            <button class="btn btn-kodiak-primary btn-sm w-100" onclick="window.kodiakStore.addToCart(${p.id})">
              Comprar Ahora
            </button>
          </td>
        `).join('')}
      </tr>
    `;

    container.innerHTML = html;
    const modalEl = document.getElementById('comparisonModal');
    if (modalEl && window.bootstrap) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }

  // =========================================================================
  // PASARELA DE CHECKOUT Y EMISIÓN DE FACTURA FISCAL DIGITAL
  // =========================================================================
  setupPaymentTabs() {
    const tabs = document.querySelectorAll('.payment-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const method = tab.getAttribute('data-payment-method');
        document.querySelectorAll('.payment-form-pane').forEach(pane => pane.classList.add('d-none'));
        const activePane = document.getElementById(`pane-${method}`);
        if (activePane) activePane.classList.remove('d-none');
      });
    });
  }

  setupCreditCardLivePreview() {
    const numInput = document.getElementById('cardNumInput');
    const nameInput = document.getElementById('cardHolderInput');
    const expInput = document.getElementById('cardExpInput');

    if (numInput) {
      numInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 16);
        let formatted = val.match(/.{1,4}/g)?.join(' ') || '•••• •••• •••• ••••';
        document.getElementById('ccPreviewNumber').textContent = formatted;
      });
    }

    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        document.getElementById('ccPreviewName').textContent = e.target.value.toUpperCase() || 'NOMBRE DEL TITULAR';
      });
    }

    if (expInput) {
      expInput.addEventListener('input', (e) => {
        document.getElementById('ccPreviewExp').textContent = e.target.value || 'MM/AA';
      });
    }
  }

  openCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast('Tu carrito está vacío. Agrega al menos un producto para proceder.');
      return;
    }

    if (window.kodiakAuth && window.kodiakAuth.user) {
      const u = window.kodiakAuth.user;
      const nameInput = document.getElementById('checkoutBuyerName');
      const emailInput = document.getElementById('checkoutBuyerEmail');
      if (nameInput && !nameInput.value) nameInput.value = u.name;
      if (emailInput && !emailInput.value) emailInput.value = u.email;
    }

    const offcanvasEl = document.getElementById('offcanvasCart');
    if (window.bootstrap && offcanvasEl) {
      const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      if (offcanvas) offcanvas.hide();
    }

    const checkoutModalEl = document.getElementById('checkoutModal');
    if (checkoutModalEl && window.bootstrap) {
      const checkoutModal = bootstrap.Modal.getOrCreateInstance(checkoutModalEl);
      checkoutModal.show();
    }
  }

  processCheckoutOrder(event) {
    event.preventDefault();

    const name = document.getElementById('checkoutBuyerName').value.trim();
    const dni = document.getElementById('checkoutBuyerDni').value.trim();
    const phone = document.getElementById('checkoutBuyerPhone').value.trim();
    const email = document.getElementById('checkoutBuyerEmail').value.trim();
    const address = document.getElementById('checkoutBuyerAddress').value.trim();

    if (!name || !dni || !phone || !email || !address) {
      this.showToast('Por favor completa todos los campos requeridos del formulario de despacho.');
      return;
    }

    const orderId = `KODIAK-${Date.now().toString().slice(-6)}`;
    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const discount = subtotal * this.appliedDiscount;
    const tax = (subtotal - discount) * 0.16;
    const totalUSD = (subtotal - discount) + tax;
    const totalBs = totalUSD * BCV_EXCHANGE_RATE;

    const receiptHtml = `
      <div class="text-center mb-3">
        <h4 class="fw-bold mb-0">🏛️ KODIAK FORCELAB C.A.</h4>
        <p class="small text-muted mb-1">RIF: J-50493821-0 // CONTROL FISCAL AUTORIZADO</p>
        <p class="small text-muted mb-0">DIVISIÓN COMERCIAL Y LOGÍSTICA // COMPROBANTE OFICIAL DE PAGO</p>
      </div>
      <hr>
      <div class="small mb-2"><strong>FACTURA ELECTRÓNICA:</strong> #${orderId}</div>
      <div class="small mb-2"><strong>FECHA / HORA:</strong> ${new Date().toLocaleString()}</div>
      <div class="small mb-2"><strong>CLIENTE:</strong> ${name} (C.I./RIF: ${dni})</div>
      <div class="small mb-2"><strong>TELÉFONO:</strong> ${phone} | <strong>EMAIL:</strong> ${email}</div>
      <div class="small mb-3"><strong>DIRECCIÓN:</strong> ${address}</div>
      <hr>
      <table class="table table-sm small">
        <thead>
          <tr>
            <th>CANT</th>
            <th>DESCRIPCIÓN</th>
            <th class="text-end">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${this.cart.map(item => `
            <tr>
              <td>${item.qty}x</td>
              <td>${item.name} ${item.size ? `<span class="badge bg-secondary text-white ms-1" style="font-size: 0.65rem;">Talla: ${item.size}</span>` : ''}</td>
              <td class="text-end">$${(item.price * item.qty).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <hr>
      <div class="d-flex justify-content-between small"><span>SUBTOTAL:</span><span>$${subtotal.toFixed(2)}</span></div>
      ${discount > 0 ? `<div class="d-flex justify-content-between small text-success"><span>DESCUENTO (${this.activeCouponCode}):</span><span>-$${discount.toFixed(2)}</span></div>` : ''}
      <div class="d-flex justify-content-between small"><span>IVA (16%):</span><span>$${tax.toFixed(2)}</span></div>
      <div class="d-flex justify-content-between fw-bold fs-6 mt-1"><span>TOTAL USD:</span><span>$${totalUSD.toFixed(2)}</span></div>
      <div class="d-flex justify-content-between fw-bold text-primary mt-1"><span>TOTAL BS (BCV):</span><span>Bs. ${totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
      <hr>
      <div class="text-center mt-3">
        <div class="p-2 border d-inline-block bg-white rounded">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#ffffff"/>
            <rect x="10" y="10" width="25" height="25" fill="#000000"/>
            <rect x="15" y="15" width="15" height="15" fill="#ffffff"/>
            <rect x="65" y="10" width="25" height="25" fill="#000000"/>
            <rect x="70" y="15" width="15" height="15" fill="#ffffff"/>
            <rect x="10" y="65" width="25" height="25" fill="#000000"/>
            <rect x="15" y="70" width="15" height="15" fill="#ffffff"/>
            <rect x="42" y="42" width="16" height="16" fill="#000000"/>
            <rect x="45" y="15" width="10" height="20" fill="#000000"/>
            <rect x="15" y="45" width="20" height="10" fill="#000000"/>
            <rect x="65" y="45" width="25" height="10" fill="#000000"/>
            <rect x="45" y="65" width="10" height="25" fill="#000000"/>
          </svg>
        </div>
        <p class="small text-muted mt-2 mb-0">¡Gracias por entrenar con Kodiak ForceLab!</p>
      </div>
    `;

    document.getElementById('receiptInvoiceContent').innerHTML = receiptHtml;

    this.playHapticTone('success');

    if (window.safeCloseModal) {
      window.safeCloseModal('checkoutModal');
    } else {
      const checkoutModalEl = document.getElementById('checkoutModal');
      if (checkoutModalEl && window.bootstrap) {
        bootstrap.Modal.getOrCreateInstance(checkoutModalEl).hide();
      }
    }

    setTimeout(() => {
      const receiptModalEl = document.getElementById('receiptModal');
      if (receiptModalEl && window.bootstrap) {
        const receiptModal = bootstrap.Modal.getOrCreateInstance(receiptModalEl);
        receiptModal.show();
      }
    }, 250);

    this.clearCart();
  }

  // =========================================================================
  // INTEGRACIÓN DEL VISOR 3D EN EL HERO & COMPRA RÁPIDA DE MODELO 3D
  // =========================================================================
  initHero3DViewer() {
    if (window.Kodiak3DViewer) {
      this.hero3DViewer = new Kodiak3DViewer('hero-threejs-viewport');
    }
  }

  set3DModel(modelType) {
    if (this.hero3DViewer && typeof this.hero3DViewer.loadModel === 'function') {
      this.hero3DViewer.loadModel(modelType);
    }
    // Sincronizar botones del selector 3D
    document.querySelectorAll('.hero-3d-model-selector button').forEach(btn => {
      if (btn.getAttribute('data-model') === modelType) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    this.update3DQuickBuyCard(modelType);
    this.playHapticTone('click');
  }

  update3DQuickBuyCard(modelType) {
    const cardEl = document.getElementById('hero3DQuickBuy');
    if (!cardEl) return;

    const MODEL_MAP = {
      dumbbell: 7,   // Par de Mancuernas Hexagonales 20kg ($135)
      kettlebell: 8, // Kettlebell Competición 24kg ($95)
      plate: 15      // Disco Olímpico Bumper Calibrado 20kg ($85)
    };

    const prodId = MODEL_MAP[modelType] || 7;
    const prod = KODIAK_CATALOG.find(p => p.id === prodId);
    if (!prod) return;

    const priceBs = (prod.price * BCV_EXCHANGE_RATE).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    cardEl.innerHTML = `
      <div class="p-2">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 px-2 py-0" style="font-size: 0.65rem; font-weight: 800;">
            <i class="fa-solid fa-cube me-1"></i>3D OFICIAL
          </span>
          <span class="text-white-50 small" style="font-size: 0.68rem;">Stock: ${prod.stock} un.</span>
        </div>
        <div class="text-white fw-bold small text-truncate mb-1" title="${prod.name}">${prod.name}</div>
        <div class="d-flex align-items-baseline gap-2 mb-2">
          <span class="text-success fw-bold fs-6">$${prod.price.toFixed(2)}</span>
          <span class="text-secondary" style="font-size: 0.72rem;">Bs. ${priceBs}</span>
        </div>
        <div class="d-flex gap-1">
          <button class="btn btn-sm btn-kodiak-primary flex-grow-1 py-1 px-2" onclick="window.kodiakStore.addToCart(${prod.id})" title="Comprar este producto 3D">
            <i class="fa-solid fa-cart-plus me-1"></i> Comprar
          </button>
          <button class="btn btn-sm btn-outline-light py-1 px-2" onclick="window.kodiakStore.openZoomModal(${prod.id})" title="Inspección detallada con Zoom">
            <i class="fa-solid fa-magnifying-glass-plus"></i>
          </button>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // FILTRADO DINÁMICO MULTI-CRITERIO Y BÚSQUEDA
  // =========================================================================
  setupEventListeners() {
    this.currentCategory = 'all';
    this.minRating = 0;

    // Buscador
    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.filterCatalog());
    }

    // Categorías de la Barra Superior
    const topCategoryLinks = document.querySelectorAll('.cat-nav-link');
    topCategoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = link.getAttribute('data-cat');
        if (!cat) return; // Enlace ancla ordinario (ej: #contacto)
        e.preventDefault();
        this.setCategory(cat);
      });
    });

    // Categorías del Sidebar Lateral
    const sidebarCategoryBtns = document.querySelectorAll('.sidebar-cat-btn');
    sidebarCategoryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = btn.getAttribute('data-cat') || 'all';
        this.setCategory(cat);
      });
    });

    // Slider de Rango de Precio
    const priceSlider = document.getElementById('priceFilterRange');
    const priceLabel = document.getElementById('priceFilterValue');
    const priceLabelBs = document.getElementById('priceFilterValueBs');
    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (priceLabel) priceLabel.textContent = `$${val} USD`;
        if (priceLabelBs) {
          const bsVal = (val * BCV_EXCHANGE_RATE).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          priceLabelBs.textContent = `≈ Bs. ${bsVal}`;
        }
        this.filterCatalog();
      });
    }

    // Botones de Calificación Mínima
    const ratingBtns = document.querySelectorAll('.rating-filter-btn');
    ratingBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const r = parseFloat(btn.getAttribute('data-min-rating') || 0);
        this.setMinRating(r);
        this.playHapticTone('click');
      });
    });

    // Ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => this.filterCatalog());
    }

    // Formulario de Contacto
    const contactForm = document.getElementById('kodiakContactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.playHapticTone('success');
        this.showToast('¡Mensaje enviado con éxito! El equipo de Kodiak ForceLab te contactará.');
        contactForm.reset();
      });
    }
  }

  setCategory(cat) {
    this.currentCategory = cat;

    // Sincronizar barra superior
    document.querySelectorAll('.cat-nav-link').forEach(link => {
      if (link.getAttribute('data-cat') === cat) {
        link.classList.add('active');
      } else if (link.getAttribute('data-cat')) {
        link.classList.remove('active');
      }
    });

    // Sincronizar sidebar
    document.querySelectorAll('.sidebar-cat-btn').forEach(btn => {
      if (btn.getAttribute('data-cat') === cat) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.playHapticTone('click');
    this.filterCatalog();
  }

  setMinRating(rating) {
    this.minRating = rating;
    document.querySelectorAll('.rating-filter-btn').forEach(btn => {
      const r = parseFloat(btn.getAttribute('data-min-rating') || 0);
      if (r === rating) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    this.filterCatalog();
  }

  updateActiveFiltersBar() {
    const bar = document.getElementById('activeFiltersBar');
    if (!bar) return;

    const chips = [];
    if (this.currentCategory && this.currentCategory !== 'all') {
      const labels = {
        armwrestling: 'Lucha de Brazos',
        streetlifting: 'Streetlifting',
        fuerza: 'Fuerza & Mancuernas',
        suplementos: 'Suplementos',
        ropa: 'Indumentaria & Calzado',
        accesorios: 'Accesorios & Grips'
      };
      chips.push({
        label: `Categoría: ${labels[this.currentCategory] || this.currentCategory}`,
        action: () => this.setCategory('all')
      });
    }

    const priceSlider = document.getElementById('priceFilterRange');
    const currentPrice = priceSlider ? parseFloat(priceSlider.value) : 250;
    if (currentPrice < 250) {
      chips.push({
        label: `Precio: ≤ $${currentPrice}`,
        action: () => {
          if (priceSlider) priceSlider.value = 250;
          const pVal = document.getElementById('priceFilterValue');
          const pValBs = document.getElementById('priceFilterValueBs');
          if (pVal) pVal.textContent = '$250 USD';
          if (pValBs) pValBs.textContent = `≈ Bs. ${(250 * BCV_EXCHANGE_RATE).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          this.filterCatalog();
        }
      });
    }

    if (this.minRating > 0) {
      chips.push({
        label: `★ ${this.minRating}+`,
        action: () => {
          this.setMinRating(0);
        }
      });
    }

    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput && searchInput.value.trim().length > 0) {
      chips.push({
        label: `"${searchInput.value.trim()}"`,
        action: () => {
          searchInput.value = '';
          this.filterCatalog();
        }
      });
    }

    if (chips.length === 0) {
      bar.innerHTML = '';
      bar.classList.add('d-none');
    } else {
      bar.classList.remove('d-none');
      bar.innerHTML = `
        <span class="text-secondary small fw-bold me-1"><i class="fa-solid fa-filter me-1 text-success"></i>Filtros Activos:</span>
        ${chips.map((c, idx) => `
          <button type="button" class="active-filter-chip" onclick="window.kodiakStore.removeChipByIndex(${idx})">
            ${c.label} <i class="fa-solid fa-xmark ms-1"></i>
          </button>
        `).join('')}
        <button type="button" class="btn btn-link text-danger text-decoration-none small py-0 px-2" onclick="window.kodiakStore.resetAllFilters()">
          Limpiar Todo
        </button>
      `;
      this.currentChips = chips;
    }
  }

  removeChipByIndex(idx) {
    if (this.currentChips && this.currentChips[idx]) {
      this.currentChips[idx].action();
    }
  }

  resetAllFilters() {
    this.currentCategory = 'all';
    this.minRating = 0;

    // Restablecer búsqueda
    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput) searchInput.value = '';

    // Restablecer barra superior y sidebar
    this.setCategory('all');

    // Restablecer slider de precio
    const priceSlider = document.getElementById('priceFilterRange');
    const priceLabel = document.getElementById('priceFilterValue');
    const priceLabelBs = document.getElementById('priceFilterValueBs');
    if (priceSlider) {
      priceSlider.value = 250;
      if (priceLabel) priceLabel.textContent = '$250 USD';
      if (priceLabelBs) {
        const bsVal = (250 * BCV_EXCHANGE_RATE).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        priceLabelBs.textContent = `≈ Bs. ${bsVal}`;
      }
    }

    // Restablecer botones de calificación
    const ratingBtns = document.querySelectorAll('.rating-filter-btn');
    ratingBtns.forEach(btn => {
      if (btn.getAttribute('data-min-rating') === '0') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Restablecer ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'default';

    this.filterCatalog();
    this.playHapticTone('click');
    this.showToast('Filtros restablecidos al valor predeterminado');
  }

  filterCatalog() {
    const searchText = (document.getElementById('mainSearchInput')?.value || '').toLowerCase().trim();
    const activeCategory = this.currentCategory || 'all';
    const maxPrice = parseFloat(document.getElementById('priceFilterRange')?.value || 250);
    const sortVal = document.getElementById('sortSelect')?.value || 'default';
    const minRating = this.minRating || 0;

    let filtered = KODIAK_CATALOG.filter(prod => {
      const matchText = prod.name.toLowerCase().includes(searchText) || prod.shortDesc.toLowerCase().includes(searchText);
      const matchCat = (activeCategory === 'all') || (prod.category === activeCategory);
      const matchPrice = prod.price <= maxPrice;
      const matchRating = prod.rating >= minRating;
      return matchText && matchCat && matchPrice && matchRating;
    });

    if (sortVal === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortVal === 'stock-desc') {
      filtered.sort((a, b) => b.stock - a.stock);
    }

    this.renderCatalog(filtered);
    this.updateActiveFiltersBar();
  }

  showToast(message) {
    const toastEl = document.getElementById('kodiakLiveToast');
    const toastBody = document.getElementById('kodiakToastMsg');
    if (toastEl && toastBody && window.bootstrap) {
      toastBody.textContent = message;
      const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
      toast.show();
    }
  }
}

// Inicialización automática
document.addEventListener('DOMContentLoaded', () => {
  window.kodiakStore = new KodiakApp();
});
