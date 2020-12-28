try {
    const prevInfoArticles = document.querySelector('.useful-info_articles .controlls .-prev');
    const nextInfoArticles = document.querySelector('.useful-info_articles .controlls .-next');

    prevInfoArticles.addEventListener('click', () => {
        $('.useful-info_articles_footer').slick('slickPrev');
    });

    nextInfoArticles.addEventListener('click', () => {
        $('.useful-info_articles_footer').slick('slickNext');
    });

    $('.useful-info_articles_footer.owl-carousel').slick({
        infinite: true,
        variableWidth: true,
        arrows: false,
    });

} catch (e) {
    console.log(e)
}


if (window.innerWidth <= 768) {
    $('.useful-info_articles_footer').slick('unslick')

    $('.gallery_footer').slick({
        variableWidth: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
    });

    $('.examples_footer').slick({
        variableWidth: true,
        arrows: false,
        slidesToShow: 1,
    });
} else {
    
}