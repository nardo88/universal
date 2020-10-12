

const burgerButton = document.querySelector('.burger-button'),
    nav = document.querySelector('.header__nav-links'),
    tabContent = document.querySelectorAll('.topic-article'),
    tabItem = document.querySelectorAll('.recommendation__item');


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
    })
})