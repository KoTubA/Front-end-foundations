export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('User has been successfully created!')
    }

    printName() {
        console.log(`User's name is ${this.name}`);
    }

    printAge() {
        console.log(`User is ${this.age} years old`);
    }
}

function getAllMethodNames(obj) {
    return Object.getOwnPropertyNames(obj.prototype)
}

export { getAllMethodNames };