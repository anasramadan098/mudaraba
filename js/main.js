const scrolltoTopBtn = document.querySelector('.scrool-to-top');

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        scrolltoTopBtn.style.display = 'block';
    } else {
        scrolltoTopBtn.style.display = 'none';
    }
 };

scrolltoTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
 });

 document.querySelector('.bars').addEventListener('click' , () => {
    const menu = document.querySelector('.allMenu');
    menu.classList.toggle('show');
 })