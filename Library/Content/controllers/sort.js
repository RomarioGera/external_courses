const content = document.querySelector('.content_books_grid');

let sortBooks = [],
    filteredBooks = [];

const allBooksButton = document.querySelector('#allBooksButton');
allBooksButton.addEventListener('click', generateBooks);

const recentButton = document.querySelector('#recentButton');
recentButton.addEventListener('click', mostRecent);

const mostPopularButton = document.querySelector('#mostPopularButton');
mostPopularButton.addEventListener('click', mostPopular);

const freeBooksButton = document.querySelector('#freeBooksButton');
freeBooksButton.addEventListener('click', freeBooks);

function mostRecent() {
    if (searchInput.value === '') {
        sortBooks = books;
        sortBooks.sort((elem1, elem2) => elem2.updatedAt - elem1.updatedAt);
        generateFiltered(sortBooks);
    } else {
        filteredBooks.sort((elem1, elem2) => elem2.updatedAt - elem1.updatedAt);
        generateFiltered(filteredBooks);
    }
}

function mostPopular() {
    if (searchInput.value === '') {
        sortBooks = books;
        sortBooks.sort((elem1, elem2) => elem2.rating - elem1.rating);
        generateFiltered(sortBooks);
    } else {
        filteredBooks.sort((elem1, elem2) => elem2.rating - elem1.rating);
        generateFiltered(filteredBooks);
    }
}

function freeBooks() {
    if (searchInput.value === '') {
        let result = books.filter(books => books.cost < 0);
        generateFiltered(result);
    } else {
        let result = books.filter(books => books.cost < 0);
        generateFiltered(result);
    }
}