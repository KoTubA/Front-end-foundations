import User, { getAllMethodNames as methodNames } from './class.js';

const user = new User("John", 32);
user.printName();
user.printAge();

const value = methodNames(User);
console.log("Object methods:", ...value);
console.log("%cOpen Javascript files to see how it works!", "font-weight: bold; font-size: 16px; color: red;");