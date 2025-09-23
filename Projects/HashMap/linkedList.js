class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    printData() {
        console.log(this.data);
    }
}

export class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    append(value) {
        const n = new Node(value);
        if (!this.first) {
            this.first = n;
            this.last = n;
        } else {
            this.last.next = n;
            n.prev = this.last;
            this.last = n;
        }
    }
    prepend(value) {
        const n = new Node(value);
        if (!this.first) {
            this.first = n;
            this.last = n;
        } else {
            this.first.prev = n;
            n.next = this.first;
            this.first = n;
        }
    }
    size() {
        let temp = this.first;
        let total = 0;
        while (temp) {
            total++;
            temp = temp.next;
        }
        return total;
    }
    head() {
        return this.first.data;
    }
    tail() {
        return this.last.data;
    }
    at(index) {
        let temp = this.first;
        let count = 0;
        while (temp) {
            if (count == index) {
                return temp.data;
            }
            count++;
            temp = temp.next;
        }
        console.log("Not found");
    }
    pop() {
        if (this.last) {
            this.last = this.last.prev;
            this.last.next = null;
        }
    }
    contains(value) {
        let temp = this.first;
        while (temp) {
            if (temp.data === value) return true;
            temp = temp.next;
        }
        return false;
    }
    find(callback) {
        let temp = this.first;
        while (temp) {
            if (callback(temp.data)) {
                return temp.data;
            }
            temp = temp.next;
        }
        return null;
    }
    update(callback, newValue) {
        let temp = this.first;
        while (temp) {
            if (callback(temp.data)) {
                temp.data = newValue;
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    toString() {
        let temp = this.first;

        while (temp) {
            temp.printData();
            temp = temp.next;
        }
    }
    insertAt(value, index) {
        let temp = this.first;
        let count = 0;

        while (temp) {
            if (count === index) {
                const n = new Node(value);
                n.next = temp;
                n.prev = temp.prev;
                temp.prev.next = n;
                temp.prev = n;
                return;
            }
            count++;
            temp = temp.next;
        }
    }
    remove(callback) {
        let temp = this.first;
        while (temp) {
            if (callback(temp.data)) {
                if (temp.prev) temp.prev.next = temp.next;
                else this.first = temp.next;

                if (temp.next) temp.next.prev = temp.prev;
                else this.last = temp.prev;

                return true;
            }
            temp = temp.next;
        }
        return false;
    }
}
