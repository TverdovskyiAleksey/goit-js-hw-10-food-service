import cardsTpl from '../src/templates/menu-cards.hbs';
import menu from './menu.json';
import './sass/main.scss';

const menuMarkup = cardsTpl(menu);

const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

const checkboxEl = document.querySelector('#theme-switch-toggle');
checkboxEl.addEventListener('change', toggleTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
    
if (localStorage.getItem('Theme')) {
    document.body.classList.add(localStorage.getItem('Theme'));
} else {
    document.body.classList.add(Theme.LIGHT);
}

if (localStorage.getItem('Theme') === Theme.DARK) {
    checkboxEl.checked = true;
}

function toggleTheme() {
    if (checkboxEl.checked) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK);
    }
    if (!checkboxEl.checked) {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}