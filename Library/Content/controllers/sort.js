const mustReadButton = document.querySelector('.mustReadButton');
mustReadButton.addEventListener('click', mustRead);

const bestOfListButton = document.querySelector('.aside-sort-circle--yellow');
bestOfListButton.addEventListener('click', bestOfList);

const classicNovelsButton = document.querySelector('.aside-sort-circle--blue');
classicNovelsButton.addEventListener('click', classicNovels);

const nonfictionButton = document.querySelector('.aside-sort-circle--violet');
nonfictionButton.addEventListener('click', nonfiction);

function mustRead() {
    const books_select = content.getElementsByClassName('book');
    Array.from(books_select).forEach(function (book) {
        for (var i = 0; i < books_select.length; i++) {
            title = books_select[i].categories;
            console.log(title);
            if (title === 'must_read') {
                book.style.display = 'block';
            } else {
                book.style.display = "none";
            };
        };
    })
};

function bestOfList() {
    const books_select = content.getElementsByClassName('book');
    Array.from(books_select).forEach(function (book) {
        const title = book.categories;
        if (title == 'best') {
            book.style.display = 'block';
        } else {
            book.style.display = "none";
        }
    });
};

function classicNovels() {
    const books_select = content.getElementsByClassName('book');
    Array.from(books_select).forEach(function (book) {
        const title = book.categories;
        if (title == 'classic') {
            book.style.display = 'block';
        } else {
            book.style.display = "none";
        }
    });
};

function nonfiction() {
    const books_select = content.getElementsByClassName('book');
    Array.from(books_select).forEach(function (book) {
        const title = book.categories;
        if (title == 'non_fiction') {
            book.style.display = 'block';
        } else {
            book.style.display = "none";
        }
    });
};