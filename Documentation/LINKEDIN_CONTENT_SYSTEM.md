# LinkedIn Content System - Marc Bau

## 🎯 Qué hace este sistema

Transforma videos de YouTube en **6-10 posts de LinkedIn** listos para publicar, con sus imágenes/carruseles correspondientes.

**Input:** URL de video de YouTube
**Output:** Posts profesionales + visuales en estilo stickman + calendario de publicación

---

## 🚀 Inicio Rápido

### 1. Setup inicial (solo una vez)

Sigue la guía de instalación completa:
```bash
cat Documentation/SETUP_GUIDE.md
```

**Resumen de lo que necesitas:**
- ✅ YouTube MCP Server (transcripciones)
- ✅ Nano Banana Pro (generación de imágenes)
- ✅ Playwright (carruseles con texto)
- ⚠️ Cloudinary (opcional - hosting de imágenes)
- ⚠️ Postis (opcional - programación de posts)

### 2. Generar contenido

```bash
# En Claude Code:
/transform-video https://youtube.com/watch?v=TU_VIDEO_ID
```

**El sistema hará:**
1. Extraer transcripción del video
2. Identificar 2-4 temas relevantes para tu ICP
3. Generar 6-10 posts usando las 5 estrategias
4. Crear infografías/mockups/visuales necesarios
5. Organizar todo en carpeta de proyecto
6. Generar calendario de publicación

**Tiempo estimado:** 3-5 minutos por video

### 3. Revisar y publicar

```bash
# Ver los posts generados
cat content-projects/2024-12-29-titulo-video/posts.md

# Ver el calendario
cat content-projects/2024-12-29-titulo-video/calendar.md

# Publicar (si tienes Postis configurado)
/publish
```

---

## 📁 Estructura del Sistema

```
Personal_AI_Infrastructure/
├── .claude/
│   ├── Agents/
│   │   ├── LinkedInWriter.md        # Genera los posts
│   │   └── VisualCreator.md         # Genera las imágenes
│   ├── Commands/
│   │   └── transform-video.md       # Comando principal
│   └── Skills/
│       ├── LinkedIn/
│       │   ├── SKILL.md             # Sistema completo de generación
│       │   └── QUICK_REFERENCE.md   # Referencia rápida
│       └── Writing/
│           ├── WRITING_CORE.md      # Principios de escritura
│           └── POST_STRATEGIES.md   # Las 5 estrategias
│
├── Documentation/
│   ├── 01_SYSTEM_CONTEXT.md         # Tu posicionamiento y oferta
│   ├── 02_VENTAS_B2B_PLAYBOOK.md    # Metodología de ventas
│   ├── 03_LINKEDIN_STRATEGY.md      # Estrategia LinkedIn 2025
│   ├── 04_NEGOCIACION_TACTICAS.md   # Tácticas Chris Voss
│   ├── 05_SCRIPTS_TEMPLATES.md      # Scripts listos para usar
│   ├── 06_AI_STRATEGY_FRAMEWORK.md  # Framework estratégico IA
│   ├── 07_LINKEDIN_PROFILE_OPTIMIZATION.md
│   ├── SETUP_GUIDE.md               # Guía de instalación
│   └── LINKEDIN_CONTENT_SYSTEM.md   # Este archivo
│
└── content-projects/                # Proyectos generados
    └── 2024-12-29-titulo-video/
        ├── source-transcript.md     # Transcripción original
        ├── posts.json               # Posts en JSON
        ├── posts.md                 # Posts legibles
        ├── calendar.md              # Calendario de publicación
        ├── summary-report.md        # Resumen del proyecto
        └── visuals/                 # Imágenes generadas
            ├── post-2-framework.png
            ├── post-5-leadmagnet.png
            └── ...
```

---

## 🎨 Las 5 Estrategias de Posts

Cada tema del video se transforma en hasta 5 tipos de posts diferentes:

### 1. **Historia Personal**
- **Qué es:** Anécdota personal relacionada con el tema
- **Visual:** Foto tuya trabajando / selfie natural
- **Longitud:** 150-250 palabras
- **CTA:** Suave o ninguno
- **Ejemplo:** "La semana pasada un cliente me preguntó..."

### 2. **Educativo/Framework**
- **Qué es:** Framework, pasos o modelo extraíble
- **Visual:** Infografía con los pasos (stickman style)
- **Longitud:** 200-300 palabras
- **CTA:** "Guarda esto para cuando lo necesites"
- **Ejemplo:** "3 preguntas antes de implementar IA..."

