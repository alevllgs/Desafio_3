
// Elementos del DOM

//si llamo el elemento desde un id ocupo # #torres en document.querySelector("#torres")
//si llamo el elemento desde una clase ocupo . .foto document.querySelector(".foto")
// lo puedo llamar directamente de la caja section, footer, header document.querySelector("#section")

// Variables

// Funciones

// Eventos
/* onkeydown

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
*/


function cambiarColorNegro(event) {
    let elemento = event.target;
    elemento.style.backgroundColor = "black"
}


document.getElementById("div1").addEventListener("click", cambiarColorNegro)
document.getElementById("div2").addEventListener("click", cambiarColorNegro)
document.getElementById("div3").addEventListener("click", cambiarColorNegro)
document.getElementById("div4").addEventListener("click", cambiarColorNegro)



//PARTE 2
let keyElement = document.getElementById("key")
// la funcion se ejecuta el prasionar la tecla, puede hacerse con IF, prefiero el Switch
function cambiarColor(event) {
    let tecla = event.key.toLowerCase()
    switch (tecla) {
        //cambiar color al presionar tecla
        case 'a':
            keyElement.style.backgroundColor = 'pink'
            break
        case 's':
            keyElement.style.backgroundColor = 'orange'
            break
        case 'd':
            keyElement.style.backgroundColor = 'lightblue'
            break

    }
}

function NuevoDiv(event) {
    let tecla = event.key.toLowerCase()
    switch (tecla) {
        // Crea un nuevo DIV     
        case 'q':
            crearNuevoDiv('purple')
            break
        case 'w':
            crearNuevoDiv('gray')
            break
        case 'e':
            crearNuevoDiv('brown')
            break
    }
}

//esta fx crea el div directo del js
function crearNuevoDiv(colorFondo) {
    let nuevoDiv = document.createElement('div')
    nuevoDiv.style.backgroundColor = colorFondo
    document.body.appendChild(nuevoDiv)
    // appendChild añade el div dentro del body
    // se le añade el colorFondo
    //igual podria añadir dentro del mismo switch todas las letras solo en uno
}

document.addEventListener('keydown', cambiarColor)
document.addEventListener('keydown', NuevoDiv)


