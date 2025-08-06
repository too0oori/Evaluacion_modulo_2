// Formulario de contacto
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();

        if (name === "" || email === "" || message === "") {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        alert('Formulario enviado con éxito.');
        this.reset();
    });

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});

// Quiz //
$(document).ready(function() {
    $('#testForm').on('submit', function(e) {
        e.preventDefault();
        
        const respuestas = { q1: 'a', q2: 'c', q3: 'c', q4: 'b', q5: 'c' };
        let puntaje = 0;
        
        for (let pregunta in respuestas) {
            const seleccionada = $(`input[name="${pregunta}"]:checked`).val();
            if (seleccionada === respuestas[pregunta]) {
                puntaje++;
            }
        }
        
        const resultado = $('#resultadoTest');
        resultado.show().removeClass('d-none alert-success alert-warning alert-danger');
        resultado.addClass('alert mt-4');
        
        let mensaje = `Tu puntaje es: ${puntaje} de 5. `;
        
        if (puntaje === 5) {
            resultado.addClass('alert-success');
            mensaje += '¡Perfecto!';
        } else if (puntaje >= 3) {
            resultado.addClass('alert-warning');
            mensaje += '¡Bien!';
        } else {
            resultado.addClass('alert-danger');
            mensaje += '¡Sigue practicando!';
        }
        
        resultado.text(mensaje);
    });
});
