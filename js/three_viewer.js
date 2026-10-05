/**
 * ==============================================================================
 * KODIAK FORCELAB — MOTOR 3D WEBGL INTERACTIVO Y UNIFICADO CON EL SCROLL
 * Plataforma: Kodiak ForceLab Commercial E-Commerce Platform
 * Dirección Técnica: Gabriel Zaul Hazim Martínez (Kodiak)
 * 
 * ARQUITECTURA GRÁFICA:
 * 1. Renderizado WebGL acelerado por GPU con Three.js (r128).
 * 2. Múltiples modelos procedurales PBR: Mancuerna Hexagonal, Kettlebell y Disco Olímpico.
 * 3. Unificación reactiva con el Scroll (Scroll-Linked Rotation & Tilt).
 * 4. Efecto Parallax reactivo a la posición del cursor en pantalla.
 * 5. Controles de órbita manuales con arrastre inercial y zoom por rueda.
 * ==============================================================================
 */

class Kodiak3DViewer {
  constructor(canvasContainerId = 'hero-threejs-viewport') {
    this.container = document.getElementById(canvasContainerId);
    if (!this.container) {
      console.warn(`[Kodiak3DViewer] Contenedor #${canvasContainerId} no encontrado.`);
      return;
    }

    this.isRotating = true;
    this.currentModelType = 'dumbbell'; // 'dumbbell', 'kettlebell', 'plate'
    this.currentMaterialType = 'black'; // 'black', 'chrome', 'gold'
    this.activeModelGroup = null;

    // Variables de interacción física y de scroll
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.scrollY = 0;
    this.mouseParallax = { x: 0, y: 0 };

    this.initThree();
    this.setupLighting();
    this.loadModel(this.currentModelType);
    this.setupControls();
    this.setupScrollAndParallax();
    this.setupEventListeners();
    this.animate();
  }

  initThree() {
    const width = this.container.clientWidth || 550;
    const height = this.container.clientHeight || 450;

    // 1. Escena con niebla suave transparente
    this.scene = new THREE.Scene();

    // 2. Cámara Frustum en Perspectiva
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 2, 13);

    // 3. Renderizador WebGL con transparencia alfa completa
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
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(this.ambientLight);

    // Luz Direccional Principal (Spotlight Neón Verde)
    this.mainLight = new THREE.DirectionalLight(0x00ff88, 2.2);
    this.mainLight.position.set(12, 18, 14);
    this.mainLight.castShadow = true;
    this.scene.add(this.mainLight);

    // Luz de Relleno Lateral (Cyber Cyan)
    this.fillLight = new THREE.PointLight(0x00e5ff, 2.5, 40);
    this.fillLight.position.set(-12, 6, -6);
    this.scene.add(this.fillLight);

