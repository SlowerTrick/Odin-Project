class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array) {
        this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b));
    }

    buildTree(array) {
        if (array.length === 0) return null;

        const mid = Math.floor(array.length / 2);
        const node = new Node(array[mid]);

        const left_array = array.slice(0, mid);
        const right_array = array.slice(mid + 1);

        node.left = this.buildTree(left_array);
        node.right = this.buildTree(right_array);

        return node;
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    }

    getRoot() {
        return this.root;
    }

    insert(value) {
        this.root = this.#insertValue(this.root, value);
    }

    #insertValue(node, value) {
        if (!node) return new Node(value);

        let compare = node.data - value;
        if (compare < 0) node.right = this.#insertValue(node.right, value);
        else if (compare > 0) node.left = this.#insertValue(node.left, value);
        return node;
    }

    deleteItem(value) {
        this.root = this.#deleteItemValue(this.root, value);
    }

    #deleteItemValue(node, value) {
        if (!node) {
            return node;
        } else if (node.data === value) {
            if (!node.left && !node.right) {
                return null;
            } else if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            } else if (node.left && node.right) {
                let right = node.right;
                while (right.left) {
                    right = right.left;
                }
                node.data = right.data;
                node.right = this.#deleteItemValue(node.right, right.data);
            }
        }
        let compare = node.data - value;
        if (compare < 0) node.right = this.#deleteItemValue(node.right, value);
        else if (compare > 0) node.left = this.#deleteItemValue(node.left, value);
        return node;
    }

    find(value) {
        let node = this.root;
        while (1) {
            if (!node || node.data === value) break;

            let compare = node.data - value;
            if (compare < 0) node = node.right;
            else if (compare > 0) node = node.left;
        }
        return node;
    }

    levelOrderForEach(callback) {
        if(!callback) throw new Error("A callback is needed for this function!");
        
        const queue = [];
        if(this.root)
            queue.push(this.root);
        
        while (queue.length > 0) {
            let node = queue.shift();
            
            callback(node.data);
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }

    inOrderForEach(root, callback) {
        if(!callback) throw new Error("A callback is needed for this function!");
        if(!root) return;
        
        this.inOrderForEach(root.left, callback);
        callback(root.data);
        this.inOrderForEach(root.right, callback);
    }

    preOrderForEach(root, callback) {
        if(!callback) throw new Error("A callback is needed for this function!");
        if(!root) return;
        
        callback(root.data);
        this.preOrderForEach(root.left, callback);
        this.preOrderForEach(root.right, callback);
    }

    postOrderForEach(root, callback) {
        if(!callback) throw new Error("A callback is needed for this function!");
        if(!root) return;
        
        this.postOrderForEach(root.left, callback);
        this.postOrderForEach(root.right, callback);
        callback(root.data);
    }

    height(value) {
        let node = this.find(value);
        if (!node) return null;
    
        let height = -1;
        const queue = [node];

        while (queue.length > 0) {
            let levelSize = queue.length;
            while(levelSize > 0) {
                const current = queue.shift();
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
                levelSize--;
            }
            height++;
        }
        return height;
    }

    depth(value) {
        let node = this.root;
        let count = 0;

        while (node) {
            if (node.data === value) return count;

            let compare = node.data - value;
            if (compare < 0) node = node.right;
            else if (compare > 0) node = node.left;

            count++;
        }

        return null;
    }

    isBalanced() {
        return this.#checkBalance(this.root) !== -1;
    }

    #checkBalance(root) {
        if (!root) return 0;

        let leftHeight = this.#checkBalance(root.left);
        if (leftHeight === -1) return -1;

        let rightHeight = this.#checkBalance(root.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return 1 + Math.max(leftHeight, rightHeight);
    }

    rebalance() {
        if(this.isBalanced()) return;

        let array = [];
        this.inOrderForEach(this.root, info => array.push(info));
        this.root = this.buildTree(array);
    }
}