### 3. **Contrarian/Provocador**
- **Qué es:** Desafiar el consenso popular
- **Visual:** Ninguna o muy simple
- **Longitud:** 150-250 palabras
- **CTA:** "¿Estoy equivocado?"
- **Ejemplo:** "La mayoría de proyectos de IA no deberían existir."

### 4. **Caso/Resultado**
- **Qué es:** Caso real con números concretos
- **Visual:** Números destacados o antes/después
- **Longitud:** 200-300 palabras
- **CTA:** "¿Te suena familiar?"
- **Ejemplo:** "De 60 horas a 20 horas semanales. Esto es lo que hicimos."

### 5. **Lead Magnet**
- **Qué es:** Recurso descargable valioso
- **Visual:** Mockup del recurso
- **Longitud:** 150-200 palabras
- **CTA:** "Comenta [PALABRA] y te lo envío"
- **Ejemplo:** "He creado la checklist que uso antes de cada proyecto de IA."

---

## 🎯 Tu ICP (Siempre en mente)

El sistema genera contenido específicamente para:

**Quién:**
- CEO/Fundador o Director de Operaciones
- Empresa B2B servicios (agencias, consultoras)
- Facturación €1-10M, 5-50 empleados

**Qué piensa:**
- "Pierdo mucho tiempo en tareas repetitivas"
- "He probado ChatGPT pero no funciona para mi caso"
- "Debería automatizar algo pero no sé por dónde empezar"

**Qué NO quiere:**
- Jerga técnica ("agentes", "RAG", "embeddings")
- Promesas de "reemplazar tu equipo con IA"
- Soluciones genéricas
- Proyectos que nunca terminan

**Lenguaje que usa:**
✅ Tiempo, horas, proceso, repetitivo, automatizar, funciona, ahorra
❌ Agentes, MCP, skills, RAG, workflow, reimaginar, revolucionar

---

## ✍️ Principios de Escritura

El sistema sigue estos principios automáticamente:

### SÍ - Siempre usar:
- Conversacional y directo (como en un café)
- Ejemplos concretos con números ("15 horas semanales")
- Historias reales (sin nombres si es confidencial)
- Admitir limitaciones ("Esto no es para todos")
- Preguntas que hacen pensar

### NO - Evitar siempre:
- Jerga técnica innecesaria
- Palabras IA slop: "reimaginar", "revolucionar", "ecosistema"
- Promesas exageradas
- Listas de bullets interminables (max 5)
- Emojis excesivos (max 2-3)

### Calidad checklist:
```
☐ Hook engancha en primeras 2 líneas
☐ Libre de jerga técnica innecesaria
☐ Un directivo tradicional lo entendería
☐ Conecta con dolor/preocupación del ICP
☐ CTA claro (o sin CTA intencionalmente)
☐ Longitud apropiada
☐ Suena a persona real, no a ChatGPT
```

---

## 📅 Flujo de Trabajo Recomendado

### Lunes: Generar contenido
```bash
# Graba video o busca uno relevante
# Genera posts del video
/transform-video https://youtube.com/watch?v=VIDEO_ID

# Revisa los 10 posts generados
cat content-projects/YYYY-MM-DD-titulo/posts.md
```

### Martes: Editar y ajustar
```bash
# Si algún post necesita ajustes:
# Pide regenerar posts específicos
"Regenera el post 3 con un hook más fuerte"
"Acorta el post 7 a 200 palabras"
"Cambia el post 5 a estrategia Contrarian"
```

### Miércoles: Preparar visuales
```bash
# Sube fotos personales para posts tipo "Historia"
# Verifica que las infografías se generaron bien
# Si necesitas regenerar alguna imagen:
"Regenera el visual del post 2 con más énfasis en los números"
```

### Jueves: Programar publicación
```bash
# Opción A: Con Postis
/publish

# Opción B: Manual
# Copia posts uno por uno siguiendo calendar.md
# Sube las imágenes correspondientes
```

### Siguiente mes: Repetir
```bash
# 3-4 videos/mes = 24-40 posts/mes
# Suficiente para 3 posts/semana durante todo el mes
```

---

## 🔧 Comandos Útiles

### Comando principal
```bash
/transform-video URL    # Transforma video en posts
```

### Comandos de edición (futuros)
```bash
/edit-post 3            # Editar post específico
/regenerate-visual 5    # Regenerar imagen de post 5
/publish                # Programar en Postis
/export                 # Exportar para publicación manual
```

---

## 💡 Tips y Mejores Prácticas

### Para mejores resultados:

**Selección de videos:**
- ✅ Videos de 10-30 minutos (contenido denso)
- ✅ Con transcripción/subtítulos disponibles
- ✅ Temas relevantes para tu ICP
- ❌ Evita videos muy técnicos o muy genéricos

