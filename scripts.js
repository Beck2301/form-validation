

$(document).ready(function () {
  $('#enviar').on('click', function () {

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var nacimiento = $("#nacimiento").val();

    $("#nom").val(nombre);
    $("#ap").val(apellido);
    $("#nac").val(nacimiento);
  });
  
  $("#formcontacto").validate({
	rules: {
		nombre: { required: true, minlength: 2},
		apellido: { required:true, minlength: 2},
		nacimiento: { required: true},

	},
	messages: {
		nombre: {  required: "Por favor ingrese un nombre"},
		apellido : {  required: "Por favor ingrese un nombre"},
		nacimiento :  {  required: "Por favor ingrese un nombre"}

	}
});
});


$(document).ready(function() {
	
});

