const coursesData = {
    scriptcase: [
        "Curso Experto Scriptcase — PHP y JavaScript"
    ],
    bash: [
        "Bash — Intérprete de comandos de Linux"
    ],
    blockchain: [
        "Smart Contract y Blockchain de la A a la Z (Udemy)"
    ],
    htmlcss: [
        "Diseño Web Profesional — El Curso Completo Práctico y desde 0 (Udemy, WordPress)",
        "Curso de introducción al desarrollo web: HTML y CSS (Google)"
    ],
    marketing: [
        "Curso básico de Marketing digital (Google)",
        "Marketing digital y Facebook Ads — gestión de campañas propias"
    ],
    analitica: [
        "Curso de analítica web (Google)"
    ],
    apps: [
        "Curso de desarrollo de apps móviles (Google)"
    ],
    ecommerce: [
        "Gestión como propietario de varios ecommerce en Shopify",
        "Creación de 2 ecommerce en WordPress para autónomos"
    ],
    posgrado: [
        "Posgrado en Project Management — ENEB · Universidad Isabel I (premio Cum Laude)"
    ],
    fp: [
        "Formación Profesional Superior — Desarrollo de Aplicaciones Multiplataforma (DAM)"
    ],
    idiomas: [
        "Español — nativo",
        "Gallego — nativo",
        "Inglés — B1 Certificate EF SET",
        "Alemán — competencia básica (Duolingo nivel 23)",
        "Francés — competencia básica"
    ],
    poker: [
        "Jugador profesional de poker a tiempo completo durante 2 años",
        "Probabilidad, estadística, gestión de bankroll y toma de decisiones bajo incertidumbre"
    ],
    bolsa: [
        "Inversión y operativa en bolsa"
    ],
    crypto: [
        "Informado del mundo de los criptoactivos",
        "Smart contracts"
    ]
};

$(".course").on("click", function () {
    const key = $(this).attr("data-course");
    const items = coursesData[key];
    if (!items) {
        return;
    }

    const title = $(this).find(".course-technology h5").text();
    $("#course-popup-title").text(title);

    const list = $("#course-popup-list");
    list.empty();
    items.forEach((item) => {
        list.append($("<li>").text(item));
    });

    $(".popup-courses-overlay").addClass("active");
});

$(".close-courses").on("click", function () {
    $(".popup-courses-overlay").removeClass("active");
});
