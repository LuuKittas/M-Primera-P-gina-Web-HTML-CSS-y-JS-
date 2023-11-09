const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^.{1,8}$/, // 1 a 8 digitos.
    domicilio: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // Máximo de 14 números.
}

const campos = {
    nombre: false,
    apellido: false,
    dni: false,
    domicilio: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            ValidarCampo(expresiones.nombre, e.target, 'nombre');
        break;    
        case "apellido":
            ValidarCampo(expresiones.apellido, e.target, 'apellido');
        break;    
        case "dni":
            ValidarCampo(expresiones.dni, e.target, 'dni');
        break;    
        case "domicilio":
            ValidarCampo(expresiones.domicilio, e.target, 'domicilio');
        break;    
        case "correo":
            ValidarCampo(expresiones.correo, e.target, 'correo');
        break;    
        case "telefono":
            ValidarCampo(expresiones.telefono, e.target, 'telefono');
        break;    
    }
}

const ValidarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);
    input.addEventListener('blur' , validarFormulario);
});

formulario.addEventListener('submit' , (e) => {
    e.preventDefault();

    if(campos.nombre && campos.apellido && campos.dni && campos.domicilio && campos.correo && campos.telefono){
        formulario.resetAll();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 5000);
    }
});
