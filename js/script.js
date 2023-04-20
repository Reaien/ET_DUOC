//validacion de formulario errores y vacios//

//validacion de formulario errores y vacios//

//expresiones para validar campos//

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");



const expresiones = {
	rut: /^[0-9\_\-\.]{11,12}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case rut:
            if (expresiones.rut.test(e.target.value)) {
                
            }else{
                document.getElementById('grupo__rut').classList.add('formulario__grupo-incorrecto');
            }
            break;
        case nombre:
            
            break;
        case apellidop:
            
            break;
        case apellidom:
            
            break;
        case edad:
            
            break;
        case genero:
            
            break;
    
    }
};

inputs.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});