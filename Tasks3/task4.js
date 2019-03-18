function t3(a, b) {
    a = "string",
        b = {
            name: "Roman",
            location: "Ryazan"
        }
    if (b.name) {
        return b;
    } else {
        b.name = 'new';
    } return b;
}
