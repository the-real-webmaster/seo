const menuBtn = document.querySelector('.header__menu-btn');
const menuInner = document.querySelector('.header__inner-second');
const body = document.body;

menuBtn.addEventListener("click", () => {
    menuInner.classList.toggle('active');
    body.classList.toggle('not-scroll');
});