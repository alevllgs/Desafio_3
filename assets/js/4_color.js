/*
Construye una página web 4_colores.html con las siguientes características (Total:
5 puntos)
●
Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener
un identificador único. (1 Punto)
●
Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento. (1 Punto)
_
2
Crea una página junto a un script que guarde dentro de una variable global
un color dependiendo de la letra del teclado presionada. (2 Puntos).

La letra a guardará el color rosado.
La letra s guardará el color naranjo.
La letra d guardará el color celeste.
Para guardar el color revisa el tip al final del enunciado.

Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
color blanco y borde negro.

Al presionar las teclas a, s o d, se deberá cambiar el color del div
“key” a rosado, naranjo o celeste respectivamente.
●
Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
deberá crear un div nuevo de las mismas dimensiones antes mencionadas
con los colores morado, gris y café respectivamente. (1 Punto)
Tip: El siguiente script te ayudará a realizar acciones en función de que se
presione una tecla, además en la guía de estudio encontrarás un ejemplo.
*/

// Elementos del DOM

//si llamo el elemento desde un id ocupo # #torres en document.querySelector("#torres")
//si llamo el elemento desde una clase ocupo . .foto document.querySelector(".foto")
// lo puedo llamar directamente de la caja section, footer, header document.querySelector("#section")

const seleccion_uno = document.querySelector("#seleccion1")
const seleccion_dos = document.querySelector("#seleccion2")
const seleccion_tres = document.querySelector("#seleccion3")
const verificar = document.querySelector("#boton")


// Variables


// Funciones


// Eventos
onkeydown

verificar.addEventListener("click", () => {
    const valor1 = seleccion_uno.value
    const valor2 = seleccion_dos.value
    const valor3 = seleccion_tres.value
    let total = valor1 + valor2 + valor3
    if (total == "911") {

        document.getElementById("mensaje").innerText = "Contraseña 1 correcta";

    } else if (total == "714") {

        document.getElementById("mensaje").innerText = "Contraseña 2 correcta";
    }

    else {

        document.getElementById("mensaje").innerText = "Contraseña incorrecta";

    }
})