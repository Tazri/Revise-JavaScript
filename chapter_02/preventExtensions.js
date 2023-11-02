var person = {
    name : "ans anonymo",
    age : 22
};

Object.preventExtensions(person);

person.height = 33;

console.log(person); // { name: 'ans anonymo', age: 22 }