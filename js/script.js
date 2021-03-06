

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

// табы

tabItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < tabItem.length; i++){
            tabContent[i].classList.remove('active-tab')
            tabItem[i].classList.remove('active-item')
        }
        tabContent[index].classList.add('active-tab')
        tabItem[index].classList.add('active-item')

        if (window.innerWidth <= 680){
            recommendationList.classList.toggle('recommendation__list--open')
        }

    })
})

recommendationTitle.addEventListener('click', () => {
    recommendationList.classList.toggle('recommendation__list--open')
})


// паралакс эффект

const articleWeeksBg = document.querySelector('.article-weeks__bg')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    articleWeeksBg.style.bottom = value * - 0.3 + 'px'
})

// bookmarks

const newsBookmark = document.querySelectorAll('.news__bookmark'),
    newsBookmarkSvg = document.querySelectorAll('.news__bookmark-svg');

    newsBookmark.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            newsBookmarkSvg[i].classList.toggle('red-svg')
        })
})


    // слайдер

   const slider = document.querySelector('.hot-slider__container')

   let customSlider = new Swiper(slider, {
       slideClass: 'hot-slider__item',
       wrapperClass: 'hot-slider__wrapper',
       loop: true,
       pagination: {
        el: '.hot-slider__pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 2000,
      },
   })


   const goTop = document.querySelector('.go-top')

   goTop.addEventListener('click', e => {
       e.preventDefault()
       console.log(1);
       window.scrollTo({top: 0, behavior: 'smooth'})
   })