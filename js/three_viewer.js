/**
 * ==============================================================================
 * KODIAK FORCELAB — VISOR INTERACTIVO 3D DE EQUIPAMIENTO DEPORTIVO (THREE.JS)
 * Plataforma: Kodiak ForceLab Commercial E-Commerce Platform
 * Dirección Técnica: Gabriel Zaul Hazim Martínez (Kodiak)
 * 
 * ARQUITECTURA GRÁFICA WEBGL:
 * 1. Escena y Cámara de Perspectiva con Renderizado WebGL Antialiasing.
 * 2. Modelo Procedural 3D de Alta Precisión: Mancuerna Hexagonal Profesional de 24kg
 *    compuesta por agarre cilíndrico estriado y cabezales hexagonales biselados.
 * 3. Sistema de Iluminación de Estudio de Alto Contraste (Ambiental, Direccional y Rim Light).
 * 4. Control orbital táctil y de ratón con inercia y zoom suave.
 * ==============================================================================
 */

class Kodiak3DViewer {
  constructor(canvasContainerId = 'threejs-canvas-viewport') {
    this.container = document.getElementById(canvasContainerId);
    if (!this.container) {
      console.warn(`[Kodiak3DViewer] Contenedor #${canvasContainerId} no encontrado.`);
      return;
    }

    this.isRotating = true;
    this.currentMaterialType = 'black'; // 'black', 'chrome', 'gold'
    this.modelGroup = null;

    // Variables de control orbital interactivo
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.rotationVelocity = { x: 0, y: 0 };

    this.initThree();
    this.buildProceduralDumbbell();
    this.setupLighting();
    this.setupControls();
    this.setupEventListeners();
    this.animate();
  }

  initThree() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 460;

