export class Ship {
    constructor(length) {
        this.length = length;
        this.damage = 0;
        this.sunk = false;
    }

    hit() {
        if(this.damage < this.length)
            this.damage++;
    }

    isSunk() {
        return ((this.length - this.damage) === 0) ? true : false;
    }

    getLength() {
        return this.length;
    }

    print() {
        console.log("HP: " + (this.length - this.damage));
        console.log("Length: " + this.length);
        console.log("Damage: " + this.damage);
        console.log("Sunk: " + this.isSunk());
    }
}
