var obj = { a: 1, b: 2 };
var obj1 = Object.create(obj);

function newInProto(anyObj) {
    anyObj.c = 3;
    for (var key in anyObj.__proto__) {
        console.log(key);
    } return;
}
