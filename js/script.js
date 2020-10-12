const burgerButton = document.querySelector('.burger-button'),
    nav = document.querySelector('.header__nav-links');

burgerButton.addEventListener('click', () => {
    nav.classList.toggle('menu-open')
})