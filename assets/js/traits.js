$(document).ready(function () {


    let days_arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var d = new Date();
    var n = d.getDay();
    $("." + days_arr[n]).html("<span class='nav-live'>(Live)</span> " + days_arr[n]);
    $("." + days_arr[n]).addClass("active active-locked");

    $("h2", "#" + days_arr[n]).html(days_arr[n] + " <span class='title-live'>(Live)</span>");

    fadeThem();

    $('html,body').animate({
        scrollTop: $("#" + days_arr[n]).offset().top
    }, '5000');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
})

function fadeThem() {
    $(".nav-live").fadeOut(500, function () {
        $(this).fadeIn(200, fadeThem());
    });

    $(".title-live").fadeOut(500, function () {
        $(this).fadeIn(200, fadeThem());
    });
}