**Revisión de posts:**
- Lee TODOS los posts antes de publicar
- Verifica que los números/datos son correctos
- Ajusta el tono si alguno suena muy "AI"
- Añade detalles personales si faltan

**Visuales:**
- Usa fotos personales REALES (no stock photos)
- Las infografías deben ser legibles en móvil
- Mantén el estilo stickman consistente
- Simple > Complejo

**Publicación:**
- Varía las estrategias semana a semana
- No publiques 3 posts "Educativo" seguidos
- Alterna tono: personal → educativo → contrarian
- Mejor 2 posts/semana buenos que 5 mediocres

---

## 🐛 Troubleshooting

### "No se puede extraer transcripción"
**Causa:** Video sin subtítulos o MCP no configurado
**Solución:**
1. Verifica que el video tiene subtítulos
2. Revisa MCP config: `cat ~/.claude/mcp.json`
3. Ver SETUP_GUIDE.md para configurar YouTube MCP

### "Error generando visuales"
**Causa:** Nano Banana Pro no configurado o API key inválida
**Solución:**
1. Verifica: `echo $GEMINI_API_KEY`
2. Reconfigura: `visualkit config set GEMINI_API_KEY "key"`
3. Ver SETUP_GUIDE.md para setup completo

### "Posts suenan muy genéricos"
**Causa:** El video es muy técnico o muy genérico
**Solución:**
1. Elige videos con historias/casos concretos
2. Pide regenerar con más personalización:
   "Regenera el post 4 con un ejemplo más específico"
3. Edita manualmente añadiendo tu experiencia

### "Las imágenes no coinciden con el post"
**Causa:** Instrucción visual mal interpretada
**Solución:**
1. Regenera con instrucción más específica:
   "Regenera visual del post 2: infografía con 3 pasos numerados, cada uno con icono stickman"
2. Usa mockups simples en lugar de escenas complejas

---

## 📊 Métricas de Éxito

**No midas:**
- ❌ Likes, shares, impresiones (vanity metrics)

**Sí mide:**
- ✅ Comentarios de tu ICP (directivos, no otros consultores)
- ✅ Mensajes directos consultando servicios
- ✅ Solicitudes de diagnóstico o llamada
- ✅ Descargas de lead magnets
- ✅ Conexiones de perfiles que encajan con ICP

**Objetivo:**
1-3 conversaciones cualificadas/mes es éxito (no 1000 likes)

---

## 🎓 Recursos Adicionales

**Documentación del sistema:**
- `Documentation/SETUP_GUIDE.md` - Instalación completa
- `.claude/Skills/Writing/WRITING_CORE.md` - Principios de escritura
- `.claude/Skills/Writing/POST_STRATEGIES.md` - Las 5 estrategias
- `.claude/Skills/LinkedIn/SKILL.md` - Sistema completo

**Tu estrategia de negocio:**
- `Documentation/01_SYSTEM_CONTEXT.md` - Posicionamiento y oferta
- `Documentation/03_LINKEDIN_STRATEGY.md` - Estrategia LinkedIn 2025
- `Documentation/05_SCRIPTS_TEMPLATES.md` - Scripts y templates

**Agentes:**
- `.claude/Agents/LinkedInWriter.md` - Cómo funciona el generador
- `.claude/Agents/VisualCreator.md` - Cómo se crean las imágenes

---

## 🚀 Próximos Pasos

1. **Completa el setup:** `Documentation/SETUP_GUIDE.md`
2. **Genera tu primer batch:** `/transform-video [url-video-corto]`
3. **Revisa y ajusta:** Lee todos los posts, haz edits
4. **Publica:** Programa 3 posts esta semana
5. **Itera:** Aprende qué funciona, refina el sistema

**El sistema mejora con el uso. Cuanto más lo uses, mejor aprende tu voz.**

---

## 💬 Feedback y Mejoras

¿Encontraste un bug? ¿Tienes una idea de mejora?

**Cómo mejorar el sistema:**
1. Identifica qué no funciona (ej: "Posts muy largos")
2. Edita los documentos de referencia:
   - Escritura: `.claude/Skills/Writing/WRITING_CORE.md`
   - Estrategias: `.claude/Skills/Writing/POST_STRATEGIES.md`
3. Regenera contenido con nuevas reglas
4. El sistema aprende de tus ajustes

**El sistema es tuyo. Customízalo como necesites.**

---

*Sistema de Creación de Contenido LinkedIn - Marc Bau*
*Última actualización: Diciembre 2024*
