class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
 
  static displayBook() {
    const books = [
      {title:'abc',author:'abcd'},
      {title:'abccdd',author:'abcd'},
      {title:'abceee',author:'abcd'}
  ];

  books.forEach((book) =>this.addBook(book));

  }

  static addBook(book) {
    const x = `<div> 
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove">Remove</button>
    <hr/></div>
    `;
    bookContainer.innerHTML += x;
  }
  static removeBook() {

  }


}

const container = document.querySelector('.container');
container.innerHTML = `
<div class="books"></div>
<form>
    <input type="text" class="title" placeholder="Title" required><br><br>
    <input type="text" class="author" placeholder="Author" required class><br><br>
    <button class="add">Add</button>
    </form>
`;

const bookContainer = container.querySelector('.books');
console.log(Book.displayBook());


document.querySelector('form').addEventListener('submit', (e)=> {
  e.preventDefault();
  console.log(e.target);


})



