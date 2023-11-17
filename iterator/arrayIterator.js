let array = [4,5,6,7,8];

let iterator = array[Symbol.iterator]();


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());