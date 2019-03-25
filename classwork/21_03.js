//1
function User(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        return this.name;
    }
    this.getAge = function () {
        return this.age;
    }
    this.changeName = function (name) {
        this.name = name;
    }
    this.changeAge = function (age) {
        this.age = age;
    }
}

//2
function Employee(jobTitle, salary) {
    this.jobTitle = jobTitle;
    this.salary = salary;

    this.getJobTitle = function (jobTitle) {
        return jobTitle;
    };
    this.getSalary = function (salary) {
        return salary;
    };
    this.setFired = function () {
        this.fired = true;
    };
    this.isFired = function () {
        return this.fired === true;
    }
    this.promote = function (jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
    }
}

//3
var users = [
    new User('Ann', 23),
    new User('Alex', 13),
    new User('John', 30),
    new User('Mary', 31),
    new User('Jane', 3),
    new User('Kate', 25)];

var employees = [
    new Employee('Junior', 40000),
    new Employee('Middle', 60000),
    new Employee('Senior', 100000),
    new Employee('Lead', 150000),
    new Employee('Analyst', 80000),
    new Employee('Director', 300000),
];

//4
//4.1
users.find(function (user) {
    return user.name === 'Mary'
});

users.find(getByName('Mary'));

//4.2
var a = users.filter(function (value) { return value.age < 30 })

//4.3

function getByName(name) {
    return function (user) {
        return user.name === name;
    }
}

var getMary = users.find(getByName('Mary'));
var getJohn = users.find(getByName('John'));

getJohn.wife = getMary;
getMary.husband = getJohn;

//5
//5.1
var salaries = employees.map(function (employee) { return employee.salary });
var totalSalary = 0;
for (i = 0; i < salaries.length; i++) {
    totalSalary += salaries[i];
};

var totalStaff = salaries.length;
var sa = totalSalary / totalStaff;
console.log(sa);

// 5.2
var allJobTitles = employees.map(function (employee) { return employee.jobTitle });
console.log(allJobTitles);

// 5.4
function getByJobTitle(jobTitle) {
    return function (user) {
        return employee.jobTitle === jobTitle;
    }
}
var getDirector = employees.find(getByJobTitle('Director'));
Employee.setFired(getDirector);

