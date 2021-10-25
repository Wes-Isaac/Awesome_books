const container = document.querySelector('.container');
let books = [];
container.innerHTML = `
<div class="books"></div>
<form>
    <input type="text" class="title" placeholder="Title" required><br><br>
    <input type="text" class="author" placeholder="Author" required class><br><br>
    <button class="add">Add</button>
    </form>
`;
function NewBooks(title, author) {
  this.title = title;
  this.author = author;
}
const bookContainer = container.querySelector('.books');
const add = container.querySelector('.add');
const title = container.querySelector('.title');
const author = container.querySelector('.author');

function addBooks(title, author) {
  const book = new NewBooks(title, author);
  books.push(book);
}

function editLocalStorage(index) {
  books = JSON.parse(localStorage.books);
  const data = books.filter((book) => book !== books[index]);
  localStorage.setItem('books', JSON.stringify(data));
}

function removeBook(index) {
  books = books.filter((item) => item !== books[index]);
}

function displayBooks(arr) {
  bookContainer.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const x = ` 
    <p>${arr[i].title}</p>
    <p>${arr[i].author}</p>
    <button class="remove">Remove</button>
    <hr/>
    `;
    bookContainer.innerHTML += x;
  }
  const remove = container.querySelectorAll('.remove');
  remove.forEach((btn, index) => btn.addEventListener('click', () => {
    removeBook(index);
    displayBooks(books);
    editLocalStorage(index);
  }));
}

add.addEventListener('click', (e) => {
  if (title.value !== '' && author.value !== '') {
    e.preventDefault();
    addBooks(title.value, author.value);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks(books);
    title.value = '';
    author.value = '';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  books = JSON.parse(localStorage.books);
  displayBooks(books);
});
