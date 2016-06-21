function funcion()
{
	var formulario = document.getElementsByName('forRegistro'),
		boton = document.getElementsByName('Ingresar');
	
	var validarCorreo = function(e){
		if(formulario[0].logCorreo.value == ""){
			alert("Completa el campo correo");
			e.preventDefault();
		}
	};
	
	var validarContrasena = function(e){
		if(formulario[0].logContraseña.value == ""){
			alert("Completa el campo contraseña");
			e.preventDefault();
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
		validarContraseña(e);	
		//validarCheckbox(e);
	};
	
	formulario[0].addEventListener("submit",validar);
	
}