import os

base_dir = r"c:\Users\Hazim\OneDrive\Desktop\Gabriel-documento\tienda_deportiva_kodiak"
export_dir = os.path.join(base_dir, "archivos_para_notebooklm")
os.makedirs(export_dir, exist_ok=True)

# 1. Resumen y Contexto para NotebookLM
resumen_contexto = """================================================================================
🏛️ PROYECTO: KODIAK FORCELAB — TIENDA E-COMMERCE DE ALTO RENDIMIENTO
OBJETIVO: AUDITORÍA TÉCNICA, BENCHMARKING GLOBAL Y PREPARACIÓN DE DEFENSA ACADÉMICA
AUTOR Y DESARROLLADOR: Gabriel Zaul Hazim Martínez (Kodiak)
FECHA DE DEFENSA: Lunes 05 de Octubre de 2026 (Semestre 5, IUTV)
================================================================================

1. ¿QUÉ ES ESTE PROYECTO Y QUÉ QUEREMOS LOGRAR?
Este proyecto es una plataforma web de comercio electrónico (Frontend SPA) orientada al 
equipamiento deportivo de alta exigencia, la biomecánica y el entrenamiento de fuerza extrema 
(powerlifting, armwrestling y acondicionamiento físico de élite).

El estudiante y desarrollador Gabriel Hazim debe defender este proyecto mañana frente a su 
profesor universitario de programación (Prof. Moya). El profesor evaluará minuciosamente:
- La semántica W3C del código HTML5 (etiquetas header, nav, main, section, article, aside, footer).
- La arquitectura y rendimiento de CSS3 (diseño responsive, glassmorphism, micro-animaciones GPU).
- El rigor algorítmico y matemático en JavaScript (ES6+ modular, cero frameworks pesados).
- Las funciones estrella:
  * Zoom de aumento espacial con lente tipo Mercado Libre / Amazon (magnificación matemática 3.7x).
  * Inspección 3D interactiva en tiempo real con WebGL y Three.js (Mancuerna Hexagonal procedural).
  * Carrito de compras con persistencia en cliente (localStorage), cupones dinámicos y cálculo de IVA.
  * Pasarela de pagos multi-método simulada (Pago Móvil, Cashea en 3 cuotas y Tarjeta interactiva).
  * Emisión de Factura Fiscal Digital oficial con Código QR generado en SVG.
  * Simulación de autenticación OAuth 2.0 (Google Identity Services).

2. LO QUE NECESITO QUE HAGA NOTEBOOKLM:
Actúa como un Consultor Senior de E-Commerce, Auditor de Código y Mentor Académico de Élite.
Tu misión con todas las fuentes aportadas es:
A) Analizar todo el código fuente (HTML, CSS y JS) y validar su calidad técnica.
B) Buscar y comparar este sitio web contra las mejores tiendas de comercio electrónico de 
   equipamiento deportivo del mundo (tales como Rogue Fitness, Gymshark, Eleiko, SBD Apparel, 
   Rep Fitness, Decathlon y Mercado Libre Deportes).
C) Identificar las ventajas competitivas donde este proyecto supera o iguala a plataformas 
   gigantes (por ejemplo: carga instantánea en sub-segundos, visor 3D en WebGL en el navegador 
   sin plugins, y zoom flyout con delimitación de bordes).
D) Entrenar a Gabriel para la defensa de mañana: formular las preguntas trampa más exigentes 
   que un profesor estricto podría hacer sobre el código y proveer las respuestas técnicas 
   perfectas que garanticen la máxima calificación (20/20).
"""

with open(os.path.join(export_dir, "00_RESUMEN_EJECUTIVO_Y_OBJETIVO_DEFENSA.txt"), "w", encoding="utf-8") as f:
    f.write(resumen_contexto)
print("00 creado.")

# 2. Leer y exportar archivos individuales
files_map = {
    "01_INDEX_HTML_CODIGO_COMPLETO.txt": os.path.join(base_dir, "index.html"),
    "02_STYLES_CSS_CODIGO_COMPLETO.txt": os.path.join(base_dir, "css", "styles.css"),
    "03_APP_JS_LOGICA_CARRITO_CHECKOUT.txt": os.path.join(base_dir, "js", "app.js"),
    "04_ZOOM_JS_ALGORITMO_LENTE_MERCADOLIBRE.txt": os.path.join(base_dir, "js", "zoom.js"),
    "05_THREE_VIEWER_JS_RENDERIZADO_3D_WEBGL.txt": os.path.join(base_dir, "js", "three_viewer.js"),
    "06_AUTH_SIMULATOR_JS_GOOGLE_OAUTH.txt": os.path.join(base_dir, "js", "auth_simulator.js"),
}

