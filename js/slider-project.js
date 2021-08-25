var projectImgs = [
    {1: "",2: "",3: "",4:""},
    {1: "",2: "",3: ""},
    {1: ""},
    {1: "",2: ""}
];

var project = [
    {img: projectImgs[0], title: "Web Inmobiliaria Frontend", description: "Descripción del proyecto 1"},
    {img: projectImgs[1], title: "Web Inmobiliaria Backend", description: "Descripción del proyecto 2"},
    {img: projectImgs[2], title: "Web Personal", description: "Descripción del proyecto 3"},
    {img: projectImgs[3], title: "Proyectos para empresas", description: "Descripción del proyecto 4"}
];

/* Show or hide project slider popup */
$(".project").on("click", function () {
    $(".slidershow-project").addClass("active");
    console.log($(".project").index(this));
});

$(".close-project").on("click", function () {
    $(".slidershow-project").removeClass("active");
});