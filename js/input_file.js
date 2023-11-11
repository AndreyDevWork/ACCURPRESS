document.addEventListener('DOMContentLoaded', () => {
   const input = document.querySelector('[data-input-file]');
   const label = document.querySelector('[data-label-file]');

   if(input) {
      input.addEventListener('change', () => {
         label.textContent = 'Файл прикреплен';
      });
   }
});