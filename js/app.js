const mobile = document.querySelector('.mobile');
const ham = document.querySelector('.ham-menu');
const upArrow = document.getElementById('up');
const header = document.querySelector('.header');
const hamLine = document.querySelector('.line');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

console.log(upArrow);
ham.addEventListener('click', () => {
  mobile.classList.toggle('show');
  header.style.background = 'rgba(240, 240, 240, .8)';
  header.style.opacity = '1';
  line1.classList.toggle('active');
  line2.classList.toggle('active');
  line3.classList.toggle('active');
  ham.classList.toggle('active')
})

upArrow.addEventListener('mouseenter', () => {
  upArrow.style.marginBottom = '2em';
})