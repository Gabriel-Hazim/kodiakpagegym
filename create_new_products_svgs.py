import os

svg_dir = r"c:\Users\Hazim\OneDrive\Desktop\Gabriel-documento\tienda_deportiva_kodiak\assets\images"
os.makedirs(svg_dir, exist_ok=True)

svgs = {
    "plate_20kg.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="plateBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#080a0f"/>
    </radialGradient>
    <linearGradient id="chromeHub" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#plateBg)"/>
  
  <!-- Outer Plate Body (Urethane 450mm) -->
  <circle cx="300" cy="300" r="230" fill="#0f172a" stroke="#00e5ff" stroke-width="6"/>
  <circle cx="300" cy="300" r="215" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="12 6"/>
  <circle cx="300" cy="300" r="185" fill="#131d2e" stroke="#1e293b" stroke-width="4"/>
  
  <!-- Calibrated Letters -->
  <text x="300" y="160" fill="#00e5ff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="34" text-anchor="middle" letter-spacing="4">KODIAK FORCELAB</text>
  <text x="300" y="470" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="28" text-anchor="middle" letter-spacing="6">COMPETITION BUMPER</text>
  
  <!-- Weight Designation -->
  <text x="175" y="315" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="44" text-anchor="middle">20</text>
  <text x="425" y="315" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="44" text-anchor="middle">KG</text>
  
  <!-- Chrome Center Hub (50.4mm Olympic Barbell Bore) -->
  <circle cx="300" cy="300" r="85" fill="url(#chromeHub)" stroke="#ffffff" stroke-width="3"/>
  <circle cx="300" cy="300" r="75" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="300" cy="300" r="42" fill="#050811" stroke="#00e5ff" stroke-width="4"/>
  
  <!-- Locking Notch details -->
  <circle cx="300" cy="235" r="4" fill="#00e5ff"/>
  <circle cx="300" cy="365" r="4" fill="#00e5ff"/>
  
  <text x="30" y="565" fill="#00e5ff" font-family="monospace" font-size="13">OLYMPIC BUMPER PLATE // 20KG // IPF &amp; IWF SPEC // 450MM DIAMETER</text>
  <circle cx="530" cy="70" r="32" fill="rgba(0, 229, 255, 0.15)" stroke="#00e5ff" stroke-width="2"/>
  <text x="530" y="75" fill="#00e5ff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="15" text-anchor="middle">IPF</text>
</svg>""",

    "apparel_tshirt.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="tshirtBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#080a0f"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#tshirtBg)"/>
  
  <!-- T-Shirt Geometry (Oversized Streetlifting Cut) -->
  <g transform="translate(300, 310)">
    <!-- Base Shirt Silhouette -->
    <path d="M-80,-180 C-40,-155 40,-155 80,-180 L180,-120 L150,-40 L105,-65 L115,180 L-115,180 L-105,-65 L-150,-40 L-180,-120 Z" fill="#111827" stroke="#334155" stroke-width="4"/>
    
    <!-- Heavyweight Fabric Texture Lines -->
    <path d="M-115,180 L115,180" stroke="#00f58d" stroke-width="3"/>
    <path d="M-150,-40 L-105,-65" stroke="#334155" stroke-width="3"/>
    <path d="M150,-40 L105,-65" stroke="#334155" stroke-width="3"/>
    
    <!-- Reinforced Collar Ribbing -->
    <path d="M-80,-180 C-40,-155 40,-155 80,-180 C50,-140 -50,-140 -80,-180 Z" fill="#1e293b" stroke="#00f58d" stroke-width="3"/>
    
    <!-- Chest Brand Graphic (Kodiak Bear / ForceLab Minimalist) -->
    <rect x="-45" y="-70" width="90" height="4" fill="#00f58d"/>
    <text x="0" y="-45" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="22" text-anchor="middle" letter-spacing="3">KODIAK</text>
    <text x="0" y="-28" fill="#94a3b8" font-family="'Rajdhani', sans-serif" font-weight="700" font-size="12" text-anchor="middle" letter-spacing="4">HEAVYWEIGHT 280 GSM</text>
    <rect x="-45" y="-18" width="90" height="2" fill="#00f58d"/>
    
    <!-- Drop-shoulder Seams -->
    <line x1="-80" y1="-180" x2="-140" y2="-90" stroke="#1e293b" stroke-width="3" stroke-dasharray="6 4"/>
    <line x1="80" y1="-180" x2="140" y2="-90" stroke="#1e293b" stroke-width="3" stroke-dasharray="6 4"/>
  </g>
  
  <text x="30" y="565" fill="#00f58d" font-family="monospace" font-size="13">OVERSIZED HEAVYWEIGHT TEE // 280 GSM // DROP SHOULDER // STREETLIFTING</text>
  <circle cx="530" cy="70" r="32" fill="rgba(0, 245, 141, 0.15)" stroke="#00f58d" stroke-width="2"/>
  <text x="530" y="75" fill="#00f58d" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">280G</text>
</svg>""",

    "apparel_jogger.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="joggerBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#080a0f"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#joggerBg)"/>
  
  <!-- Tactical Athletic Jogger Pant -->
  <g transform="translate(300, 290)">
    <!-- Waistband with drawstrings -->
    <rect x="-100" y="-160" width="200" height="28" rx="6" fill="#1e293b" stroke="#00f58d" stroke-width="3"/>
    <!-- Drawstring Cords -->
    <path d="M-15,-135 C-25,-100 -20,-75 -25,-60" fill="none" stroke="#00f58d" stroke-width="3"/>
    <path d="M15,-135 C25,-100 20,-75 25,-60" fill="none" stroke="#00f58d" stroke-width="3"/>
    <circle cx="-25" cy="-58" r="4" fill="#ffffff"/>
    <circle cx="25" cy="-58" r="4" fill="#ffffff"/>
    
    <!-- Pants Body (4-Way Stretch Tapered Fit) -->
    <path d="M-95,-132 L-115,-30 L-70,180 L-35,180 L-10,-40 L10,-40 L35,180 L70,180 L115,-30 L95,-132 Z" fill="#0f172a" stroke="#334155" stroke-width="4"/>
    
    <!-- Ribbed Cuffs at Ankle -->
    <rect x="-70" y="180" width="35" height="18" rx="4" fill="#1e293b" stroke="#00f58d" stroke-width="2"/>
    <rect x="35" y="180" width="35" height="18" rx="4" fill="#1e293b" stroke="#00f58d" stroke-width="2"/>
    
    <!-- Ergonomic Knee Seams (Squat Reinforcement) -->
    <path d="M-95,45 Q-70,60 -55,45" fill="none" stroke="#00e5ff" stroke-width="3"/>
    <path d="M55,45 Q70,60 95,45" fill="none" stroke="#00e5ff" stroke-width="3"/>
    
    <!-- Waterproof Heat-sealed Zipper Pockets -->
    <line x1="-80" y1="-100" x2="-60" y2="-40" stroke="#00f58d" stroke-width="4"/>
    <line x1="80" y1="-100" x2="60" y2="-40" stroke="#00f58d" stroke-width="4"/>
    
    <!-- Brand Emblem on Thigh -->
    <text x="-65" y="10" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="12">KODIAK PRO</text>
  </g>
  
  <text x="30" y="565" fill="#00f58d" font-family="monospace" font-size="13">TACTICAL TRAINING JOGGER // 4-WAY STRETCH // YKK WATERPROOF POCKETS</text>
  <circle cx="530" cy="70" r="32" fill="rgba(0, 245, 141, 0.15)" stroke="#00f58d" stroke-width="2"/>
  <text x="530" y="75" fill="#00f58d" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">PRO</text>
</svg>""",

    "shoes_lifting.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="shoesBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#080a0f"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#shoesBg)"/>
  
  <!-- Zero-Drop Deadlift Barefoot Lifting Shoe -->
  <g transform="translate(300, 310)">
    <!-- Flat 3mm Rubber Sole Base -->
    <path d="M-180,80 L180,80 L180,95 L-180,95 Z" fill="#00f58d" stroke="#ffffff" stroke-width="2"/>
    <path d="M-175,95 L175,95" stroke="#0a0e17" stroke-width="4" stroke-dasharray="8 6"/>
    
    <!-- Shoe Upper Mesh (Ballistic Black) -->
    <path d="M-175,80 C-185,20 -150,-10 -90,0 L0,-20 L90,-70 L140,-60 L175,10 L180,80 Z" fill="#0f172a" stroke="#334155" stroke-width="4"/>
    
    <!-- Heel Counter Support Cage -->
    <path d="M-175,80 C-180,20 -150,-5 -120,-10 L-110,80 Z" fill="#1e293b" stroke="#00e5ff" stroke-width="3"/>
    
    <!-- Dual Metatarsal Lockdown Straps -->
    <rect x="-40" y="-30" width="30" height="90" rx="4" transform="rotate(15)" fill="#1e293b" stroke="#00f58d" stroke-width="3"/>
    <rect x="40" y="-45" width="30" height="90" rx="4" transform="rotate(15)" fill="#1e293b" stroke="#00f58d" stroke-width="3"/>
    <text x="35" y="15" fill="#00f58d" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="10" transform="rotate(15)">LOCKDOWN</text>
    
    <!-- Wide Toe Box Reinforcement -->
    <path d="M120,30 C150,20 175,40 180,80 L120,80 Z" fill="#1e293b" stroke="#00f58d" stroke-width="2"/>
    
    <!-- High-Grip Traction Hexagon Texture -->
    <circle cx="-80" cy="50" r="5" fill="#334155"/>
    <circle cx="-50" cy="50" r="5" fill="#334155"/>
    <circle cx="80" cy="50" r="5" fill="#334155"/>
  </g>
  
  <text x="30" y="565" fill="#00f58d" font-family="monospace" font-size="13">BAREFOOT LIFTING SHOES // ZERO-DROP 3MM SOLE // WIDE TOE BOX // DEADLIFT</text>
  <circle cx="530" cy="70" r="32" fill="rgba(0, 245, 141, 0.15)" stroke="#00f58d" stroke-width="2"/>
  <text x="530" y="75" fill="#00f58d" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">ZERO</text>
</svg>""",

    "bag_duffle.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bagBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#080a0f"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bagBg)"/>
  
  <!-- Tactical Duffle Bag 45L -->
  <g transform="translate(300, 300)">
    <!-- Main Cylinder Bag Body -->
    <rect x="-190" y="-80" width="380" height="170" rx="40" fill="#0f172a" stroke="#334155" stroke-width="5"/>
    
    <!-- Cordura 1000D Tactical Webbing Straps -->
    <rect x="-110" y="-80" width="35" height="170" fill="#1e293b" stroke="#00f58d" stroke-width="2"/>
    <rect x="75" y="-80" width="35" height="170" fill="#1e293b" stroke="#00f58d" stroke-width="2"/>
    
    <!-- Heavy Duty Padded Shoulder Handles -->
    <path d="M-100,-80 C-100,-170 65,-170 65,-80" fill="none" stroke="#00f58d" stroke-width="8" stroke-linecap="round"/>
    <rect x="-35" y="-170" width="70" height="24" rx="6" fill="#1e293b" stroke="#ffffff" stroke-width="2"/>
    
    <!-- Front Tactical MOLLE Loop System -->
    <g fill="#1e293b" stroke="#00e5ff" stroke-width="2">
      <rect x="-50" y="0" width="100" height="12" rx="3"/>
      <rect x="-50" y="24" width="100" height="12" rx="3"/>
      <rect x="-50" y="48" width="100" height="12" rx="3"/>
    </g>
    
    <!-- External Lever Belt Mounting Straps -->
    <line x1="-190" y1="20" x2="-140" y2="20" stroke="#00f58d" stroke-width="5"/>
    <line x1="140" y1="20" x2="190" y2="20" stroke="#00f58d" stroke-width="5"/>
    
    <!-- Ventilated Shoe Tunnel Pocket on Side -->
    <ellipse cx="180" cy="5" rx="10" ry="40" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
    
    <!-- Brand Monogram -->
    <text x="0" y="-30" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="3">KODIAK 45L</text>
  </g>
  
  <text x="30" y="565" fill="#00f58d" font-family="monospace" font-size="13">TACTICAL DUFFLE BAG // CORDURA 1000D // BELT CARRIER // VENTILATED SHOE TUNNEL</text>
  <circle cx="530" cy="70" r="32" fill="rgba(0, 245, 141, 0.15)" stroke="#00f58d" stroke-width="2"/>
  <text x="530" y="75" fill="#00f58d" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">45L</text>
