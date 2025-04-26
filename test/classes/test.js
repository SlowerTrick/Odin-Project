// "node test.js" for testing

class Mage
{
    static MAGE_COUNT = 0;
    constructor(name, level)
    {
        this.name = name;
        this.level = level;
        Mage.MAGE_COUNT++;
    }
    cast_spell(spell)
    {
        console.log(`Now ${this.name} Shall Cast: ${spell}`);
    }
    static get_mage_count()
    {
        console.log("Mage Count: " + Mage.MAGE_COUNT);
    }
}

let mage1 = new Mage('Slower', 100);
let mage2 = new Mage('WapuWapu', 69);
console.log(mage1);
console.log(mage2);
mage1.cast_spell('Fireball');
mage2.cast_spell('Thunderbolt');
console.log(Mage.MAGE_COUNT);
Mage.get_mage_count();