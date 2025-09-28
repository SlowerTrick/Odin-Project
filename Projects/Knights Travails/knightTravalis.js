const VECTORS = [
    // [x, y]
    [1, 2],   [2, 1],   // 1rst quadrant
    [-1, 2],  [-2, 1],  // 2nd quadrant
    [-1, -2], [-2, -1], // 3rd quadrant
    [1, -2],  [2, -1]  // 4th quadrant
]

class Square {
    constructor([x, y]) {
        if (![x, y].every(Number.isInteger))
            throw new Error("Square needs to be on the format [x, y]");

        this._x = x;
        this._y = y;
    }

    get x() { return this._x; }

    get y() { return this._y; }

    printSquare() {
        console.log(`(${this._x}, ${this._y})`);
    }

    compare(square) {
        return this._x === square[0] && this._y === square[1];
    }
}

function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function findMoves(x, y) {
    const moveList = [];
    VECTORS.forEach((vet) => {
        let cords = [x + vet[0], y + vet[1]];

        if(isValidMove(cords[0], cords[1]))
            moveList.push(new Square(cords));
    });
    return moveList;
}

function printAllMoves(moves) {
    moves.forEach((e) => {e.printSquare()});
}

export function knightMoves(start, end) {
    let start_square = new Square(start);
    let end_square = new Square(end);

    let queue = [[start_square, [[start_square.x, start_square.y]]]];
    let visited = new Set();
    visited.add(`${start_square.x},${start_square.y}`);
    
    while(queue.length > 0) {
        let [current, path] = queue.shift();
        
        if(current.compare(end)) {
            return path;
        }
        
        let moves = findMoves(current.x, current.y);
        for(let move of moves) {
            let key = `${move.x},${move.y}`;
            if(!visited.has(key)) {
                visited.add(key);
                queue.push([move, [...path, [move.x, move.y]]]);
            }
        }
    }
}