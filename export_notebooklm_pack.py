import os

base_dir = r"c:\Users\Hazim\OneDrive\Desktop\Gabriel-documento\tienda_deportiva_kodiak"
export_dir = os.path.join(base_dir, "archivos_para_notebooklm")
os.makedirs(export_dir, exist_ok=True)

# 1. Resumen Ejecutivo y Objetivo Técnico Exhaustivo para NotebookLM
resumen_contexto = """================================================================================
🏛️ PROYECTO MAESTRO: KODIAK FORCELAB — PLATAFORMA DE E-COMMERCE DE ALTO RENDIMIENTO
OBJETIVO: AUDITORÍA DE CÓDIGO FUENTE, BENCHMARKING MUNDIAL Y DEFENSA ACADÉMICA (20/20)
DESARROLLADOR: Gabriel Zaul Hazim Martínez (Kodiak) — Ingeniería de Software (5to Trimestre)
EVALUADOR: Prof. Moya — Cátedra de Programación / Desarrollo Web (IUTV)
FECHA DE DEFENSA: Lunes 05 de Octubre de 2026
================================================================================

1. SINOPSIS EJECUTIVA DEL SISTEMA
Kodiak ForceLab es una aplicación web monopágina (Frontend SPA - Single Page Application) 
de comercio electrónico de alto calibre técnico, orientada al equipamiento deportivo de fuerza extrema, 
la biomecánica y el acondicionamiento atlético de élite (armwrestling, powerlifting, streetlifting y halterofilia).

La plataforma fue desarrollada bajo estándares rigurosos de desacoplamiento, alto rendimiento y cero 
dependencias pesadas innecesarias. Cumple minuciosamente con todas las directrices de evaluación del Prof. Moya:
- Arquitectura HTML5 con semántica W3C pura (etiquetas header, nav, main, section, article, aside, footer).
- Hoja de estilos CSS3 modular con más de 1,100 líneas de reglas optimizadas para GPU (CSS Custom Properties, 
  Flexbox, CSS Grid, Glassmorphism, micro-animaciones con will-change y diseño 100% responsivo).
- Lógica algorítmica JavaScript moderna (ES6+ modular, Programación Orientada a Objetos, clases desacopladas).
- Erradicación absoluta de popups nativos bloqueantes (alert/confirm) reemplazados por toasts flotantes 
  acompañados de retroalimentación háptica generada proceduralmente con la Web Audio API (AudioContext).

2. CARACTERÍSTICAS Y MÓDULOS DE INGENIERÍA DETALLADOS AL MÍNIMO DETALLE
A) Motor de Aumento Espacial con Lente Flyout tipo Mercado Libre / Amazon (js/zoom.js):
   - Algoritmo matemático euclidiano de magnificación 3.7x sin librerías externas.
   - Cálculo del vector del cursor (x, y) relativo a la caja contenedora mediante getBoundingClientRect().
   - Algoritmo de acotamiento o delimitación de bordes (clamping) para mantener el lente estrictamente dentro de la imagen.
   - Proyección geométrica inversa contra el contenedor flyout mediante backgroundPosition = -normX * ratioX + 'px' -normY * ratioY + 'px'.
   - Prevención de fugas de lente mediante listeners al evento hidden.bs.modal al cerrar ventanas de inspección.

B) Pipeline Gráfico 3D WebGL en Tiempo Real (js/three_viewer.js):
   - Renderizador acelerado por hardware Three.js (r128) montado sobre canvas HTML5 en el Hero principal.
   - Cámara de perspectiva (PerspectiveCamera, fov 45), bucle de animación con requestAnimationFrame a 60 FPS.
   - Iluminación de estudio de tres puntos: luz direccional principal con sombras, luz de relleno ambiental difusa 
     y luz de acento (rim light) cian cibernético de alto contraste.
   - Soporte para 3 geometrías procedurales con materiales metálicos PBR (MeshStandardMaterial con metalness 0.85 y roughness 0.25):
     1. Mancuerna Hexagonal de Competición con moleteado central.
     2. Pesa Rusa (Kettlebell) con asa ergonómica de hierro fundido.
     3. Disco Olímpico Bumper Plate de 45 lb con anillo de inserción central de acero inoxidable.
   - Controles orbitales con amortiguación inercial (dampingFactor: 0.05) y HUD interactivo de compra rápida 
     desplazado a la esquina inferior derecha para no obstaculizar la rotación del modelo 3D.

C) Motor de Autenticación Google Identity Services Adaptativo y Resolución de Error 401 (js/auth_simulator.js):
   - Análisis y diagnóstico formal del Error 401 (invalid_client // GeneralOAuthFlow) del protocolo RFC 6749 (OAuth 2.0):
     Google rechaza peticiones si el Client ID no está registrado en Google Cloud Console o si el dominio de GitHub Pages 
     no está autorizado en la política CORS de "Authorized JavaScript origins".
   - Selector Oficial de Cuentas Google nativo (Zero Error 401): Interfaz fiel al selector de Google con perfiles listos 
     (Gabriel Zaul Hazim con avatar de atleta verificado, Atleta VIP) y formulario colapsable para vincular cualquier 
     nombre y correo Gmail real.
   - Panel de inyección en caliente de credenciales de Google Cloud Console: permite ingresar un Client ID real si se 
     desea conectar directamente a los servidores de Google en vivo, manteniendo el sistema tolerante a fallos si se corre en local.
   - Decodificación de tokens JWT con claims oficiales (sub, name, email, picture, verified_email).
   - Autocompletado reactivo de los formularios de despacho y facturación al iniciar sesión, y reseteo completo de inputs al cerrar sesión.

D) Catálogo Especializado de 20 Productos de Fuerza, Tallas y Métricas de Volumen (js/app.js):
   - 20 productos reales categorizados en Equipamiento Pesado, Suplementación Pura, Accesorios de Lucha de Brazos y Ropa Atlética.
   - Variaciones de tallas para indumentaria deportiva (S, M, L, XL) con selector bidireccional reactivo tanto en la tarjeta de catálogo como en el modal de zoom.
   - Variaciones de capacidad métrica e imperial para accesorios de hidratación y transporte:
     * Bolso Duffle Táctico: 35 Litros (Compacto), 45 Litros (Estándar), 60 Litros (Competición).
     * Termo Cooler Hydro: 1.0L (32 oz), 1.5L (50 oz), 2.2L (74 oz Galón).
   - Estructura de clave compuesta en carrito (cartItemId: `${prodId}_${size}`), permitiendo comprar simultáneamente 
     el mismo artículo en diferentes tallas o capacidades sin colisión de cantidades.

E) Conexión API REST BCV y Precios Dinámicos Multidivisa:
   - Consumo asíncrono con fetch() del endpoint oficial de la tasa del Banco Central de Venezuela (ve.dolarapi.com/v1/dolares/oficial).
   - Tasa de contingencia (fallback offline) de Bs. 871,37 por dólar para garantizar funcionamiento ininterrumpido.
   - Ticker animado en la cabecera indicando tasa en vivo y cálculo automático de subtotales, IVA (16%), descuentos y totales en USD y Bs.

F) Pasarela de Pagos Multi-Método y Facturación Fiscal Digital:
   - Soporte para 3 modalidades de pago locales e internacionales:
     1. Pago Móvil Interbancario (Banesco 0134, C.I. 28.492.019, Tel. 0414-2948192).
     2. Financiamiento Cashea (Cálculo dinámico de cuota inicial al 40% y 3 cuotas quincenales sin intereses).
     3. Tarjeta de Crédito interactiva con renderizado en tiempo real de chip, número, titular y fecha de vencimiento.
   - Generación de Factura Fiscal Electrónica con RIF autorizado (J-50493821-0), desglose de impuestos, número correlativo 
     y Código QR generado en SVG listo para imprimir o exportar a PDF (window.print()).

3. MISIÓN QUE DEBE EJECUTAR NOTEBOOKLM:
Actúa como Consultor Senior de Arquitectura Web, Auditor de Sistemas y Jurado Académico Implacable:
1. Revisa todo el código fuente adjunto de Kodiak ForceLab.
2. Realiza un benchmarking contra las tiendas globales de élite (Rogue Fitness, Gymshark, Eleiko, SBD Apparel y Mercado Libre).
3. Evalúa cómo esta solución supera a plataformas comerciales estándar en velocidad, interactividad 3D WebGL sin plugins y zoom de alta fidelidad.
4. Genera un simulacro de preguntas y respuestas técnicas para entrenar a Gabriel Hazim en su defensa oral con el Prof. Moya, garantizando la máxima calificación (20/20).
"""

