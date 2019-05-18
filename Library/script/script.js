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

var books = [{
    "id": 1,
    "title": "Jewels of Nizam",
    "author": {
        "firstName": "Geeta",
        "lastName": "Devi"
    },
    "rating": 5,
    "cost": 100,
    "categories": ["must_read", "best", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1528046197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/1.jpg"
}, {
    "id": 2,
    "title": "Cakes & Bakes",
    "author": {
        "firstName": "Sanjeev",
        "lastName": "Kapoor"
    },
    "rating": 5,
    "cost": 200,
    "categories": ["best", "classic"],
    "createdAt": 1506943763424,
    "updatedAt": 1525367797707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/2.jpg"
}, {
    "id": 3,
    "title": "Jamie\'s Kitchen",
    "author": {
        "firstName": "Jamie",
        "lastName": "Oliver"
    },
    "rating": 4,
    "cost": 300,
    "categories": ["non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1530638197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/3.jpg"
}, {
    "id": 4,
    "title": "Inexpensive Family Meals",
    "author": {
        "firstName": "Simon",
        "lastName": "Holst"
    },
    "rating": 3,
    "cost": 50,
    "categories": [],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/4.jpg"
}, {
    "id": 5,
    "title": "Paleo Slow Cooking",
    "author": {
        "firstName": "Chrissy",
        "lastName": "Gawer"
    },
    "rating": 4,
    "cost": 1000,
    "categories": ["classic"],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/5.jpg"
}, {
    "id": 6,
    "title": "Cook Like an Italian",
    "author": {
        "firstName": "Toble",
        "lastName": "Puttock"
    },
    "rating": 3,
    "cost": 12,
    "categories": ["non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/6.jpg"
}, {
    "id": 7,
    "title": "Suneeta Vaswani",
    "author": {
        "firstName": "Geeta",
        "lastName": "Devi"
    },
    "rating": 5,
    "cost": 504,
    "categories": ["must_read", "best", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1517678197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/7.jpg"
}, {
    "id": 8,
    "title": "Jamie Does",
    "author": {
        "firstName": "Jamie",
        "lastName": "Oliver"
    },
    "rating": 3,
    "cost": 100,
    "categories": [],
    "createdAt": 1506943763424,
    "updatedAt": 1538586997707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/8.jpg"
}, {
    "id": 9,
    "title": "Jamie\"s Italy",
    "author": {
        "firstName": "Jamie",
        "lastName": "Oliver"
    },
    "rating": 5,
    "cost": 100,
    "categories": ["must_read", "best"],
    "createdAt": 1506943763424,
    "updatedAt": 1528046197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/9.jpg"
}, {
    "id": 10,
    "title": "Vegetables Cookbook",
    "author": {
        "firstName": "Matthew",
        "lastName": "Biggs"
    },
    "rating": 3,
    "cost": 100,
    "categories": ["must_read", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1522775797707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/10.jpg"
}];

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
