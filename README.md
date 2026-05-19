# KIDCHI - Plataforma Nutricional

Una plataforma web moderna para la gestión integral de menús escolares y seguimiento del estado nutricional de estudiantes.

## 🌟 Características

- **Dashboard interactivo** - Monitoreo en tiempo real de métricas nutricionales
- **Gestión de menús** - Planificación semanal de comidas balanceadas
- **Perfiles de estudiantes** - Seguimiento individual con alertas de alergias
- **Reportes detallados** - Gráficas y análisis de cumplimiento nutricional
- **Sistema de alertas** - Notificaciones automáticas sobre cambios en consumo
- **App móvil** - Experiencia responsiva para dispositivos móviles
- **Imprimibles** - Menús listos para imprimir en PDF

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet
- No requiere instalación de dependencias para uso básico

## 🚀 Inicio rápido

### Desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/katycastellanos66-oss/kidchis.git
cd kidchis

# Opción 1: Usar servidor local Python
python -m http.server 8000

# Opción 2: Usar Cloudflare Pages localmente
npm install
npm run dev
```

Luego abre `http://localhost:8000` en tu navegador.

### Desplegar en Cloudflare Pages

```bash
# Instalar dependencias
npm install

# Desplegar
npm run deploy
```

## 📁 Estructura del proyecto

```
kidchis/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── package.json        # Dependencias y scripts
├── wrangler.toml       # Configuración de Cloudflare
├── .gitignore          # Archivos excluidos de Git
└── README.md           # Este archivo
```

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsivo con variables CSS
- **JavaScript vanilla** - Sin frameworks externos
- **Canvas API** - Gráficas interactivas
- **Cloudflare Pages** - Hosting y despliegue

## 📱 Secciones de la aplicación

1. **Dashboard** - Panel principal con métricas clave
2. **Menús** - Gestión y visualización de menús semanales
3. **Estudiantes** - Perfil y seguimiento individual
4. **Reportes** - Gráficas y análisis de datos
5. **Alertas** - Sistema de notificaciones
6. **Recomendaciones** - Sugerencias automáticas
7. **Instituciones** - Gestión de escuelas y programas
8. **App móvil** - Vista previa de experiencia móvil
9. **Imprimibles** - Menús en formato imprimible
10. **Configuración** - Preferencias de la plataforma

## 🌐 Variables de configuración

El proyecto usa variables CSS personalizadas para temas. Puedes modificarlas en `styles.css`:

```css
:root {
  --g950: #062d1d;  /* Verde oscuro principal */
  --g600: #4b9a39;  /* Verde principal */
  --orange: #f48b23;
  --yellow: #f5b833;
  /* ... más variables */
}
```

## 📊 Datos de demostración

La aplicación incluye datos de demostración integrados:
- 6 estudiantes de ejemplo
- 5 menús semanales (Lunes a Viernes)
- 3 instituciones participantes
- 4 alertas de ejemplo
- Gráficas interactivas

## 🔒 Seguridad

- Almacenamiento local de datos (sin servidor)
- Sin transferencia de datos personales
- Ideal para entornos educativos cerrados

## 📝 Licencia

MIT License - Puedes usar este proyecto libremente con atribución.

## 👤 Autor

Katy Castellanos - [@katycastellanos66-oss](https://github.com/katycastellanos66-oss)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📞 Soporte

Para reportar bugs o sugerencias, abre un issue en GitHub.

## 🚀 Próximas características

- [ ] Integración con base de datos
- [ ] Autenticación de usuarios
- [ ] API REST
- [ ] Múltiples idiomas
- [ ] Exportación a Excel
- [ ] Integración con Google Calendar
- [ ] Sistema de comentarios
- [ ] Notificaciones por email

---

Hecho con ❤️ para la educación nutricional infantil
