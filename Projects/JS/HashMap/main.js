import { HashMap } from "./hashMap.js";

const hash_map = new HashMap(100);

hash_map.set("apple", "red");
hash_map.set("banana", "yellow");
hash_map.set("carrot", "orange");
hash_map.set("dog", "brown");
hash_map.set("elephant", "gray");
hash_map.set("frog", "green");
hash_map.set("grape", "purple");
hash_map.set("hat", "black");
hash_map.set("ice cream", "white");
hash_map.set("jacket", "blue");
hash_map.set("kite", "pink");
hash_map.set("lion", "golden");
hash_map.set("lion", "golden");
hash_map.set("lion", "golden");
hash_map.set("lion", "golden");
hash_map.set("lion", "butterfly and potatos");
hash_map.set("lion", "golden");

console.log(hash_map.get("frog"));
console.log(hash_map.get("lion"));
console.log(hash_map.has("hat"));
console.log(hash_map.remove("grape"));
console.log(hash_map.remove("apple"));
console.log(hash_map.length());
console.log(hash_map.keys());
console.log(hash_map.values());
console.log(hash_map.entries());
hash_map.print();
hash_map.clear();
hash_map.print();