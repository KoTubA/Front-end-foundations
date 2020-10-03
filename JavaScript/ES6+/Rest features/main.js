/*   1. Default values   */

function getName(name = 'John') {
    console.log(`My name is ${name}`)
}

getName('Albert');
getName();

/*   2. Template literals   */

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quaerat impedit nihil cupiditate, voluptates, architecto mollitia quas cumque expedita sapiente quae pariatur eaque?
Quisquam odit aut nulla quaerat nobis atque cumque?`;

console.log(lorem);

/*   3. Spread, rest, destructuring   */

/* Spread */
const tab = [1, 2, 3];

//copy the array
const tab2 = [...tab];

//concat arrays
const tabPart = [3, 4];
const tabFull = [1, 2, ...tabPart, 5, 6];

console.log(...tabFull);

/* Destructuring */

//Array
const [first, second, third] = tab;
console.log(first, second, third);

const [, ...args] = tab;
console.log(args);

//Object
const myObject = {
    name: {
        firstName: 'Szymon',
        secondName: 'Kotarba'
    },
    job: 'programmer'
}

//pulling to variables
const { name: { firstName: myName }, job: myJob } = myObject;
console.log(`My name is ${myName} and I'm a ${myJob}`);

//pulling in function
function showData({ name: { firstName: myName }, job: myJob }) {
    console.log(`My name is ${myName} and I'm a ${myJob}`);
}
showData(myObject);

/* Rest */
function printAbout(name = "Ryan", ...other) {
    console.log("This is " + name);

    if (other.length) {
        console.log(`${name} has:`, ...other);
    }
}

printAbout("John", "dog", "cat");
printAbout();

/*   4. Arrow function   */

const multiply = (a, b) => {
    const resultF = a * b;
    console.log("The result is:", resultF);
    return resultF;
}

const result = multiply(5, 6);

//Or
const multiply2 = (a, b) => a * b;
const result2 = multiply2(5, 6);
console.log("The result is:", result2);

/*   5. Object literal   */

const title = 'Computer',
    status = 'On';

const machine = {
    title,
    status
};

//Computed property name
const title2 = 'machine name';
const machine2 = {
    [title2]: 'server',
    'machine hours': 10000
};

//Concise method syntax
const server = {
    title3: 'Server',
    restart() {
        console.log(`The ${this.title3} is restarting...`);
    }
};

server.restart();

/*   6. For of   */

let scores = [70, 80, 90];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}

//Index and keys
const colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

/* 7. Promise */

const newPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve("😁");
    } else {
        reject("😥");
    }
});

newPromise
    .then(result => { console.log(result) })
    .catch(error => console.error(error));

//Promise.all(), Promise.allSettled(), Promise.race(), Promise.finally()
function checkData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("👍"); }, 1000)
    });
}

function checkData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("👍"); }, 3000)
    });
}

Promise.all([checkData1(), checkData2()])
    .then(resp => { console.log(resp); })
    .catch(err => { console.log(err); });


/*   Others:   */
//Symbol, Generators, Collections (Map, Set), Extensions (array, object, string), Proxy & Reflection