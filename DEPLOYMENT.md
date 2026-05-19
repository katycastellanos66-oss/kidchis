# 🚀 Guía de Despliegue en Cloudflare Pages

Esta guía te ayudará a desplegar KIDCHI en Cloudflare Pages de forma rápida y sencilla.

## 📋 Requisitos previos

- Cuenta de GitHub
- Cuenta de Cloudflare (gratuita)
- Este repositorio clonado o forkeado

## 🔧 Paso 1: Preparar el repositorio

El repositorio ya está configurado con:
- ✅ `package.json` - Dependencias y scripts
- ✅ `wrangler.toml` - Configuración de Cloudflare
- ✅ `_headers` - Headers HTTP optimizados
- ✅ `_redirects` - Configuración de rutas
- ✅ Archivos HTML, CSS y JavaScript listos

## 🌐 Paso 2: Conectar con Cloudflare Pages

### Opción A: Conexión automática (Recomendado)

1. Accede a [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Ve a **Pages** en el menú izquierdo
3. Haz clic en **Crear un proyecto**
4. Selecciona **Conectar a Git**
5. Autoriza a Cloudflare para acceder a GitHub
6. Selecciona tu repositorio `kidchis`
7. Configura los parámetros:
   - **Rama de producción**: `main`
   - **Comando de compilación**: `npm run build` (o déjalo vacío)
   - **Directorio de salida**: `.` (raíz del proyecto)
8. Haz clic en **Guardar e implementar**

### Opción B: Despliegue manual con Wrangler

```bash
# 1. Instalar Wrangler globalmente
npm install -g wrangler

# 2. Loguearse en Cloudflare
wrangler login

# 3. Desplegar el proyecto
wrangler pages deploy .
```

## 📝 Paso 3: Configurar dominio personalizado (Opcional)

1. En el panel de Cloudflare Pages, ve a **Configuración**
2. En **Dominios personalizados**, haz clic en **Agregar dominio**
3. Ingresa tu dominio (ej: `kidchis.com`)
4. Sigue las instrucciones para configurar los registros DNS

## 🔐 Variables de entorno (Si aplica)

Si necesitas variables de entorno en el futuro:

1. Ve a **Configuración** → **Variables de entorno**
2. Agrega tus variables para:
   - `production`
   - `preview`
   - `development`

## ✅ Verificar el despliegue

1. El despliegue automático es disparado cuando haces push a `main`
2. Verifica el estado en el panel de Pages
3. Accede a tu URL asignada automáticamente:
   - `https://kidchis.pages.dev` (predeterminado)
   - O tu dominio personalizado

## 📊 Monitorear despliegues

- Los despliegues se muestran en la pestaña **Despliegues**
- Puedes ver logs de compilación y errores
- Cada commit a `main` genera un nuevo despliegue

## 🛠️ Troubleshooting

### El sitio no carga
- Verifica que `index.html` esté en la raíz del repositorio
- Comprueba que no hay errores en los logs de compilación

### CSS o JS no carguen
- Asegúrate de que los archivos están en la raíz
- Verifica las rutas relativas en `index.html`

### Errores de build
- Confirma que `package.json` está correctamente formado
- Si usas Wrangler, actualiza: `npm install -g wrangler@latest`

## 🔄 Flujo de CI/CD

Actualmente, el proyecto usa despliegue manual. Para automatizar:

1. Crea una rama de desarrollo: `git checkout -b develop`
2. Configura despliegues automáticos desde `main`
3. Los cambios en `develop` pueden previsualizarse antes de merge

## 📈 Optimizaciones en Cloudflare

El proyecto incluye:
- ✅ Headers de seguridad en `_headers`
- ✅ Caché optimizado para CSS y JS
- ✅ Compresión automática
- ✅ CDN global

## 🎯 Próximos pasos

Después del despliegue:

1. **Compartir URL** - Tu sitio está disponible públicamente
2. **Configurar dominio** - Usa tu propio dominio
3. **Monitorear analytics** - Usa Cloudflare Analytics

## 📚 Recursos útiles

- [Docs de Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Documentación de Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [Guía de Headers HTTP](https://developers.cloudflare.com/pages/platform/headers/)

## 💡 Tips

- Los cambios en `main` se despliegan automáticamente
- Usa ramas de feature para cambios grandes
- Prueba localmente antes de hacer push: `npm run dev`

---

¿Preguntas? Abre un issue en GitHub o contacta al equipo.

**¡Tu plataforma KIDCHI ya está en línea! 🎉**
