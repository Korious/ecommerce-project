// ==================================
// 1. Toggle hambugger menu;
// By default, the .link tag should 
// display none.
// ==================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================

document.addEventListener('DOMContentLoaded', function () {
  // Display products based on selected category
  const categories = document.querySelectorAll('.category');
  const productItems = document.querySelectorAll('.percard.catalogue');

  categories.forEach(category => {
    category.addEventListener('click', () => {
      const selectedCategory = category.getAttribute('data-category');

      productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (selectedCategory === 'All' || selectedCategory === itemCategory) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================
const searchInput = document.querySelector('.search_product');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  productItems.forEach(item => {
    const itemName = item.querySelector('p').textContent.toLowerCase();

    if (itemName.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
});