    // Luz de Silueta Trasera (Rim Light blanca de alto contraste)
    this.rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
    this.rimLight.position.set(0, -10, -12);
    this.scene.add(this.rimLight);
  }

  getMaterials() {
    return {
      handle: new THREE.MeshStandardMaterial({
        color: 0xd1d5db,
        metalness: 0.9,
        roughness: 0.25
      }),
      black: new THREE.MeshStandardMaterial({
        color: 0x111827,
        metalness: 0.35,
        roughness: 0.5
      }),
      chrome: new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        metalness: 0.95,
        roughness: 0.12
      }),
      gold: new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.88,
        roughness: 0.22
      }),
      neonGreen: new THREE.MeshBasicMaterial({
        color: 0x00ff88
      }),
      neonCyan: new THREE.MeshBasicMaterial({
        color: 0x00e5ff
      })
    };
  }

  loadModel(modelType) {
    if (this.activeModelGroup) {
      this.scene.remove(this.activeModelGroup);
    }

    this.currentModelType = modelType;
    this.materials = this.getMaterials();

    if (modelType === 'dumbbell') {
      this.activeModelGroup = this.buildDumbbell();
    } else if (modelType === 'kettlebell') {
      this.activeModelGroup = this.buildKettlebell();
    } else if (modelType === 'plate') {
      this.activeModelGroup = this.buildWeightPlate();
    }

    this.activeModelGroup.rotation.x = 0.35;
    this.activeModelGroup.rotation.y = 0.6;
    this.scene.add(this.activeModelGroup);
  }

  /**
   * 1. MODELO: Mancuerna Hexagonal Profesional de 24kg
   */
  buildDumbbell() {
    const group = new THREE.Group();

    // Barra central cromada con estriado
    const handleGeo = new THREE.CylinderGeometry(0.35, 0.35, 5.6, 32);
    const handleMesh = new THREE.Mesh(handleGeo, this.materials.handle);
    handleMesh.rotation.z = Math.PI / 2;
    handleMesh.castShadow = true;
    group.add(handleMesh);

    // Anillos protectores interiores Neón
    const ringGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.2, 32);
    const leftRing = new THREE.Mesh(ringGeo, this.materials.neonGreen);
    leftRing.rotation.z = Math.PI / 2;
    leftRing.position.x = -2.6;
    group.add(leftRing);

    const rightRing = new THREE.Mesh(ringGeo, this.materials.neonGreen);
    rightRing.rotation.z = Math.PI / 2;
    rightRing.position.x = 2.6;
    group.add(rightRing);

    // Cabezales Hexagonales (Prismas hexagonales perfectos de 6 lados)
    const hexGeo = new THREE.CylinderGeometry(2.1, 2.1, 2.3, 6);
    this.headMaterialRef = this.materials[this.currentMaterialType];

    this.leftHead = new THREE.Mesh(hexGeo, this.headMaterialRef);
    this.leftHead.rotation.z = Math.PI / 2;
    this.leftHead.position.x = -3.85;
    this.leftHead.castShadow = true;
    group.add(this.leftHead);

    this.rightHead = new THREE.Mesh(hexGeo, this.headMaterialRef);
    this.rightHead.rotation.z = Math.PI / 2;
    this.rightHead.position.x = 3.85;
    this.rightHead.castShadow = true;
    group.add(this.rightHead);

    // Tapas exteriores con grabado
    const capGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.1, 6);
    const leftCap = new THREE.Mesh(capGeo, this.materials.handle);
    leftCap.rotation.z = Math.PI / 2;
    leftCap.position.x = -5.05;
    group.add(leftCap);

    const rightCap = new THREE.Mesh(capGeo, this.materials.handle);
    rightCap.rotation.z = Math.PI / 2;
    rightCap.position.x = 5.05;
    group.add(rightCap);

    return group;
  }

  /**
   * 2. MODELO: Pesa Rusa de Competición Girevoy (24kg)
   */
  buildKettlebell() {
    const group = new THREE.Group();

    // Cuerpo esférico de competición
    const sphereGeo = new THREE.SphereGeometry(2.8, 36, 36);
    this.headMaterialRef = this.materials[this.currentMaterialType];
    const body = new THREE.Mesh(sphereGeo, this.headMaterialRef);
    body.position.y = -0.5;
    body.castShadow = true;
    group.add(body);

    // Asa lisa curva de acero (35mm de diámetro)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.6, 1.2, 0),
      new THREE.Vector3(-1.6, 3.2, 0),
      new THREE.Vector3(0, 3.8, 0),
      new THREE.Vector3(1.6, 3.2, 0),
      new THREE.Vector3(1.6, 1.2, 0)
    ]);
    const handleGeo = new THREE.TubeGeometry(curve, 32, 0.35, 16, false);
    const handle = new THREE.Mesh(handleGeo, this.materials.handle);
    handle.castShadow = true;
    group.add(handle);

    // Emblema Central Neón 24KG
    const badgeGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 32);
    const badge = new THREE.Mesh(badgeGeo, this.materials.neonGreen);
    badge.rotation.x = Math.PI / 2;
    badge.position.set(0, -0.5, 2.75);
    group.add(badge);

    return group;
  }

  /**
   * 3. MODELO: Disco Olímpico Calibrado de Competición (20kg)
   */
  buildWeightPlate() {
    const group = new THREE.Group();

    // Disco Exterior con borde reforzado
    const plateGeo = new THREE.CylinderGeometry(3.8, 3.8, 0.7, 48);
    this.headMaterialRef = this.materials[this.currentMaterialType];
    const plate = new THREE.Mesh(plateGeo, this.headMaterialRef);
    plate.rotation.x = Math.PI / 2;
    plate.castShadow = true;
    group.add(plate);

    // Anillo Exterior en relieve
    const rimGeo = new THREE.TorusGeometry(3.5, 0.25, 16, 48);
    const rim = new THREE.Mesh(rimGeo, this.materials.neonCyan);
    group.add(rim);

    // Bocina central de acero inoxidable (buje de 50mm para barra olímpica)
    const hubGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.8, 32);
    const hub = new THREE.Mesh(hubGeo, this.materials.handle);
    hub.rotation.x = Math.PI / 2;
    group.add(hub);

    // Agujero central
    const holeGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.85, 32);
    const hole = new THREE.Mesh(holeGeo, new THREE.MeshBasicMaterial({ color: 0x050811 }));
    hole.rotation.x = Math.PI / 2;
    group.add(hole);

    return group;
  }

  setMaterial(type) {
    if (!this.materials[type]) return;
    this.currentMaterialType = type;
    this.materials = this.getMaterials();
    this.loadModel(this.currentModelType);
  }

  toggleAutoRotate() {
    this.isRotating = !this.isRotating;
    return this.isRotating;
  }

  resetCamera() {
    this.camera.position.set(0, 2, 13);
    if (this.activeModelGroup) {
      this.activeModelGroup.rotation.set(0.35, 0.6, 0);
    }
  }

  /**
   * VINCULACIÓN CON EL SCROLL Y PARALLAX
   */
  setupScrollAndParallax() {
    // 1. Escuchar el scroll del usuario en la ventana
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY || window.pageYOffset;
    }, { passive: true });

    // 2. Parallax de ratón sutil cuando el cursor se mueve por el Hero
    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      this.mouseParallax.x = normX * 0.45;
      this.mouseParallax.y = normY * 0.45;
    }, { passive: true });
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
      if (!this.isDragging || !this.activeModelGroup) return;

      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.activeModelGroup.rotation.y += deltaX * 0.008;
      this.activeModelGroup.rotation.x += deltaY * 0.008;

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Zoom por rueda
    dom.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.camera.position.z += e.deltaY * 0.008;
      if (this.camera.position.z < 7) this.camera.position.z = 7;
      if (this.camera.position.z > 20) this.camera.position.z = 20;
    }, { passive: false });

    // Touch en móviles
    dom.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    dom.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1 || !this.activeModelGroup) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

      this.activeModelGroup.rotation.y += deltaX * 0.008;
      this.activeModelGroup.rotation.x += deltaY * 0.008;

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

    if (this.activeModelGroup) {
      // 1. Unificación con el scroll: El modelo gira armónicamente al bajar
      const scrollRotation = this.scrollY * 0.0025;
      const scrollTilt = Math.sin(this.scrollY * 0.0015) * 0.18;

      // 2. Rotación base automática cuando no se está arrastrando con el ratón
      if (this.isRotating && !this.isDragging) {
        this.activeModelGroup.rotation.y += 0.007;
      }

      // 3. Interpolación suave de Parallax e inclinación de scroll
      this.activeModelGroup.position.y = -scrollTilt * 1.5;
      this.activeModelGroup.rotation.x = 0.35 + this.mouseParallax.y + (scrollTilt * 0.5);
      this.activeModelGroup.rotation.z = this.mouseParallax.x * 0.5;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.Kodiak3DViewer = Kodiak3DViewer;
