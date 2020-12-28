const certificateBlock = Array.from(document.querySelectorAll('.certificate_card .certificate_block > div'));

certificateBlock.forEach((el) => {
    if (el.children.length > 2) {
        el.classList.add('owl-carousel');

        $('.owl-carousel').slick({
            arrows: false,
            variableWidth: true,
            slidesToShow: 2
        })
    } else {
        Array.from(el.closest('.certificate_block').querySelectorAll('.rotator-arr')).forEach((el) => el.style.display = 'none');
    }
});


$('.certificate_card .rotator-arr.prev').click(function() {
    let btn = $(this.closest('.certificate_block').querySelector('.owl-carousel'));
    $(btn).slick('slickPrev');
})

$('.certificate_card .rotator-arr.next').click(function() {
    let btn = $(this.closest('.certificate_block').querySelector('.owl-carousel'));

    $(btn).slick('slickNext');
})