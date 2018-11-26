$(document).ready(function() {
    // $("#main").load("tpl/catalogue.html",function() {
    //     startOwl();
    // });
    $("body").load("tpl/room.html",function () {
        startRoom();
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

function startRoom() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
}

function menuToggle(a) {
    $(".components li").each(function() {
        $(this).removeClass('active');
    });
    $(a).toggleClass('active');
    var id=$(a).attr('id');
    var content=$('#content_main');

    switch(id) {
        case 'menu-home': content.load('/tpl/room/home.html'); break;
        case 'menu-design': content.load('/tpl/room/design.html'); break;
        case 'menu-dash': content.load('/tpl/room/dash.html', function () {
            $('.js-example-basic-single').select2();
        }); break;
        case 'menu-stats': content.load('/tpl/room/stats.html'); break;
        case 'menu-tools': content.load('/tpl/room/tools.html'); break;
        default: console.log('error'); break;
    }
}
