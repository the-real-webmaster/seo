const menuBtn = document.querySelector('.header__menu-btn');
const menuInner = document.querySelector('.header__inner-second');

menuBtn.addEventListener("click", () => {
    menuInner.classList.toggle('active');
});