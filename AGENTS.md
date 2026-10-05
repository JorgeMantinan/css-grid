# css-grid — memoria del proyecto

Web portafolio personal de Jorge Mantiñán. Estática (HTML + CSS GRID + Sass + jQuery),
un solo `index.html`. Proyecto original de 2021 hecho a mano; desde el commit `d376721`
(05/10/2026) se mantiene y mejora con ayuda de IA.

## Cómo compilar (obligatorio tras tocar cualquier .scss)

```bash
npx sass sass/global.scss css/global.css
npx sass sass/styles.scss css/styles.css      # solo si cambia Bootstrap o .link-primary
```

- **Nunca** editar `css/*.css` a mano (excepto el parche puntual documentado en el commit).
- `css/styles.css` = Bootstrap 5.0.2 + `.link-primary`. `css/global.css` = TODOS los estilos propios.
- `index.html` solo carga esos dos CSS, en ese orden (`global.css` debe ir después).

## Paleta y aspecto (NO cambiar)

| Variable | Hex | Uso |
|---|---|---|
| `$background-color` / `$primary-color` | `#000000` | fondo body, popups, slider |
| `$secondary-color` | `#DB0700` (rojo acento) | bordes de botones/popups, hover, scrollbar |
| `$third-color` | `#968D8D` | enlaces redes y cookies |
| `$fourth-color` | `#C2B6B6` | borde píldoras `.course` |
| `$fifth-color` | `#FFF0F0` | borde hover `.but-info` |
| `$text` | `#FFF0F0` | texto |

Tipografía: Montserrat (Google Fonts, pesos 100;300;400;500;800). Radio de tarjetas
`1.5rem`, píldoras `2.5rem`, botones `0.25rem`. Botón estándar: clase `.but-info`
(`sass/global.scss`) — siempre `<button type="button" class="but-info">`, nunca `<a>`.
Transiciones lentas: `.7s` botones, `.5s` enlaces, `1.5s` cursos.

La paleta está **duplicada en los 7 archivos SCSS** (no hay `_variables.scss`): si cambias
un color, cámbialo en `global`, `header`, `main-content`, `footer`, `aboutme`,
`slider-project` y `styles`.

## Estructura HTML

- `.main-grid` → `header.header-container` (grid-area header, 100vh) → `.main-content`
  (grid-area main-content) → `footer` (grid-area footer). Los `<section>` van dentro de
  `.main-content`: `.projects`, `.courses` (+ `#contacto`).
- Nombres de clase planos, sin BEM: guiones `.project-content` salvo `.menu_links` y
  `.btn_menu` (guion bajo). IDs reservados a hooks de JS (`#img-slider`, `#aboutme`…).
- Patrón de popup (Sobre mí, slider, popup de cursos): overlay + `.active` toggling con
  jQuery en `js/*.js`; cierre con botón `.close`/`.close-project` estilo `.but-info`.

## Arquitectura SCSS

`sass/global.scss` importa los parciales **antes** de declarar variables (por eso cada
parcial redeclara la paleta):

```scss
@import "../sass/header.scss";      // header, menú, hero
@import "../sass/main-content.scss"; // proyectos, cursos, contacto
@import "../sass/footer.scss";
@import "../sass/aboutme.scss";      // popup "Sobre mí"
@import "../sass/slider-project.scss";// slider de proyectos
```

Breakpoints (siempre `max-width`): 1200 / 1024 / 768 (menú hamburguesa) / 600.

## Peligros conocidos (leer antes de tocar)

1. **`.projects` es auto-flow con `nth-child`**: los fondos de las tarjetas y los datos
   del slider se identificaban por posición DOM. Refactorizado a clases/`data-project`
   en la Fase 1: mantener esa convención (una tarjeta = clase de fondo + `data-project`
   que apunta al array de `js/slider-project.js`).
2. `.popup-about-me-overlay` (scss) ≠ `.popup-aboutme-overlay` (HTML): regla muerta,
   no "arreglar" renombrando sin revisar `.active`.
3. `responsive.js` oculta `.technologies` con `<=1024px` en JS (además del CSS).
4. El hover de 3 puntos de `.course` usa `<h3>...</h3>` invisible
   (`sass/main-content.scss`, `color: rgba(255,255,255,0)` → `1` en `:hover`).
5. `libs/bootstrap-5.0.2/` es vendor copiado; no editar.

## Verificación antes de cada commit

1. Recompilar Sass (comando de arriba) y comprobar que no hay errores.
2. Abrir `index.html` (o captura con Playwright) y revisar: colores, sin scroll
   horizontal, popups y slider funcionando.
3. `git status` limpio salvo lo intencional.

## Convenciones de commits

Mensajes en español, formato `tipo: descripción breve` (fix/chore/docs/feat), cuerpo
detallando qué y por qué. Cada fase de mejora = 1 commit.
