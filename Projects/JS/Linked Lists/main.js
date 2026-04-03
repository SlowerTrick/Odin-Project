import { LinkedList } from './linkedList.js'

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();
console.log('');

console.log("Size: " + list.size());
console.log("Head: " + list.head());
console.log("Tail: " + list.tail());
console.log('');

list.at(0);
console.log('');
list.at(2);
console.log('');
list.at(5);
console.log('');

list.pop();
list.toString();
console.log('');

let test = "parrot";
let flag1 = list.contains(test);
flag1 === true ? console.log(test + "!!!") : console.log("No " + test + " :C");

let flag2 = list.find(test);
typeof(flag2) === "number" ? console.log(test + " found") : console.log(test + " not found");
console.log('');

list.insertAt("duck", 4)
list.toString();
console.log('');

list.removeAt("hamster")
list.toString();
console.log('');