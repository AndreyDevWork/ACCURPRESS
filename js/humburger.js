document.addEventListener('DOMContentLoaded', () => {
   const hum = document.querySelector('.header__humburger');
   const spans = document.querySelectorAll('.header__span');

   hum.addEventListener('click', () => {
      hum.classList.toggle('header__humburger_active');
      spans.forEach(span => span.classList.toggle('header__span_active'));
   });
});