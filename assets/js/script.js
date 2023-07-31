// ==================================
// 1. Toggle hambugger menu;
// By default, the .link tag should 
// display none.
// ==================================
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.line');

  hamburgerButton.addEventListener('click', function () {
    navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
  });
});
// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================


// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================
 



