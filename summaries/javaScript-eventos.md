
# Eventos en JavaScript

Los eventos permiten ejecutar código cuando ocurre una acción en la página (como hacer clic, presionar una tecla, enviar un formulario, etc.). Aquí tienes una explicación con ejemplos de los principales conceptos:

## ¿Qué es un evento?
Un evento es cualquier acción que ocurre en el navegador, como un clic, el movimiento del ratón, la carga de la página, etc.

---

## Tipos de eventos principales


### 1. Eventos de ratón
- `click`: Cuando se hace clic en un elemento.
- `dblclick`: Doble clic.
- `contextmenu`: Cuando el usuario hace clic derecho en el mouse.
- `mouseover`: Cuando el ratón pasa sobre un elemento.
- `mouseout`: Cuando el ratón sale de un elemento.
- `mousemove`: Si el usuario mueve el mouse.
- `mousedown`: Cuando se presiona un botón del ratón.
- `mouseup`: Cuando se suelta un botón del ratón.


**Ejemplo:**
```javascript
const boton = document.getElementById('miBoton');
boton.addEventListener('click', function(event) {
	alert('¡Has hecho clic!');
	console.log(event); // Objeto del evento
});
```

### 2. Eventos de ventana
#### ¿Qué es la ventana (window) en JavaScript?

El objeto `window` es el objeto global que representa la ventana del navegador donde se muestra la página web. Es el punto de entrada a todas las funcionalidades del navegador y contiene:

- Propiedades y métodos para controlar la ventana (tamaño, posición, historial, etc.).
- Acceso al DOM mediante `window.document`.
- Funciones globales como `alert()`, `setTimeout()`, `setInterval()`.
- Información sobre la URL, el navegador y el historial.
- Eventos como `resize`, `scroll`, `load`, entre otros.

**Ejemplo de uso:**
```javascript
console.log(window.innerWidth); // Ancho de la ventana
console.log(window.location.href); // URL actual
window.alert('¡Hola desde la ventana!');
```

El objeto `window` es implícito, por lo que puedes usar sus métodos y propiedades sin escribir `window.` delante (por ejemplo, puedes usar directamente `alert()` o `setTimeout()`).

**Ejemplo de setTimeout:**
```javascript
setTimeout(function() {
	alert('Este mensaje aparece después de 2 segundos');
}, 2000); // 2000 milisegundos = 2 segundos
```

**Ejemplo de setInterval:**
```javascript
let contador = 0;
const intervalo = setInterval(function() {
	contador++;
	console.log('Contador:', contador);
	if (contador === 5) {
		clearInterval(intervalo); // Detiene el intervalo
	}
}, 1000); // Cada 1 segundo
```

#### Eventos
- `load`: cuando la página termina de cargar.
- `resize`: cuando se cambia el tamaño de la ventana.
- `scroll`: cuando se hace scroll.

**Ejemplo:**
```javascript
window.addEventListener('resize', function(event) {
	console.log('La ventana cambió de tamaño');
});
```

### 3. Eventos de formularios

- `submit`: cuando se envía un formulario.
- `change`: cuando cambia el valor de un input, select o textarea.
- `focus` y `blur`: cuando un input recibe o pierde el foco.

**Ejemplo de change:**
```javascript
const input = document.getElementById('miInput');
input.addEventListener('change', function(event) {
	alert('El valor cambió a: ' + event.target.value);
});
```

**Ejemplo:**
```javascript
const form = document.getElementById('miFormulario');
form.addEventListener('submit', function(event) {
	event.preventDefault(); // Evita el envío real
	alert('Formulario enviado');
});
```

### 4. Eventos de teclado
- `keydown`: cuando se presiona una tecla.
- `keyup`: cuando se suelta una tecla.
- `keypress`: cuando se mantiene presionada una tecla.

**Ejemplo:**
```javascript
document.addEventListener('keydown', function(event) {
	console.log('Tecla presionada:', event.key);
});
```

---

## ¿Cómo hacer un listener?
Se usa `addEventListener`:
```javascript
elemento.addEventListener('tipoEvento', funcionCallback);
```

---

## ¿Cómo funciona el objeto del evento?
El objeto del evento se pasa como argumento a la función callback y contiene información sobre el evento (tipo, elemento, coordenadas, tecla, etc.).

**Ejemplo:**
```javascript
boton.addEventListener('click', function(event) {
	console.log(event.type); // 'click'
	console.log(event.target); // Elemento que disparó el evento
});
```

---

## ¿Cómo eliminar un listener?
Se usa `removeEventListener` y la función debe ser la misma referencia:

```javascript
function miFuncion(event) {
	alert('Hola');
}
boton.addEventListener('click', miFuncion);
// Para eliminar:
boton.removeEventListener('click', miFuncion);
```

---

### Resumen
- Los eventos permiten interactuar con el usuario y el navegador.
- Se gestionan con `addEventListener` y se pueden eliminar con `removeEventListener`.
- El objeto del evento da información útil sobre la acción ocurrida.

---

## Nota sobre los listeners y los nodos del DOM

Los listeners (escuchadores de eventos) se ejecutan normalmente sobre nodos del DOM, que representan etiquetas HTML en la página (como `<button>`, `<input>`, `<form>`, etc.). Estos nodos son los elementos a los que se les puede asociar eventos para interactuar con el usuario.

Además, algunos eventos pueden asociarse a objetos especiales como `window` o `document`, que aunque no son etiquetas HTML, forman parte del entorno del navegador y permiten gestionar eventos globales (por ejemplo, `resize`, `scroll`, `DOMContentLoaded`).

En la práctica, la mayoría de los eventos se usan sobre elementos HTML, pero es importante saber que también pueden aplicarse a estos objetos globales.
