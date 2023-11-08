document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('[data-accordion-btn]')
    const bodies = document.querySelectorAll('[data-accordion-body]')
    const sircles = document.querySelectorAll('[data-accordion-sircle]')

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            sircles[i].classList.toggle('accordion__sircle_active');
            bodies[i].classList.toggle('accordion__body_active');
        });
    });
});