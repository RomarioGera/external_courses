var users = {
    getName: function () { return this.name; },
    getAge: function () { return this.age; },
    changeName: function (name) { this.name = name; },
    changeAge: function (age) { this.age = age; },
}

var employees = {
    getJobTitle: function () { return this.jobtitle; },
    getSalary: function () { return this.salary; },
    promote: function (jobtitle, salary) {this.jobtitle = jobtitle; this.salary = salary},

}
var Proto = Object.assign ({}, users, employees);

var userA = Object.create(Proto);
var userB = Object.create(Proto);
var userC = Object.create(Proto);
var userD = Object.create(Proto);

userA.changeName('Mary');
userB.changeAge('30');
userC.promote('Senoir Developer', 100500);
