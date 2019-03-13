function user(name, age) {
    return {
        name: name,
        age: age,
    }
}
var users = [
    user('Roman', 33),
    user('Ann', 23),
    user('Alex', 13),
    user('John', 30),
    user('Mary', 60),
    user('Jane', 3),
    user('Kate', 25)];
var husbandMary;
for (i = 0; i < users.length; i++) {
    if (users[i].age == 23) {
        users[i].name = 'Jack';
        users[i].age = 25;
        users[i].salary = 30000;
        husbandMary = users[i]
    }
}
for (i = 0; i < users.length; i++) {
    if (users[i].name == 'Mary') {
        delete users[i].age;
        users[i].husband = husbandMary;
    }
}
console.log(users)
