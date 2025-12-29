# Personal AI Infrastructure - Marc Bau

Sistema automatizado para generar contenido de LinkedIn que atrae leads mid-market B2B (€3-8K).

---

## 🎯 ¿Qué es esto?

Un sistema completo que transforma **videos de YouTube** en **10 posts de LinkedIn** listos para publicar, con sus imágenes y calendario incluido.

**En 5 minutos:**
- ✅ Extraes transcripción del video
- ✅ Generas 6-10 posts en tu voz
- ✅ Creas infografías estilo stickman
- ✅ Obtienes calendario de 4 semanas

**Todo adaptado a tu ICP:** Directivos de empresas B2B tradicionales (no técnicos).

---

## 🚀 Inicio Rápido

### 1. Instalación (primera vez - 30 min)

```bash
# Sigue la guía completa de setup
cat Documentation/SETUP_GUIDE.md

# Necesitarás instalar:
# - YouTube MCP Server (transcripciones)
# - Nano Banana Pro (imágenes stickman)
# - Playwright (carruseles con texto)
# - Cloudinary (opcional - hosting)
# - Postis (opcional - programación)
```

### 2. Genera tu primer batch de contenido

```bash
# En Claude Code:
/transform-video https://youtube.com/watch?v=TU_VIDEO_ID

# Espera 3-5 minutos mientras:
# - Extrae la transcripción
# - Genera 10 posts en tu voz
# - Crea las imágenes/carruseles
# - Organiza todo en carpetas
```

### 3. Revisa y publica

```bash
# Lee los posts generados
cat content-projects/2024-12-29-titulo-video/posts.md

# Sube fotos personales donde se requiera
# Programa en LinkedIn (manual o con Postis)
```

---

## 📂 Estructura del Repo

```
Personal_AI_Infrastructure/
│
├── 📖 Documentation/              # Tu estrategia y contexto de negocio
│   ├── 01_SYSTEM_CONTEXT.md      # Posicionamiento, ICP, ofertas
│   ├── 02_VENTAS_B2B_PLAYBOOK.md # Metodología de ventas
│   ├── 03_LINKEDIN_STRATEGY.md   # Estrategia LinkedIn 2025
│   ├── 04_NEGOCIACION_TACTICAS.md
│   ├── 05_SCRIPTS_TEMPLATES.md
│   ├── 06_AI_STRATEGY_FRAMEWORK.md
│   ├── 07_LINKEDIN_PROFILE_OPTIMIZATION.md
│   ├── SETUP_GUIDE.md            # ⭐ Guía de instalación
│   └── LINKEDIN_CONTENT_SYSTEM.md # ⭐ Cómo usar el sistema
│
├── 🤖 .claude/
│   ├── Agents/
│   │   ├── LinkedInWriter.md     # ⭐ Genera posts en tu voz
│   │   └── VisualCreator.md      # ⭐ Crea imágenes stickman
│   ├── Commands/
│   │   └── transform-video.md    # ⭐ Comando principal
│   └── Skills/
│       ├── LinkedIn/
│       │   ├── SKILL.md          # Sistema completo generación
│       │   └── QUICK_REFERENCE.md
│       └── Writing/
│           ├── WRITING_CORE.md   # ⭐ Principios de escritura
│           └── POST_STRATEGIES.md # ⭐ Las 5 estrategias
│
└── 📁 content-projects/          # Proyectos generados (git ignore)
    └── 2024-12-29-titulo-video/
        ├── posts.md              # Posts listos
        ├── calendar.md           # Calendario 4 semanas
        └── visuals/              # Imágenes generadas
```

**Archivos ⭐ = Los más importantes**

---

## 🎨 Las 5 Estrategias de Posts

El sistema usa 5 estrategias diferentes para cada video:

| Estrategia | Qué es | Visual | Ejemplo Hook |
|------------|--------|--------|--------------|
| **Historia Personal** | Anécdota tuya relacionada | Foto personal | "La semana pasada un cliente me preguntó..." |
| **Educativo/Framework** | Pasos, lista o modelo | Infografía | "3 preguntas antes de implementar IA..." |
| **Contrarian** | Desafía el consenso | Ninguno o simple | "La mayoría de proyectos de IA no deberían existir." |
| **Caso/Resultado** | Números reales | Antes/después | "De 60 horas a 20 horas. Esto es lo que hicimos." |
| **Lead Magnet** | Recurso descargable | Mockup | "He creado la checklist que uso en cada proyecto..." |

