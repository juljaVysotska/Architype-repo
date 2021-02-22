const dropdown = Array.from(document.querySelectorAll('.dropdown .dropdown-toggle'));

dropdown.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.closest('.dropdown').classList.contains('dropdown-open')) {
            el.closest('.dropdown').classList.remove('dropdown-open');
            el.classList.remove('active');
        } else {
            el.closest('.dropdown').classList.add('dropdown-open');
            el.classList.add('active');
        }
    })
});


const langPicker = Array.from(document.querySelectorAll('.lang-picker .actual-lang'));

langPicker.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.closest('.lang-picker').classList.contains('open')) {
            el.closest('.lang-picker').classList.remove('open');
        } else {
            el.closest('.lang-picker').classList.add('open');
        }
    })
});


////////////////////


try {

    const liTabNavigation = Array.from(document.querySelectorAll('.tab_block li[data-attr]'));
    const tabContent = Array.from(document.querySelectorAll('.tab_content'));
        // console.log(liTabNavigation)

    liTabNavigation.map((el, ind) => {
        // console.log(el)

        el.addEventListener('click', function() {
            // console.log('lkjhgfcvbnm,kljhb')

            if(window.innerWidth <= 768 && !el.closest('.visual-container')){
                if(+ind === 2){
                    el.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "end"});

                }else{
                    el.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "center"});
                }
            }

            Array.from(this.closest('.tab_block').querySelectorAll('li[data-attr]')).forEach((elem) => elem.classList.remove('active'));
            this.classList.add('active');
            Array.from(this.closest('.tab_block').querySelectorAll('.tab_content')).forEach((elem) => elem.classList.remove('show'));
            document.querySelector(`#${this.getAttribute('data-attr')}`).classList.add('show')
        })
    });

} catch (e) {
    console.log(e);
}

////////////////////////////////
const burgerIcon = Array.from(document.querySelectorAll('.burger-menu_icon'));
const burgerPopup = document.querySelector('.burger-menu_pop_up');

burgerIcon.forEach((el) => {
    el.addEventListener('click', () => {
        burgerPopup.classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
    });
})

burgerPopup.querySelector('.close-icon').addEventListener('click', () => {
    burgerPopup.classList.remove('show');
    document.querySelector('body').style.overflow = '';

})


const titlesListPopUp = Array.from(document.querySelectorAll('.burger-menu_pop_up .site-nav_list .title-list'));

titlesListPopUp.forEach((el) => {
    el.addEventListener('click', () => {
        const leftSiblin = el.closest('.site-nav_list');

        if (leftSiblin.querySelector('.list_wrapp') && !leftSiblin.classList.contains('opened')) {
            leftSiblin.classList.add('opened')
        } else {
            leftSiblin.classList.remove('opened')
        }
    })
})
//////////////////////////////
const partnershipPopupButton = Array.from(document.querySelectorAll('nav .information .partnership'));
const partnershipPopupButtonFooter = Array.from(document.querySelectorAll('footer .footer_short-info .partnership'));
const popUpPatnership = document.querySelector('.burger-menu_pop_up .btn.partnership-btn');

const partnershipPopup = document.querySelector('.partnership_popup_wrap');

const partnershipTriggers = partnershipPopupButton.concat(partnershipPopupButtonFooter).concat(popUpPatnership);

partnershipTriggers.forEach((el) => {
    el.addEventListener('click', () => {

        if (!partnershipPopup.classList.contains('show')) {
            partnershipPopup.classList.add('show');

        } else {
            partnershipPopup.classList.remove('show')
        }
    });

});

try{

    partnershipPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.partnership_pop_up')) {
            partnershipPopup.classList.remove('show')
        }
    });

}catch(e){
    console.log(3)
}

/////////////////////////////////////////////


