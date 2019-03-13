interface Person {
    firstName: string,
    lastName: string
}

class Teacher {
    fullName: string
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

function greeter (person: Person) {
    return  `Hello, ${person}.`
}

let user = new Teacher("Tom", "C.", "User")

module.exports = console.log(greeter(user))
