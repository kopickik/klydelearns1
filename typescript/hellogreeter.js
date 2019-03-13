var Teacher = /** @class */ (function () {
    function Teacher(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Teacher;
}());
function greeter(person) {
    return "Hello, " + person + ".";
}
var user = new Teacher("Tom", "C.", "User");
module.exports = console.log(greeter(user));
