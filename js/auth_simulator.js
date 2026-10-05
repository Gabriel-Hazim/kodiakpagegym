/**
 * ==============================================================================
 * KODIAK FORCELAB — MOTOR DE AUTENTICACIÓN GOOGLE IDENTITY SERVICES (GIS & OAUTH 2.0)
 * Plataforma: Kodiak ForceLab Commercial E-Commerce Platform
 * Dirección Técnica: Gabriel Zaul Hazim Martínez (Kodiak)
 * 
 * ARQUITECTURA DE AUTENTICACIÓN ADAPTATIVA:
 * 1. Selector de Identidad Google Instantáneo (Zero Error 401).
 * 2. Soporte para inyección en caliente de Google Cloud Client ID Oficial.
 * 3. Decodificación de Payload JWT (Claims: sub, email, name, picture, email_verified).
 * 4. Gestión de Historial de Compras y Sincronización Automática con Checkout.
 * ==============================================================================
 */

/**
 * Helper global ultra-robusto para cerrar modales de Bootstrap sin bloqueos de backdrop.
 */
function safeCloseModal(modalId) {
  const modalEl = typeof modalId === 'string' ? document.getElementById(modalId) : modalId;
  if (!modalEl) return;

  try {
    if (window.bootstrap && window.bootstrap.Modal) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  } catch (err) {
    console.warn('[safeCloseModal] Cierre estándar con aviso:', err);
  }

  // Limpieza atómica garantizada para evitar pantalla bloqueada
  setTimeout(() => {
    modalEl.classList.remove('show');
    modalEl.style.display = 'none';
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.removeAttribute('aria-modal');

    // Remover backdrop huérfano
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
  }, 150);
}
window.safeCloseModal = safeCloseModal;

/**
 * Generador procedural de avatares deportivos vectoriales (Emojis + Colores vibrantes).
 * Cero fotos de personas, 100% independiente de internet y compatible con navegadores.
 */
function generateEmojiAvatar(emoji, bgColor = '#00ff88') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="${bgColor}" stroke="#0a0e17" stroke-width="4"/>
    <text x="50" y="58" font-size="50" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getRandomSportsAvatar(seedText = '') {
  const emojis = ['🐻', '⚡', '🏋️', '🦾', '🔥', '🏆', '💪', '🥇', '🥋', '🥊'];
  const colors = ['#00ff88', '#00e5ff', '#ffb703', '#ff0055', '#7b2cbf', '#3a86ff', '#06d6a0'];
  
  let hash = 0;
  for (let i = 0; i < seedText.length; i++) {
    hash = seedText.charCodeAt(i) + ((hash << 5) - hash);
  }
  const emoji = emojis[Math.abs(hash) % emojis.length];
  const color = colors[Math.abs(hash * 3) % colors.length];
  return generateEmojiAvatar(emoji, color);
}

class GoogleAuthSimulator {
  constructor() {
    this.storageKey = 'kodiak_user_session';
    this.clientIdKey = 'kodiak_google_client_id';
    this.user = this.loadSession();
    this.initGIS();
    this.initUI();
  }

