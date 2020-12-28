const imgParoller = Array.from(document.querySelectorAll('[data-paroller]'));

let windowYCoord = 0;

window.addEventListener('scroll', () => {

    windowYCoord = window.scrollY;

    imgParoller.forEach((el) => {

        if (el.closest('.block-with-image').offsetTop - window.scrollY <= window.innerHeight - 200 && window.innerWidth >= 768) {
            // console.log(el.closest('.block-with-image').offsetTop - window.scrollY);

            el.style.transform = `translateY(${(el.closest('.block-with-image').offsetTop - window.scrollY) / -10}px)`;

        }else{
            el.style.transform = ``;

        }
    })
});