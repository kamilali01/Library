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
        b_check.classList.add('b_check');
        if(book.read == true){
            b_check.textContent = 'Read';
            b_check.classList.add('readed');

            const bookmark = document.createElement('img');
        bookmark.src = './img/approve.png';
        bookmark.style.width = '1em';
        bookmark.style.height = 'auto';
        bookmark.style.filter = 'brightness(0) invert(1)';

            b_check.appendChild(bookmark);
        }
        else{
            b_check.textContent = 'Unread';
        }

        b_check.addEventListener("click", function() {
            changeRead(book, b_check);
        });

        const delete_container = document.createElement('div');
        delete_container.classList.add('delete_container');
        const b_delete = document.createElement('button');
        b_delete.classList.add('b_delete');
        const deleteIcon = document.createElement('img');
        deleteIcon.src = './img/delete_11502650.png'
        deleteIcon.alt = 'Delete'; 
        deleteIcon.style.width = '20px'; 
        deleteIcon.style.height = 'auto'; 
        delete_container.appendChild(b_delete);
        b_delete.appendChild(deleteIcon);

        b_delete.addEventListener("click", function(){
            deleteElement(book);
        });

        // Add book elements to the card
        bookCard.appendChild(delete_container);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookInfo);
        bookCard.appendChild(b_check);
        
    
        libraryContainer.appendChild(bookCard); // `libraryContainer`-ı burada təyin etdiyinizə əmin olun
    });
}

function changeRead(book, b_check){
    if(book.read == true){
        book.read = false;
        b_check.textContent = "Unread";
        b_check.classList.remove('readed');
    }
    else{
        book.read = true;
        b_check.textContent = "Read";
        b_check.classList.add('readed');

        const bookmark = document.createElement('img');
        bookmark.src = './img/approve.png';
        bookmark.style.width = '1em';
        bookmark.style.height = 'auto';
        bookmark.style.filter = 'brightness(0) invert(1)';
        
        b_check.appendChild(bookmark);
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

function createFallingBook() {
    const book = document.createElement('div');
    book.classList.add('falling-book');

    // Replace emoji with an image
    const img = document.createElement('img');
    img.src = './img/falling-bbok.png'; // Replace with your book image path
    img.style.width = '40px'; // Adjust the size
    img.style.height = 'auto';

    book.appendChild(img);

    // Random horizontal position
    book.style.left = Math.random() * 100 + 'vw';

    // Random animation duration (slower fall speed)
    let fallDuration = Math.random() * 1 + 5; // Between 5s to 10s
    book.style.animationDuration = fallDuration + 's';

    document.body.appendChild(book);

    // Remove book after animation ends
    setTimeout(() => book.remove(), fallDuration * 1000);
}

// Generate falling books every 2 seconds
setInterval(createFallingBook, 1000);