function t5() {
    var obj1 = {
        a: 'Hello'
    };
    var obj2 = {};
    for (var key in obj1) {
        obj2[key] = obj1[key];
    }
    return obj2
}
