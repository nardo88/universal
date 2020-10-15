const burgerButton = document.querySelector('.burger-button'),
    nav = document.querySelector('.header__nav-links'),
    tabContent = document.querySelectorAll('.topic-article'),
    tabItem = document.querySelectorAll('.recommendation__item'),
    recommendationTitle = document.querySelector('.recommendation__title'),
    recommendationList = document.querySelector('.recommendation__list');


// бургер меню

burgerButton.addEventListener('click', () => {
    nav.classList.toggle('menu-open')
})



const newsBookmark = document.querySelectorAll('.hero__bookmark'),
    newsBookmarkSvg = document.querySelectorAll('.bookmark-svg');

    newsBookmark.forEach((item, i) => {
        item.addEventListener('click', () => {
            newsBookmarkSvg[i].classList.toggle('red-svg')
        })
})


// слайдер

const sliderArticle = document.querySelector('.article-slider__container');

let slider = new Swiper(sliderArticle, {
    slideClass: 'article-slider__item',
    wrapperClass: 'article-slider__wrapper',
    loop: true,
    navigation: {
        nextEl: '.article-slider__next',
        prevEl: '.article-slider__prev',
    },
  
})


const commentsShowAll = document.querySelector('.comments__show-all')
const commentsItem = document.querySelectorAll('.comments__item')

commentsShowAll.addEventListener('click', () => {
    commentsItem.forEach(item => {
        item.style.display = 'block'
    })
})