    // 1. Escena
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x0a0e17, 0.025);

    // 2. Cámara de Perspectiva
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 3, 14);

    // 3. Renderizador WebGL
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);
  }

  setupLighting() {
    // Luz ambiental suave
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(this.ambientLight);

    // Luz Direccional Principal (Simulación foco de gimnasio)
    this.mainLight = new THREE.DirectionalLight(0x00ff88, 1.8);
    this.mainLight.position.set(10, 15, 12);
    this.mainLight.castShadow = true;
    this.scene.add(this.mainLight);

    // Luz Secundaria de Relleno (Cyber Cyan)
    this.fillLight = new THREE.PointLight(0x00e5ff, 2.2, 30);
    this.fillLight.position.set(-10, 8, -6);
    this.scene.add(this.fillLight);

    // Luz de Borde Trasera (Rim Light blanca para acentuar silueta)
    this.rimLight = new THREE.DirectionalLight(0xffffff, 1.0);
    this.rimLight.position.set(0, -10, -10);
    this.scene.add(this.rimLight);
  }

  buildProceduralDumbbell() {
    this.modelGroup = new THREE.Group();

    // Materiales Dinámicos
    this.materials = {
      handle: new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        metalness: 0.85,
        roughness: 0.35
      }),
      black: new THREE.MeshStandardMaterial({
        color: 0x181e29,
        metalness: 0.25,
        roughness: 0.55
      }),
      chrome: new THREE.MeshStandardMaterial({
        color: 0xf1f5f9,
        metalness: 0.95,
        roughness: 0.15
      }),
      gold: new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.85,
        roughness: 0.25
      }),
      accentNeon: new THREE.MeshBasicMaterial({
        color: 0x00ff88
      })
    };

    // 1. Barra Central con textura de moleteado estriado
    const handleGeo = new THREE.CylinderGeometry(0.35, 0.35, 5.5, 32);
    const handleMesh = new THREE.Mesh(handleGeo, this.materials.handle);
    handleMesh.rotation.z = Math.PI / 2;
    handleMesh.castShadow = true;
    this.modelGroup.add(handleMesh);

    // Anillos protectores internos
    const ringGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.2, 32);
    const leftRing = new THREE.Mesh(ringGeo, this.materials.accentNeon);
    leftRing.rotation.z = Math.PI / 2;
    leftRing.position.x = -2.6;
    this.modelGroup.add(leftRing);

    const rightRing = new THREE.Mesh(ringGeo, this.materials.accentNeon);
    rightRing.rotation.z = Math.PI / 2;
    rightRing.position.x = 2.6;
    this.modelGroup.add(rightRing);

    // 2. Cabezales Hexagonales (Izquierda y Derecha)
    // Usamos CylinderGeometry con 6 caras radiales (cilindro hexagonal)
    const hexGeo = new THREE.CylinderGeometry(2.2, 2.2, 2.4, 6);

    this.leftHexHead = new THREE.Mesh(hexGeo, this.materials[this.currentMaterialType]);
    this.leftHexHead.rotation.z = Math.PI / 2;
    this.leftHexHead.position.x = -3.9;
    this.leftHexHead.castShadow = true;
    this.leftHexHead.receiveShadow = true;
    this.modelGroup.add(this.leftHexHead);

    this.rightHexHead = new THREE.Mesh(hexGeo, this.materials[this.currentMaterialType]);
    this.rightHexHead.rotation.z = Math.PI / 2;
    this.rightHexHead.position.x = 3.9;
    this.rightHexHead.castShadow = true;
    this.rightHexHead.receiveShadow = true;
    this.modelGroup.add(this.rightHexHead);

    // 3. Tapas Exteriores con Emblema 24KG
    const capGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.1, 6);
    const leftCap = new THREE.Mesh(capGeo, this.materials.handle);
    leftCap.rotation.z = Math.PI / 2;
    leftCap.position.x = -5.15;
    this.modelGroup.add(leftCap);

    const rightCap = new THREE.Mesh(capGeo, this.materials.handle);
    rightCap.rotation.z = Math.PI / 2;
    rightCap.position.x = 5.15;
    this.modelGroup.add(rightCap);

    // Inclinación inicial estética
    this.modelGroup.rotation.x = 0.35;
    this.modelGroup.rotation.y = 0.5;

    this.scene.add(this.modelGroup);
  }

  setMaterial(type) {
    if (!this.materials[type]) return;
    this.currentMaterialType = type;
    this.leftHexHead.material = this.materials[type];
    this.rightHexHead.material = this.materials[type];
  }

  toggleAutoRotate() {
    this.isRotating = !this.isRotating;
    return this.isRotating;
  }

  resetCamera() {
    this.camera.position.set(0, 3, 14);
    if (this.modelGroup) {
      this.modelGroup.rotation.set(0.35, 0.5, 0);
    }
  }

  setupControls() {
    const dom = this.renderer.domElement;

    dom.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    dom.addEventListener('mousemove', (e) => {
      if (!this.isDragging || !this.modelGroup) return;

      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.modelGroup.rotation.y += deltaX * 0.008;
      this.modelGroup.rotation.x += deltaY * 0.008;

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Control de Rueda de Ratón (Zoom interactivo con clamping)
    dom.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.camera.position.z += e.deltaY * 0.01;
      // Clamping de distancia de cámara
      if (this.camera.position.z < 8) this.camera.position.z = 8;
      if (this.camera.position.z > 22) this.camera.position.z = 22;
    }, { passive: false });

    // Controles Touch (Móviles)
    dom.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    dom.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1 || !this.modelGroup) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

      this.modelGroup.rotation.y += deltaX * 0.008;
      this.modelGroup.rotation.x += deltaY * 0.008;

      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    dom.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotación orbital automática cuando no se está arrastrando manualmente
    if (this.isRotating && !this.isDragging && this.modelGroup) {
      this.modelGroup.rotation.y += 0.008;
      this.modelGroup.rotation.x = 0.35 + Math.sin(Date.now() * 0.001) * 0.12;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.Kodiak3DViewer = Kodiak3DViewer;
