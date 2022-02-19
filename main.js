const contenido = document.getElementById("contenido");
contenido.innerHTML = "hola programadores";
let nombre = "ariel perez";
let edad = "22";
const color_rojo = "#ff0000"
let resultado = "nombre: " + nombre
alert(resultado);


let array = [23, 45, 2, 42];
console.log(array);
console.log(array[3]);


nombre = "Perez ariel"
alert(nombre);
console.log(nombre);

contenido.innerHTML = `<h2>${nombre}</h2>`;
contenido.innerHTML += "<h3>" + edad + "</h3>";
edad = "18";
let condition = "true";
if (edad >= 18) {
    alert("puedes entrar en la disco ");
} else if (edad > 13) {
    alert("puees entrar con un adulto");
} else {
    alert("no puedes entrar");
}


for (let i = 0; i < 10; i++) {

    contenido.innerHTML += `<h2>la edad es de : ${i}</h2>`;
}


let edades = [23, 45, 2, 42];
for (let j = 0; j < edades.length; j++) {
    addcontent(`<h2>la edad es : ${edades[j]}</h2>`);
}


function addcontent(newcontenido) {
    contenido.innerHTML += `<h2>la edad es de : ${newcontenido}</h2>`;
}

addcontent("hola programador");
addcontent(`<h2>${nombre}</h2><h3>${edad}</h3>`);


