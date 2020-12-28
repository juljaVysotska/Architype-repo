const svg = document.querySelector("#svg");
const parentVisual = document.querySelector('.visual');
const parentVisualBlock = document.querySelector('.visual-container');

const rollUp = document.querySelector('.roll-up_block');
const visualDataSide = document.querySelector('.visual-data');

const stoneCards = Array.from(document.querySelectorAll(".visual-container .visual-data [data-group] .stone_card"));
const visualWrapp = document.querySelector('.visual_wrapp');
const helpMask = document.querySelector('img.help__mask');

let dopdownData = '';

let activeSvgPart = '';

function cleanSvgElems(parent) {
    Array.from(parent.children).forEach((el) => {
        el.classList.remove('outline')
    });
}

function setDataAttr(id, numb = '01') {
    document.querySelector(`.tab_content[data-part]`).setAttribute('data-part', id);
    document.querySelector(`.tab_content[data-group]`).setAttribute('data-group', numb);
}

function activeStoneCard(groupNumb) {
    const srcArrt = 'img_' + groupNumb; //формирую айди
    console.log(groupNumb)
    const splitString = document.querySelector(`#${srcArrt}`).getAttribute('src').split('_'); //нахожу нужный элемент по айди
    //вытаскиваю адресс картинки
    const imgNumb = splitString[splitString.length - 1].split('.')[0]; //вытаскиваю номер картинки

    stoneCards.forEach(elem => elem.classList.remove('active'));

    document.querySelector(`.stone_card[data-attr="${imgNumb}"]`).classList.add('active'); //ищу нужную мне картинку
}

parentVisual.classList.add('animate');

function svgHeight(){
     let svgHeight = svg.getBoundingClientRect().height; 
        let svgWidth = svg.getBoundingClientRect().width; 
        let height = svgWidth * 651 / 1360 + 3;

    if (window.innerWidth >= 768 ) {

       

        parentVisualBlock.style.height = height + 'px';
        console.log(height);

    }else{
        parentVisualBlock.style.height = '';
    
    }
}

svgHeight();
window.onresize = svgHeight;

function setOverflowBody() {
    if (window.innerWidth <= 768) {
        document.querySelector('body').style.overflow = 'hidden';
    }
}

function unsetOverflowBody() {
    if (window.innerWidth <= 768) {
        document.querySelector('body').style.overflow = '';
    }
}


svg.addEventListener("click", (e) => {
    helpMask.style.display =  'none';
    svgHeight();
    const partId = e.target.getAttribute('id'); //id элемента
    const groupNumb = e.target.getAttribute('data-group-numb'); //группа элемента
    const title = e.target.getAttribute('title'); //имя элемента
    setDataAttr(partId, groupNumb);

    if (partId !== 'svg') {
        cleanSvgElems(svg);
        e.target.classList.add('outline');
        dopdownData = title;
    }

    activeSvgPart = e.target;

    activeStoneCard(groupNumb)

    document.querySelector(`.visual-section_block p`).innerHTML = dopdownData; //default value(??)


    //"открывание" панели настроек
    if (rollUp.classList.contains('hidden') && partId !== 'svg') {
        rollUp.classList.remove('hidden');
        parentVisual.classList.add('less')
        visualDataSide.classList.remove('hide');
    }
});
const dataAttr = Array.from(document.querySelectorAll('div[data-attr]')); //stone_card

dataAttr.forEach((el) => {
    el.addEventListener('click', () => {
        //механизм генерации имени файла
        const parentGroup = el.closest('.tab_content').getAttribute('data-group'); //вытаскиваю группу элемента
        const dataAttr = el.getAttribute('data-attr'); //вытаскиваю порядковый номер
        const name = `${parentGroup}_${dataAttr}.png`;
        parentVisual.querySelector(`#img_${parentGroup}`).setAttribute('src', `img/visual/${name}`)
    })
});


function defaultData() {
    const defaultDataElem = svg.children[0];
    const defaultDataGrNumb = defaultDataElem.getAttribute('data-group-numb');
    const defaultDataId = defaultDataElem.getAttribute('id');

    document.querySelector(`.visual-section_block p`).innerHTML = defaultDataElem.getAttribute('title');; //default value(??)

    defaultDataElem.classList.add('outline');

    activeStoneCard(defaultDataGrNumb);

    setDataAttr(defaultDataId, defaultDataGrNumb)
}

defaultData()

rollUp.addEventListener('click', () => {
    helpMask.style.display ="none";
    if (!rollUp.classList.contains('hidden')) {
        rollUp.classList.add('hidden');
        visualDataSide.classList.add('hide');
        parentVisual.classList.remove('less');
        // cleanSvgElems(svg)
    } else {
        rollUp.classList.remove('hidden');
        parentVisual.classList.add('less')
        visualDataSide.classList.remove('hide');
    }
});

