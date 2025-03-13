$(document).ready(function() { 
    $(".score-value").click(function() {
        $(".score-value").removeClass("active")
        $(this).addClass('active');
    });
});

$(".submit-review").click(() => {
    const reviewRating = $(".score-value.active").text();

    $("#review-score").prepend(reviewRating);

    $(".rating").css("display", "none")
    $(".submitted-review").css("display", "flex")
})