$(document).ready(function() {
    $("#home").show();

    $(".nav-link").click(function() {
        var target = $(this).data("target");
        $(".content").hide();
        $("#" + target).show();
    });
});