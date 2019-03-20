var myObj = {
    a: "string",
    b: {
        name: "Roman",
        location: "Ryazan"
    }
}
function t3(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        obj[prop] = 'new';
    }
    return obj;
}
