// * menu active * //
function menu_active(xw, sw, uw, aw) {
    var nav = $(xw);
    var line = $('<div/>').addClass('line');
    line.appendTo(nav);
    var active = nav.find('.active');
    var pos = 0;
    var wid = 0;
    if (active.length) {
        pos = active.position().left;
        wid = active.width();
        line.css({
            left: pos,
            width: wid
        });
    }
    $(sw).click(function (e) {
        $(aw).removeClass("active");
        if (!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
            nav.addClass('animate');
            var _this = $(this);
            nav.find(uw).removeClass('active');
            var position = _this.parent().position();
            var width = _this.parent().width();
            if (position.left >= pos) {
                line.animate({
                    width: ((position.left - pos) + width)
                }, 300, function () {
                    line.animate({
                        width: width,
                        left: position.left
                    }, 150, function () {
                        nav.removeClass('animate');
                    });
                    _this.parent().addClass('active');
                });
            } else {
                line.animate({
                    left: position.left,
                    width: ((pos - position.left) + wid)
                }, 300, function () {
                    line.animate({
                        width: width
                    }, 150, function () {
                        nav.removeClass('animate');
                    });
                    _this.parent().addClass('active');
                });
            }
            pos = position.left;
            wid = width;
        }
    });
}
// * menu active * //
// * scrol drag * //
function Scrol_drag(SS) {
    if (SS) {
        let isDown = false;
        let startX;
        let scrollLeft;
        SS.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - SS.offsetLeft;
            scrollLeft = SS.scrollLeft;
        });
        SS.addEventListener('mouseleave', () => {
            isDown = false;
        });
        SS.addEventListener('mouseup', () => {
            isDown = false;
        });
        SS.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - SS.offsetLeft;
            const walk = (x - startX);
            SS.scrollLeft = scrollLeft - walk;
        });
    }
}
// * scrol drag * //
// * Add when scrolling arrives * //
function Scrol_res(casf) {
    if ($(casf).offset() != undefined) {
        var offset = $(casf).offset();
        var top;
        top = offset.top;
        var h = $(document).scrollTop().valueOf();
        if (h >= top - 160) {
            $(".introduction_film_img").css("cursor", "default");
            $(".introduction_film_img>img").css("filter", "grayscale(0)");
            $(".introduction_film_info").addClass("introduction_film_info_active");
        }
    }
}
// *********************************
function btn_gal(qwer, asdf, cvb) {
    $(qwer).click(function (e) {
        let Halls = $(cvb)[0]
        Halls.scrollLeft += 210;
    });
    $(asdf).click(function (e) {
        let Halls = $(cvb)[0]
        Halls.scrollLeft -= 210;
    });
}
// * Add when scrolling arrives * //
function show_scroll(showcl, show) {
    $(showcl).click(function (e) {
        try {
            $('html, body').animate({ scrollTop: $(show).offset().top }, 'slow');
        }
        catch (er) {
        }
    });
}
// ?????????????????????????????????????????????
var slideIndex = 1;
showSlides(slideIndex);
setInterval(plusSlides, 6000);
function plusSlides(n) {
    if (n == undefined)
        n = 1;
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    try {
        var i;
        var slides = document.getElementsByClassName("slider_box");
        var dots = document.getElementsByClassName("slider_point");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).css("display", "none");
            $(slides[i]).removeClass("slider_active");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slider_point_active", "");
        }
        dots[slideIndex - 1].className += " slider_point_active";
        $(slides[slideIndex - 1]).css("display", "flex");
        $(slides[slideIndex - 1]).addClass(" slider_active");
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
    }
    catch (er) {
    }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var mqx = window.matchMedia("(max-width: 600px)");
if (mqx.matches) {
    $(".icon_logon").insertAfter(".nav_item_a_list>ul>li:nth-child(3)");
    $(".search_icon").insertAfter(".nav_item_a_list>ul>li:last-child");
    $(".film_chosen_info .film_chosen_info_text").insertBefore("#film_chosen_text .film_chosen_info_text ");
    $(".film_chosen_info_text").addClass("m_b");
    $(".film_chosen_box_text").insertAfter(".film_chosen_info_text ");
    $("#film_chosen_info_profile").insertBefore("#film_chosen_text");
    $("#film_chosen_info_profile").addClass("m_b");
    // ************************
    select()
    // ************************
}
// *********
var mqy = window.matchMedia("(max-width: 991px)");
if (mqy.matches) {
    $(".Banking_portal").insertBefore(".Purchase_information__financial");
    show_scroll(".sanse_cnama_box", ".sanse_boy_activ");
}
// ********
function select() {
    var clas = $("#select_a").attr('class');
    if (clas == "select_content__active") {
        $(".select_content_b").addClass("d_none");
    }
    else {
        $(".select_content_a").addClass("d_none");
    }
    $("#select_b").click(function (e) {
        $("#select_a").removeClass("select_content__active");
        $("#select_b").addClass("select_content__active");
        $(".select_content_a").addClass("d_none");
        $(".select_content_b").removeClass("d_none");
    });
    $("#select_a").click(function (e) {
        $("#select_b").removeClass("select_content__active");
        $("#select_a").addClass("select_content__active");
        $(".select_content_b").addClass("d_none");
        $(".select_content_a").removeClass("d_none");
    });
}