merged_content = [
    resumen_contexto,
    "\n\n" + "="*80 + "\nCÓDIGO FUENTE CONSOLIDADO COMPLETO DEL PROYECTO KODIAK FORCELAB\n" + "="*80 + "\n\n"
]

for out_name, in_path in files_map.items():
    if os.path.exists(in_path):
        with open(in_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Guardar copia individual en .txt
        with open(os.path.join(export_dir, out_name), "w", encoding="utf-8") as f:
            f.write(content)
        print(f"{out_name} creado.")

        # Añadir al archivo consolidado
        merged_content.append(f"\n\n{'#'*80}\n# ARCHIVO: {os.path.basename(in_path).upper()}\n{'#'*80}\n\n")
        merged_content.append(content)

# 3. Guardar archivo maestro único consolidado
with open(os.path.join(export_dir, "07_TODO_EL_CODIGO_EN_UN_SOLO_ARCHIVO_MAESTRO.txt"), "w", encoding="utf-8") as f:
    f.write("".join(merged_content))
print("07 Maestro consolidado creado.")

# 4. Archivo de Prompts Especializados para NotebookLM
prompts_content = """================================================================================
🎯 BATERÍA DE PROMPTS MAESTROS PARA PEGAR EN NOTEBOOKLM
================================================================================

PROMPT 1: BENCHMARKING WEB GLOBAL Y COMPARACIÓN CON LAS MEJORES TIENDAS DEPORTIVAS
--------------------------------------------------------------------------------
"Actúa como Consultor Senior de Comercio Electrónico y Auditor de Sistemas.
Basándote en todas las fuentes de código de Kodiak ForceLab que te he proporcionado:
1. Realiza una búsqueda y análisis comparativo profundo entre mi página web y los sitios
   líderes de equipamiento deportivo en el mundo:
   - Rogue Fitness (roguefitness.com)
   - Gymshark (gymshark.com)
   - Eleiko (eleiko.com)
   - SBD Apparel (sbdapparel.com)
   - Mercado Libre Deportes (mercadolibre.com)
2. Evalúa en una tabla comparativa exhaustiva:
   - Experiencia de usuario (UX) e inmersión visual.
   - Interactividad 3D (mi visor Three.js vs. sus imágenes estáticas).
   - Calidad del Zoom (mi lente flyout euclidiano 3.7x vs. sus herramientas de aumento).
   - Velocidad de carga y sobrecarga de librerías (mi solución sin dependencias pesadas vs. sus plataformas Shopify/Magento saturadas de rastreadores).
   - Pasarelas y métodos de pago adaptados (mi inclusión de Pago Móvil, Cashea y tarjeta simulada en tiempo real).
3. ¿Cuáles son las 3 mayores fortalezas de mi tienda que la hacen destacar sobre competidores reales y qué 3 recomendaciones de optimización técnica sugerirías para una fase 2 comercial?"


PROMPT 2: SIMULACRO DE DEFENSA ACADÉMICA Y PREGUNTAS TRAMPA DE EVALUACIÓN
--------------------------------------------------------------------------------
"Tengo que defender este proyecto de desarrollo web mañana frente a mi profesor de programación 
(Prof. Moya). Él es un evaluador sumamente riguroso y me interrogará sobre cada detalle del código.
1. Analiza todo el código de index.html, styles.css, app.js, zoom.js y three_viewer.js.
2. Genera una lista de las 10 preguntas técnicas más difíciles y profundas que el profesor podría hacerme sobre:
   - Por qué la semántica HTML5 (header, nav, main, section, article, aside, footer) y roles ARIA.
   - El cálculo matemático del zoom (boundingClientRect, clamping, ratios y traslación inversa).
   - El pipeline gráfico de Three.js (Scene, PerspectiveCamera, WebGLRenderer, MeshStandardMaterial y requestAnimationFrame).
   - El manejo de estado y persistencia (localStorage, inmutabilidad y eventos CustomEvent).
3. Dame para cada pregunta la respuesta magistral que debo dar en persona, con tono de ingeniero analítico seguro de sí mismo."


PROMPT 3: GENERACIÓN DE PODCAST / AUDIO OVERVIEW
------------------------------------------------
(Instrucción: Simplemente pulsa el botón 'Generar Audio Overview' en el panel superior derecho de NotebookLM).
Este generará un podcast en inglés o español donde dos analistas conversarán sobre tu arquitectura web, 
la biomecánica aplicada a los productos y las decisiones de diseño.
"""

with open(os.path.join(export_dir, "08_GUIA_DE_PROMPTS_DE_AUDITORIA_NOTEBOOKLM.txt"), "w", encoding="utf-8") as f:
    f.write(prompts_content)
print("08 Prompts creado.")

print("\n¡Todo el paquete para NotebookLM ha sido exportado exitosamente!")
