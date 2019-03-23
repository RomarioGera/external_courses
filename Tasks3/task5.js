var obj = {
    Name: 'name',
    Age: 'age',
    Location: 'location'
};

function t5(obj) {
    var obj2 = obj;
    for (var key in obj2) {
        console.log(key + obj2[key]);
    };
}

t5(obj)
