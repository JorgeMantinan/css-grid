# css-grid

Portafolio web personal de Jorge Mantiñán. Una sola página estática construida
desde cero (HTML, CSS GRID, Sass y JavaScript) como proyecto de aprendizaje de
CSS GRID, y que hoy funciona como mi web de presentación: quién soy, proyectos,
cursos y contacto.

## Secciones

- **Header** con menú responsive (hamburguesa en móvil) y fondo propio.
- **Sobre mí**: popup con una breve presentación personal.
- **Proyectos**: rejilla de proyectos; al pulsar "Saber más" se abre un slider
  con imágenes, flechas para navegar y panel de descripción desplegable.
- **Cursos**: agrupados por centro de estudios.
- **Footer** con logo, redes sociales y copyright.

## Tecnologías

- HTML5 + CSS GRID (maquetación principal, sin frameworks de rejilla).
- Sass (estilos fuente en `sass/`, compilados a `css/`).
- Bootstrap 5.0.2 (solo utilidades y JS del bundle, descargado en `libs/`).
- JavaScript + jQuery (menú, popup y slider de proyectos).
- Google Fonts (Montserrat) y FontAwesome.

## Estructura

```
index.html          Página única
css/                CSS compilado (styles.css = Bootstrap, global.css = estilos propios)
sass/               Fuentes Sass (global.scss importa header, main-content, footer, aboutme y slider-project)
js/                 navbar.js, responsive.js, aboutme.js, slider-project.js
img/                Imágenes del sitio
libs/bootstrap-5.0.2/   Bootstrap descargado localmente
```

`index.html` solo carga dos hojas de estilo: `css/styles.css` y `css/global.css`.
El resto de ficheros de `css/` (header, footer, main-content, aboutme,
slider-project) eran compilados parciales sueltos que ya no se usan: todo su
contenido está dentro de `global.css`.

## Desarrollo local

Es una web estática: basta con abrir `index.html` en el navegador (o servir la
carpeta con cualquier servidor estático, por ejemplo `npx serve .`).

Para recompilar los estilos tras modificar cualquier `.scss`:

```bash
sass sass/styles.scss css/styles.css
sass sass/global.scss css/global.css
```

## Mantenimiento

Los commits hasta `f359da7` (agosto de 2021) están hechos a mano. A partir de
ese punto el proyecto se corrige y mejora con ayuda de IA: los cambios
generados quedan documentados en cada commit.

> Nota: en GitHub la rama por defecto sigue siendo `master` (versión antigua de
> 15 commits). La web completa vive en `develop`.

## Fuentes originales

- Youtube Channel - FalconMasters => https://www.youtube.com/playlist?list=PLhSj3UTs2_yWsFd43wpLog5HUFzDgIbWj
- Developer Mozilla => https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout
- Css Tricks => https://css-tricks.com/snippets/css/complete-guide-grid/
- Download Boostrap 5.0 => https://www.youtube.com/watch?v=rIEoF6B_GNY (part 3 for modify boostrap variables
- Responsive Menu => https://www.youtube.com/watch?v=vFgtwsZVybY&t=1627s
