---
name: sass-build
description: Compilar los estilos Sass del proyecto css-grid tras editar cualquier fichero .scss. Usar SIEMPRE que se modifique sass/*.scss o se necesite regenerar css/global.css o css/styles.css.
---

# Compilación Sass de css-grid

Los `.css` de `css/` son **salida compilada**: jamás editarlos a mano.

```bash
npx sass sass/global.scss css/global.css
npx sass sass/styles.scss css/styles.css
```

- `global.scss` importa header, main-content, footer, aboutme y slider-project → genera
  `css/global.css` (todos los estilos propios de la web).
- `styles.scss` importa Bootstrap 5 + `.link-primary` → genera `css/styles.css`.
- Si Sass da error de sintaxis, corregir el `.scss` y repetir; no parchear el CSS.
- Tras compilar, revisar `git diff css/` para asegurar que solo cambió lo esperado.

Nota: `npx sass` descarga el paquete la primera vez (Node v24 disponible en el entorno).
