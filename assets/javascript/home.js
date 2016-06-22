function validarEntrada()
{
	var formulario = document.getElementsByName('forRegistro'),
		boton = document.getElementsByName('Ingresar'),
		carContrasena = /^([a-zA-Z0-9]{6,20})$/;
	   	carCorreo = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
	
	var validarCorreo = function(e){
		if(formulario[0].logCorreo.value == ""){
			alert("Completa el campo correo");
			e.preventDefault();
		}
		else{
			if(!carCorreo.test(formulario[0].logCorreo.value))
			{
				alert("Correo no valido");
				e.preventDefault();
			}
		}
	};
	
	var validarContrasena = function(e){
		if(formulario[0].logContrasena.value == ""){
			alert("Completa el campo contraseña");
			e.preventDefault();
		}
		else{
			if(!carContrasena.test(formulario[0].logContrasena.value)){
				alert("Contraseña no valida");
				e.preventDefault();
			}
		
		}
	};
	
	/*Función para validad el checbox recuerdame, falta completar la accion que hará si se marca o no
	var validadChecbox = function()
	{
		if(formulario.Recuerdame.checked == true{
		
		}
		else{
			
		}
	};*/
	
	var validar = function(e){
		validarCorreo(e);
		validarContrasena(e);	
		//validarCheckbox(e);
	};
	
	formulario[0].addEventListener("submit",validar);
	
}