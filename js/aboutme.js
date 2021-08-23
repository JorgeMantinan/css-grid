$(".open").on("click", function () {
    $(".popup-aboutme-overlay, .popup-aboutme").addClass("active");
});

//removes the "active" class to .popup and .popup-aboutme when the "Close" button is clicked 
$(".close, .popup-aboutme-overlay").on("click", function () {
    $(".popup-aboutme-overlay, .popup-aboutme").removeClass("active");
});