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
        generateFiltered(sortBooks);
    }
}

function mostPopular() {
    if (searchInput.value === '') {
        sortBooks = books;
        sortBooks.sort((elem1, elem2) => elem2.rating - elem1.rating);
        generateFiltered(sortBooks);
    } else {
        filteredBooks.sort((elem1, elem2) => elem2.rating - elem1.rating);
        generateFiltered(sortBooks);
    }
}

function freeBooks() {
    if (searchInput.value === '') {
        filteredBooks = books;
        filteredBooks = filteredBooks.filter((elem) => elem.cost === 0);
    } else {
        filteredBooks = filteredBooks.filter((elem) => elem.cost === 0);
        generateFiltered(filteredBooks);
    }
}

// function activeButton() {
//     var buttons = [allBooksButton, recentButton, mostPopularButton, freeBooksButton];
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].className = '';
//     }
//     event.target.classList.add('main-nav-menu__item:active');
// }