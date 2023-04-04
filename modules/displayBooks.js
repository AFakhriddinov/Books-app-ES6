/* eslint-disable*/
export const displayBooks = (bookData, booksContainer) => {
  let cardId = 'odd';
  for (let i = 0; i < bookData.arrays.length; i++) {
    if (i % 2 === 0) {
      cardId = 'even';
    } else {
      cardId = 'odd';
    }
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookcard');
    bookCard.id = cardId;
    const remButton = document.createElement('button');
    remButton.classList.add('removeBtn');
    remButton.id = bookData.arrays[i].id;
    remButton.innerHTML = 'Remove';
    const p = document.createElement('p');
    p.innerHTML = `"${bookData.arrays[i].title}" by 
          ${bookData.arrays[i].author}`;
    bookCard.appendChild(p);
    bookCard.appendChild(remButton);
    booksContainer.appendChild(bookCard);
    remButton.addEventListener('click', (e) => {
      const id = e.target.id * 1;
      bookData.eraseBook(id);
      location.reload();
    });
  }
};
