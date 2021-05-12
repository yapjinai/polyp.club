const BLOCK = "block";
const NONE = "none";

document.addEventListener('DOMContentLoaded', () => {
  const navMenuButton = document.querySelector('.nav-menu-button');
  const navMenu = document.querySelector('.nav-menu');
  const main = document.querySelector('main');

  navMenuButton.addEventListener('click', () => toggleMenu({ navMenu }));
  main.addEventListener('click', () => setMenuState({ navMenu, shouldOpen: false }));
});

const setMenuState = ({ navMenu, shouldOpen }) => {
  navMenu.style.display = shouldOpen ? BLOCK : NONE;
};

const toggleMenu = ({ navMenu }) => {
  const shouldOpen = navMenu.style.display !== BLOCK;
  setMenuState({ navMenu, shouldOpen });
};
