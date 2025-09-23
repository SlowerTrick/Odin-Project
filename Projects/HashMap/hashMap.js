import { LinkedList } from "./linkedList.js";

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

export class HashMap {
    constructor(capacity) {
        this.array = [];
        this.load_factor = 0.75;
        this.size = 0;
        this.capacity = capacity;
    }

    hash(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 33) ^ key.charCodeAt(i);
        }
        return (hash >>> 0) % this.capacity; // Ensure positive 32-bit integer
    }

    set(key, value) {
        if (this.size >= this.capacity * this.load_factor) {
            this.#expand_map();
        }
        const idx = this.hash(key);
        if (!this.array[idx]) {
            this.array[idx] = new LinkedList();
        }

        const bucket = this.array[idx];
        const updated = bucket.update(
            (entry) => entry.key === key,
            new Node(key, value)
        );

        if (!updated) {
            bucket.append(new Node(key, value));
            this.size++;
        }
    }

    #expand_map() {
        const new_array = [];
        const old_capacity = this.capacity;
        this.capacity *= 2;
        for (let i = 0; i < old_capacity; i++) {
            if (this.array[i]) {
                const list = this.array[i];
                const size = list.size();
                for (let j = 0; j < size; j++) {
                    const node = list.at(j);
                    const idx = this.hash(node.key);
                    if (!new_array[idx]) {
                        new_array[idx] = new LinkedList();
                    }

                    const bucket = new_array[idx];
                    const updated = bucket.update(
                        (entry) => entry.key === node.key,
                        new Node(node.key, node.value)
                    );

                    if (!updated) {
                        bucket.append(new Node(node.key, node.value));
                    }
                }
            }
        }
        this.array = new_array;
    }

    get(key) {
        const bucket = this.#bucket(key);
        return bucket ? bucket.find((entry) => entry.key === key) : null;
    }

    has(key) {
        const bucket = this.#bucket(key);
        if (!bucket) return false;
        const node = bucket.find((entry) => entry.key === key);
        return node ? true : false;
    }

    remove(key) {
        const bucket = this.#bucket(key);
        if (!bucket) return false;
        const removed = bucket.remove((entry) => entry.key === key);
        if (removed) {
            this.size--;
            return true;
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        for (let i = 0; i < this.capacity; i++) {
            this.array[i] = null;
        }
        this.size = 0;
    }

    keys() {
        let array = [];
        for (let i = 0; i < this.capacity; i++) {
            if (this.array[i]) {
                const bucket = this.array[i];
                const size = bucket.size();
                for (let j = 0; j < size; j++) {
                    const node = bucket.at(j);
                    array.push(node.key);
                }
            }
        }
        return array;
    }

    values() {
        let array = [];
        for (let i = 0; i < this.capacity; i++) {
            if (this.array[i]) {
                const bucket = this.array[i];
                const size = bucket.size();
                for (let j = 0; j < size; j++) {
                    const node = bucket.at(j);
                    array.push(node.value);
                }
            }
        }
        return array;
    }

    entries() {
        let array = [];
        for (let i = 0; i < this.capacity; i++) {
            if (this.array[i]) {
                const bucket = this.array[i];
                const size = bucket.size();
                for (let j = 0; j < size; j++) {
                    const node = bucket.at(j);
                    array.push(node);
                }
            }
        }
        return array;
    }

    print() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.array[i]) console.log(this.array[i]);
        }
    }

    #bucket(key) {
        const idx = this.hash(key);
        return this.array[idx];
    }
}
