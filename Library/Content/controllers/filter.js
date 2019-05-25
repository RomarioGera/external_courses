const mustReadButton = document.querySelector('.mustReadButton');
mustReadButton.addEventListener('click', mustRead);

const bestOfListButton = document.querySelector('.bestOfListButton');
bestOfListButton.addEventListener('click', bestOfList);

const classicNovelsButton = document.querySelector('.classicNovelsButton');
classicNovelsButton.addEventListener('click', classicNovels);

const nonfictionButton = document.querySelector('.nonfictionButton');
nonfictionButton.addEventListener('click', nonfiction);

function mustRead() {
    let result = books.filter(books => books.categories.includes("must_read"));
    generateFiltered(result);
};

function bestOfList() {
    let result = books.filter(books => books.categories.includes("best"));
    generateFiltered(result);
};

function classicNovels() {
    let result = books.filter(books => books.categories.includes("classic"));
    generateFiltered(result);
};

function nonfiction() {
    let result = books.filter(books => books.categories.includes("non_fiction"));
    generateFiltered(result);
};