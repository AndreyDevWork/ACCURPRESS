document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.product-menu__item');
    const contents = document.querySelectorAll('.product__content');

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', (e) => {
            disableAll(tabs, contents);
            tab.classList.add('product-menu_active');
            contents[i].setAttribute('data-product-content', true);
        });
    });
});

function disableAll(tabs, contents) {
    tabs.forEach((tab, i) => {
        tab.classList.remove('product-menu_active');
        contents[i].removeAttribute('data-product-content');
    });
}