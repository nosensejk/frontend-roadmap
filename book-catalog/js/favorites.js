const favoritesContainer = document.querySelector(".fav-books");
const favoritesCountSpan = document.querySelector(".favorites-header span");

export function getFavorites() {
  const data = localStorage.getItem("favoriteBooks");
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(favorites) {
  localStorage.setItem("favoriteBooks", JSON.stringify(favorites));
}

export function renderFavorites() {
  if (!favoritesContainer) return;

  const favorites = getFavorites();

  if (favoritesCountSpan) {
    favoritesCountSpan.textContent = `${favorites.length} book${favorites.length === 1 ? "" : "s"} saved`;
  }

  if (favorites.length === 0) {
    favoritesContainer.innerHTML =
      '<p class="no-favorites">No favorites saved yet.</p>';
    return;
  }

  favoritesContainer.innerHTML = favorites
    .map(
      (book) => `
    <article class="fav-book">
      <img src="${book.coverUrl}" alt="Book cover of ${book.title}" />
      <div class="fav-book-details">
        <h3 class="fav-book-title">${book.title}</h3>
        <span class="fav-book-author">${book.author}</span>
        <span class="fav-book-year">${book.year}</span>
      </div>
      <button class="fav-remove-btn" data-key="${book.key}">
        <img src="./assets/heart.svg" alt="Remove" />
      </button>
    </article>
  `).join("");
}

export function toggleFavorite(bookData) {
  let favorites = getFavorites();
  const existingIndex = favorites.findIndex(
    (item) => item.key === bookData.key,
  );

  if (existingIndex !== -1) {
    favorites.splice(existingIndex, 1);
  } else {
    favorites.push(bookData);
  }

  saveFavorites(favorites);
  renderFavorites();

  const cardLikeBtn = document.querySelector(
    `.like-btn[data-key="${CSS.escape(bookData.key)}"]`,
  );
  if (cardLikeBtn) {
    const isFav = favorites.some((item) => item.key === bookData.key);
    cardLikeBtn.classList.toggle("active", isFav);
  }
}

favoritesContainer?.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".fav-remove-btn");
  if (!removeBtn) return;

  const key = removeBtn.dataset.key;
  if (!key) return;

  let favorites = getFavorites().filter((item) => item.key !== key);
  saveFavorites(favorites);
  renderFavorites();

  const cardLikeBtn = document.querySelector(
    `.like-btn[data-key="${CSS.escape(key)}"]`,
  );
  if (cardLikeBtn) {
    cardLikeBtn.classList.remove("active");
  }
});

renderFavorites();
