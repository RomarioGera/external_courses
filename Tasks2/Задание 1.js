var data = 1;

function a(data) {
    if (typeof (data) === "number") {
        console.log("number");
    } else if (typeof (data) === 'string') {
        console.log('string');
    } else {
        console.log('undefined');
    }
}

a(data);
