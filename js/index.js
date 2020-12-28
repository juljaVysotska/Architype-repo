const videoinHeader = document.querySelector('header video');

$('header.owl-carousel').slick({
    infinite: true,
    lazyLoad: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    initialSlide: 0,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        initialSlide: 1,
	        autoplay: true,
	        autoplaySpeed: 3000,
	        dots: true
	      }
	    }
    ]
});


let videoFunc = function () {

    videoinHeader.addEventListener('ended', () => {
        $('header.owl-carousel').slick('slickNext');
        $('header.owl-carousel').slick('slickSetOption', 'autoplay', true, true);
        $('header.owl-carousel').slick('slickSetOption', 'autoplaySpeed', 5000, true);

        videoinHeader.setAttribute('loop', true);
        videoinHeader.play();

    });
};


if(window.innerWidth <= 768){

	$('header.owl-carousel').slick('slickRemove', 0);
	$('header.owl-carousel').slick('reInit');
	videoFunc = null;

}else{
	videoFunc();

}