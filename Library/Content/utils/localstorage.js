// var storage = function () {

//     function saveItem(key, value) {
//         localStorage.setItem(key, JSON.stringify(value));
//     }

//     function loadItem(key) {
//         return JSON.parse(localStorage.getItem(key));
//     }
//     return {
//         addHistory: function (value) {
//             saveItem("history", value);
//         },
//         addBook: function (value) {
//             saveItem("books", value);
//         },
//         getHistory: function () {
//             loadItem("history");
//         }
//     }
// }();


// function toLocalStorage() {
//     if (!localStorage['BOOKS']) localStorage.setItem('BOOKS', JSON.stringify(getLibrary()));
// };

// // getting local books
// function localBooks() {
//     let localBooks = JSON.parse(localStorage['BOOKS']);
//     return localBooks;
// };

// // getting local history
// function localHistory() {
//     let history;
//     if (localStorage['HISTORY']) history = JSON.parse(localStorage['HISTORY']);
//     else history = [];
//     return history;
// };