(function ()
{
	var formulario = document.getElementsByName('forRegistro'),
		elementos = formulario.elements,
		boton = document.getElementsByName('Ingresar');
	
	var validadCorreo = function(e){
		if(formulario.logCorreo.value == 0){
			alert("Completa el campo correo");
			e.preventDefault();
		}
	};
	
	var validadContraseña = function(e){
		if(formulario.logContraseña.value == 0){
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
	
	formulario.addEventListener("submit",validar);
	
})