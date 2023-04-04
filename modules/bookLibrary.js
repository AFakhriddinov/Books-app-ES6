class BookLibrary {
  constructor() {
    this.arrays = JSON.parse(localStorage.getItem('bookDetails')) || [];
  }

  addBooks(title, author, id) {
    const addedNew = { id, title, author };
    this.arrays.push(addedNew);
    localStorage.setItem('bookDetails', JSON.stringify(this.arrays));
  }

  eraseBook(id) {
    const { arrays } = this;
    const erased = arrays.filter((array) => array.id !== id);
    localStorage.setItem('bookDetails', JSON.stringify(erased));
  }

  presentBooks() {
    return this.arrays;
  }
}

export default BookLibrary;
