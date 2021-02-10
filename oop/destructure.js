Predict Destructuring
For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

solution-
console.log(randomCar)
output-tesla
console.log(otherRandomCar)
output- mercedes




Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);


solution-
console.log(name);
console.log(otherName);
name not defined




Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);


solution-
console.log(password);

output- 12345
console.log(hashedPassword);
output- undefined



Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);


solution-
console.log(first == second);
output- false
console.log(first == third);
output- true



Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


solution-
console.log(key);
output- value
console.log(secondKey);
output- [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
output- 1
console.log(willThisWork);
output- 5





