/* ========== Navigation =========== */
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".nav-list .close");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
});
const signInForm = document.querySelector("header .wrapper");

document.querySelector(".signin").onclick = () => {
  signInForm.classList.add("active");
};

document.querySelector(".close-form").onclick = () => {
  signInForm.classList.remove("active");
};

// Return to up button //
const returnTopButton = document.querySelector('.return-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        returnTopButton.style.opacity = 1;
    } else {
        returnTopButton.style.opacity = 0;
    }
});

returnTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//   searching for items   //
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Function to search content
function searchContent() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const content = document.querySelector('.content');
  const paragraphs = content.querySelectorAll('p');

  // Clear previous search results
  searchResults.innerHTML = '';

  // Loop through paragraphs and search for term
  paragraphs.forEach((paragraph) => {
    const text = paragraph.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      // Create list item for search result
      const listItem = document.createElement('li');
      listItem.textContent = paragraph.textContent;
      searchResults.appendChild(listItem);
    }
  });

  // Show search results if there are any
  if (searchResults.children.length > 0) {
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
}

// Add event listener to search button
searchButton.addEventListener('click', searchContent);

// Add event listener to search input (for pressing Enter key)
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchContent();
  }
});