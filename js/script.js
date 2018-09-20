$(document).ready(function() {
    $("#main").load("tpl/catalogue.html",function() {
        startOwl();
    });

});

function startOwl() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}