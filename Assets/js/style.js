$(document).ready(function () {
    //   *******************************
    menu_active(".nav_item_a_list", ".nav_item_a_list ul li a", ".nav_item_a_list ul li", ".nav_item_a_list ul li");
    //   *******************************
    //   *******************************

    // ******************< menu >**********************

    $(".menu_header_nav_btn>i").click(function (e) {
        $(".menu_header_nav_btn>i").toggleClass("icon-times");
        $(".menu_header_nav_btn>i").toggleClass("icon-bars-solid");
        $(".nav_item_a_list").toggleClass("nav_item_a_list__activ");
        $(".menu_header").toggleClass("menu_header__nav__activ");
    });

    $(".nav_item_a_list_line").click(function (e) {
        $(".menu_header").toggleClass("menu_header_open");
    });

    $(".search_icon").click(function (e) {
        $(".search_box_Mobile").toggleClass("d_flex");
    });

    $("#icon-search").click(function (e) {
        $(".search_input_box").toggleClass("search_input_box_ac");
        $("#icon-search").toggleClass("icon-search");
        $("#icon-search").toggleClass("icon-times");
    });
    // ******************< menu >**********************
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $(".menu_header").addClass("menu_header_scroll");
        } else {
            $(".menu_header").removeClass("menu_header_scroll");
        }
    });
    // ************************************************
    $(".btn_add").click(function (e) {
        jQuery(".btn_add i").toggleClass("icon-check");
        jQuery(".btn_add i").toggleClass("icon-plus");
    });
    //   ***********************************************
    // *********************
    $(".sanse_date_box").click(function (e) {
        $(".sanse_date_box").removeClass("sanse_date_box_activ");
        $(e.currentTarget).addClass("sanse_date_box_activ");
    });
    $(".sanse_cnama_box").click(function (e) {
        $(".sanse_cnama_box").removeClass("sanse_cnama_box_activ");
        $(e.currentTarget).addClass("sanse_cnama_box_activ");
        $(".sanse_boy").addClass("sanse_boy_activ");
    });
    show_scroll(".boy_cinema_ticket", ".sanse_date");
    show_scroll(".theater_ticket_boy", ".boy_ticket_theater");
    show_scroll(".singelhall_slider__info__btn .btn_red", ".comment");

    // **********************
    //   ***********************************************
    let Halls = $('.scroll_drag')[0]
    let gallery_film = $('.film_celct_img_min')[0]
    let cnama_img = $('.singelhall_imgs')[0]
    let theater_img = $('.gallery_theater_img')[0]
    Scrol_drag(theater_img);
    Scrol_drag(cnama_img);
    Scrol_drag(Halls);
    Scrol_drag(gallery_film);
    // ***************************************
    btn_gal(".Halls_btn_right", ".Halls_btn_left", '.scroll_drag');
    btn_gal(".gallery_btn_theater_right", ".gallery_btn_theater_left", '.gallery_theater_img');
    // ? \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////
    $(".clos_menu_profil>i").click(function (e) {
        $(".profil_menu").toggleClass("profil_menu_min");
        $(".menu_uzer_profil>a>span").toggleClass("d_none");
        $(".clos_menu_profil").toggleClass("center");
        $(".clos_menu_profil>i").toggleClass("icon-times");
        $(".clos_menu_profil>i").toggleClass("icon-bars-solid");
    });
    $("#plas").click(function (e) {
        var data = $(".input_add>input").val();
        data = parseInt(data);
        $(".input_add>input").val(data += 1000);
    });
    $("#mains").click(function (e) {
        var data = $(".input_add>input").val();
        data = parseInt(data);
        if (data > 5000) {
            $(".input_add>input").val(data -= 1000);
        }
    });
    $(".Content_Message_box").click(function (e) {
        if (this.open == false) {
            $(e.currentTarget).siblings(".View_message").remove();
        }
    });
    // ? \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////
    $(".icon_logon").click(function (e) {
        $(".box__login").css("display", "flex");
    });
    $(".login__menu__top>i").click(function (e) {
        $(".box__login").css("display", "none");
    });
    $(".form_Register").click(function (e) {
        $(".form_login").removeClass("active");
        $(".form_Register").addClass("active");
        $(".Register__input").css("display", "flex");
        $(".Register__input__code").css("display", "none");
        $(".login__input").css("display", "none");
    });
    $(".form_login").click(function (e) {
        $(".form_Register").removeClass("active");
        $(".form_login").addClass("active");
        $(".login__input").css("display", "flex");
        $(".Register__input").css("display", "none");
        $(".Register__input__code").css("display", "none");
    });
    $(".login__input>span").click(function (e) {
        $(".login__input").css("display", "none");
        $(".Register__input__code").css("display", "flex");
    });
    // *******************************

    $(".singelhall_slider__info__titel>i").click(function (e) {
        $(".singelhall_slider__info__titel>i").toggleClass("far");
        $(".singelhall_slider__info__titel>i").toggleClass("fas");
    });

    // ***********************

    $(".film_celct_img_min>img").click(function (e) {
        var kl = $(e.currentTarget).attr("src");
       $(".film_celct_img_activ").removeClass("d_none");
       $(".film_celct_img_activ>img").attr("src", kl);
    });

    // ***********************



});