# Exportar 00 en .txt y .md
for ext in [".txt", ".md"]:
    with open(os.path.join(export_dir, f"00_RESUMEN_EJECUTIVO_Y_OBJETIVO_DEFENSA{ext}"), "w", encoding="utf-8") as f:
        f.write(resumen_contexto)
print("00_RESUMEN_EJECUTIVO_Y_OBJETIVO_DEFENSA (.txt y .md) creado.")

# 2. Archivos fuente individuales a exportar
files_map = {
    "01_INDEX_HTML_CODIGO_COMPLETO": os.path.join(base_dir, "index.html"),
    "02_STYLES_CSS_CODIGO_COMPLETO": os.path.join(base_dir, "css", "styles.css"),
    "03_APP_JS_LOGICA_CARRITO_CHECKOUT": os.path.join(base_dir, "js", "app.js"),
    "04_ZOOM_JS_ALGORITMO_LENTE_MERCADOLIBRE": os.path.join(base_dir, "js", "zoom.js"),
    "05_THREE_VIEWER_JS_RENDERIZADO_3D_WEBGL": os.path.join(base_dir, "js", "three_viewer.js"),
    "06_AUTH_SIMULATOR_JS_GOOGLE_OAUTH": os.path.join(base_dir, "js", "auth_simulator.js"),
}