const liTabNavigation = Array.from(document.querySelectorAll('.tab_block li[data-attr]'));
const visualBlockMobile = document.querySelector('.visual-mobile');

liTabNavigation.map((el, ind) => {
    el.addEventListener('click', function() {
        if (el.getAttribute('data-attr') !== 'tab1') {
            parentVisual.classList.add('no-outline')
        } else {
            parentVisual.classList.remove('no-outline')
        }

        if (!visualBlockMobile.classList.contains('show')) {
            visualWrapp.classList.add('hidden')
        } else {
            visualWrapp.classList.remove('hidden')
        }

    })
});
////////////

stoneCards.forEach((el) => {
    el.addEventListener('click', () => {
        stoneCards.forEach(elem => elem.classList.remove('active'));
        el.classList.add('active');
        //логика setTimeout цвет обводки 
        // cleanSvgElems(svg);
        parentVisual.classList.add('no-outline');

        setTimeout(() => {
            parentVisual.classList.remove('no-outline');

        }, 2000)

    })
});

const filterTrigger = Array.from(document.querySelectorAll('[data-trigger="filter_block"]'));
const closeFilter = Array.from(document.querySelectorAll('.filter_block-close'));

filterTrigger.forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('.filter_block').classList.add('show');

        if (window.innerWidth <= 768) {
            visualWrapp.style.zIndex = '99';
        }
        setOverflowBody();


    });
})

closeFilter.forEach((el) => {
	
el.addEventListener('click', () => {
    document.querySelector('.filter_block').classList.remove('show');
    
   console.log('click')
    setTimeout(() => {
        if (window.innerWidth <= 768) {
            visualWrapp.style.zIndex = '';
        }
    }, 200)
    
    unsetOverflowBody();
})
})

/////////////////////
const usedMaterialsTriggers = document.querySelector('.control-check');
const usedMaterialsPopup = document.querySelector(".used-material_popup");

usedMaterialsTriggers.addEventListener('click', () => {
    usedMaterialsPopup.classList.add('show');
    if (window.innerWidth <= 768) {

    }
    setOverflowBody();
});
usedMaterialsPopup.querySelector('.close-icon').addEventListener('click', () => {
    usedMaterialsPopup.classList.remove('show');

    unsetOverflowBody()
});


usedMaterialsPopup.addEventListener('click', (e) => {
    if (!e.target.closest('.used-material_popup .wrapp')) {
        usedMaterialsPopup.classList.remove('show')
    }
});

////////////////

const dataPartIdArray = Array.from(document.querySelectorAll('[data-part-id]'));

dataPartIdArray.forEach((el) => {
    let id = el.getAttribute('data-part-id');

    el.addEventListener('click', () => {
        cleanSvgElems(svg);
        const elem = svg.querySelector(`#${id}`);
        const groupNumber = elem.getAttribute('data-group-numb');

        const text = elem.getAttribute('title');

        document.querySelector(`.visual-section_block p`).innerHTML = text; //default value(??)

        el.closest('.dropdown').classList.remove('dropdown-open');
        elem.classList.add('outline');

        setDataAttr(id, groupNumber);

        activeStoneCard(groupNumber)
    })
});


////////////////

const cookieBanner = document.querySelector('.about_cookie_banner');
const cookieClose = document.querySelector('.about_cookie_banner .close-icon');

cookieClose.addEventListener('click', () => {
    cookieBanner.classList.add('hide');
});

////////////////

function addSmallClass() {
    Array.from(document.querySelectorAll('.visual-controls [class^=control]:not(.control-share)')).forEach((el) => {
        el.classList.add('small')
    })
}

function removeSmallClass() {
    Array.from(document.querySelectorAll('.visual-controls [class^=control]:not(.control-share)')).forEach((el) => {
        el.classList.remove('small')
    })
}


const mobileControlShare = document.querySelector('.visual-controls .mobile-control');
const mobileWrappShare = document.querySelector('.visual-controls .mobile-wrap');
const controlShare = document.querySelector('.visual-controls .control-share');


mobileControlShare.addEventListener('click', () => {
    if (!mobileControlShare.classList.contains('active')) {
        mobileWrappShare.classList.add('full');
        mobileControlShare.classList.add('active');

    } else {
        mobileWrappShare.classList.remove('full');
        setTimeout(() => {
            removeSmallClass();
            mobileControlShare.classList.remove('active');

        }, 300);

    }

})

controlShare.addEventListener('click', () => {
    addSmallClass();
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.visual-controls') !== document.querySelector('.visual-controls')) {
        mobileWrappShare.classList.remove('full');

        setTimeout(() => {
            removeSmallClass();
            mobileControlShare.classList.remove('active');

        }, 300);
    }
});