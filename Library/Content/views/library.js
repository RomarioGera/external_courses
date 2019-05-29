// Getting data
var books = getLibrary(); // myFetch

function getLibrary() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
    xhr.send();
    if (xhr.status === 200) return JSON.parse(xhr.responseText);
    else console.log(`Load books ERROR: ${xhr.status} : ${xhr.statusText}`);
};

// Creating main library content
window.onload = function () {
    generateBooks();
};

function generateBooks() {
    clearMain();
    books.forEach(function (anotherBook) {
        var booksContainer = document.querySelector('.content_books_grid');
        var book = createBook(anotherBook);
        booksContainer.appendChild(book);
        // if (localHistory().length > 0) localHistory().forEach(history => renderHistory(history['text'], new Date(history['time'])));
        searchInput.value = '';
    });
}

function clearMain() {
    document.querySelector('.content_books_grid').innerText = '';
    // document.querySelector('.main-title').innerText = '';
    // document.querySelector('.main-nav').innerText = '';
}

function generateFiltered(result) {
    clearMain();
    result.forEach(function (anotherBook) {
        var booksContainer = document.querySelector('.content_books_grid');
        var book = createBook(anotherBook);
        booksContainer.appendChild(book);
    });
}

// Creating book
function createBook(anotherBook) {

    // Container of book
    var bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    bookContainer.setAttribute('data-book', anotherBook.id);

    // Cover of book
    var bookCover = document.createElement('div');
    bookCover.classList.add('book_cover');
    bookContainer.appendChild(bookCover);
    var newCover = document.createElement('img');
    newCover.src = anotherBook.image_url;
    newCover.alt = anotherBook.title;
    bookCover.appendChild(newCover);

    // Title of book
    var bookTitle = document.createElement('h4');
    bookTitle.classList.add('book_title');
    bookContainer.appendChild(bookTitle);
    var newTitle = document.createTextNode(anotherBook.title);
    bookTitle.appendChild(newTitle);

    // Author of book
    var bookAuthor = document.createElement('span');
    bookAuthor.classList.add('book_author');
    bookContainer.appendChild(bookAuthor);
    var newAuthor = document.createTextNode('by ' + anotherBook.author.firstName + ' ' + anotherBook.author.lastName);
    bookAuthor.appendChild(newAuthor);

    // Rating of book
    var rating = createRating(rating, anotherBook);
    bookContainer.appendChild(rating);

    return bookContainer;
}

// Creating rating of book
function createRating(rating, anotherBook) {
    var stars = document.createElement('div');
    stars.classList.add('rating');
    stars.classList.add('star_hover');
    for (var i = 1; i <= 5; i++) {
        var star = document.createElement('span');
        star.classList.add('star');
        stars.appendChild(star);
        if (6 - i === anotherBook.rating) {
            star.classList.add('rated');
        }
        star.setAttribute('data-rating', 6 - i);
    }
    return stars;
}

//Change Rating by click

var allRatings = document.querySelectorAll('div.rating.star_hover');
for (var i = 0; i < allRatings.length; i++) {
    allRatings[i].addEventListener('click', function () {
        console.log('work');
        var target = event.target;
        if (target.className === 'star') {
            rate(target);
        } else if (target.className === 'star rated') {
            unrate(target);
        }
    });
}

function rate(target) {
    var counterRating = Number(target.dataset.rating);
    var bookNumber = Number(target.parentElement.parentElement.dataset.book);
    books[bookNumber - 1].rating = counterRating;
    target.parentNode.childNodes.forEach(element => {
        element.classList.remove('rated');
    });
    target.classList.add('rated');
}

function unrate(target) {
    var bookNumber = Number(target.parentElement.parentElement.dataset.book);
    books[bookNumber - 1].rating = 0;
    target.classList.remove('rated');
}

// function renderHistory (text, time) {
//     let history = new History;
//     history.currentActionInfo(text);
//     history.currentActionTime(time);
//     history.addActionOnPage();
  
//     let newLocalHistory = localHistory();
//     if (newLocalHistory.length >= 3) {
//       newLocalHistory.shift();
//       newLocalHistory.push({text: text, time: time});
//     } else newLocalHistory.push({text: text, time: time});
//     localStorage.setItem('HISTORY', JSON.stringify(newLocalHistory));
  
  
//     setInterval(() => {
//       history.currentActionTime(time);
//       history.addActionOnPage();
//     }, 60000);
//   }