
const expresiones = {
	nombre: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    clave: /^[\s\S]{1,8}$/,
}

const inputNombre=document.getElementById('nombre');

const inputEmail=document.getElementById('email');

const inputPassword=document.getElementById('password');

const inputPasswordConfirm=document.getElementById('passwordConfirm');

let formularioValido=true;



const validarNombre=()=>{

	if(inputNombre.value===''){
		formularioValido=false;
		inputNombre.classList.add("red");
		inputNombre.classList.remove("green");
		document.getElementById('errorNombre').textContent ="Rellene este campo";
	}else if(!expresiones.nombre.test(inputNombre.value)){
		formularioValido=false;
		inputNombre.classList.add("red");
		inputNombre.classList.remove("green");
		document.getElementById('errorNombre').textContent ="Nombre inválido";
	}else{
		inputNombre.classList.remove("red");
		inputNombre.classList.add("green");
		document.getElementById('errorNombre').textContent ="";
	}
}


const validarEmail=()=>{
	if(inputEmail.value===''){
		formularioValido=false;
		inputEmail.classList.add("red");
		inputEmail.classList.remove("green");
		document.getElementById('errorEmail').textContent ="Rellene este campo";
	}else if(!expresiones.email.test(inputEmail.value)){
		formularioValido=false;
		inputEmail.classList.add("red");
		inputEmail.classList.remove("green");
		document.getElementById('errorEmail').textContent ="Email inválido";
		inputEmail.title
	}else{
		inputEmail.classList.remove("red");
		inputEmail.classList.add("green");
		document.getElementById('errorEmail').textContent ="";
	}
}

const validarPassword=()=>{
	if(inputPassword.value===''){
		formularioValido=false;
		inputPassword.classList.add("red");
		inputPassword.classList.remove("green");
		document.getElementById('errorPassword').textContent ="Rellene este campo";
	}else if(!expresiones.clave.test(inputPassword.value)){
		formularioValido=false;
		inputPassword.classList.add("red");
		inputPassword.classList.remove("green");
		document.getElementById('errorPassword').textContent ="No debe tener más de 8 caracteres";
	}else{
		inputPassword.classList.remove("red");
		inputPassword.classList.add("green");
		document.getElementById('errorPassword').textContent ="";
	}
}

const validarPasswordConfirm=()=>{
	if(inputPasswordConfirm.value===''){
		formularioValido=false;
		inputPasswordConfirm.classList.add("red");
		inputPasswordConfirm.classList.remove("green");
		document.getElementById('errorpasswordConfirm').textContent ="Rellene este campo";
	}else if(inputPasswordConfirm.value!==inputPassword.value){
		formularioValido=false;
		inputPasswordConfirm.classList.add("red");
		inputPasswordConfirm.classList.remove("green");
		document.getElementById('errorpasswordConfirm').textContent ="Las contraseñas no coinciden";
	}else{
		inputPasswordConfirm.classList.remove("red");
		inputPasswordConfirm.classList.add("green");
		document.getElementById('errorpasswordConfirm').textContent ="";
	}
}

inputNombre.addEventListener('change', () => {
	validarNombre();
});

inputEmail.addEventListener('change', () => {
	validarEmail();
});

inputPassword.addEventListener('change', () => {
	validarPassword();
});

inputPasswordConfirm.addEventListener('change', () => {
	validarPasswordConfirm();
});

document.getElementById('enviar').addEventListener('click', () => {

	formularioValido=true;

	validarNombre();
	validarEmail();
	validarPassword();
	validarPasswordConfirm();

	if(formularioValido){
		alert("Formulario enviado");
	}
	
});