try {
    const wishPrjPopup = document.querySelector('.wish_popup_wrap');
    const wishBtnRequest = Array.from(document.querySelectorAll('.request-wish_popup_btn'));

    wishBtnRequest.forEach((el) => {
        el.addEventListener('click', () => {

            if (!wishPrjPopup.classList.contains('show')) {
                wishPrjPopup.classList.add('show');

            } else {
                wishPrjPopup.classList.remove('show')
            }
        });
    });


    wishPrjPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.partnership_pop_up')) {
            wishPrjPopup.classList.remove('show')
        }
    });


    const collabPartnership = document.querySelector('.partnership-form_block .mobile-popup');

    collabPartnership.addEventListener('click', () => {

        if (!partnershipPopup.classList.contains('show')) {
            partnershipPopup.classList.add('show');

        } else {
            partnershipPopup.classList.remove('show')
        }
    });

} catch (e) {}


try {
    const offerPrjPopup = document.querySelector('.offer_popup_wrap');

    const designersPartnership = Array.from(document.querySelectorAll('.share_block .btn'));

    const offerRequestBtn = document.querySelector('.request-offer_popup_btn');

    const triggerOfferArray = (offerRequestBtn) ? designersPartnership.concat(offerRequestBtn) : designersPartnership;


    triggerOfferArray.forEach((el) => {

        el.addEventListener('click', () => {

            // console.log('click there designersPartnership')

            if (!offerPrjPopup.classList.contains('show')) {
                offerPrjPopup.classList.add('show');

            } else {
                offerPrjPopup.classList.remove('show')
            }
        });
    });

    offerPrjPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.partnership_pop_up')) {
            offerPrjPopup.classList.remove('show')
        }
    });

} catch (e) {}




try {

    const wishPopup = document.querySelector('.wish_popup_wrap');

    const feedbackPartnership = document.querySelector('.feedback_block .btn');

    feedbackPartnership.addEventListener('click', () => {

        if (!wishPopup.classList.contains('show')) {
            wishPopup.classList.add('show');

        } else {
            wishPopup.classList.remove('show')
        }
    });

} catch (e) {}



/////////////////////////
try {
    const switchLabel = Array.from(document.querySelectorAll('#switch label'));

    switchLabel.forEach((el) => {
        el.addEventListener('click', () => {

            switchLabel.forEach((elem) => {
                elem.classList.remove('current');
                elem.querySelector('input').removeAttribute('checked');
            });
            el.classList.add('current');
            el.querySelector('input').setAttribute('checked', true);

        })
    });
} catch (e) {
    console.log(e)
}


//////////////////////////////
const stickyNav = document.querySelector('nav.sticky');
let windowY = 0;

let clientHeight = document.querySelector('body').clientHeight;
        // stickyNav.classList.add('show');//пофиксить

window.addEventListener('scroll', () => {

    if (window.scrollY <= windowY && window.scrollY >= 700) {
        stickyNav.classList.add('show');
        stickyNav.style.opacity = 1
    } else {
        stickyNav.classList.remove('show');
        stickyNav.style.opacity = 0
    }

    windowY = window.scrollY;
})


/////////////////////////


try {
    const colorArr = Array.from(document.querySelectorAll('.color_input')).map((el) => {
        el.addEventListener('click', () => {
            if (el.classList.contains('checked')) {
                el.classList.remove('checked')
            } else {

                el.classList.add('checked');
            }
        })
    });
} catch (e) {
    console.log(e);
}





////////////////////////////
const closePopup = Array.from(document.querySelectorAll('.pop_up-wrapp .close-popup'));
const closePopupBtn = Array.from(document.querySelectorAll('.pop_up-wrapp .btn-close'));

const closePopupBtnArr = (closePopupBtn) ? closePopup.concat(closePopupBtn) : closePopup;

closePopupBtnArr.forEach((el) => {
    el.addEventListener('click', () => {
        el.closest('.pop_up-wrapp').classList.remove('show');
    })
});

///////////////////////////

