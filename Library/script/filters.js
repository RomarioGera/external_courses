// get Library data

/* const xhr = new XMLHttpRequest();
 xhr.open('get', '/script/json.json', false);
 xhr.send();
 if (xhr.status != 200) {
     alert(xhr.status + ': ' + xhr.statusText);
 } else {
     alert(xhr.statusText);
  }  
let data = JSON.parse(xhr); */

// Filter: Search
var searchInput = document.querySelector('.main-nav-search__input');
//var magnifierButton = document.querySelector('.fa-search:before');
var searchFilter = searchInput.value.toUpperCase();
// searchInput.addEventListener('keypress', function (e) {
//     var key = e.which || e.keyCode;
//     if (key === 13) {
//         positiveSearch();
//     }
// });
// magnifierButton.addEventListener('click', function() {positiveSearch()});

var foundByTitle = books.forEach(function (element) {
    element.title.toUpperCase();
});
var foundByFirstName = books.forEach(function (element) {
    element.author.firstName.toUpperCase();
});
var foundByLastName = books.forEach(function (element) {
    element.author.lastName.toUpperCase();
});

// var found = function () {
//     if (searchFilter == foundByFirstName || foundByLastName || foundByTitle) {
//         return true;
//     } else {
//         return false;
//     }
// };

var positiveSearchTitle = function (searchFilter) {
    return books.filter(function (el) {
        return el.title.toUpperCase().indexOf(searchFilter.toUpperCase()) > -1;
    });
};
var positiveSearchFirstName = function (searchFilter) {
    return books.filter(function (el) {
        return el.author.firstName.toUpperCase().indexOf(searchFilter.toUpperCase()) > -1;
    });
};
var positiveSearchLastName = function (searchFilter) {
    return books.filter(function (el) {
        return el.author.lastName.toUpperCase().indexOf(searchFilter.toUpperCase()) > -1;
    });
};

function arrayUnique(array) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var positiveSearchName = arrayUnique(positiveSearchFirstName.concat(positiveSearchLastName));
var positiveSearch = arrayUnique(positiveSearchTitle.concat(positiveSearchName));

var positiveSearch = Array.from(new Set([...positiveSearchFirstName, ...positiveSearchLastName, ...positiveSearchTitle]));

var positiveSearch = function (searchFilter) {
    return books.filter(function () {
        if (searchFilter == foundByFirstName || foundByLastName || foundByTitle)
            return true;
    });
};

// Filter: Buttons
//// get Buttons
var allBooksButton = document.querySelector('#allBooksButton');
var recentButton = document.querySelector('#recentButton');
var mostPopularButton = document.querySelector('#mostPopularButton');
var freeBooksButton = document.querySelector('#freeBooksButton');

//// add Events