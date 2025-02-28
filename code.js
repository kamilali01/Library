const myLibrary = [];

//class
function Book(title, author, page, read){
    this.title = title;
    this.author = title;
    this.page = page;
    this.read = read;

    this.info = function(){
        return `${title} by ${author}, ${page} pages`;
    }
}


//create book function
function addBookToLibrary(){
    const book1 = new Book("Metro 2033", "Andrew", 345, false);
    const book2 = new Book("Metro 2034", "Andrew", 445, false);
    const book3 = new Book("Metro 2035", "Andrew", 427, false);

    myLibrary.push(book1, book2, book3);
    
}

function displayBooks() {
    const libraryContainer = document.getElementById('library');
    libraryContainer.innerHTML = ''; // Delete old books

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;

        const bookInfo = document.createElement('p');
        bookInfo.textContent = book.info();

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookInfo);

        libraryContainer.appendChild(bookCard);
    });
}

addBookToLibrary();
displayBooks();
console.log(myLibrary);