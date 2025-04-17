function Hero(name, level)
{
    this.name = name;
    this.level = level;
}

function Mage(name, level, weapon)
{
    Hero.call(this, name, level);
    this.weapon = weapon;
}

function Necromancer(name, level, pet)
{
    Hero.call(this, name, level);
    this.pet = pet;
}

Object.setPrototypeOf(Mage.prototype, Hero.prototype);
Object.setPrototypeOf(Necromancer.prototype, Hero.prototype);

Hero.prototype.print_name = function() {
    return this.name;
}

let mage = new Mage("Gengar", 100, "Shadow_ball");
let necromancer = new Necromancer("Karthus", 50, "Metal_upa");

console.log(mage.print_name());
console.log(necromancer.print_name());