**Cada video = 2-4 temas × estrategias = 6-10 posts**

---

## 🎯 Tu ICP (El sistema está calibrado para esto)

**Quién:**
- CEO/Fundador, Director de Operaciones
- Empresa B2B servicios (€1-10M, 5-50 personas)
- Agencias, consultoras, servicios profesionales

**Qué piensa:**
- "Pierdo mucho tiempo en tareas repetitivas"
- "He probado ChatGPT pero no funciona para mi caso"
- "Debería automatizar algo pero no sé por dónde empezar"

**Lenguaje:**
✅ Usa: tiempo, horas, proceso, repetitivo, automatizar, funciona, ahorra
❌ Evita: agentes, RAG, embeddings, workflow, reimaginar, revolucionar

---

## 📖 Documentación Clave

### Para empezar:
1. **[SETUP_GUIDE.md](Documentation/SETUP_GUIDE.md)** - Instala las dependencias
2. **[LINKEDIN_CONTENT_SYSTEM.md](Documentation/LINKEDIN_CONTENT_SYSTEM.md)** - Cómo usar el sistema

### Para personalizar:
3. **[WRITING_CORE.md](.claude/Skills/Writing/WRITING_CORE.md)** - Ajusta tu voz/tono
4. **[POST_STRATEGIES.md](.claude/Skills/Writing/POST_STRATEGIES.md)** - Modifica las estrategias
5. **[LinkedInWriter.md](.claude/Agents/LinkedInWriter.md)** - Cómo funciona el agente

### Tu contexto de negocio:
6. **[01_SYSTEM_CONTEXT.md](Documentation/01_SYSTEM_CONTEXT.md)** - Posicionamiento y ofertas
7. **[03_LINKEDIN_STRATEGY.md](Documentation/03_LINKEDIN_STRATEGY.md)** - Estrategia 2025

---

## 🔧 Comandos Principales

```bash
# Generar contenido de un video
/transform-video https://youtube.com/watch?v=VIDEO_ID

# Ver los posts generados
cat content-projects/[PROJECT]/posts.md

# Ver el calendario
cat content-projects/[PROJECT]/calendar.md
```

**Comandos futuros:**
- `/edit-post [número]` - Editar post específico
- `/regenerate-visual [número]` - Regenerar imagen
- `/publish` - Programar en Postis

---

## ✍️ Cómo Escribo (Principios del Sistema)

El sistema replica tu voz siguiendo estas reglas:

### SÍ - Siempre:
- ✅ Conversacional (como en un café)
- ✅ Ejemplos con números ("15 horas", "€4.000")
- ✅ Historias reales (sin nombres de clientes)
- ✅ Admitir limitaciones ("Esto no es para todos")

### NO - Nunca:
- ❌ Jerga técnica innecesaria
- ❌ Palabras IA slop: "reimaginar", "revolucionar", "ecosistema"
- ❌ Promesas exageradas
- ❌ Emojis excesivos (max 2-3)

**Objetivo:** Sonar como TÚ escribiendo, no como ChatGPT.

---

## 🎬 Workflow Recomendado

### Semana típica:

**Lunes:** Genera contenido
```bash
/transform-video [URL]
# 1 video = 10 posts = contenido para 3-4 semanas
```

**Martes:** Revisa y edita
```
Lee todos los posts, ajusta lo que suene "muy AI"
Añade detalles personales donde falten
```

**Miércoles:** Prepara visuales
```
Sube fotos personales para posts "Historia"
Verifica infografías generadas
```

**Jueves:** Programa publicación
```
Manual: copia posts siguiendo calendar.md
Auto: /publish (si tienes Postis)
```

**Frecuencia:** 1 video/semana = 40 posts/mes = Contenido para 3 meses

---

## 💡 Tips para Mejores Resultados

