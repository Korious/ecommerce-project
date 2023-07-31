// ==================================
// 1. Toggle hambugger menu;
// By default, the .link tag should 
// display none.
// ==================================
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.link');

  hamburgerButton.addEventListener('click', function () {
    navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
  });
});

//OR
// document.addEventListener('DOMContentLoaded', () => {
//   const hamburgerButton = document.querySelector('.hamburger');
//   const navLinks = document.querySelector('.link');

//   hamburgerButton.addEventListener('click', () => {
//     navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
//   });
// });

// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
document.addEventListener('DOMContentLoaded', () => {
  const allProducts = document.querySelectorAll('.catalogue');
  const categoryRadios = document.querySelectorAll('[name="tabset"]');

  const filterProducts = (category) => {
    allProducts.forEach(product => product.style.display = category === 'All' || product.classList.contains(category) ? 'list' : 'none');
  };

  categoryRadios.forEach(radio => radio.addEventListener('change', () => filterProducts(radio.value)));
});


// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================
 



