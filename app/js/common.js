$(function() {

	// Custom JS
    //menu
    $('#block-menu').append('<div class="mob-btn"><div class="icon-bar"></div><div class="icon-bar"></div><div class="icon-bar"></div><div class="icon-bar"></div></div>');

    $('.mob-btn').click(function () {
        $(this).toggleClass('active-mob-btn');
        $('#block-menu .field').slideToggle(250);
    });


    //shadow item project
    $('.item-project .option-item').hover(function () {
        $('.item-project').toggleClass('js-no-active-shadow');
    });


    //slick-slyder
    $('.big-carousel-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-1'
    });
    $('.little-carousel-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-1',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.big-carousel-dop-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-dop-1',

        responsive: [
            {
                breakpoint: 890,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.little-carousel-dop-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-dop-1',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('.big-carousel-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-2'
    });
    $('.little-carousel-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-2',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.big-carousel-dop-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-dop-2',

        responsive: [
            {
                breakpoint: 890,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.little-carousel-dop-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-dop-2',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('.big-carousel-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-3'
    });
    $('.little-carousel-3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-3',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.big-carousel-dop-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-dop-3',

        responsive: [
            {
                breakpoint: 890,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.little-carousel-dop-3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-dop-3',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('.big-carousel-4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-4'
    });
    $('.little-carousel-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-4',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.big-carousel-dop-4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-dop-4',

        responsive: [
            {
                breakpoint: 890,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.little-carousel-dop-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-dop-4',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('.big-carousel-5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-5'
    });
    $('.little-carousel-5').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-5',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.big-carousel-dop-5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-dop-5',

        responsive: [
            {
                breakpoint: 890,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.little-carousel-dop-5').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-dop-5',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('.big-carousel-6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-6'
    });
    $('.little-carousel-6').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-6',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.big-carousel-dop-6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.little-carousel-dop-6',

        responsive: [
            {
                breakpoint: 890,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.little-carousel-dop-6').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-carousel-dop-6',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    //*******************************

    //dop-carousel
    $('.js-big-carousel').on('click', function () {
        var $wrapCarousel = $(this).parent('div');
        $wrapCarousel.next('.dop-galery').addClass('js-active-dop-gal');
    });
    $('.close-dop-galery').on('click', function () {
        $(this).parent('.dop-galery').removeClass('js-active-dop-gal');
    });
    //**************************************

    //carousel work
    $('.block-views-blockproducts-block-1 .view-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.block-views-blockproducts-block-2 .view-content'
    });
    $('.block-views-blockproducts-block-2 .view-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        infinite: false,
        asNavFor: '.block-views-blockproducts-block-1 .view-content',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,

        responsive: [
            {
               breakpoint: 768,
                settings: {
                    vertical: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    vertical: false
                }
            }
        ]
    });

    //**********************************

    //popup window
    $('a.btn').magnificPopup();
    //**********************************

    //input type file
    $('input[type=file]').styler();
    //*********************************


    //scroll menu
    $("#block-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

});
