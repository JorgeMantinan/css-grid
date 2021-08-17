$(document).ready(function() {
    var ventana_ancho = $(window).width();
    if (ventana_ancho <= 768) {
        $('.technologies').hide();
    }
});


/* Resize screen */
$(window).resize(function () {
    var ventana_ancho = $(window).width();
    technologiesToogle(ventana_ancho);
});

function technologiesToogle(ventana_ancho) {
    if (ventana_ancho <= 768) {
        $('.technologies').hide();
    } else if (ventana_ancho > 768) {
        $('.technologies').show();
    }
}