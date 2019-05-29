function debounce(f, ms) {
    let delay = null;
    return function (...args) {
        const onComplete = function () {
            f.apply(this, args);
            delay = null;
        };
        if (delay) {
            clearTimeout(delay);
        }
        delay = setTimeout(onComplete, ms);
    };
}

const searchInput = document.querySelector('.main-nav-search__input');
searchInput.addEventListener('keyup', debounce(function (e) {
    const term = e.target.value.toLowerCase();
    const books_select = content.getElementsByClassName('book');
    var obj = {
        toString: function () {
            return 'filtered by "' + term + '" at ';
        }
    };

    renderHistory(obj);
    Array.from(books_select).forEach(function (book) {
        const title = book.textContent;
        if (title.toLowerCase().indexOf(term) !== -1) {
            book.style.display = 'block';
        } else {
            book.style.display = "none";
        }
    });
}, 500));