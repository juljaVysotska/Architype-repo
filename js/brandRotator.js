const brandsBlockRotator = $('.brands_rotator.owl-carousel');

const prevBrandsRotator = Array.from(document.querySelectorAll('.brands_block  .controls .-prev')).map((el) => {

    el.addEventListener('click', () => {
        brandsBlockRotator.slick('slickPrev');
    })
});

const nextBrandsRotator = Array.from(document.querySelectorAll('.brands_block  .controls .-next')).map((el) => {
    el.addEventListener('click', () => {
        brandsBlockRotator.slick('slickNext')
    })
});


const sameProductRotator = document.querySelector('.brands_block .brands_rotator');
const brandsItems = Array.from(document.querySelectorAll('.brands_block .brand_item'));
const stoneCardArrLength = brandsItems.length;

let count = Math.ceil(stoneCardArrLength / 3);

let subarray = [];

for (let i = 0; i < count; i++) {
    subarray[i] = brandsItems.slice((i * 3), (i * 3) + 3);
}


if (window.innerWidth >= 768) {
    
    brandsBlockRotator.slick({
        slidesToShow: 4,
        arrows: false,
        dots: false,
        infinite: true,
        autoWidth: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
}

if (window.innerWidth <= 768) {
    if (count > 1) {
        for (let i = 0; i < count; i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('wrapp');
            subarray[i].forEach(elem => newDiv.append(elem));
            sameProductRotator.append(newDiv);
        }
    } else {
        let newDiv = document.createElement('div');
        newDiv.classList.add('wrapp');
        brandsItems.forEach(el => newDiv.append(el));
        sameProductRotator.append(newDiv)
    }

    brandsBlockRotator.slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
}







