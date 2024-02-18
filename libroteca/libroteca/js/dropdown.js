$(document).ready(function() {
    //Dropdown de Productos
    $(".dropdown-content").hide();

    $(".dropdown").click(function() {
        $(".dropdown-content").slideDown("slow");
    });

    $(".dropdown").mouseleave(function() {
        $(".dropdown-content").slideUp("slow");
    });

    //Dropdown de Idioma
    $(".dropdown-idioma").hide();

    $(".dropdown-lang").click(function() {
        $(".dropdown-idioma").slideDown("slow");
    });

    $(".dropdown-lang").mouseleave(function() {
        $(".dropdown-idioma").slideUp("slow");
    });
});