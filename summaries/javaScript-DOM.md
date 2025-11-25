# ¿Qué es el DOM?

El DOM (Document Object Model) es una representación en forma de árbol de todos los elementos HTML de una página web. Esto permite a JavaScript acceder, modificar y crear elementos en la página de forma dinámica.

## ¿Cómo funciona el árbol de nodos?


El árbol de nodos es la estructura jerárquica que representa todos los elementos, textos y atributos de una página web. Cada elemento HTML, cada texto y cada atributo es un nodo en este árbol.

### Tipos de nodos en el DOM
- **Nodo de elemento:** Representa una etiqueta HTML, como `<div>`, `<h1>`, `<body>`, etc.
- **Nodo de texto:** Representa el contenido textual dentro de un elemento.
- **Nodo de atributo:** Representa los atributos de una etiqueta, como `id`, `class`, etc.
- **Nodo de comentario:** Representa los comentarios HTML (`<!-- comentario -->`).

### Ejemplo detallado de árbol DOM
Supongamos el siguiente HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo DOM</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1 id="titulo">Hola</h1>
    <p class="texto">Texto</p>
    <!-- Comentario -->
  </body>
</html>
```

En este ejemplo, el árbol de nodos sería:
- Nodo raíz: `<html>`
  - Nodo hijo: `<head>`
    - Nodo hijo: `<title>`
      - Nodo de texto: "Ejemplo DOM"
    - Nodo hijo: `<meta>` (con atributo `charset`)
  - Nodo hijo: `<body>`
    - Nodo hijo: `<h1>` (con atributo `id`)
      - Nodo de texto: "Hola"
    - Nodo hijo: `<p>` (con atributo `class`)
      - Nodo de texto: "Texto"
    - Nodo de comentario: "Comentario"

**¿Cuántos nodos hay?**
En este ejemplo hay:
- 1 nodo raíz (`<html>`)
- 2 nodos de elemento principales (`<head>`, `<body>`)
- 4 nodos de elemento secundarios (`<title>`, `<meta>`, `<h1>`, `<p>`)
- 2 nodos de texto ("Ejemplo DOM", "Hola", "Texto")
- 2 nodos de atributo (`charset` en `<meta>`, `id` en `<h1>`, `class` en `<p>`)
- 1 nodo de comentario

Cada elemento, texto, atributo y comentario cuenta como un nodo en el árbol DOM. Esta estructura permite recorrer, modificar y crear cualquier parte de la página usando JavaScript.

> **Nota importante sobre los nodos de texto:**
> Los saltos de línea y los espacios en blanco dentro del HTML también pueden ser considerados nodos de texto por el DOM. Por ejemplo, si escribes:
> ```html
> <p>
>   Hola
> </p>
> ```
> El elemento `<p>` tendrá varios nodos de texto hijos: uno para el salto de línea antes de "Hola", otro para "Hola", y otro para el salto de línea después. Aunque estos nodos de texto pueden estar vacíos o contener solo espacios, el DOM los reconoce y los cuenta como nodos.
> 
> El contenido textual de un nodo elemento siempre se representa como uno o más nodos de texto hijos. Por eso, al recorrer el DOM, puedes encontrar nodos de texto que solo contienen espacios o saltos de línea.

## Seleccionar elementos del DOM

### getElementById
Selecciona un elemento por su atributo `id`.
```javascript
const titulo = document.getElementById('miTitulo');
titulo.textContent = 'Nuevo título';
```

### querySelector
Selecciona el primer elemento que coincide con un selector CSS.
```javascript
const parrafo = document.querySelector('p');
parrafo.textContent = 'Texto cambiado';
```

## Modificar contenido: innerHTML
Permite cambiar el HTML interno de un elemento.
```javascript
const caja = document.getElementById('caja');
caja.innerHTML = '<strong>Texto en negrita</strong>';
```

## Añadir estilos
Puedes modificar estilos usando la propiedad `style`:
```javascript
caja.style.backgroundColor = 'yellow';
caja.style.fontSize = '20px';
```

## Añadir elementos HTML de otras maneras

### Crear y añadir elementos con createElement y appendChild
```javascript
const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Elemento nuevo';
document.body.appendChild(nuevoElemento);
```


---

**Resumen:**
- El DOM es el árbol de nodos que representa la página.
- Puedes seleccionar, modificar y crear elementos usando JavaScript.
- Métodos útiles: `getElementById`, `querySelector`, `innerHTML`, `createElement`, `appendChild`.
- Los estilos se modifican con la propiedad `style`.
