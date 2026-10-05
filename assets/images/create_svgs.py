import os

output_dir = r"c:\Users\Hazim\OneDrive\Desktop\Gabriel-documento\tienda_deportiva_kodiak\assets\images"
os.makedirs(output_dir, exist_ok=True)

svgs = {
    "wrist_wraps.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#192231"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="wrapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2d3748"/>
      <stop offset="50%" stop-color="#1a202c"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  <circle cx="300" cy="300" r="230" fill="none" stroke="rgba(0, 229, 255, 0.15)" stroke-width="2" stroke-dasharray="10 8"/>
  <g transform="translate(300, 300) rotate(15)">
    <!-- Main wrapped bandage roll -->
    <ellipse cx="0" cy="0" rx="180" ry="85" fill="url(#wrapGrad)" stroke="#00e5ff" stroke-width="4"/>
    <ellipse cx="0" cy="-20" rx="160" ry="70" fill="#2d3748" stroke="#ffffff" stroke-width="2" opacity="0.4"/>
    <!-- Neon striped elasticity lines -->
    <path d="M -150,-10 C -80,40 80,40 150,-10" stroke="#00e5ff" stroke-width="8" fill="none"/>
    <path d="M -140,20 C -70,70 70,70 140,20" stroke="#ff3366" stroke-width="6" fill="none"/>
    <path d="M -130,-40 C -60,10 60,10 130,-40" stroke="#00ff88" stroke-width="6" fill="none"/>
    <!-- Velcro tab -->
    <rect x="40" y="-80" width="100" height="60" rx="6" fill="#111827" stroke="#00ff88" stroke-width="3"/>
    <text x="90" y="-45" fill="#00ff88" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="16" text-anchor="middle">TITAN 24"</text>
    <!-- Thumb loop -->
    <path d="M -170,0 C -220,10 -220,70 -160,50" stroke="#111827" stroke-width="14" fill="none"/>
    <path d="M -170,0 C -220,10 -220,70 -160,50" stroke="#00e5ff" stroke-width="4" fill="none"/>
  </g>
  <text x="30" y="550" fill="rgba(0, 255, 136, 0.7)" font-family="monospace" font-size="14">HEAVY DUTY WRAPS // 24 INCH // IPF COMPLIANT</text>
  <circle cx="540" cy="60" r="30" fill="rgba(0, 229, 255, 0.2)" stroke="#00e5ff" stroke-width="2"/>
  <text x="540" y="65" fill="#00e5ff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">IPF</text>
</svg>""",

    "dumbbell_force.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1d2636"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="30%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  <g transform="translate(300, 300) rotate(-20)">
    <!-- Left Weight Plates Block -->
    <rect x="-220" y="-100" width="25" height="200" rx="8" fill="url(#plateGrad)" stroke="#475569" stroke-width="2"/>
    <rect x="-190" y="-90" width="25" height="180" rx="8" fill="url(#plateGrad)" stroke="#475569" stroke-width="2"/>
    <rect x="-160" y="-80" width="25" height="160" rx="8" fill="url(#plateGrad)" stroke="#475569" stroke-width="2"/>
    <rect x="-130" y="-70" width="25" height="140" rx="8" fill="url(#plateGrad)" stroke="#00ff88" stroke-width="3"/>
    
    <!-- Chrome Knurled Handle -->
    <rect x="-105" y="-22" width="210" height="44" rx="6" fill="url(#chromeGrad)" stroke="#e2e8f0" stroke-width="2"/>
    <!-- Knurling texture lines -->
    <line x1="-90" y1="-22" x2="-90" y2="22" stroke="#475569" stroke-width="3"/>
    <line x1="-60" y1="-22" x2="-60" y2="22" stroke="#475569" stroke-width="3"/>
    <line x1="-30" y1="-22" x2="-30" y2="22" stroke="#475569" stroke-width="3"/>
    <line x1="0" y1="-22" x2="0" y2="22" stroke="#00ff88" stroke-width="4"/>
    <line x1="30" y1="-22" x2="30" y2="22" stroke="#475569" stroke-width="3"/>
    <line x1="60" y1="-22" x2="60" y2="22" stroke="#475569" stroke-width="3"/>
    <line x1="90" y1="-22" x2="90" y2="22" stroke="#475569" stroke-width="3"/>
    
    <!-- Right Weight Plates Block -->
    <rect x="105" y="-70" width="25" height="140" rx="8" fill="url(#plateGrad)" stroke="#00ff88" stroke-width="3"/>
    <rect x="135" y="-80" width="25" height="160" rx="8" fill="url(#plateGrad)" stroke="#475569" stroke-width="2"/>
    <rect x="165" y="-90" width="25" height="180" rx="8" fill="url(#plateGrad)" stroke="#475569" stroke-width="2"/>
    <rect x="195" y="-100" width="25" height="200" rx="8" fill="url(#plateGrad)" stroke="#475569" stroke-width="2"/>
    
    <!-- Selector Dial Indicator -->
    <circle cx="215" cy="0" r="18" fill="#00ff88" stroke="#ffffff" stroke-width="2"/>
    <text x="215" y="5" fill="#0a0e17" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">24</text>
  </g>
  <text x="30" y="550" fill="rgba(0, 255, 136, 0.7)" font-family="monospace" font-size="14">ADJUSTABLE FORCE DUMBBELL // 2.5KG - 24KG // RAPID-LOCK</text>
  <circle cx="540" cy="60" r="30" fill="rgba(0, 255, 136, 0.2)" stroke="#00ff88" stroke-width="2"/>
  <text x="540" y="65" fill="#00ff88" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">24KG</text>
</svg>""",

    "kettlebell_comp.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="kbBody" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="40%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </radialGradient>
    <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="#0a0e17"/>
  <!-- Handle -->
  <path d="M 200,240 L 200,120 C 200,70 400,70 400,120 L 400,240" fill="none" stroke="url(#handleGrad)" stroke-width="40" stroke-linecap="round"/>
  <!-- Round Competition Bell Body -->
  <circle cx="300" cy="350" r="160" fill="url(#kbBody)" stroke="#38bdf8" stroke-width="4"/>
  <!-- Flat bottom cut -->
  <path d="M 210,480 L 390,480" stroke="#0c4a6e" stroke-width="12" stroke-linecap="round"/>
  <!-- Kodiak Weight Stamp -->
  <circle cx="300" cy="350" r="60" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3"/>
  <text x="300" y="345" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="32" text-anchor="middle">24</text>
  <text x="300" y="375" fill="#38bdf8" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">KG</text>
  <text x="30" y="550" fill="rgba(56, 189, 248, 0.7)" font-family="monospace" font-size="14">COMPETITION KETTLEBELL // STEEL HOLLOW CORE // 35MM HANDLE</text>
</svg>""",

    "pronator_handle.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e1e2e"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  <g transform="translate(300, 280) rotate(-10)">
    <!-- Carabiner ring attachment -->
    <path d="M -160,0 C -210,0 -210,-70 -160,-70 L -120,-70" stroke="#cbd5e1" stroke-width="16" fill="none" stroke-linecap="round"/>
    <rect x="-140" y="-75" width="25" height="15" fill="#00ff88" rx="3"/>
    
    <!-- Eccentric Pronator Cone Body -->
    <path d="M -120,-60 L 140,-90 L 160,80 L -120,60 Z" fill="url(#coneGrad)" stroke="#fbbf24" stroke-width="4"/>
    
    <!-- Heavy grip knurling grooves -->
    <line x1="-80" y1="-55" x2="-80" y2="55" stroke="#451a03" stroke-width="8"/>
    <line x1="-30" y1="-62" x2="-30" y2="60" stroke="#451a03" stroke-width="8"/>
    <line x1="20" y1="-70" x2="20" y2="65" stroke="#451a03" stroke-width="8"/>
    <line x1="70" y1="-78" x2="70" y2="70" stroke="#451a03" stroke-width="8"/>
    <line x1="120" y1="-85" x2="120" y2="75" stroke="#451a03" stroke-width="8"/>
    
    <!-- Kodiak Armwrestling Logo Plate -->
    <rect x="-40" y="-20" width="80" height="40" rx="6" fill="#111827" stroke="#fbbf24" stroke-width="2"/>
    <text x="0" y="5" fill="#fbbf24" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="16" text-anchor="middle">60MM</text>
  </g>
  <text x="30" y="550" fill="rgba(245, 158, 11, 0.7)" font-family="monospace" font-size="14">BIOMECHANICAL PRONATOR CONE // 60MM DIAMETER // ARMWRESTLING</text>
  <circle cx="540" cy="60" r="30" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
  <text x="540" y="65" fill="#f59e0b" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">60MM</text>
</svg>""",

    "creatine_creapure.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#142820"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="tubGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1f2937"/>
      <stop offset="40%" stop-color="#374151"/>
      <stop offset="80%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  <g transform="translate(300, 320)">
    <!-- Tub Lid -->
    <rect x="-140" y="-190" width="280" height="45" rx="8" fill="#111827" stroke="#00ff88" stroke-width="3"/>
    <line x1="-120" y1="-170" x2="120" y2="-170" stroke="#374151" stroke-width="4"/>
    <!-- Tub Body -->
    <path d="M -130,-145 L 130,-145 L 115,160 C 115,175 -115,175 -115,160 Z" fill="url(#tubGrad)" stroke="#1f2937" stroke-width="4"/>
    <!-- Label -->
    <rect x="-115" y="-110" width="230" height="220" fill="#0d1117" stroke="#00ff88" stroke-width="2" rx="4"/>
    <text x="0" y="-70" fill="#00ff88" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="28" text-anchor="middle" letter-spacing="2">KODIAK FUEL</text>
    <text x="0" y="-35" fill="#ffffff" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="22" text-anchor="middle">CREAPURE®</text>
    <rect x="-90" y="-15" width="180" height="26" fill="#15803d" rx="4"/>
    <text x="0" y="3" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">100% MICRONIZED MONOHYDRATE</text>
    <text x="0" y="45" fill="#9ca3af" font-family="sans-serif" font-size="13" text-anchor="middle">500 GRAMS // 100 SERVINGS</text>
    <circle cx="0" cy="80" r="18" fill="none" stroke="#00ff88" stroke-width="2"/>
    <text x="0" y="85" fill="#00ff88" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">100%</text>
  </g>
  <text x="30" y="550" fill="rgba(0, 255, 136, 0.7)" font-family="monospace" font-size="14">CREATINE MONOHYDRATE CREAPURE // ULTRA-MICRONIZED // 500G</text>
</svg>""",

    "liquid_chalk.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#241e30"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#374151"/>
      <stop offset="35%" stop-color="#f3f4f6"/>
      <stop offset="70%" stop-color="#e5e7eb"/>
      <stop offset="100%" stop-color="#9ca3af"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  <g transform="translate(300, 310)">
    <!-- Flip Cap -->
    <rect x="-35" y="-195" width="70" height="35" rx="6" fill="#111827" stroke="#a855f7" stroke-width="3"/>
    <!-- Bottle Neck -->
    <path d="M -45,-160 L 45,-160 L 75,-110 L -75,-110 Z" fill="url(#bottleGrad)"/>
    <!-- Bottle Body -->
    <rect x="-80" y="-110" width="160" height="260" rx="16" fill="url(#bottleGrad)" stroke="#cbd5e1" stroke-width="3"/>
    <!-- Label -->
    <rect x="-70" y="-80" width="140" height="190" fill="#18181b" rx="6" stroke="#a855f7" stroke-width="2"/>
    <text x="0" y="-45" fill="#a855f7" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">LIQUID GRIP</text>
    <text x="0" y="-20" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">MAGNESIO LÍQUIDO</text>
    <text x="0" y="20" fill="#a855f7" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">ZERO SLIP</text>
    <text x="0" y="60" fill="#9ca3af" font-family="sans-serif" font-size="11" text-anchor="middle">FAST-DRY ALCOHOL BASE</text>
    <text x="0" y="90" fill="#00ff88" font-family="sans-serif" font-weight="bold" font-size="13" text-anchor="middle">250 ML</text>
  </g>
  <text x="30" y="550" fill="rgba(168, 85, 247, 0.7)" font-family="monospace" font-size="14">LIQUID MAGNESIUM CHALK // 250ML // RAPID EVAPORATION</text>
</svg>""",

    "lever_belt.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#241b18"/>
      <stop offset="100%" stop-color="#0a0e17"/>
    </radialGradient>
    <linearGradient id="leatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="50%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="steelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bgGlow)"/>
  <g transform="translate(300, 300) rotate(-15)">
    <!-- Leather Belt Curve -->
    <path d="M -210,60 C -150,-130 150,-130 210,60" fill="none" stroke="url(#leatherGrad)" stroke-width="85" stroke-linecap="round"/>
    <path d="M -210,60 C -150,-130 150,-130 210,60" fill="none" stroke="#ea580c" stroke-width="4" stroke-dasharray="12 6"/>
    <!-- Belt holes -->
    <circle cx="110" cy="-20" r="5" fill="#0a0e17"/>
    <circle cx="140" cy="5" r="5" fill="#0a0e17"/>
    <circle cx="170" cy="35" r="5" fill="#0a0e17"/>
    <!-- Steel Lever Buckle -->
    <rect x="-120" y="-80" width="110" height="65" rx="8" fill="url(#steelGrad)" stroke="#ffffff" stroke-width="3"/>
    <rect x="-70" y="-70" width="20" height="45" rx="4" fill="#0f172a"/>
    <!-- Lever Arm -->
    <rect x="-160" y="-60" width="70" height="25" rx="6" fill="url(#steelGrad)" stroke="#ffffff" stroke-width="2"/>
    <circle cx="-145" cy="-48" r="5" fill="#ea580c"/>
    <!-- Embossed Kodiak text -->
    <text x="0" y="-5" fill="rgba(255,255,255,0.7)" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="18" text-anchor="middle" letter-spacing="4">KODIAK 10MM</text>
  </g>
  <text x="30" y="550" fill="rgba(234, 88, 12, 0.7)" font-family="monospace" font-size="14">POWERLIFTING LEVER BELT // 10MM GENUINE LEATHER // TITANIUM LEVER</text>
  <circle cx="540" cy="60" r="30" fill="rgba(234, 88, 12, 0.2)" stroke="#ea580c" stroke-width="2"/>
  <text x="540" y="65" fill="#ea580c" font-family="'Rajdhani', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">10MM</text>
</svg>"""
}

for filename, content in svgs.items():
    path = os.path.join(output_dir, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created {filename}")

print("All SVGs created successfully!")
