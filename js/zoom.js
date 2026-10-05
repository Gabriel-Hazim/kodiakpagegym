/**
 * ==============================================================================
 * KODIAK FORCELAB — MOTOR DE ZOOM TIPO MERCADO LIBRE (LENS & FLYOUT MAGNIFIER)
 * Plataforma: Kodiak ForceLab Commercial E-Commerce Platform
 * Dirección Técnica: Gabriel Zaul Hazim Martínez (Kodiak)
 * 
 * FUNDAMENTO MATEMÁTICO Y ARQUITECTURA:
 * 1. Detección de coordenadas espaciales relativas vía getBoundingClientRect().
 * 2. Clamping bidimensional para evitar desbordamiento del lente sobre los bordes.
 * 3. Cálculo de factores de escala (Ratios X e Y):
 *      RatioX = FlyoutWidth / LensWidth
 *      RatioY = FlyoutHeight / LensHeight
 * 4. Traslación del fondo en el Flyout compensada por el factor de escala:
 *      BackgroundPositionX = - (LensPositionX * RatioX)
 *      BackgroundPositionY = - (LensPositionY * RatioY)
 * ==============================================================================
 */

class MercadoLibreZoom {
  constructor(options = {}) {
    this.containerId = options.containerId || 'zoomContainer';
    this.imgId = options.imgId || 'zoomTargetImg';
    this.lensId = options.lensId || 'zoomLens';
    this.flyoutId = options.flyoutId || 'zoomFlyout';

    this.container = document.getElementById(this.containerId);
    this.img = document.getElementById(this.imgId);
    this.lens = document.getElementById(this.lensId);
    this.flyout = document.getElementById(this.flyoutId);

    if (!this.container || !this.img || !this.lens || !this.flyout) {
      console.warn('[MercadoLibreZoom] Elementos del DOM no encontrados en la inicialización.');
      return;
    }

    this.initEvents();
  }

  /**
   * Vincula los escuchadores de eventos para ratón y pantallas táctiles
   */
  initEvents() {
    // Eventos de cursor (Desktop)
    this.container.addEventListener('mouseenter', (e) => this.onMouseEnter(e));
    this.container.addEventListener('mouseleave', () => this.onMouseLeave());
    this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));

    // Eventos Touch (Mobile / Tablet)
    this.container.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: true });
    this.container.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
    this.container.addEventListener('touchend', () => this.onMouseLeave());
  }

  /**
   * Actualiza dinámicamente la imagen objetivo y la textura en alta definición
   * @param {string} imageSrc - Ruta del recurso gráfico
   */
  setImage(imageSrc) {
    if (!this.img || !this.flyout) return;
    this.img.src = imageSrc;
    this.flyout.style.backgroundImage = `url('${imageSrc}')`;
  }

  onMouseEnter() {
    this.lens.style.display = 'block';
    this.flyout.style.display = 'block';

    // Establecer la imagen de fondo en alta resolución si aún no está asignada
    if (!this.flyout.style.backgroundImage || this.flyout.style.backgroundImage === 'none') {
      this.flyout.style.backgroundImage = `url('${this.img.src}')`;
    }

    this.updateZoomMetrics();
  }

  onMouseLeave() {
    this.lens.style.display = 'none';
    this.flyout.style.display = 'none';
  }

  onTouchStart(e) {
    this.onMouseEnter();
    if (e.touches.length > 0) {
      this.moveMagnifier(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  onTouchMove(e) {
    if (e.touches.length > 0) {
      e.preventDefault(); // Evita scroll no deseado al interactuar con el zoom
      this.moveMagnifier(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  onMouseMove(e) {
    this.moveMagnifier(e.clientX, e.clientY);
  }

  /**
   * Recalcula las dimensiones relativas y escala de fondo del flyout
   */
  updateZoomMetrics() {
    const imgRect = this.img.getBoundingClientRect();
    const lensW = this.lens.offsetWidth || 130;
    const lensH = this.lens.offsetHeight || 130;
    const flyoutW = this.flyout.offsetWidth || 480;
    const flyoutH = this.flyout.offsetHeight || 480;

    this.ratioX = flyoutW / lensW;
    this.ratioY = flyoutH / lensH;

    // Escalar la imagen de fondo en el flyout exactamente proporcional al ratio
    this.flyout.style.backgroundSize = `${imgRect.width * this.ratioX}px ${imgRect.height * this.ratioY}px`;
  }

  /**
   * Algoritmo central de cálculo espacial y clamping del lente
   * @param {number} clientX - Coordenada X del cursor en la ventana
   * @param {number} clientY - Coordenada Y del cursor en la ventana
   */
  moveMagnifier(clientX, clientY) {
    const rect = this.container.getBoundingClientRect();

    // 1. Obtener posición relativa del cursor dentro del contenedor
    let cursorX = clientX - rect.left;
    let cursorY = clientY - rect.top;

    // 2. Centrar el lente en la punta del cursor
    let lensX = cursorX - (this.lens.offsetWidth / 2);
    let lensY = cursorY - (this.lens.offsetHeight / 2);

    // 3. Clamping: Evitar que el lente se desborde fuera de la imagen
    const maxLensX = rect.width - this.lens.offsetWidth;
    const maxLensY = rect.height - this.lens.offsetHeight;

    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > maxLensX) lensX = maxLensX;
    if (lensY > maxLensY) lensY = maxLensY;

    // 4. Posicionar el lente visual en el DOM
    this.lens.style.left = `${lensX}px`;
    this.lens.style.top = `${lensY}px`;

    // 5. Proyectar la sección ampliada en el flyout (offset invertido)
    const posX = -(lensX * this.ratioX);
    const posY = -(lensY * this.ratioY);

    this.flyout.style.backgroundPosition = `${posX}px ${posY}px`;
  }
}

// Exportación global para integración modular
window.MercadoLibreZoom = MercadoLibreZoom;