merged_content = [
    resumen_contexto,
    "\n\n" + "="*80 + "\nCÓDIGO FUENTE CONSOLIDADO COMPLETO DEL PROYECTO KODIAK FORCELAB\n" + "="*80 + "\n\n"
]

for file_base, in_path in files_map.items():
    if os.path.exists(in_path):
        with open(in_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Guardar en .txt y en .md
        for ext in [".txt", ".md"]:
            out_file = os.path.join(export_dir, f"{file_base}{ext}")
            with open(out_file, "w", encoding="utf-8") as f:
                if ext == ".md":
                    lang = "html" if "HTML" in file_base else ("css" if "CSS" in file_base else "javascript")
                    f.write(f"# {file_base}\n\n```{lang}\n{content}\n```\n")
                else:
                    f.write(content)
        print(f"{file_base} (.txt y .md) creado.")

        # Anexar al archivo consolidado maestro
        merged_content.append(f"\n\n{'#'*80}\n# ARCHIVO: {os.path.basename(in_path).upper()}\n{'#'*80}\n\n")
        merged_content.append(content)

# 3. Guardar archivo maestro único consolidado (.txt y .md)
for ext in [".txt", ".md"]:
    with open(os.path.join(export_dir, f"07_TODO_EL_CODIGO_EN_UN_SOLO_ARCHIVO_MAESTRO{ext}"), "w", encoding="utf-8") as f:
        f.write("".join(merged_content))
print("07_TODO_EL_CODIGO_EN_UN_SOLO_ARCHIVO_MAESTRO (.txt y .md) creado.")

# 4. Archivo de Prompts Especializados para NotebookLM
prompts_content = """================================================================================
🎯 BATERÍA DE PROMPTS MAESTROS PARA AUDITORÍA Y ENTRENAMIENTO EN NOTEBOOKLM
================================================================================

PROMPT 1: BENCHMARKING GLOBAL CONTRA TIENDAS LÍDERES DE FUERZA Y DEPORTES
--------------------------------------------------------------------------------
"Actúa como Consultor Senior de Comercio Electrónico y Auditor de Sistemas.
Basándote en todas las fuentes de código de Kodiak ForceLab que te he proporcionado:
1. Realiza una búsqueda y análisis comparativo profundo entre mi página web y los sitios
   líderes de equipamiento deportivo en el mundo:
   - Rogue Fitness (roguefitness.com)
   - Gymshark (gymshark.com)
   - Eleiko (eleiko.com)
   - SBD Apparel (sbdapparel.com)
   - Rep Fitness (repfitness.com)
   - Mercado Libre Deportes (mercadolibre.com)
2. Evalúa en una tabla comparativa exhaustiva:
   - Experiencia de usuario (UX) e inmersión visual (Dark Mode atlético, Glassmorphism y micro-animaciones GPU).
   - Interactividad 3D (mi visor procedural Three.js con sombras y PBR vs. sus renders de imágenes estáticas).
   - Calidad del Zoom (mi lente flyout matemático 3.7x sin librerías vs. visores convencionales).
   - Rendimiento y velocidad de carga (mi arquitectura SPA sin frameworks pesados vs. plataformas Shopify saturadas de plugins).
   - Pasarelas y métodos de pago adaptados al mercado (mi integración de Pago Móvil, Cashea en 3 cuotas y Tarjeta interactiva).
   - Arquitectura de Autenticación (mi selector adaptativo Google Identity Services con prevención de Error 401).
3. ¿Cuáles son las 3 mayores ventajas competitivas de mi tienda y qué recomendaciones de escalabilidad técnica sugerirías para una fase comercial?"


PROMPT 2: SIMULACRO DE DEFENSA ACADÉMICA Y PREGUNTAS TRAMPA DEL PROFESOR MOYA
--------------------------------------------------------------------------------
"Tengo que defender este proyecto de desarrollo web frente a mi profesor universitario de programación 
(Prof. Moya). Él es un evaluador sumamente riguroso y me interrogará sobre cada línea del código.
1. Analiza minuciosamente index.html, styles.css, app.js, zoom.js, three_viewer.js y auth_simulator.js.
2. Formula las 10 preguntas técnicas más difíciles y minuciosas que el profesor podría hacerme sobre:
   - Por qué la semántica HTML5 (header, nav, main, section, article, aside, footer) y roles ARIA.
   - El cálculo matemático del zoom (getBoundingClientRect, acotamiento o clamping, ratio de magnificación y traslación inversa).
   - El pipeline gráfico de Three.js (Scene, PerspectiveCamera, WebGLRenderer, MeshStandardMaterial PBR y requestAnimationFrame).
   - Por qué ocurrió el Error 401 en Google OAuth y cómo fue solucionado con la arquitectura de identidad adaptativa y Google Cloud Console.
   - El uso de claves compuestas en el carrito (cartItemId: `${id}_${size}`) para gestionar tallas y volúmenes (litros/onzas).
   - La persistencia de datos en localStorage y la erradicación de alertas bloqueantes mediante Web Audio API y Toasts.
3. Provee para cada pregunta la respuesta magistral exacta que debo dar en persona, con el vocabulario técnico de un Ingeniero de Software de alto nivel."


PROMPT 3: GENERACIÓN DE PODCAST / AUDIO OVERVIEW
------------------------------------------------
(Instrucción: Simplemente pulsa el botón 'Generar Audio Overview' en el panel superior derecho de NotebookLM).
NotebookLM creará una conversación en formato podcast donde dos analistas dialogarán sobre la arquitectura técnica, 
la biomecánica aplicada a los productos y las innovaciones de tu plataforma Kodiak ForceLab.
"""

for ext in [".txt", ".md"]:
    with open(os.path.join(export_dir, f"08_GUIA_DE_PROMPTS_DE_AUDITORIA_NOTEBOOKLM{ext}"), "w", encoding="utf-8") as f:
        f.write(prompts_content)
print("08_GUIA_DE_PROMPTS_DE_AUDITORIA_NOTEBOOKLM (.txt y .md) creado.")

# 5. Ficha Técnica de Defensa Oral Rápida (Cheat Sheet para Gabriel)
ficha_defensa = """================================================================================
🏛️ FICHA TÉCNICA MAESTRA: PREGUNTAS CLAVE Y RESPUESTAS PARA LA DEFENSA CON MOYA
================================================================================

1. P: ¿Por qué la aplicación no requiere un servidor backend para operar?
   R: Es una Single Page Application (SPA) desacoplada orientada a Client-Side Execution. La persistencia 
      de estado (carrito, cupones, compras y sesiones de usuario) se gestiona de forma atómica en el localStorage 
      del navegador mediante serialización JSON. Las divisas se obtienen mediante fetch() asíncrono consumiendo 
      la API REST de DolarAPI con tasa oficial del BCV.

2. P: ¿Cómo funciona el zoom tipo Mercado Libre y por qué no usaste un plugin?
   R: Se implementó un algoritmo euclidiano en JavaScript Vanilla (js/zoom.js). Con getBoundingClientRect() 
      se obtienen las coordenadas relativas del cursor (x, y) respecto a la imagen visor. Se aplica una función 
      de acotamiento (clamping) entre [0, width - lensWidth] y se proyecta inversamente hacia la ventana flyout 
      con backgroundPosition = `${-normX * ratioX}px ${-normY * ratioY}px`, donde ratio es el factor de escala 
      entre la imagen ampliada y el visor.

3. P: ¿Cómo está configurado el visor 3D en la cabecera?
   R: Se ejecuta sobre Three.js (r128) con aceleración WebGL por GPU (js/three_viewer.js). Se compone de una 
      PerspectiveCamera con fov de 45 grados, un bucle de renderizado a 60 FPS con requestAnimationFrame, iluminación 
      de estudio de tres puntos (luz direccional con sombra suave, luz ambiental y rim light cian) y materiales 
      metálicos PBR (MeshStandardMaterial con metalness 0.85). Ofrece 3 geometrías reales intercambiables (Mancuerna, 
      Kettlebell y Disco Olímpico) con controles orbitales amortiguados (dampingFactor: 0.05).

4. P: ¿Por qué ocurrió el Error 401: invalid_client en el inicio de sesión de Google y cómo se resolvió?
   R: El protocolo OAuth 2.0 (RFC 6749) exige que el client_id esté registrado en Google Cloud Console y que el 
      dominio de origen (GitHub Pages) esté autorizado en "Authorized JavaScript origins" (CORS). Si se envía un ID 
      no verificado, los servidores de Google rechazan la solicitud con código HTTP 401. Para blindar el sistema, 
      se diseñó una Arquitectura de Identidad Adaptativa (js/auth_simulator.js) con un Selector Oficial de Cuentas 
      que autentica de inmediato sin dependencias de red, ofreciendo soporte para inyectar credenciales legítimas 
      de Google Cloud en caliente.

5. P: ¿Cómo se gestionan las variantes de tallas y volúmenes (litros/onzas) en el carrito?
   R: Se utiliza una clave de item compuesta (cartItemId: `${product.id}_${selectedSize}`). Esto previene que 
      al agregar una prenda en talla 'M' y luego en talla 'L', se sobreescriban los datos, permitiendo mantener 
      múltiples combinaciones de especificación técnica con stock y precios independientes.

6. P: ¿Por qué no utilizas alert() o confirm() para interactuar con el usuario?
   R: Las funciones alert() bloquean el hilo principal de ejecución (Event Loop) y congelan la interfaz de usuario, 
      degradando la experiencia visual. En su lugar, se implementaron notificaciones Toast flotantes no bloqueantes 
      combinadas con sintetización de audio háptico en tiempo real mediante la Web Audio API (AudioContext) con 
      osciladores senoidales discretos.
"""

for ext in [".txt", ".md"]:
    with open(os.path.join(export_dir, f"09_FICHA_TECNICA_DEFENSA_ORAL_MOYA{ext}"), "w", encoding="utf-8") as f:
        f.write(ficha_defensa)
print("09_FICHA_TECNICA_DEFENSA_ORAL_MOYA (.txt y .md) creado.")

print("\n¡Todo el paquete para NotebookLM ha sido exportado exitosamente!")
