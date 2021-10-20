// Get the input fields
const formulario = document.getElementById('form');
console.log(form)
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.

} 

const validateFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            console.log('funciona');
            if(expresiones.nombre.test(e.target.value)){

            } else {
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
            }

        break;
        case "email":

        break;
        case "address":

        break;
        case "last":

        break;
        case "password":

        break;
        case "number":

        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateFormulario);
    input.addEventListener('blur', validateFormulario);
    });
;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');
var lastName = document.querySelector('.last')

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 9
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
}