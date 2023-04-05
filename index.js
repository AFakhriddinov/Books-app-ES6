import BookLibrary from './modules/bookLibrary.js';
import { DateTime } from './modules/luxon.js';
import element from './modules/elements.js';
import displayBooks from './modules/displayBooks.js';
import displayPage from './modules/displayPage.js';

const collection = new BookLibrary();

const currentTime = DateTime.now();
element.clock.innerText = currentTime.toLocaleString(DateTime.DATETIME_MED);

element.timeDiv.appendChild(element.clock);

element.addButton.addEventListener('click', () => {
  const i = Date.now();
  collection.addBooks(element.title.value, element.author.value, i);
  element.title.value = '';
  element.author.value = '';
});

element.list.addEventListener('click', () => {
  const display = ['.add-book', '.contact'];
  displayPage('.book-collection', display);
  location.reload();
});

element.add.addEventListener('click', () => {
  const display = ['.book-collection', '.contact'];
  displayPage('.add-book', display);
});

element.contact.addEventListener('click', () => {
  const display = ['.add-book', '.book-collection'];
  displayPage(' .contact', display);
});

window.addEventListener('load', () => {
  displayBooks(collection, element.booksDiv);
});
