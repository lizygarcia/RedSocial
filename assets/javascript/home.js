function validarEntrada()
{
	var formulario = document.getElementsByName('forEntrada'),
		boton = document.getElementsByName('Ingresar'),
		carContrasena = /^([a-zA-Z0-9]{6,20})$/,
	   	carCorreo = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
	
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

function validarRegistro()
{
	var formulario = document.getElementsByName('forRegistro'),
		boton = document.getElementsByName('Registrarse'),
		carContrasena = /^([a-zA-Z0-9]{6,20})$/,
	   	carCorreo = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/,
		carAlfabetico = /^([a-zA-Z]+[\s]*)+$/;
	
	var validarNombre = function(e){
		if(formulario[0].regNombre.value == "")
		{
			alert("Completa el campo Nombre");
			e.preventDefault();
		}
		else{
			if(!carAlfabetico.test(formulario[0].regNombre.value))
			{
				alert("Nombre no valido");
				e.preventDefault();
			}
		}
		
	};
	
	var validarApellido = function(e){
		if(formulario[0].regApellido.value == "")
		{
			alert("Completa el campo Apellido");
			e.preventDefault();
		}
		else{
			if(!carAlfabetico.test(formulario[0].regApellido.value))
			{
				alert("Apellido no valido");
				e.preventDefault();
			}
		}
	};
	
	var validarCorreo = function(e){
		if(formulario[0].regCorreo.value == ""){
			alert("Completa el campo correo");
			e.preventDefault();
		}
		else{
			if(!carCorreo.test(formulario[0].regCorreo.value))
			{
				alert("Correo no valido");
				e.preventDefault();
			}
		}
	};
	
	var validarContrasena = function(e){
		if(formulario[0].regContrasena.value == ""){
			alert("Completa el campo contraseña");
			e.preventDefault();
		}
		else{
			if(!carContrasena.test(formulario[0].regContrasena.value)){
				alert("Contraseña no valida");
				e.preventDefault();
			}
		}
	};

	var validarRptContrasena = function(e){			
		if(formulario[0].regContrasena.value != formulario[0].regConfirmaContrasena.value){
			alert("Las contraseñas no coinciden");
			e.preventDefault();
		}
	};
	
	
	var validarTerCond = function(e)
	{
		if(!formulario[0].TerCond.checked){
			alert("Debe aceptar los terminos y condiciones");
			e.preventDefault();
		}

	};
	
	var validar = function(e){
		validarNombre(e);
		validarApellido(e);
		validarCorreo(e);
		validarContrasena(e);	
		validarRptContrasena(e);
		validarTerCond(e);
	};
	
	formulario[0].addEventListener("submit",validar);
	
}

