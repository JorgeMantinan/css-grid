$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
        $("#go-top").fadeIn(400);
    } else {
        $("#go-top").fadeOut(400);
    }
});

$("#go-top").on("click", function () {
    $("html, body").scrollTop(0);
});
