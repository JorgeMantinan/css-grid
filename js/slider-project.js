let projectImgs = [
    {0: "./img/EquipoEmpresarial.jpg",1: "./img/CasaModerna2.jpg",2: "./img/CasaModerna.jpg",3:"./img/WhiteGeometry.png"},
    {0: "./img/EquipoEmpresarial.jpg",1: "./img/CasaModerna2.jpg",2: "./img/CasaModerna.jpg"},
    {0: "./img/EquipoEmpresarial.jpg"},
    {0: "./img/EquipoEmpresarial.jpg",1: "./img/CasaModerna2.jpg"}
];

let project = [
    {img: projectImgs[0], title: "Web Inmobiliaria Frontend", description: "Descripción del proyecto 1"},
    {img: projectImgs[1], title: "Web Inmobiliaria Backend", description: "Descripción del proyecto 2"},
    {img: projectImgs[2], title: "Web Personal", description: "Descripción del proyecto 3"},
    {img: projectImgs[3], title: "Proyectos para empresas", description: "Descripción del proyecto 4"}
];

let indexImg = 0;
let indexProject;
let direction = "";
var countImgs;

/* Show project slider popup */
$(".project").on("click", function () {

    $(".slidershow-project").addClass("active");
    indexProject = $(".project").index(this);

    /* Count the images of project */
    countImgs = countImgsProject();

    $("#title-project").text(project[indexProject].title);
    $("#description-project").text(project[indexProject].description);

    indexImg = 0;
    $("#img-slider").attr('src', project[indexProject].img[indexImg]);

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