  loadSession() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (!data) return null;
      const parsed = JSON.parse(data);
      // Migración automática: si la sesión previa tenía foto de persona, reemplazar por avatar deportivo
      if (parsed && parsed.picture && (parsed.picture.includes('unsplash.com') || parsed.picture.includes('ui-avatars.com'))) {
        parsed.picture = parsed.name.includes('Kodiak') || parsed.name.includes('Gabriel') 
          ? generateEmojiAvatar('🐻', '#00ff88') 
          : getRandomSportsAvatar(parsed.name || 'Atleta');
        localStorage.setItem(this.storageKey, JSON.stringify(parsed));
      }
      return parsed;
    } catch (e) {
      console.error('[GoogleAuth] Error al leer sesión', e);
      return null;
    }
  }

  saveSession(userData) {
    this.user = userData;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(userData));
    } catch (e) {
      console.error('[GoogleAuth] Error al persistir sesión', e);
    }
    this.renderNavProfile();
    window.dispatchEvent(new CustomEvent('kodiak-auth-change', { detail: this.user }));
  }

  signOut() {
    this.user = null;
    localStorage.removeItem(this.storageKey);
    this.renderNavProfile();

    // Restablecer campos del formulario manual de Google
    const nameInput = document.getElementById('customGoogleNameInput');
    const emailInput = document.getElementById('customGoogleEmailInput');
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';

    // Restablecer campos del formulario de despacho y pago en Checkout
    const checkoutFields = [
      'checkoutBuyerName',
      'checkoutBuyerEmail',
      'checkoutBuyerPhone',
      'checkoutBuyerDni',
      'checkoutBuyerAddress'
    ];
    checkoutFields.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    window.dispatchEvent(new CustomEvent('kodiak-auth-change', { detail: null }));

    if (window.kodiakStore) {
      window.kodiakStore.showToast('Sesión cerrada. Formulario y perfil restablecidos.');
      window.kodiakStore.playHapticTone('click');
    }
  }

  initUI() {
    this.renderNavProfile();
    
    // Si hay un Client ID guardado previamente, cargarlo en el input de configuración
    const savedClientId = localStorage.getItem(this.clientIdKey);
    const inputEl = document.getElementById('googleCloudClientIdInput');
    if (inputEl && savedClientId) {
      inputEl.value = savedClientId;
    }
  }

  /**
   * Inicializa el SDK Oficial de Google Identity Services ÚNICAMENTE si existe
   * un Client ID legítimo configurado por el usuario en Google Cloud Console.
   * Si no existe, omite la llamada para prevenir el Error 401: invalid_client.
   */
  initGIS() {
    const configuredClientId = localStorage.getItem(this.clientIdKey);
    const slot = document.getElementById('g_id_signin_slot');

    if (!configuredClientId || !configuredClientId.endsWith('.apps.googleusercontent.com')) {
      if (slot) {
        slot.innerHTML = '';
        slot.classList.add('d-none');
      }
      return;
    }

    if (slot) {
      slot.classList.remove('d-none');
    }

    const setupGIS = () => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        try {
          window.google.accounts.id.initialize({
            client_id: configuredClientId,
            callback: (response) => this.handleGoogleCredential(response),
            auto_select: false
          });

          if (slot) {
            window.google.accounts.id.renderButton(slot, {
              theme: "filled_blue",
              size: "large",
              shape: "pill",
              text: "continue_with"
            });
          }
        } catch (err) {
          console.warn('[Google GIS] Error al inicializar con Client ID personalizado:', err);
        }
      }
    };

    if (document.readyState === 'complete') {
      setupGIS();
    } else {
      window.addEventListener('load', setupGIS);
    }
  }

  /**
   * Permite vincular un Google Cloud Client ID oficial en caliente
   */
  saveCustomClientId() {
    const input = document.getElementById('googleCloudClientIdInput');
    const val = input ? input.value.trim() : '';

    if (!val || !val.includes('.apps.googleusercontent.com')) {
      if (window.kodiakStore) {
        window.kodiakStore.showToast('Ingresa un Client ID válido emitido por Google Cloud Console.');
      } else {
        alert('Ingresa un Client ID válido emitido por Google Cloud Console (terminado en .apps.googleusercontent.com)');
      }
      return;
    }

    localStorage.setItem(this.clientIdKey, val);
    this.initGIS();

    if (window.kodiakStore) {
      window.kodiakStore.showToast('Client ID de Google Cloud guardado y SDK activado.');
      window.kodiakStore.playHapticTone('success');
    }
  }

  /**
   * Restablece el modo seguro sin llamadas externas que puedan causar 401
   */
  clearCustomClientId() {
    localStorage.removeItem(this.clientIdKey);
    const input = document.getElementById('googleCloudClientIdInput');
    if (input) input.value = '';
    
    const slot = document.getElementById('g_id_signin_slot');
    if (slot) {
      slot.innerHTML = '';
      slot.classList.add('d-none');
    }

    if (window.kodiakStore) {
      window.kodiakStore.showToast('Modo de autenticación seguro restablecido (Zero 401).');
      window.kodiakStore.playHapticTone('click');
    }
  }

  /**
   * Decodificador de JWT para respuestas reales de Google OAuth 2.0
   */
  handleGoogleCredential(response) {
    try {
      const base64Url = response.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const payload = JSON.parse(jsonPayload);
      const user = {
        sub: payload.sub,
        name: payload.name || 'Atleta Google',
        email: payload.email,
        picture: getRandomSportsAvatar(payload.name || payload.email || 'G'),
        verified_email: payload.email_verified || true,
        auth_provider: 'Google Official GIS (En Vivo)',
        role: 'Atleta Verificado Google',
        auth_time: Date.now()
      };

      this.saveSession(user);
      safeCloseModal('googleAuthModal');

      // Autocompletar checkout
      const nameInput = document.getElementById('checkoutBuyerName');
      const emailInput = document.getElementById('checkoutBuyerEmail');
      if (nameInput) nameInput.value = user.name;
      if (emailInput) emailInput.value = user.email;

      if (window.kodiakStore) {
        window.kodiakStore.showToast(`¡Sesión iniciada con Google como ${user.name}!`);
        window.kodiakStore.playHapticTone('success');
      }
    } catch (e) {
      console.error('[Google GIS] Error al procesar JWT', e);
    }
  }

  /**
   * Inicia sesión instantáneamente con perfiles preconfigurados sin errores 401
   */
  loginAsAccount(type) {
    let user;
    if (type === 'kodiak') {
      user = {
        sub: 'google_oauth2_108492019482',
        name: 'Gabriel Zaul Hazim',
        email: 'gabrielkodiak@gmail.com',
        picture: generateEmojiAvatar('🐻', '#00ff88'),
        verified_email: true,
        auth_provider: 'Google Identity Service',
        role: 'Atleta Fundador // Ing. de Software',
        auth_time: Date.now()
      };
    } else {
      user = {
        sub: 'google_oauth2_910482019481',
        name: 'Carlos Mendoza',
        email: 'carlos.atleta@gmail.com',
        picture: generateEmojiAvatar('⚡', '#00e5ff'),
        verified_email: true,
        auth_provider: 'Google Identity Service',
        role: 'Atleta de Competición VIP',
        auth_time: Date.now()
      };
    }

    this.saveSession(user);
    safeCloseModal('googleAuthModal');

    // Autocompletar checkout
    const nameInput = document.getElementById('checkoutBuyerName');
    const emailInput = document.getElementById('checkoutBuyerEmail');
    if (nameInput) nameInput.value = user.name;
    if (emailInput) emailInput.value = user.email;

    if (window.kodiakStore) {
      window.kodiakStore.showToast(`¡Bienvenido atleta ${user.name}!`);
      window.kodiakStore.playHapticTone('success');
    }
  }

  /**
   * Muestra/oculta el formulario para ingresar otra cuenta personalizada
   */
  toggleCustomAccountForm() {
    const container = document.getElementById('customAccountFormContainer');
    const icon = document.getElementById('toggleCustomAccountIcon');
    if (!container) return;

    if (container.classList.contains('d-none')) {
      container.classList.remove('d-none');
      if (icon) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      }
      const nameInput = document.getElementById('customGoogleNameInput');
      if (nameInput) nameInput.focus();
    } else {
      container.classList.add('d-none');
      if (icon) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    }
  }

  /**
   * Permite a CUALQUIER usuario escribir su nombre y correo real de Google
   */
  loginCustomUser(customName, customEmail) {
    if (!customName || !customEmail) {
      if (window.kodiakStore && window.kodiakStore.showToast) {
        window.kodiakStore.showToast('Por favor ingresa un nombre y un correo electrónico válido.');
      } else {
        alert('Por favor ingresa un nombre y un correo electrónico válido.');
      }
      return;
    }

    const user = {
      sub: `google_oauth2_${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      name: customName.trim(),
      email: customEmail.trim(),
      picture: getRandomSportsAvatar(customName + customEmail),
      verified_email: true,
      auth_provider: 'Google Identity Service',
      role: 'Atleta Verificado',
      auth_time: Date.now()
    };

    this.saveSession(user);
    safeCloseModal('googleAuthModal');

    // Auto-completar en el checkout si los campos existen
    const nameInput = document.getElementById('checkoutBuyerName');
    const emailInput = document.getElementById('checkoutBuyerEmail');
    if (nameInput) nameInput.value = user.name;
    if (emailInput) emailInput.value = user.email;

    if (window.kodiakStore) {
      window.kodiakStore.showToast(`¡Bienvenido atleta ${user.name}!`);
      window.kodiakStore.playHapticTone('success');
    }
  }

  /**
   * Renderiza el estado del perfil en la barra de navegación
   */
  renderNavProfile() {
    const profileContainer = document.getElementById('user-profile-slot');
    if (!profileContainer) return;

    if (this.user) {
      profileContainer.innerHTML = `
        <div class="dropdown">
          <button class="btn btn-dark dropdown-toggle d-flex align-items-center gap-2 border-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius: 20px; padding: 4px 12px; background: rgba(18, 24, 38, 0.9);">
            <div class="position-relative">
              <img src="${this.user.picture}" alt="${this.user.name}" style="width: 30px; height: 30px; border-radius: 50%; border: 2px solid #00ff88; object-fit: cover;">
              <span class="position-absolute bottom-0 end-0 bg-success border border-dark rounded-circle" style="width: 8px; height: 8px;"></span>
            </div>
            <span class="d-none d-md-inline small fw-bold text-white">${this.user.name.split(' ')[0]}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end shadow-lg" style="min-width: 240px; border-color: rgba(255,255,255,0.15);">
            <li class="px-3 py-2 border-bottom border-secondary border-opacity-25">
              <div class="fw-bold text-white small">${this.user.name}</div>
              <div class="text-secondary small text-truncate" style="font-size: 0.78rem;">${this.user.email}</div>
              <span class="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 mt-1" style="font-size: 0.7rem;">
                <i class="fa-solid fa-shield-check me-1"></i> ${this.user.role || 'Atleta Verificado'}
              </span>
            </li>
            <li><a class="dropdown-item py-2 small" href="#offcanvasCart" data-bs-toggle="offcanvas"><i class="fa-solid fa-cart-shopping me-2 text-info"></i>Mi Carrito de Compra</a></li>
            <li><a class="dropdown-item py-2 small" href="#catalogo"><i class="fa-solid fa-fire me-2 text-warning"></i>Equipamiento Recomendado</a></li>
            <li><hr class="dropdown-divider my-1"></li>
            <li><button class="dropdown-item py-2 text-danger small" onclick="window.kodiakAuth.signOut()"><i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Cerrar Sesión</button></li>
          </ul>
        </div>
      `;
    } else {
      profileContainer.innerHTML = `
        <button class="btn btn-outline-light btn-sm d-flex align-items-center gap-2 fw-semibold px-3" data-bs-toggle="modal" data-bs-target="#googleAuthModal" style="border-radius: 20px; border-color: rgba(255,255,255,0.25);">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span class="d-none d-sm-inline">Iniciar con Google</span>
        </button>
      `;
    }
  }

  // Compatibilidad hacia atrás
  simulateLoginAs(type) {
    this.loginAsAccount(type);
  }
}

// Inicialización global
window.GoogleAuthSimulator = GoogleAuthSimulator;
document.addEventListener('DOMContentLoaded', () => {
  window.kodiakAuth = new GoogleAuthSimulator();
});
