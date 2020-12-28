$('.product-gallery .gellery_for .owl-wrapp ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    fade: true,
    infinite: false,
    asNavFor: '.product-gallery .gellery_nav .owl-wrapp',
    prevArrow: '<button type="button" class="slick-prev control -prev"><img src="img/icon/rotator-arr-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next control -next"><img src="img/icon/rotator-arr-right.svg" alt=""></button>',

});

$('.product-gallery .gellery_nav .owl-wrapp').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-gallery .gellery_for .owl-wrapp',
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
  variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev control -prev"></button>',
    nextArrow: '<button type="button" class="slick-next control -next"></button>',

});

const slideCount = document.querySelector('.product-gallery .gallery_wrapp .slide_count');
const slideCountActual = document.querySelector('.product-gallery .gallery_wrapp .actual');
const slideCountAll= document.querySelector('.product-gallery .gallery_wrapp .all');
const countSlide = Array.from(document.querySelectorAll('.product-gallery .gellery_for .item')).length;
let currentSlide = $('.product-gallery .gellery_for .owl-wrapp ').slick('slickCurrentSlide');

slideCountActual.innerHTML = currentSlide + 1;
slideCountAll.innerHTML = countSlide;

$('.product-gallery .gellery_for .slick-arrow').click(() => {
    let currentSlide = $('.product-gallery .gellery_for .owl-wrapp ').slick('slickCurrentSlide');

    console.log(currentSlide);
    slideCountActual.innerHTML = currentSlide + 1;
    slideCountAll.innerHTML = countSlide;

})








