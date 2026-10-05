import os

img_dir = r"c:\Users\Hazim\OneDrive\Desktop\Gabriel-documento\tienda_deportiva_kodiak\assets\images"
os.makedirs(img_dir, exist_ok=True)

new_svgs = {
    "dip_belt_streetlifting.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#241e17"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="chainSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#cbd5e1"/>
      <stop offset="80%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="beltPadded" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  <!-- Padded Lumbar Belt Arc -->
  <path d="M 120,200 C 120,90 480,90 480,200 C 480,260 120,260 120,200 Z" fill="url(#beltPadded)" stroke="#f59e0b" stroke-width="4"/>
  <path d="M 140,200 C 140,120 460,120 460,200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="8 6" fill="none"/>
  
  <!-- D-Rings on belt sides -->
  <path d="M 130,220 C 110,220 110,260 130,260" stroke="url(#chainSteel)" stroke-width="14" fill="none"/>
  <path d="M 470,220 C 490,220 490,260 470,260" stroke="url(#chainSteel)" stroke-width="14" fill="none"/>
  
  <!-- Heavy Duty Steel Chain hanging down -->
  <g stroke="url(#chainSteel)" stroke-width="12" fill="none">
    <ellipse cx="140" cy="270" rx="14" ry="24"/>
    <ellipse cx="160" cy="310" rx="14" ry="24"/>
    <ellipse cx="190" cy="350" rx="14" ry="24"/>
    <ellipse cx="230" cy="390" rx="14" ry="24"/>
    <ellipse cx="280" cy="420" rx="14" ry="24"/>
    <ellipse cx="330" cy="420" rx="14" ry="24"/>
    <ellipse cx="380" cy="390" rx="14" ry="24"/>
    <ellipse cx="420" cy="350" rx="14" ry="24"/>
    <ellipse cx="450" cy="310" rx="14" ry="24"/>
    <ellipse cx="470" cy="270" rx="14" ry="24"/>
  </g>
  
  <!-- Heavy Carabiner Lock Clip -->
  <path d="M 300,430 C 270,430 270,500 300,500 C 330,500 330,430 300,430 Z" stroke="#00ff88" stroke-width="10" fill="none"/>
  <rect x="290" y="450" width="20" height="30" fill="#f59e0b" rx="4"/>
  
  <!-- Logo Patch -->
  <rect x="230" y="160" width="140" height="40" rx="6" fill="#0b0f19" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="186" fill="#f59e0b" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">STREETLIFTING</text>
  <text x="30" y="560" fill="rgba(245, 158, 11, 0.8)" font-family="monospace" font-size="13">DIP BELT // STEEL CHAIN GRADE 80 // 300KG LOAD RATED</text>
  <circle cx="540" cy="60" r="30" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
  <text x="540" y="65" fill="#f59e0b" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">300KG</text>
</svg>""",

    "gymnastics_rings.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1f2420"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="birchWood" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="30%" stop-color="#d97706"/>
      <stop offset="70%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  
  <!-- Hanging Heavy Black Straps -->
  <line x1="190" y1="0" x2="190" y2="280" stroke="#1e293b" stroke-width="36"/>
  <line x1="410" y1="0" x2="410" y2="280" stroke="#1e293b" stroke-width="36"/>
  <!-- Numbered measurement marks on straps -->
  <line x1="172" y1="100" x2="208" y2="100" stroke="#00ff88" stroke-width="4"/>
  <line x1="172" y1="180" x2="208" y2="180" stroke="#00ff88" stroke-width="4"/>
  <line x1="392" y1="100" x2="428" y2="100" stroke="#00ff88" stroke-width="4"/>
  <line x1="392" y1="180" x2="428" y2="180" stroke="#00ff88" stroke-width="4"/>
  
  <!-- Steel Cam Buckle Clamps -->
  <rect x="175" y="130" width="30" height="20" rx="3" fill="#cbd5e1"/>
  <rect x="395" y="130" width="30" height="20" rx="3" fill="#cbd5e1"/>
  
  <!-- Left Wooden Ring -->
  <circle cx="190" cy="370" r="100" fill="none" stroke="url(#birchWood)" stroke-width="32"/>
  <circle cx="190" cy="370" r="100" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="12 8"/>
  
  <!-- Right Wooden Ring -->
  <circle cx="410" cy="370" r="100" fill="none" stroke="url(#birchWood)" stroke-width="32"/>
  <circle cx="410" cy="370" r="100" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="12 8"/>
  
  <text x="30" y="560" fill="rgba(0, 255, 136, 0.8)" font-family="monospace" font-size="13">OLYMPIC BIRCH WOOD RINGS // 32MM FIG STANDARD // 4.5M STRAPS</text>
  <circle cx="540" cy="60" r="30" fill="rgba(0, 255, 136, 0.2)" stroke="#00ff88" stroke-width="2"/>
  <text x="540" y="65" fill="#00ff88" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">32MM</text>
</svg>""",

    "whey_isolate.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#14233c"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  
  <!-- Supplement Bag / Tub -->
  <g transform="translate(300, 310)">
    <!-- Main Big Tub / Pouch -->
    <path d="M -150,-180 L 150,-180 L 170,180 C 170,200 -170,200 -170,180 Z" fill="url(#bagGrad)" stroke="#00e5ff" stroke-width="4"/>
    <!-- Lid / Seal -->
    <rect x="-160" y="-200" width="320" height="35" rx="8" fill="#1e293b" stroke="#00e5ff" stroke-width="3"/>
    
    <!-- Central Metallic Holographic Label -->
    <rect x="-130" y="-140" width="260" height="280" fill="#090d16" stroke="#00e5ff" stroke-width="2" rx="8"/>
    <text x="0" y="-95" fill="#00e5ff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="30" text-anchor="middle" letter-spacing="3">KODIAK FORCELAB</text>
    <text x="0" y="-60" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="800" font-size="24" text-anchor="middle">100% WHEY ISOLATE</text>
    
    <!-- Badges Row -->
    <rect x="-105" y="-35" width="210" height="32" rx="6" fill="#00e5ff" opacity="0.15"/>
    <text x="0" y="-14" fill="#00e5ff" font-family="sans-serif" font-weight="bold" font-size="13" text-anchor="middle">HYDROLYZED FORMULA // ZERO SUGAR</text>
    
    <!-- Big Protein Stat Circles -->
    <g transform="translate(-65, 55)">
      <circle cx="0" cy="0" r="32" fill="#0f172a" stroke="#00ff88" stroke-width="3"/>
      <text x="0" y="-4" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">27g</text>
      <text x="0" y="14" fill="#00ff88" font-family="sans-serif" font-size="10" text-anchor="middle">PROTEIN</text>
    </g>
    <g transform="translate(65, 55)">
      <circle cx="0" cy="0" r="32" fill="#0f172a" stroke="#00e5ff" stroke-width="3"/>
      <text x="0" y="-4" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">6.5g</text>
      <text x="0" y="14" fill="#00e5ff" font-family="sans-serif" font-size="10" text-anchor="middle">BCAA</text>
    </g>
    <text x="0" y="125" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">NET WT: 2000G (4.4 LBS) // 66 SERVINGS</text>
  </g>
  
  <text x="30" y="560" fill="rgba(0, 229, 255, 0.8)" font-family="monospace" font-size="13">WHEY PROTEIN ISOLATE // CFM MICRO-FILTERED // 2000G</text>
  <circle cx="540" cy="60" r="30" fill="rgba(0, 229, 255, 0.2)" stroke="#00e5ff" stroke-width="2"/>
  <text x="540" y="65" fill="#00e5ff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">2KG</text>
</svg>""",

    "beta_alanine.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#301524"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="canisterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="50%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  
  <g transform="translate(300, 310)">
    <!-- Cap -->
    <rect x="-95" y="-180" width="190" height="40" rx="8" fill="#18181b" stroke="#ff0055" stroke-width="3"/>
    <!-- Bottle -->
    <rect x="-115" y="-135" width="230" height="280" rx="16" fill="url(#canisterGrad)" stroke="#ff0055" stroke-width="3"/>
    
    <!-- Label -->
    <rect x="-100" y="-105" width="200" height="220" fill="#0d1117" rx="6" stroke="rgba(255,0,85,0.4)" stroke-width="2"/>
    <text x="0" y="-65" fill="#ff0055" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="24" text-anchor="middle" letter-spacing="2">CARNOSYN®</text>
    <text x="0" y="-30" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="800" font-size="22" text-anchor="middle">BETA-ALANINE</text>
    
    <rect x="-85" y="-10" width="170" height="28" rx="4" fill="#ff0055" opacity="0.2"/>
    <text x="0" y="9" fill="#ff0055" font-family="sans-serif" font-weight="bold" font-size="11" text-anchor="middle">LACTIC ACID BUFFER</text>
    <text x="0" y="45" fill="#e2e8f0" font-family="sans-serif" font-weight="bold" font-size="15" text-anchor="middle">3200 MG / DOSE</text>
    <text x="0" y="80" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">300 GRAMS // 93 SERVINGS</text>
  </g>
  
  <text x="30" y="560" fill="rgba(255, 0, 85, 0.8)" font-family="monospace" font-size="13">CARNOSYN BETA-ALANINE // INTRA-MUSCULAR CARNOSINE SYNTHESIS // 300G</text>
  <circle cx="540" cy="60" r="30" fill="rgba(255, 0, 85, 0.2)" stroke="#ff0055" stroke-width="2"/>
  <text x="540" y="65" fill="#ff0055" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">300G</text>
</svg>""",

    "dumbbell_hex_pair.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="chromeSteel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  
  <!-- Back Dumbbell -->
  <g transform="translate(340, 240) rotate(-25)">
    <!-- Handle -->
    <rect x="-80" y="-14" width="160" height="28" rx="4" fill="url(#chromeSteel)"/>
    <!-- Left Hex -->
    <polygon points="-80,-60 -120,-30 -120,30 -80,60 -40,30 -40,-30" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
    <!-- Right Hex -->
    <polygon points="80,-60 40,-30 40,30 80,60 120,30 120,-30" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
  </g>
  
  <!-- Front Dumbbell -->
  <g transform="translate(260, 360) rotate(15)">
    <!-- Handle -->
    <rect x="-95" y="-16" width="190" height="32" rx="4" fill="url(#chromeSteel)" stroke="#ffffff" stroke-width="2"/>
    <line x1="-50" y1="-16" x2="-50" y2="16" stroke="#475569" stroke-width="3"/>
    <line x1="0" y1="-16" x2="0" y2="16" stroke="#00ff88" stroke-width="4"/>
    <line x1="50" y1="-16" x2="50" y2="16" stroke="#475569" stroke-width="3"/>
    
    <!-- Left Hex Head Rubberized -->
    <polygon points="-95,-80 -145,-40 -145,40 -95,80 -45,40 -45,-40" fill="#0f172a" stroke="#00ff88" stroke-width="4"/>
    <text x="-95" y="8" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="22" text-anchor="middle">20 KG</text>
    
    <!-- Right Hex Head Rubberized -->
    <polygon points="95,-80 45,-40 45,40 95,80 145,40 145,-40" fill="#0f172a" stroke="#00ff88" stroke-width="4"/>
    <text x="95" y="8" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="22" text-anchor="middle">20 KG</text>
  </g>
  
  <text x="30" y="560" fill="rgba(0, 255, 136, 0.8)" font-family="monospace" font-size="13">RUBBER HEX DUMBBELLS PAIR // 20KG X 2 // ERGONOMIC CHROME HANDLE</text>
  <circle cx="540" cy="60" r="30" fill="rgba(0, 255, 136, 0.2)" stroke="#00ff88" stroke-width="2"/>
  <text x="540" y="65" fill="#00ff88" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">PAR</text>
</svg>""",

    "fat_gripz_cone.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#172e25"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="rubberGrip" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00ff88"/>
      <stop offset="50%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  
  <g transform="translate(300, 300) rotate(-15)">
    <!-- Thick Cylinder Body -->
    <rect x="-140" y="-85" width="280" height="170" rx="30" fill="url(#rubberGrip)" stroke="#ffffff" stroke-width="4"/>
    <!-- Center Slit for barbell -->
    <line x1="-140" y1="0" x2="140" y2="0" stroke="#064e3b" stroke-width="8"/>
    
    <!-- Cross knurling / diamond texture marks -->
    <g stroke="rgba(0,0,0,0.3)" stroke-width="4">
      <line x1="-100" y1="-80" x2="-60" y2="80"/>
      <line x1="-60" y1="-80" x2="-20" y2="80"/>
      <line x1="-20" y1="-80" x2="20" y2="80"/>
      <line x1="20" y1="-80" x2="60" y2="80"/>
      <line x1="60" y1="-80" x2="100" y2="80"/>
      
      <line x1="-60" y1="80" x2="-100" y2="-80"/>
      <line x1="-20" y1="80" x2="-60" y2="-80"/>
      <line x1="20" y1="80" x2="-20" y2="-80"/>
      <line x1="60" y1="80" x2="20" y2="-80"/>
      <line x1="100" y1="80" x2="60" y2="-80"/>
    </g>
    
    <!-- Center Logo Plate -->
    <rect x="-70" y="-30" width="140" height="60" rx="10" fill="#0b0f19" stroke="#00ff88" stroke-width="3"/>
    <text x="0" y="0" fill="#00ff88" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">FAT GRIPZ</text>
    <text x="0" y="18" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="12" text-anchor="middle">60MM CONE ADAPTER</text>
  </g>
  
  <text x="30" y="560" fill="rgba(0, 255, 136, 0.8)" font-family="monospace" font-size="13">THICK BAR ADAPTER // 60MM DIAMETER // MAXIMUM FOREARM RECRUITMENT</text>
  <circle cx="540" cy="60" r="30" fill="rgba(0, 255, 136, 0.2)" stroke="#00ff88" stroke-width="2"/>
  <text x="540" y="65" fill="#00ff88" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">60MM</text>
</svg>"""
}

for fname, content in new_svgs.items():
    with open(os.path.join(img_dir, fname), "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generado {fname}")

print("Nuevos SVGs creados exitosamente.")
