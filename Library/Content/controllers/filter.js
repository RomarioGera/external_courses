const mustReadButton = document.querySelector('.mustReadButton');
mustReadButton.addEventListener('click', mustRead);

const bestOfListButton = document.querySelector('.bestOfListButton');
bestOfListButton.addEventListener('click', bestOfList);

const classicNovelsButton = document.querySelector('.classicNovelsButton');
classicNovelsButton.addEventListener('click', classicNovels);

const nonFictionButton = document.querySelector('.nonFictionButton');
nonFictionButton.addEventListener('click', nonFiction);

function mustRead() {
    let result = books.filter(books => books.categories.includes("must_read"));
    generateFiltered(result);

    var obj = {
        toString: function () {
            return 'filtered "Must Read Titles" at ';
        }
    };

    renderHistory(obj);
};

function bestOfList() {
    let result = books.filter(books => books.categories.includes("best"));
    generateFiltered(result);
    var obj = {
        toString: function () {
            return 'filtered "Best of List" at ';
        }
    };

    renderHistory(obj);
};

function classicNovels() {
    let result = books.filter(books => books.categories.includes("classic"));
    generateFiltered(result);
    var obj = {
        toString: function () {
            return 'filtered "Classic novels" at ';
        }
    };

    renderHistory(obj);
};

function nonFiction() {
    let result = books.filter(books => books.categories.includes("non_fiction"));
    generateFiltered(result);
    var obj = {
        toString: function () {
            return 'filtered "Non-fiction books" at ';
        }
    };

    renderHistory(obj);
};