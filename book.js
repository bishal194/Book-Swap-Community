let books = [];

// Add a book
document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const bookName = document.getElementById('bookName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const location = document.getElementById('location').value;

    const bookEntry = { userName, bookName, phoneNumber, location };
    books.push(bookEntry);
    displayBooks();
    document.getElementById('bookForm').reset();
});

// Display books
function displayBooks() {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-entry');
        bookElement.innerHTML = `
            <span>${book.userName}: ${book.bookName} - ${book.phoneNumber} - ${book.location}</span>
            <button class="delete-button" onclick="deleteBook(${index})">Delete</button>
        `;
        booksDiv.appendChild(bookElement);
    });
}

// Delete a book
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

// Filter books by location
function filterBooks() {
    const searchLocation = document.getElementById('searchLocation').value.toLowerCase();
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    
    const filteredBooks = books.filter(book => 
        book.location.toLowerCase().includes(searchLocation)
    );

    filteredBooks.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-entry');
        bookElement.innerHTML = `
            <span>${book.userName}: ${book.bookName} - ${book.phoneNumber} - ${book.location}</span>
            <button class="delete-button" onclick="deleteBook(${index})">Delete</button>
        `;
        booksDiv.appendChild(bookElement);
    });
}