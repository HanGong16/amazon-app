const navLists = [
  "Today'sDeals",
  'Customer Service',
  'Registry',
  'Gift Cards',
  'Sell',
];
const menu = document.querySelector('nav');
const ulEl = document.createElement('ul');

menu.appendChild(ulEl);

const context = Array.from(navLists)
  .map((navList) => `<li> ${navList}</li>`)
  .join('');

ulEl.classList.add('nav-list');
ulEl.innerHTML = context;
