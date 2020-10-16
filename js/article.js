const burgerButton = document.querySelector(".burger-button"),
    nav = document.querySelector(".header__nav-links"),
    tabContent = document.querySelectorAll(".topic-article"),
    tabItem = document.querySelectorAll(".recommendation__item"),
    recommendationTitle = document.querySelector(".recommendation__title"),
    recommendationList = document.querySelector(".recommendation__list");
burgerButton.addEventListener("click", () => {
    nav.classList.toggle("menu-open")
});
const newsBookmark = document.querySelectorAll(".hero__bookmark"),
    newsBookmarkSvg = document.querySelectorAll(".bookmark-svg");
newsBookmark.forEach((e, t) => {
    e.addEventListener("click", e => {
        e.preventDefault(), newsBookmarkSvg[t].classList.toggle("red-svg")
    })
});
const sliderArticle = document.querySelector(".article-slider__container");
let slider = new Swiper(sliderArticle, {
    slideClass: "article-slider__item",
    wrapperClass: "article-slider__wrapper",
    loop: !0,
    navigation: {
        nextEl: ".article-slider__next",
        prevEl: ".article-slider__prev"
    },
    keyboard: {
        enabled: true,
    }
});
const commentsShowAll = document.querySelector(".comments__show-all"),
    commentsItem = document.querySelectorAll(".comments__item");
commentsShowAll.addEventListener("click", () => {
    commentsItem.forEach(e => {
        e.style.display = "block"
    })
});


const goTop = document.querySelector('.go-top')

goTop.addEventListener('click', e => {
    e.preventDefault()
    console.log(1);
    window.scrollTo({top: 0, behavior: 'smooth'})
})