</svg>""",

    "cooler_thermo.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="thermoBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#080a0f"/>
    </radialGradient>
    <linearGradient id="steelFlask" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="30%" stop-color="#0f172a"/>
      <stop offset="70%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#thermoBg)"/>
  
  <!-- Hydro Steel Cooler 1.5L -->
  <g transform="translate(300, 310)">
    <!-- Main Insulated Cylinder Body -->
    <rect x="-75" y="-130" width="150" height="260" rx="20" fill="url(#steelFlask)" stroke="#00e5ff" stroke-width="4"/>
    
    <!-- Silicone Non-Slip Bumper Boot at Bottom -->
    <rect x="-75" y="80" width="150" height="50" rx="14" fill="#00f58d" opacity="0.85"/>
    <text x="0" y="112" fill="#080a0f" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="16" text-anchor="middle" letter-spacing="2">SHOCKPROOF BOOT</text>
    
    <!-- Steel Flask Neck and Spout Collar -->
    <rect x="-55" y="-165" width="110" height="35" rx="6" fill="#1e293b" stroke="#ffffff" stroke-width="2"/>
    <rect x="-35" y="-195" width="70" height="30" rx="4" fill="#00f58d"/>
    
    <!-- Heavy Duty Ergonomic Carry Loop Handle -->
    <path d="M35,-180 C90,-180 90,-120 35,-120" fill="none" stroke="#00e5ff" stroke-width="8" stroke-linecap="round"/>
    
    <!-- Laser Etched Volume Gauge and Branding -->
    <line x1="-50" y1="-80" x2="-20" y2="-80" stroke="#64748b" stroke-width="2"/>
    <line x1="-50" y1="-30" x2="-20" y2="-30" stroke="#64748b" stroke-width="2"/>
    <line x1="-50" y1="20" x2="-20" y2="20" stroke="#00e5ff" stroke-width="3"/>
    
    <text x="0" y="-35" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="900" font-size="28" text-anchor="middle" letter-spacing="4">1.5L</text>
    <text x="0" y="-10" fill="#00e5ff" font-family="'Rajdhani', sans-serif" font-weight="700" font-size="14" text-anchor="middle" letter-spacing="3">HYDRO INSULATED</text>
    <text x="0" y="10" fill="#94a3b8" font-family="monospace" font-size="10" text-anchor="middle">24H COLD // 18/8 STEEL</text>
  </g>
  
  <text x="30" y="565" fill="#00e5ff" font-family="monospace" font-size="13">KODIAK HYDRO STEEL COOLER // 1500ML // TRIPLE WALL VACUUM // BPA FREE</text>
  <circle cx="530" cy="70" r="32" fill="rgba(0, 229, 255, 0.15)" stroke="#00e5ff" stroke-width="2"/>
  <text x="530" y="75" fill="#00e5ff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">1.5L</text>
</svg>"""
}

for name, content in svgs.items():
    path = os.path.join(svg_dir, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"[OK] Creado: {name}")

print("[EXITO] 6 nuevos SVGs vectoriales generados con éxito.")
