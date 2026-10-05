/**
 * ==============================================================================
 * KODIAK FORCELAB — MOTOR PRINCIPAL DE LA APLICACIÓN WEB (ES6+ VANILLA JS)
 * Plataforma: Kodiak ForceLab Commercial E-Commerce Platform
 * Dirección Técnica: Gabriel Zaul Hazim Martínez (Kodiak)
 * 
 * ARQUITECTURA DE CLIENTE:
 * - Patrón Módulo con separación estricta de responsabilidades.
 * - Gestión de Estado Reactivo en memoria y persistencia local (localStorage).
 * - Algoritmo de filtrado multifactorial (búsqueda léxica, categoría y rango de precio).
 * - Matriz comparativa dinámica y pasarela de pago simulada multi-método.
 * ==============================================================================
 */

// Tasa de cambio oficial simulada (USD a Bolívares)
const BCV_EXCHANGE_RATE = 45.50;

// Catálogo de Productos de Alto Rendimiento y Biomecánica
const KODIAK_CATALOG = [
  {
    id: 1,
    name: 'Correas Profesionales de Armwrestling Kodiak Pro',
    category: 'armwrestling',
    price: 35.00,
    rating: 5.0,
    reviews: 84,
    badge: 'BESTSELLER',
    image: 'assets/images/strap_armwrestling.svg',
    shortDesc: 'Correa oficial de competición con triple costura reforzada de nylon balístico.',
    specs: [
      'Resistencia a tracción: 500 kg',
      'Material: Nylon balístico militar',
      'Hebilla: Aleación de zinc inoxidable',
      'Longitud: 110 cm x 3.8 cm'
    ],
    material: 'Nylon Balístico 1000D',
    maxLoad: '500 kg de tensión',
    warranty: '2 Años de Garantía',
    stock: 22
  },
  {
    id: 2,
    name: 'Muñequeras Heavy Duty Titan 24"',
    category: 'accesorios',
    price: 28.00,
    rating: 4.9,
    reviews: 63,
    badge: 'IPF COMPLIANT',
    image: 'assets/images/wrist_wraps.svg',
    shortDesc: 'Soporte rígido de grado médico para levantamientos de máxima sobrecarga isométrica.',
    specs: [
      'Longitud: 24 pulgadas (60 cm)',
      'Ajuste: Lazo elástico para pulgar',
      'Velcro: Grado aeroespacial 50mm',
      'Elasticidad: Compresión rígida nivel 3'
    ],
    material: 'Elastano y Algodón Reforzado',
    maxLoad: 'Soporte ilimitado en banco/prensa',
    warranty: '1 Año de Garantía',
    stock: 35
  },
  {
    id: 3,
    name: 'Mancuerna Ajustable C.P. Force 24kg',
    category: 'fuerza',
    price: 185.00,
    rating: 4.9,
    reviews: 42,
    badge: 'SELECTOR RÁPIDO',
    image: 'assets/images/dumbbell_force.svg',
    shortDesc: 'Sistema selector de dial rotatorio que reemplaza 15 pares de mancuernas convencionales.',
    specs: [
      'Rango: 2.5 kg a 24 kg por mancuerna',
      'Mecanismo: Engranajes de acero al carbono',
      'Empuñadura: Moleteado antideslizante',
      'Incrementos: 15 ajustes precisos'
    ],
    material: 'Acero al Carbono y Discos Engomados',
    maxLoad: '24 kg / 52.9 lbs',
    warranty: '3 Años de Garantía',
    stock: 12
  },
  {
    id: 4,
    name: 'Kettlebell de Competición 24kg Acero',
    category: 'fuerza',
    price: 95.00,
    rating: 4.8,
    reviews: 31,
    badge: 'CALIBRADA',
    image: 'assets/images/kettlebell_comp.svg',
    shortDesc: 'Pesa rusa de una sola pieza con mango pulido de 35mm para balance inercial perfecto.',
    specs: [
      'Peso exacto: 24 kg ± 0.1%',
      'Diámetro de asa: 35 mm estándar',
      'Núcleo: Acero hueco de competición',
      'Código de color: Azul oficial Girevoy'
    ],
    material: 'Acero Fundido Monobloque',
    maxLoad: '24 kg calibrado',
    warranty: 'Garantía de por Vida',
    stock: 18
  },
  {
    id: 5,
    name: 'Pronator Handle Biomecánico 60mm',
    category: 'armwrestling',
    price: 45.00,
    rating: 5.0,
    reviews: 57,
    badge: 'KODIAK LAB',
    image: 'assets/images/pronator_handle.svg',
    shortDesc: 'Mango cónico excéntrico diseñado para hipertrofia del pronador redondo y cuadrado.',
    specs: [
      'Diámetro cónico: 60 mm a 45 mm',
      'Acople: Mosquetón de acero reforzado',
      'Textura: Moleteado profundo en espiral',
      'Aplicación: Poleas y cargas directas'
    ],
    material: 'Polímero de Alta Densidad + Acero',
    maxLoad: '180 kg en tracción',
    warranty: '2 Años de Garantía',
    stock: 15
  },
  {
    id: 6,
    name: 'Creatina Monohidrato Creapure® 500g',
    category: 'suplementos',
    price: 38.00,
    rating: 4.9,
    reviews: 120,
    badge: '100% PURA',
    image: 'assets/images/creatine_creapure.svg',
    shortDesc: 'Sello Creapure® de manufactura alemana micronizada para resíntesis inmediata de ATP.',
    specs: [
      'Porciones: 100 servicios de 5g',
      'Pureza: > 99.99% HPLC certificada',
      'Solubilidad: Ultra-micronizada malla 200',
      'Origen: Trostberg, Alemania'
    ],
    material: 'Creatina Monohidrato Grado Farmacéutico',
    maxLoad: 'N/A (Suplemento Oral)',
    warranty: 'Lote Verificado con QR',
    stock: 50
  },
  {
    id: 7,
    name: 'Magnesio Líquido Antideslizante 250ml',
    category: 'accesorios',
    price: 15.00,
    rating: 4.8,
    reviews: 77,
    badge: 'ZERO POLVO',
    image: 'assets/images/liquid_chalk.svg',
    shortDesc: 'Fórmula de carbonato de magnesio con base de secado ultra rápido en 15 segundos.',
    specs: [
      'Volumen: 250 ml (aprox. 150 aplicaciones)',
      'Base: Alcohol isopropílico de rápida evaporación',
      'Efecto: Agarre seco durante toda la sesión',
      'Residuo: Mínimo, no ensucia la barra'
    ],
    material: 'Carbonato de Magnesio Grado USP',
    maxLoad: 'N/A (Adherencia de Agarre)',
    warranty: 'Garantía de Satisfacción',
    stock: 60
  },
  {
    id: 8,
    name: 'Cinturón de Powerlifting de Palanca 10mm',
    category: 'fuerza',
    price: 110.00,
    rating: 5.0,
    reviews: 49,
    badge: 'TITANIUM LEVER',
    image: 'assets/images/lever_belt.svg',
    shortDesc: 'Cuero genuino multicapa de 10mm con hebilla de palanca de bloqueo instantáneo.',
    specs: [
      'Grosor: 10 mm calibrado',
      'Ancho: 4 pulgadas (10 cm) uniforme',
      'Palanca: Aleación de titanio y magnesio',
      'Costura: 6 hileras de hilo de nylon resistente'
    ],
    material: 'Cuero Genuino Vacuno + Titanio',
    maxLoad: 'Soporte Ilimitado Intrabdominal',
    warranty: '5 Años de Garantía',
    stock: 9
  }
];

