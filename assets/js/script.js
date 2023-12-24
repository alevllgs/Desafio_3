
let ele1Element = document.getElementById("ele1")

//para que comience con verde
ele1Element.style.backgroundColor = "green"
// al click
ele1Element.addEventListener("click", pintar)

//si es verde dale amarillo, si es amarillo dale verde
function pintar() {
    let colorActual = ele1Element.style.backgroundColor

    if (colorActual === "green") {
        ele1Element.style.backgroundColor = "yellow"
    } else {
        ele1Element.style.backgroundColor = "green"
    }
}