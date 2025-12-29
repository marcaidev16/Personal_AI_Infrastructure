# Setup Rápido para Windows

## 🎯 Lo que necesitas instalar (5 minutos)

### 1. **Python y pip** (si no lo tienes)

Descarga e instala Python desde: https://www.python.org/downloads/

✅ Marca la opción **"Add Python to PATH"** durante la instalación

### 2. **yt-dlp** (extractor de transcripciones)

Abre PowerShell o Git Bash y ejecuta:

```bash
pip install yt-dlp
```

Verifica que funciona:
```bash
yt-dlp --version
```

### 3. **Node.js packages** (ya están en package.json)

```bash
npm install
```

### 4. **Configura tu API key de Gemini**

**Opción A: Variable de entorno permanente (Windows)**

1. Presiona `Win + X` y selecciona "Sistema"
2. Click en "Configuración avanzada del sistema"
3. Click en "Variables de entorno"
4. En "Variables de usuario", click "Nueva"
5. Nombre: `GEMINI_API_KEY`
6. Valor: `AIzaSyBKNNBpdhHTzcNesz0xijYOri5kw1kUh7g`
7. Click OK en todo

**Opción B: En tu sesión de terminal (temporal)**

En PowerShell:
```powershell
$env:GEMINI_API_KEY="AIzaSyBKNNBpdhHTzcNesz0xijYOri5kw1kUh7g"
```

En Git Bash:
```bash
export GEMINI_API_KEY="AIzaSyBKNNBpdhHTzcNesz0xijYOri5kw1kUh7g"
```

---

## ✅ Verificar que todo funciona

### Test 1: Extracción de transcript

```bash
node .claude/Tools/extract-transcript.mjs "https://youtube.com/watch?v=jNQXAC9IVRw" test-transcript.json
```

Debería descargar el transcript y crear `test-transcript.json`

### Test 2: Generación de imagen

```bash
node .claude/Tools/generate-image.mjs "simple stickman figure at desk" test-image.png
```

Debería crear `test-image.png`

---

## 🚀 Usar el sistema completo

Abre **Cursor** (o VS Code) en este directorio y ejecuta:

```
/transform-video https://youtube.com/watch?v=VIDEO_ID
```

Claude ejecutará todo el proceso automáticamente.

---

## 🐛 Problemas comunes en Windows

### "yt-dlp no es reconocido como comando"

**Solución:** Reinicia tu terminal después de instalar Python/pip.

### "pip no es reconocido como comando"

**Solución:**
1. Reinstala Python
2. Marca "Add Python to PATH"
3. Reinicia la terminal

### "GEMINI_API_KEY no está configurada"

**Solución:**
- En PowerShell: `$env:GEMINI_API_KEY="tu-key"`
- En Git Bash: `export GEMINI_API_KEY="tu-key"`
- O configúrala permanentemente (ver arriba)

### Scripts de Node.js no funcionan

**Solución:**
```bash
npm install
```

---

## 📁 Estructura después de generar contenido

```
C:\Users\TuUsuario\Personal_AI_Infrastructure\
├── content-projects\
│   └── 2024-12-29-nombre-video\
│       ├── transcript.json       # Transcripción
│       ├── posts.json           # Posts generados
│       ├── posts.md             # Posts legibles
│       ├── calendar.md          # Calendario 4 semanas
│       └── visuals\             # Imágenes generadas
│           ├── post-2-framework.png
│           └── post-5-leadmagnet.png
```

---

## ⚡ Quick Start (resumen)

```bash
# 1. Instalar yt-dlp
pip install yt-dlp

# 2. Instalar packages
npm install

# 3. Configurar API key
$env:GEMINI_API_KEY="AIzaSyBKNNBpdhHTzcNesz0xijYOri5kw1kUh7g"

# 4. En Cursor, ejecutar:
/transform-video https://youtube.com/watch?v=VIDEO_ID
```

**Tiempo total: ~5 minutos de setup + 5 minutos por video**

---

*Setup específico para Windows - Marc Bau*
*Última actualización: Diciembre 2024*
