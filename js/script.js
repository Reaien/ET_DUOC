//validacion de formulario errores y vacios//

//validacion de formulario errores y vacios//

//expresiones para validar campos//

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const selects = document.querySelectorAll("#formulario select")



const expresiones = {
	rut: /^[0-9\_\-\.]{11,12}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,25}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[0-9\_\-\.]{8,12}$/, // 4 a 12 alfanumericos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    edad: /^\d{1,2}$/, // 1 a 2 digitos.
    genero: /^[a-zA-ZÀ-ÿ\s]{2,6}$/ // caracteres de genero
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "rut":
            if (expresiones.rut.test(e.target.value)) {
                document.getElementById('grupo__rut').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__rut').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__rut .formulario__input-error').classList.remove('formulario__input-error--activo');
            }else{
                document.getElementById('grupo__rut').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__rut').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__rut .formulario__input-error').classList.add('formulario__input-error--activo');
            }
            break;
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('grupo__name').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__name').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__name .formulario__input-error').classList.remove('formulario__input-error--activo');
            }else{
                document.getElementById('grupo__name').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__name').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__name .formulario__input-error').classList.add('formulario__input-error--activo');
            }
            break;
        case "apellidop":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('grupo__appaterno').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__appaterno').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__appaterno .formulario__input-error').classList.remove('formulario__input-error--activo');
            }else{
                document.getElementById('grupo__appaterno').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__appaterno').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__appaterno .formulario__input-error').classList.add('formulario__input-error--activo');
            }
            break;
        case "correo":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error--activo');
            }else{
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error--activo');
            }
            break;
        case "edad":
            if (expresiones.edad.test(e.target.value)) {
                document.getElementById('grupo__edad').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__edad').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__edad .formulario__input-error').classList.remove('formulario__input-error--activo');
            }else{
                document.getElementById('grupo__edad').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__edad').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__edad .formulario__input-error').classList.add('formulario__input-error--activo');
            }
            break; 
        case "genero":
            let = generoSelect = document.getElementById('genero');
            if ( generoSelect.value == 1){
                document.getElementById('grupo__genero').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__genero').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__genero .formulario__input-error').classList.add('formulario__input-error--activo');               
            }else{
                document.getElementById('grupo__genero').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__genero').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__genero .formulario__input-error').classList.remove('formulario__input-error--activo'); 
            }
            break;
        case "password":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error--activo');
            }else{
                document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error--activo');
            }
            validarPassword2();
            break; 
        case "password2":
            validarPassword2();    
            break;       
    }
};

//lector for each de todos los selects en form para activar el listener en validarFormulario
selects.forEach((select) =>{
    select.addEventListener("keyup", validarFormulario);
    select.addEventListener("blur", validarFormulario);
});
//lector for each de todos los inputs en form para activar el listener en validarFormulario
inputs.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);  
});
//prevenir el envio en el btn tipo submit
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});


//funcion para validar pass
const validarPassword2 = () =>{
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');
if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
    document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
    document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error--activo');
}else{
    document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
    document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
    document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error--activo');
}

};