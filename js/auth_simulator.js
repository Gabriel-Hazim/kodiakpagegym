/**
 * ==============================================================================
 * KODIAK FORCELAB — SIMULADOR DE AUTENTICACIÓN GOOGLE IDENTITY SERVICES (OAuth 2.0)
 * Plataforma: Kodiak ForceLab Commercial E-Commerce Platform
 * Dirección Técnica: Gabriel Zaul Hazim Martínez (Kodiak)
 * 
 * ARQUITECTURA DE CLIENTE:
 * 1. Simulación visual del diálogo "Sign in with Google" (Google One Tap).
 * 2. Emisión de Token JWT simulado con Payload estándar (sub, email, name, picture).
 * 3. Persistencia de sesión en localStorage ('kodiak_user_session').
 * 4. Actualización reactiva del DOM (Navbar Profile & Prefill en Checkout).
 * ==============================================================================
 */

class GoogleAuthSimulator {
  constructor() {
    this.storageKey = 'kodiak_user_session';
    this.user = this.loadSession();
    this.initUI();
  }

  loadSession() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('[GoogleAuth] Error al leer sesión de localStorage', e);
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
    // Despachar evento para sincronizar módulos
    window.dispatchEvent(new CustomEvent('kodiak-auth-change', { detail: this.user }));
  }

  signOut() {
    this.user = null;
    localStorage.removeItem(this.storageKey);
    this.renderNavProfile();
    window.dispatchEvent(new CustomEvent('kodiak-auth-change', { detail: null }));
  }

  initUI() {
    this.renderNavProfile();
  }

  /**
   * Renderiza el avatar o el botón de Google en el Header
   */
  renderNavProfile() {
    const profileContainer = document.getElementById('user-profile-slot');
    if (!profileContainer) return;

    if (this.user) {
      profileContainer.innerHTML = `
        <div class="dropdown">
          <button class="btn btn-dark dropdown-toggle d-flex align-items-center gap-2 border-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius: 20px; padding: 4px 12px;">
            <img src="${this.user.picture}" alt="${this.user.name}" style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid #00ff88;">
            <span class="d-none d-md-inline small fw-bold text-white">${this.user.name.split(' ')[0]}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end shadow">
            <li><h6 class="dropdown-header text-info">${this.user.email}</h6></li>
            <li><span class="dropdown-item-text small text-secondary">Rol: Atleta Verificado</span></li>
            <li><hr class="dropdown-divider"></li>
            <li><button class="dropdown-item text-danger" onclick="window.kodiakAuth.signOut()"><i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Cerrar Sesión</button></li>
          </ul>
        </div>
      `;
    } else {
      profileContainer.innerHTML = `
        <button class="btn btn-outline-light btn-sm d-flex align-items-center gap-2 fw-semibold px-3" data-bs-toggle="modal" data-bs-target="#googleAuthModal" style="border-radius: 20px; border-color: rgba(255,255,255,0.2);">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span class="d-none d-sm-inline">Google Sign-In</span>
        </button>
      `;
    }
  }

  /**
   * Simula la selección de cuenta y firma de token Google OAuth
   */
  simulateLoginAs(accountType) {
    let mockAccount;
    if (accountType === 'kodiak') {
      mockAccount = {
        sub: 'google_oauth2_108293847592',
        name: 'Gabriel Zaul Hazim (Kodiak)',
        email: 'gabrielkodiak@gmail.com',
        picture: 'assets/images/wrist_wraps.svg', // avatar vectorizado
        verified_email: true,
        auth_time: Date.now()
      };
    } else {
      mockAccount = {
        sub: 'google_oauth2_874628193845',
        name: 'Atleta Profesional VIP',
        email: 'cliente.vip@kodiakforce.com',
        picture: 'assets/images/creatine_creapure.svg',
        verified_email: true,
        auth_time: Date.now()
      };
    }

    this.saveSession(mockAccount);

    // Cerrar modal de bootstrap si está abierto
    const modalEl = document.getElementById('googleAuthModal');
    if (modalEl && window.bootstrap) {
      const modal = window.bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    }
  }
}

window.GoogleAuthSimulator = GoogleAuthSimulator;
