let valorProgreso = prompt("Ingresá un progreso entre 0 y 100");

let cambioAValor = parseInt(valorProgreso);

let progreso = document.getElementById("relleno");

if(valorProgreso >= 0 && valorProgreso <= 100){
    let ancho = cambioAValor + "%"
    progreso.style.width = ancho;
    if (valorProgreso <= 15){
        progreso.style.backgroundColor = "red"
    }
}
else{
    alert(`Ingresá un progreso válido`)
}