

$(document).ready(function () {
  $('#enviar').on('click', function () {

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var nacimiento = $("#nacimiento").val();

    $("#nom").val(nombre);
    $("#ap").val(apellido);
    $("#nac").val(nacimiento);
  });
});


$().ready(function() {
	$("#formcontacto").validate({
		rules: {
			nombre: { required: true, minlength: 2},
			apellido: { required:true, email: true},
			nacimiento: { minlength: 2, maxlength: 15},

		},
		messages: {
			nombre: "El campo es obligatorio.",
			apellido : "El campo es obligatorio y debe tener formato de email correcto.",
			nacimiento : "El campo Teléfono no contiene un formato correcto.",

		}
	});
});

