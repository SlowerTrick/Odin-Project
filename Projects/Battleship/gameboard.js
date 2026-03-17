import { Ship } from "./ship.js";

export class GameBoard {
    constructor() {
        // Grid
        this.heigth = 15;
        this.length = 15;
        this.grid = this.#buildGrid();
        this.printGrid = this.#buildPrintGrid();

        // Ships
        this.carriers = new shipList(1);
        this.battleships = new shipList(2); 
        this.destroyers = new shipList(3); 
        this.patrols = new shipList(3);
        this.submarines = new shipList(4);
    }

    place(x, y, type) {
        if(x < 0 || x >= this.length || y < 0 || y >= this.heigth)
            throw `Invalid cordinates`;

        let size = 0;
        let ship;
        type = type.toUpperCase();
        switch(type) {
            case 'C':
                if(this.carriers.getSize() >= this.carriers.getMax())
                    throw `Invalid action. The max of carriers is ${this.carriers.getMax()}`;

                size = 5;

                if(size + x >= this.length)
                    throw `Invalid action. Ship out of the board`;

                ship = new Ship(size);

                for(let i = 0; i < size; i++) {
                    if(this.grid[x+i][y] == null) {
                        this.grid[x+i][y] = ship;
                        this.printGrid[x+i][y] = 'C';
                    }
                    else {
                        throw `Invalid action. Theres already a ship placed at (${x}, ${y})`;
                    }
                }

                this.carriers.add(ship);

                break

            case 'B':
                if(this.battleships.getSize() >= this.battleships.getMax())
                    throw `Invalid action. The max of battleships is ${this.battleships.getMax()}`;

                size = 4;

                if(size + x >= this.length)
                    throw `Invalid action. Ship out of the board`;

                ship = new Ship(size);

                for(let i = 0; i < size; i++) {
                    if(this.grid[x+i][y] == null) {
                        this.grid[x+i][y] = ship;
                        this.printGrid[x+i][y] = 'B';
                    }
                    else {
                        throw `Invalid action. Theres already a ship placed at (${x}, ${y})`;
                    }
                }

                this.battleships.add(ship);

                break

            case 'D':
                if(this.destroyers.getSize() >= this.destroyers.getMax())
                    throw `Invalid action. The max of destroyers is ${this.destroyers.getMax()}`;

                if(x + 1 >= this.length || x - 1 < 0)
                    throw `Invalid action. Ship out of the board`;

                ship = new Ship(size);

                if(this.grid[x][y] == null  && this.grid[x+1][y+1] == null && this.grid[x-1][y+1] == null) {
                    this.grid[x][y] = ship;
                    this.printGrid[x][y] = 'D';
                    this.grid[x+1][y+1] = ship;
                    this.printGrid[x+1][y+1] = 'D';
                    this.grid[x-1][y+1] = ship;
                    this.printGrid[x-1][y+1] = 'D';
                }
                else {
                    throw `Invalid action. Theres already a ship placed at (${x}, ${y})`;
                }

                this.destroyers.add(ship);

                break

            case 'P':
                if(this.patrols.getSize() >= this.patrols.getMax())
                    throw `Invalid action. The max of patrols is ${this.patrols.getMax()}`;

                size = 2;

                if(size + x >= this.length)
                    throw `Invalid action. Ship out of the board`;

                ship = new Ship(size);

                for(let i = 0; i < size; i++) {
                    if(this.grid[x+i][y] == null) {
                        this.grid[x+i][y] = ship;
                        this.printGrid[x+i][y] = 'P';
                    }
                    else {
                        throw `Invalid action. Theres already a ship placed at (${x}, ${y})`;
                    }
                }

                this.patrols.add(ship);
                
                break

            case 'S':
                if(this.submarines.getSize() >= this.submarines.getMax())
                    throw `Invalid action. The max of submarines is ${this.submarines.getMax()}`;

                size = 1;
                ship = new Ship(size);
                if(this.grid[x][y] == null) {
                    this.grid[x][y] = ship;
                    this.printGrid[x][y] = 'S';
                }
                else
                    throw `Invalid action. Theres already a ship placed at (${x}, ${y})`;


                this.submarines.add(ship);

                break

            default:
                throw `Ship of type ${type} is not valid.`
        }
    }

    #buildGrid() {
        return [...Array(this.length)].map(_ => Array(this.heigth).fill(null));
    }

    #buildPrintGrid() {
        return [...Array(this.length)].map(_ => Array(this.heigth).fill('W'));
    }

    print() {
        this.grid.forEach(a => console.log(...a));
        console.log("");
        this.printGrid.forEach(a => console.log(...a));
        console.log("");

        //console.log("Carriers");
        //console.log(this.carriers);
        //console.log("");
        //console.log("Battleships");
        //console.log(this.battleships);
        //console.log("");
        //console.log("Destroyers");
        //console.log(this.destroyers);
        //console.log("");
        //console.log("Patrols");
        //console.log(this.patrols);
        //console.log("");
        //console.log("Submarines");
        //console.log(this.submarines);
        //console.log("");
    }
}
//this.carrier_arr = this.#buildShips(1, 5);
//this.battleshi_arr = this.#buildShips(2, 4);
//this.destroyer_arr = this.#buildShips(3, 3);
//this.patrol_arr = this.#buildShips(3, 2);
//this.submarine_arr = this.#buildShips(4, 1);

class shipList {
    constructor(max) {
        this.list = [];
        this.size = 0;
        this.max = max;
    }

    add(ship) {
        this.list.push(ship);
        this.size++;
    }

    getSize() {
        return this.size;
    }

    getMax() {
        return this.max;
    }
}

