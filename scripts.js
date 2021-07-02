$(document).ready(function () {
    $("#basic-form").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            nacimiento: {
                required: {
                    required: true,
                },
            }
        },
        messages: {
            nombre: {
                required: "Ingrese el nombre",
                minlength: "El nombre debe tener al menos 2 caracteres"
            },
            apellido: {
                required: "Ingrese su apellido",
            },
            email: {
                required: "El email es requerido",
                email: "El email debe tener este formato abc@domain.tld"
            },
            nacimiento: {
                required: "Ingrese su lugar de nacimiento",

            }
        }
    });

    $("#basic-form").on('submit',function (event) {
//Capturamos los datos
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var nacimiento = $("#nacimiento").val();
        var email = $("#email").val();


        //Validar que no este vacio
        if (nombre == "" || apellido == "" || email == "" || nacimiento == "") {
      
			$('#texto1').html('<h4 class="text-danger">Faltan datos 😑</h4> ');
            event.preventDefault();//Esto es para cancelar el envio

        } else {
			$('#texto1').html('<h4 class="text-success">Datos agregados correctamente 👽</h4>');
            $("#nom").val(nombre);
            $("#ap").val(apellido);
            $("#em").val(email);
            $("#nac").val(nacimiento);
			event.preventDefault();//Esto es para cancelar el envio
        }

    })


});