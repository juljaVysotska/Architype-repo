

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
    slideCountActual.innerHTML = currentSlide + 1;
    slideCountAll.innerHTML = countSlide;

})








