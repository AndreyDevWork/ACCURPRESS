document.addEventListener('DOMContentLoaded', () => {
   const hum = document.querySelector('.header__humburger');
   const spans = document.querySelectorAll('.header__span');
   const aside = document.querySelector('aside');
   const html = document.querySelector('html');

   hum.addEventListener('click', () => {
      hum.classList.toggle('header__humburger_active');
      spans.forEach(span => span.classList.toggle('header__span_active'));

      if(!aside.classList.contains('aside_active')) {
         openAside();
      } else {
         closeAside();
      }
   });

   function openAside() {
      aside.classList.add('aside_active');
      html.classList.add('overflow-hd');
   }
   function closeAside() {
      aside.classList.remove('aside_active');
      html.classList.remove('overflow-hd');
   }
});