### Selección de videos:
- ✅ 10-30 minutos (contenido denso)
- ✅ Con transcripción disponible
- ✅ Temas relevantes para tu ICP
- ❌ Evita muy técnicos o muy genéricos

### Revisión de posts:
- Lee TODOS antes de publicar
- Verifica números/datos correctos
- Ajusta tono si suena muy "AI"
- Añade experiencias personales

### Publicación:
- Varía estrategias semana a semana
- Alterna: personal → educativo → contrarian
- 2-3 posts/semana es óptimo
- Calidad > Cantidad

---

## 🐛 Problemas Comunes

### "No puedo extraer transcripción"
**Solución:** Ver [SETUP_GUIDE.md](Documentation/SETUP_GUIDE.md) - YouTube MCP

### "Visuales no se generan"
**Solución:** Ver [SETUP_GUIDE.md](Documentation/SETUP_GUIDE.md) - Nano Banana Pro

### "Posts suenan genéricos"
**Solución:** Elige videos con casos/historias concretas, no solo teoría

### "Imágenes no coinciden"
**Solución:** Regenera con instrucción más específica

---

## 📊 Mide lo Correcto

**NO midas (vanity metrics):**
- ❌ Likes, shares, impresiones

**SÍ mide (lead indicators):**
- ✅ Comentarios de tu ICP
- ✅ Mensajes consultando servicios
- ✅ Solicitudes de diagnóstico
- ✅ Descargas de lead magnets
- ✅ Conexiones que encajan con ICP

**Objetivo:** 1-3 conversaciones cualificadas/mes (no 1000 likes)

---

## 🔄 Próximas Mejoras Planeadas

- [ ] Comando `/edit-post` para editar posts específicos
- [ ] Comando `/regenerate-visual` para recrear imágenes
- [ ] Integración directa con Postis API
- [ ] Análisis de métricas post-publicación
- [ ] Generación automática de lead magnets
- [ ] Skill para crear carruseles multi-slide

---

## 📚 Recursos Externos

- **YouTube MCP:** https://github.com/modelcontextprotocol/servers
- **Nano Banana Pro:** https://nanobanana.pro/
- **Playwright:** https://playwright.dev/
- **Cloudinary:** https://cloudinary.com/
- **Postis:** https://postiz.com/

---

## 🤝 Customización

**Este sistema es tuyo. Ajústalo como necesites:**

1. **Cambiar tono/voz:** Edita `.claude/Skills/Writing/WRITING_CORE.md`
2. **Modificar estrategias:** Edita `.claude/Skills/Writing/POST_STRATEGIES.md`
3. **Ajustar ICP:** Actualiza `Documentation/01_SYSTEM_CONTEXT.md`
4. **Añadir estrategias:** Crea nuevas en `POST_STRATEGIES.md`

**El sistema aprende de tus ediciones.**

---

## 🎓 Aprende Más

- **[Cómo funciona LinkedInWriter](.claude/Agents/LinkedInWriter.md)**
- **[Cómo funciona VisualCreator](.claude/Agents/VisualCreator.md)**
- **[Sistema completo de Skills](.claude/Skills/LinkedIn/SKILL.md)**

---

## ✅ Checklist de Setup

Usa esto para verificar que todo está listo:

```
☐ YouTube MCP instalado y configurado
☐ Nano Banana Pro / visualkit instalado
☐ Playwright instalado
☐ Variables de entorno configuradas
☐ Primer test: /transform-video [url-corta] ejecutado
☐ Posts generados revisados
☐ Primer post publicado en LinkedIn
```

---

## 💬 Feedback

¿Algo no funciona? ¿Tienes ideas de mejora?

**El sistema mejora editando los archivos de referencia:**
- Escritura → `.claude/Skills/Writing/`
- Estrategias → `.claude/Skills/Writing/POST_STRATEGIES.md`
- Agentes → `.claude/Agents/`

**Cada ajuste que hagas el sistema lo aprende.**

---

*Sistema de Creación de Contenido LinkedIn - Marc Bau*
*Adaptado de Personal AI Infrastructure Template*
*Última actualización: Diciembre 2024*
