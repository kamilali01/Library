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
    const book3 = new Book("Metro 2035", "Andrew", 427, true);

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

        const b_check = document.createElement('button');
        if(book.read == true){
            b_check.textContent = 'Read';
        }
        else{
            b_check.textContent = 'Unread';
        }

        b_check.addEventListener("click", function() {
            changeRead(book, b_check);
        });

        const b_delete = document.createElement('button');
        b_delete.textContent = "Delete";

        b_delete.addEventListener("click", function(){
            deleteElement(book);
        });

        // Add book elements to the card
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookInfo);
        bookCard.appendChild(b_check);
        bookCard.appendChild(b_delete);
    
        libraryContainer.appendChild(bookCard); // `libraryContainer`-ı burada təyin etdiyinizə əmin olun
    });
}

function changeRead(book, b_check){
    if(book.read == true){
        book.read = false;
        b_check.textContent = "Unread";
    }
    else{
        book.read = true;
        b_check.textContent = "Read";
    }
    
}
function deleteElement(book) {
    const index = myLibrary.indexOf(book);
    if (index !== -1) {
        myLibrary.splice(index, 1); // Obyekti birbaşa silir
    }
    displayBooks();
}

addBookToLibrary();
displayBooks();
submitbut=document.getElementById('b_submit');
console.log(submitbut);
document.getElementById("b_submit").addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    const newBook = new Book(title, author, pages, false);

    myLibrary.push(newBook);
    displayBooks();


    document.getElementById("myDialog").close(); // Dialoqu bağlayır
});