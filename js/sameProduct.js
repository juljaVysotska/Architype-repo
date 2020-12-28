// const sameProductRotator = document.querySelector('.same_product-rotator');
// const stoneCard = Array.from(document.querySelectorAll('.stone_card'));
// const stoneCardArrLength = stoneCard.length;

// let count = Math.ceil(stoneCardArrLength / 4);

// let subarray = [];

// for (let i = 0; i < count; i++) {
//     subarray[i] = stoneCard.slice((i * 4), (i * 4) + 4);
// }


// if (window.innerWidth >= 768) {
//     sameProductRotator.classList.add('owl-carousel');

//     $('.same_product-rotator.owl-carousel').owlCarousel({
//         autoWidth: true
//     });

// }

// if (window.innerWidth <= 768) {

//     if (count > 1) {
//         for (let i = 0; i < count; i++) {
//             let newDiv = document.createElement('div');
//             newDiv.classList.add('wrapp');
//             subarray[i].forEach(elem => newDiv.append(elem));
//             sameProductRotator.append(newDiv);
//         }
//     } else {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('wrapp');
//         stoneCard.forEach(el => newDiv.append(el));
//         sameProductRotator.append(newDiv)
//     }

//     sameProductRotator.classList.add('owl-carousel');

//     $('.same_product-rotator').owlCarousel({
//         autoWidth: true,
//         item: 1,
//         margin: 25

//     });

// }

// const next = Array.from(document.querySelectorAll('.same_product .controlls .-next'));
// const prev = Array.from(document.querySelectorAll('.same_product .controlls .-prev'));

// next.forEach((el) => {
// 	el.addEventListener('click',()=>{
		
//         $('.same_product-rotator').trigger('next.owl');
// 	})
// });

// prev.forEach((el) => {
// 	el.addEventListener('click',()=>{
		
//         $('.same_product-rotator').trigger('prev.owl');
// 	})
// });











