function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function add_book_library(library, book)
{
    library.push(book);
}

function display_books_library(library, books_container)
{
    books_container.innerHTML = '';
    for(let i  = 0; i < library.length; i++)
    {
        let book = document.createElement('div');
        book.className = 'book'
        let title_text = document.createElement('h3');
        let author_text = document.createElement('h3');
        let pages_text = document.createElement('h3');
        let read_text = document.createElement('h3');
        title_text.innerText = 'Title: ' + library[i].title;
        author_text.innerText = 'Author: ' + library[i].author;
        pages_text.innerText = 'Pages: ' + library[i].pages;
        read_text.innerText = 'Read: ' + library[i].read;

        let remove_book_button = document.createElement('button');
        remove_book_button.addEventListener("click", () => {
            library.splice(i, 1);
            display_books_library(library, books_container);
        });
        remove_book_button.innerText = 'Remove book';

        let change_read_status = document.createElement('button');
        change_read_status.addEventListener("click", () => {
            library[i].read = library[i].read == false ? true : false;
            display_books_library(library, books_container);
        });
        change_read_status.innerText = 'Change book status';

        book.appendChild(title_text);
        book.appendChild(author_text);
        book.appendChild(pages_text);
        book.appendChild(read_text);
        book.appendChild(remove_book_button);
        book.appendChild(change_read_status);
        
        books_container.appendChild(book);
    }
}

const library = [];
const books_container = document.querySelector('.books_container');
const validation_status = document.querySelector('.validation_status');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.querySelector('#book_title');
    let author = document.querySelector('#book_author');
    let pages = document.querySelector('#book_pages');
    let read = document.querySelector('#book_read');

    if(!title.checkValidity())
        validation_status.innerText = title.validationMessage;
    else if(!author.checkValidity())
        validation_status.innerText = author.validationMessage;
    else if(!pages.checkValidity())
        validation_status.innerText = pages.validationMessage;
    else if(!read.checkValidity())
        validation_status.innerText = read.validationMessage;
    else
    {
        let book = new Book(title.value, author.value, pages.value, read.value);
        add_book_library(library, book);
        console.clear();
        display_books_library(library, books_container);
    }
});