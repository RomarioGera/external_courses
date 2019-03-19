var myObj = {
    a: "string",
    b: {
        name: "Roman",
        location: "Ryazan"
    }
}
function t3(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return true;
    } else {
        return false;
    }
}
t3(myObj, "b") 
