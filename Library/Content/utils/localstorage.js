var storage = function () {

    function saveItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function loadItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    return {
        addHistory: function (value) {
            saveItem("history", value);
        },
        addBook: function (value) {
            saveItem("books", value);
        },
        getHistory: function () {
            loadItem("history");
        }
    }
}();