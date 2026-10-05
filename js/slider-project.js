let projectImgs = [
    {0: "./img/portfolio-inicio.png",1: "./img/portfolio-cursos.png"},
    {0: "./img/EquipoEmpresarial.jpg"},
    {0: "./img/project-mantirenfe.png"},
    {0: "./img/project-mantigestor.png"},
    {0: "./img/project-manti-twitch.png"},
    {0: "./img/project-bot.png"}
];

let project = [
    {
        img: projectImgs[0],
        title: "Web Personal",
        description: "Mi portfolio personal. Empecé este sitio en 2021 a mano, sin frameworks ni IA: " +
            "solo HTML, CSS GRID, Sass, JavaScript y jQuery aprendidos de la documentación y vídeos. " +
            "En octubre de 2026 lo retomé para terminar lo que había dejado pendiente y mejorarlo " +
            "con IA: el commit d376721 marca el inicio de esa etapa. Sigue siendo una web estática, " +
            "sin más build que el compilador de Sass.",
        url: ""
    },
    {
        img: projectImgs[1],
        title: "Proyectos para empresas",
        description: "Resumen de mi carrera: empecé en aCore automatizando pruebas Java (JUnit, Mockito, " +
            "Selenium), seguí en Atos con desarrollo fullstack Java SpringBoot + Angular (roles OAuth2, " +
            "gestión de excepciones) y de 2021 a 2023 en Minsait: 14 meses de Scriptcase (PHP y " +
            "JavaScript), fullstack NodeJS + Angular, PostgreSQL, captura de imágenes con " +
            "geolocalización, edición masiva de millones de datos y reporting en Excel, además de " +
            "backend NodeJS con Ionic. Ahora sigo formándome y trabajando por cuenta propia en " +
            "proyectos propios.",
        url: ""
    },
    {
        img: projectImgs[2],
        title: "MantiRenfe",
        description: "Vigila las plazas libres de tus trenes y te avisa en cuanto se libera una, " +
            "con mapa en tiempo real, cuenta atrás a tu salida y avisos según tu bono. " +
            "Instalable como app en Android e iPhone (PWA).",
        url: "https://mantirenfe.vercel.app"
    },
    {
        img: projectImgs[3],
        title: "MantiGestor",
        description: "Gestión para autónomos con IA: fotografía facturas, controla tu IVA e IRPF, " +
            "prepara la declaración de la renta y gestiona tu negocio en un solo lugar.",
        url: "https://mantigestor.vercel.app"
    },
    {
        img: projectImgs[4],
        title: "MantiTwitch",
        description: "Suite de interacción para Twitch: sorteos y dinámicas con el chat de tu canal, " +
            "con perfiles de usuario, moderador y streamer.",
        url: "https://manti-twitch.vercel.app"
    },
    {
        img: projectImgs[5],
        title: "Bot de licitaciones",
        description: "Bot en Python creado con IA que obtiene licitaciones públicas de forma " +
            "automatizada para no perderse ninguna oportunidad.",
        url: ""
    }
];

let indexImg = 0;
let indexProject;
let direction = "";
var countImgs;

/* Show project slider popup */
$(".project").on("click", function () {

    $(".slidershow-project").addClass("active");
    indexProject = parseInt($(this).attr("data-project"), 10);

    /* Count the images of project */
    countImgs = countImgsProject();

    $("#title-project").text(project[indexProject].title);
    $("#description-project").text(project[indexProject].description);

    indexImg = 0;
    $("#img-slider").attr('src', project[indexProject].img[indexImg]);

    /* Only one image: the arrows do nothing, hide them */
    if (countImgs > 1) {
        $(".arrow-left, .arrow-right").css("display", "flex");
    } else {
        $(".arrow-left, .arrow-right").css("display", "none");
    }

    /* Show the "Ver web" link only if the project is deployed */
    if (project[indexProject].url) {
        $("#link-project").attr("href", project[indexProject].url).show();
    } else {
        $("#link-project").hide();
    }

});

/* Hide project slider popup */
$(".close-project").on("click", function () {
    $(".slidershow-project").removeClass("active");
});

/* Arrows change photo project */
$(".arrow-right").on("click", function () {
    arrowChangeImg("right");
});
$(".arrow-left").on("click", function () {
    arrowChangeImg("left");
});


/* Hide project info slider */
$(".arrow-up-down").on("click", function () {
    $(".project-info").toggleClass("hide");
    $(".arrow-up-down").toggleClass("rotate180");
});

/* display:inline-block */

/* Functions */

var arrowChangeImg = function(direction) {
    if (direction == "left") {
        indexImg = indexImg - 1;
    } else {
        indexImg = indexImg + 1;
    }

    if (project[indexProject].img[indexImg] == undefined) {
        if (direction == "left") {
            $("#img-slider").attr('src', project[indexProject].img[countImgs - 1]);
            indexImg = countImgs - 1;
        } else {
            $("#img-slider").attr('src', project[indexProject].img[0]);
            indexImg = 0;
        }
        
    } else {
        $("#img-slider").attr('src', project[indexProject].img[indexImg]);
    }
}

/* Count the imgs of one project. (.lenght not found on that version of javascript) */
var countImgsProject = function() {
    /* Bucle for is faster than while in js */
    for(var countImgs = 0; countImgs >= 0; countImgs++) {
        if (project[indexProject].img[countImgs] == undefined) {
            break;
        }
    }

    return countImgs;
} 