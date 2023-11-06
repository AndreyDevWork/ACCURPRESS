document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[data-tab]');
    const contents = document.querySelectorAll('[data-content]')

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', (e) => {
            disableAll(tabs, contents);
            tab.setAttribute('data-active-tab', true);
            contents[i].setAttribute('data-active-content', true);
        });
    });
});

function disableAll(tabs, contents) {
    tabs.forEach((tab, i) => {
       tab.removeAttribute('data-active-tab');
       contents[i].removeAttribute('data-active-content');
    });
}