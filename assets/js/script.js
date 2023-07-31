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
    allProducts.forEach(product => product.style.display = category === 'All' || product.classList.contains(category) ? 'block' : 'none');
  };

  categoryRadios.forEach(radio => radio.addEventListener('change', () => filterProducts(radio.value)));
});

// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search_product');
    const allProducts = document.querySelectorAll('.catalogue');

    // Function to filter products based on search keywords
    const filterProductsBySearch = (searchTerm) => {
      const regex = new RegExp(searchTerm, 'i'); // 'i' flag for case-insensitive search
      allProducts.forEach((product) => {
        const productTitle = product.querySelector('p').textContent;
        if (productTitle.match(regex)) {
          product.style.display = 'block'; // Show the product if it matches the search term
        } else {
          product.style.display = 'none'; // Hide the product if it doesn't match the search term
        }
      });
    };

    // Add event listener to search input
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.trim(); // Get the entered search term and remove leading/trailing spaces
      filterProductsBySearch(searchTerm);
    });
  });




