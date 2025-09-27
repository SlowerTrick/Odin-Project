import { Tree } from "./tree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);
tree.prettyPrint(tree.getRoot());
console.log('');

tree.insert(5);
tree.insert(5);
tree.insert(5);
tree.insert(1000);
tree.insert(32);
tree.insert(-57);
tree.prettyPrint(tree.getRoot());
console.log('');

tree.deleteItem(-57);
tree.prettyPrint(tree.getRoot());
console.log('');

tree.deleteItem(6345);
tree.prettyPrint(tree.getRoot());
console.log('');

tree.deleteItem(8);
tree.prettyPrint(tree.getRoot());
console.log('');

console.log(tree.find(67));

tree.levelOrderForEach(info => console.log(info));
console.log('');

tree.inOrderForEach(tree.getRoot(), info => console.log(info));
console.log('');
tree.preOrderForEach(tree.getRoot(), info => console.log(info));
console.log('');
tree.postOrderForEach(tree.getRoot(), info => console.log(info));
console.log('');

console.log(`Height: ${tree.height(9)}`); 
console.log(`Depth: ${tree.depth(324)}`);

tree.prettyPrint(tree.getRoot());
console.log(`isBalanced: ${tree.isBalanced()}`);
console.log('');

// Desbalanceando a arvore
tree.insert(1005);
tree.insert(1006);
tree.insert(1007);
tree.insert(1048596);
tree.prettyPrint(tree.getRoot());
console.log(`isBalanced: ${tree.isBalanced()}`);
console.log('');


tree.rebalance();
tree.prettyPrint(tree.getRoot());
console.log(`isBalanced: ${tree.isBalanced()}`);
console.log('');
