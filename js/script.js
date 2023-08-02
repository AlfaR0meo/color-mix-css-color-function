const inputText_1 = document.querySelector('#input-text-1');
const inputText_2 = document.querySelector('#input-text-2');
const html = document.documentElement;


html.style.setProperty('--color-1', localStorage.getItem('color-1'));
html.style.setProperty('--color-2', localStorage.getItem('color-2'));
inputText_1.value = localStorage.getItem('color-1') || window.getComputedStyle(html).getPropertyValue('--color-1');
inputText_2.value = localStorage.getItem('color-2') || window.getComputedStyle(html).getPropertyValue('--color-2');

inputText_1.addEventListener('change', function() {
    html.style.setProperty('--color-1', this.value);
    localStorage.setItem('color-1', this.value);
});

inputText_2.addEventListener('change', function() {
    html.style.setProperty('--color-2', this.value);
    localStorage.setItem('color-2', this.value);
});