try {
    const promotionCards = Array.from(document.querySelectorAll('.promotion_cards .card'));
    const promotionCardsContainer = document.querySelector('.promotion_cards');

    promotionCards.forEach((el) => {
        el.addEventListener('mouseover', () => {
            promotionCards.forEach(elem => elem.classList.remove('blue_card'));

            el.classList.add('blue_card');
        });
    });

    promotionCardsContainer.addEventListener('mouseleave', () => {
        promotionCards.forEach(elem => elem.classList.remove('blue_card'));
        promotionCards[0].classList.add('blue_card');
    })


} catch (e) {
    console.log(e);
}


/////////////////
const searchBlock = Array.from(document.querySelectorAll('nav .search'));
const searchIcon = Array.from(document.querySelectorAll('nav .search-icon'));
const searchClose = Array.from(document.querySelectorAll('nav .search .close-icon'));

searchIcon.forEach((el) => {
    el.addEventListener('click', () => {
        el.closest('.search').classList.add('full');
    });
});


searchClose.forEach((el) => {
    el.addEventListener('click', () => {
        el.closest('.search').classList.remove('full');

    });
});


document.addEventListener('click', (e) => {

    if (!e.target.closest('.dropdown')) {

        dropdown.forEach((el) => {
            el.classList.remove('active');
            el.closest('.dropdown').classList.remove('dropdown-open');
        });
    }

    if (!e.target.closest('.lang-picker')) {

        langPicker.forEach((el) => {
            el.closest('.lang-picker').classList.remove('open');
        })

    }


    if (!e.target.closest('.search')) {

        searchBlock.forEach((el) => {
            el.classList.remove('full');
        })

    }

})


//////////////////////////////
try {
    const funishedProductPopup = document.querySelector('.product-gallery_popup_wrap');
    const productCard = Array.from(document.querySelectorAll('.product_card'));

    // productCard.forEach((el) => {
    //     el.addEventListener('click', () => {
    //         funishedProductPopup.classList.add('show');
    //     })
    // });

    funishedProductPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.gallery_popup')) {
            funishedProductPopup.classList.remove('show');
        }
    })


} catch (e) {
    // statements
    console.log(e);
}


/////////////////////////////////////
try {
    const hoverCardDescription = Array.from(document.querySelectorAll('.hover_card .card_descr'));
    hoverCardDescription.forEach((el) => {
        if (el.clientHeight >= 200) el.classList.add('overflow');
    });


    // let owl = $(".rotator-article_section .owl-carousel");

    $('.rotator-article_section .rotator').slick({
        arrows: false,
        dots: true
    })

    const arrPrev = Array.from(document.querySelectorAll('.rotator-article_section .controls .prev'));
    const arrNext = Array.from(document.querySelectorAll('.rotator-article_section .controls .next'));

    arrNext.forEach((el) => {
        el.addEventListener('click', function () {
            let closestRotator= this.closest('.rotator-article_section').querySelector('.owl-carousel');
            $(closestRotator).slick('slickNext');
        });
    });

    arrPrev.forEach((el) => {
        el.addEventListener('click', function () {
            let closestRotator= this.closest('.rotator-article_section').querySelector('.owl-carousel');
            $(closestRotator).slick('slickPrev');
        });
    });
} catch (e) {
    console.log(e);
}


///////////////////////

function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}


// if(iOS())


//////////////////////////

try {
    const arrLeft = Array.from(document.querySelectorAll('.rotator-article_section .controls .prev'));
    const arrRight = Array.from(document.querySelectorAll('.rotator-article_section .controls .next'));
    const rotator = arrRight.closest('.rotator-article_section').querySelector('.rotator');

    arrLeft.forEach((el) => {
        el.addEventListener('click', () => {
            rotator.trigger('prev.owl');
        })
    })

    arrRight.forEach((el) => {
        el.addEventListener('click', () => {
            rotator.trigger('next.owl');
        })
    })


} catch (e) {
    // statements
    console.log(e);
}


/////////////////////
try {
    const subnavArr = document.querySelector('.subnav');
    const actualElSubnav = subnavArr.querySelector('.actual');

    actualElSubnav.scrollIntoView({ block: "center", behavior: "smooth", inline: "center" });


} catch(e) {
    // console.log(e);
}

    












