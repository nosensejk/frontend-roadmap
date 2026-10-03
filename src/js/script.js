import { getFavorites, toggleFavorite } from './favorites.js';

const searchForm = document.querySelector('.search-form form');
const searchInput = document.getElementById('search');
const booksContainer = document.querySelector('.container');

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    alert('Please enter a book title or author name.');
    return;
  }

  fetchBooks(query);
});

// Fetch books from Open Library API
async function fetchBooks(query) {
  booksContainer.innerHTML = '<p class="loading">Loading books...</p>';

  try {
    const searchUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;
    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }

    const data = await response.json();
    renderBooks(data.docs);
  } catch (error) {
    console.error('Error fetching books:', error);
    booksContainer.innerHTML = '<p class="error">An error occurred while loading books. Please try again.</p>';
  }
}

function renderBooks(books) {
  if (!books || books.length === 0) {
    booksContainer.innerHTML = '<p class="no-results">No books found. Try a different search query.</p>';
    return;
  }

  const favorites = getFavorites();

  booksContainer.innerHTML = books.map((book) => {
    const key = book.key || '';
    const isFav = favorites.some((item) => item.key === key);

    const coverUrl = book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : 'https://via.placeholder.com/180x270?text=No+Cover';

    const title = book.title || 'Untitled';
    const author = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
    const year = book.first_publish_year || '—';

    return `
      <article class="book-card">
        <button class="like-btn ${isFav ? 'active' : ''}" 
                data-key="${key}" 
                data-title="${encodeURIComponent(title)}" 
                data-author="${encodeURIComponent(author)}" 
                data-year="${year}" 
                data-cover="${coverUrl}">
          <img src="./src/assets/heart.svg" alt="Like" />
        </button>
        <div class="cover-container">
          <img src="${coverUrl}" alt="Book cover" loading="lazy" />
        </div>
        <div class="book-info">
          <p class="book-title">${title}</p>
          <p class="book-author">${author}</p>
          <span class="book-year">${year}</span>
        </div>
      </article>
    `;
  }).join('');
}

// Handle click on like button in book catalog
booksContainer?.addEventListener('click', (event) => {
  const likeBtn = event.target.closest('.like-btn');
  if (!likeBtn) return;

  const key = likeBtn.dataset.key;
  if (!key) return;

  const bookData = {
    key: key,
    title: decodeURIComponent(likeBtn.dataset.title),
    author: decodeURIComponent(likeBtn.dataset.author),
    year: likeBtn.dataset.year,
    coverUrl: likeBtn.dataset.cover
  };

  toggleFavorite(bookData);
});

// Initial fetch
fetchBooks('classic');