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

// hero img
const imgs = document.querySelectorAll('.hero ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;
function chageImgs() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
  }
  imgs[n].style.display = 'block';
}
chageImgs();

prev_btn.addEventListener('click', (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  chageImgs();
});

next_btn.addEventListener('click', (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  chageImgs();
  