/**
 * CLASE PRINCIPAL DEL ECOSISTEMA
 */
class KodiakApp {
  constructor() {
    this.cartKey = 'kodiak_cart_items';
    this.compareKey = 'kodiak_compare_items';
    this.appliedDiscount = 0; // Porcentaje de descuento
    this.activeCouponCode = '';

    this.cart = this.loadCart();
    this.compareList = this.loadCompareList();

    // Módulos asociados
    this.zoomEngine = null;
    this.threeViewer = null;

    this.init();
  }

  init() {
    this.renderCatalog(KODIAK_CATALOG);
    this.renderCartUI();
    this.updateCompareBadge();
    this.setupEventListeners();
    this.setupPaymentTabs();
    this.initZoomEngine();
    this.initThreeViewer();
    this.setupCreditCardLivePreview();

    // Iniciar simulación de autenticación
    window.kodiakAuth = new GoogleAuthSimulator();
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

    if (products.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-box-open fa-3x text-secondary mb-3"></i>
          <h4 class="text-white">No se encontraron productos coincidentes</h4>
          <p class="text-secondary">Intenta ajustar los filtros de búsqueda o categoría.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map(prod => {
      const priceBsFormatted = (prod.price * BCV_EXCHANGE_RATE).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const isComparing = this.compareList.includes(prod.id);

      return `
        <div class="col-md-6 col-lg-4 mb-4">
          <article class="product-card" data-product-id="${prod.id}">
            <div class="product-img-box" onclick="window.kodiakStore.openZoomModal(${prod.id})">
              <span class="product-badge">${prod.badge}</span>
              <img src="${prod.image}" alt="${prod.name}" loading="lazy">
            </div>

            <div class="p-3 d-flex flex-column flex-grow-1">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="product-category-tag">${prod.category}</span>
                <div class="text-warning small">
                  <i class="fa-solid fa-star"></i>
                  <span class="fw-bold">${prod.rating}</span>
                  <span class="text-secondary">(${prod.reviews})</span>
                </div>
              </div>

              <h3 class="product-title">${prod.name}</h3>
              <p class="small text-secondary mb-2">${prod.shortDesc}</p>

              <div class="mb-3">
                ${prod.specs.slice(0, 2).map(s => `<span class="spec-chip">${s}</span>`).join('')}
              </div>

              <div class="mt-auto pt-2 border-top border-secondary border-opacity-25">
                <div class="d-flex justify-content-between align-items-baseline mb-3">
                  <div>
                    <span class="product-price">$${prod.price.toFixed(2)}</span>
                    <div class="product-price-bs">Bs. ${priceBsFormatted}</div>
                  </div>
                  <span class="badge ${prod.stock < 15 ? 'bg-danger' : 'bg-success'} bg-opacity-25 text-white">
                    Stock: ${prod.stock}
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

  // =========================================================================
  // GESTIÓN DEL CARRITO DE COMPRAS (OFFCANVAS)
  // =========================================================================
  addToCart(productId, qty = 1) {
    const product = KODIAK_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: qty
      });
    }

    this.saveCart();
    this.showToast(`¡${product.name} añadido al carrito!`);
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveCart();
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
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
      msg.className = 'text-success small mt-1';
      msg.textContent = '¡Cupón KODIAK10 aplicado! Descuento del 10%';
    } else if (code === 'ELITE2026') {
      this.appliedDiscount = 0.20;
      this.activeCouponCode = code;
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
          <p class="text-secondary small">Explora el catálogo y añade equipamiento de alto nivel.</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (discountEl) discountEl.textContent = '-$0.00';
      if (taxEl) taxEl.textContent = '$0.00';
      if (totalEl) totalEl.textContent = '$0.00';
      if (totalBsEl) totalBsEl.textContent = 'Bs. 0.00';
      return;
    }

    list.innerHTML = this.cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="flex-grow-1">
          <h6 class="text-white mb-1 small fw-bold">${item.name}</h6>
          <div class="text-success small fw-bold">$${item.price.toFixed(2)} c/u</div>
          <div class="d-flex align-items-center gap-2 mt-2">
            <button class="qty-btn" onclick="window.kodiakStore.updateQuantity(${item.id}, -1)">-</button>
            <span class="text-white small fw-bold px-2">${item.qty}</span>
            <button class="qty-btn" onclick="window.kodiakStore.updateQuantity(${item.id}, 1)">+</button>
            <button class="btn btn-link text-danger p-0 ms-auto small" onclick="window.kodiakStore.removeFromCart(${item.id})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Cálculos económicos
    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const discountAmount = subtotal * this.appliedDiscount;
    const taxableAmount = subtotal - discountAmount;
    const taxIVA = taxableAmount * 0.16; // 16% IVA legal
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
      specsEl.innerHTML = prod.specs.map(s => `<li class="mb-1"><i class="fa-solid fa-check text-success me-2"></i>${s}</li>`).join('');
    }

    if (addBtn) {
      addBtn.onclick = () => {
        this.addToCart(prod.id);
        const modalEl = document.getElementById('productZoomModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      };
    }

    // Actualizar imagen en el motor de zoom
    if (this.zoomEngine) {
      this.zoomEngine.setImage(prod.image);
    }

    const modalEl = document.getElementById('productZoomModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
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
        alert('Puedes comparar un máximo de 3 productos simultáneamente.');
        return;
      }
      this.compareList.push(productId);
      this.showToast('Producto añadido al comparador');
    }

    this.saveCompareList();
    this.renderCatalog(KODIAK_CATALOG); // Refresca iconos
  }

  updateCompareBadge() {
    const badge = document.getElementById('compareBadgeCount');
    if (badge) badge.textContent = this.compareList.length;
  }

  openComparisonModal() {
    if (this.compareList.length === 0) {
      alert('Selecciona al menos 1 o 2 productos para comparar usando el icono de comparar en las tarjetas.');
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
            <img src="${p.image}" alt="${p.name}" style="height: 100px; object-fit: contain;">
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
    const modal = new bootstrap.Modal(document.getElementById('comparisonModal'));
    modal.show();
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
      alert('Tu carrito está vacío. Agrega al menos un producto para proceder.');
      return;
    }

    // Prefill con usuario de Google si existe sesión
    if (window.kodiakAuth && window.kodiakAuth.user) {
      const u = window.kodiakAuth.user;
      const nameInput = document.getElementById('checkoutBuyerName');
      const emailInput = document.getElementById('checkoutBuyerEmail');
      if (nameInput) nameInput.value = u.name;
      if (emailInput) emailInput.value = u.email;
    }

    // Cerrar offcanvas si está abierto
    const offcanvasEl = document.getElementById('offcanvasCart');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) offcanvas.hide();

    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
  }

  processCheckoutOrder(event) {
    event.preventDefault();

    const name = document.getElementById('checkoutBuyerName').value.trim();
    const dni = document.getElementById('checkoutBuyerDni').value.trim();
    const phone = document.getElementById('checkoutBuyerPhone').value.trim();
    const email = document.getElementById('checkoutBuyerEmail').value.trim();
    const address = document.getElementById('checkoutBuyerAddress').value.trim();

    if (!name || !dni || !phone || !email || !address) {
      alert('Por favor completa todos los campos requeridos del formulario de envío.');
      return;
    }

    // Generar Factura Digital Fiscal Simulada
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
              <td>${item.name}</td>
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
          <!-- QR Fiscal Generado Dinámicamente en SVG -->
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

    // Ocultar modal de checkout y abrir comprobante
    const checkoutModalEl = document.getElementById('checkoutModal');
    const checkoutModal = bootstrap.Modal.getInstance(checkoutModalEl);
    if (checkoutModal) checkoutModal.hide();

    const receiptModal = new bootstrap.Modal(document.getElementById('receiptModal'));
    receiptModal.show();

    // Vaciar carrito
    this.clearCart();
  }

  // =========================================================================
  // INTEGRACIÓN VISOR 3D (THREE.JS)
  // =========================================================================
  initThreeViewer() {
    if (window.Kodiak3DViewer) {
      this.threeViewer = new Kodiak3DViewer('threejs-canvas-viewport');
    }
  }

  // =========================================================================
  // FILTRADO DINÁMICO Y BÚSQUEDA
  // =========================================================================
  setupEventListeners() {
    // Buscador instantáneo
    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.filterCatalog());
    }

    // Filtros de categoría en Nav
    const categoryLinks = document.querySelectorAll('.cat-nav-link');
    categoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        this.filterCatalog();
      });
    });

    // Slider de precio
    const priceSlider = document.getElementById('priceFilterRange');
    const priceLabel = document.getElementById('priceFilterValue');
    if (priceSlider && priceLabel) {
      priceSlider.addEventListener('input', (e) => {
        priceLabel.textContent = `$${e.target.value}`;
        this.filterCatalog();
      });
    }

    // Ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => this.filterCatalog());
    }

    // Formulario de contacto
    const contactForm = document.getElementById('kodiakContactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Mensaje enviado con éxito! El equipo de Kodiak ForceLab te contactará a la brevedad.');
        contactForm.reset();
      });
    }
  }

  filterCatalog() {
    const searchText = (document.getElementById('mainSearchInput')?.value || '').toLowerCase().trim();
    const activeCategory = document.querySelector('.cat-nav-link.active')?.getAttribute('data-cat') || 'all';
    const maxPrice = parseFloat(document.getElementById('priceFilterRange')?.value || 250);
    const sortVal = document.getElementById('sortSelect')?.value || 'default';

    let filtered = KODIAK_CATALOG.filter(prod => {
      const matchText = prod.name.toLowerCase().includes(searchText) || prod.shortDesc.toLowerCase().includes(searchText);
      const matchCat = (activeCategory === 'all') || (prod.category === activeCategory);
      const matchPrice = prod.price <= maxPrice;
      return matchText && matchCat && matchPrice;
    });

    // Ordenamiento
    if (sortVal === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    this.renderCatalog(filtered);
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

// Inicialización automática al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  window.kodiakStore = new KodiakApp();
});
