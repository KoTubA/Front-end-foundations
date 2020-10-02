import User, { getAllMethodNames as details } from './class.js';

const user = new User("John", 32);
user.printName();
user.printAge();

const value = details(User);
console.log("Object methods:", ...value);