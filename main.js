// ===== ENCAPSULATION =====
// Base Pokemon class with private properties
function Pokemon(name, type) {
    this.name = name;
    this.type = type;
    let _level = 1;  // private property
    
    this.getLevel = function() {
        return _level;
    };
    
    this.levelUp = function() {
        _level++;
    };
}

// ===== CONDITIONAL EVOLVE FUNCTION =====
// Single evolve function that checks the Pokemon's name
function evolve() {
    console.log(`${this.name} is evolving!`);
    
    if (this.name === "Bulbassaur") {
        console.log(`${this.name} evolved into Ivysaur!`);
        return new Ivysaur("Ivysaur", this.type);
    } else if (this.name === "Ivysaur") {
        console.log(`${this.name} evolved into Venusaur!`);
        return new Venusaur("Venusaur", this.type);
    } else if (this.name === "Venusaur") {
        console.log(`${this.name} is already in final form!`);
        return this;
    } else if (this.name === "Charmander") {
        console.log(`${this.name} evolved into Charmeleon!`);
        return new Charmeleon("Charmeleon", this.type);
    } else if (this.name === "Charmeleon") {
        console.log(`${this.name} evolved into Charizard!`);
        return new Charizard("Charizard", this.type);
    } else if (this.name === "Charizard") {
        console.log(`${this.name} is already in final form!`);
        return this;
    } else if (this.name === "Squirtle") {
        console.log(`${this.name} evolved into Wartortle!`);
        return new Wartortle("Wartortle", this.type);
    } else if (this.name === "Wartortle") {
        console.log(`${this.name} evolved into Blastoise!`);
        return new Blastoise("Blastoise", this.type);
    } else if (this.name === "Blastoise") {
        console.log(`${this.name} is already in final form!`);
        return this;
    } else {
        console.log(`${this.name} cannot evolve!`);
        return this;
    }
}

// ===== INHERITANCE =====
// Bulbassaur
function Bulbassaur(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Ivysaur
function Ivysaur(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Venusaur
function Venusaur(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Charmander
function Charmander(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Charmeleon
function Charmeleon(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Charizard
function Charizard(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Squirtle
function Squirtle(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Wartortle
function Wartortle(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// Blastoise
function Blastoise(name, type) {
    Pokemon.call(this, name, type);
    this.evolve = evolve;
}

// ===== USAGE EXAMPLE =====
console.log("=== Creating Pokemon ===");
const pokemon1 = new Bulbassaur("Bulbassaur", "Grass/Poison");
const pokemon2 = new Charmander("Charmander", "Fire");
const pokemon3 = new Squirtle("Squirtle", "Water");

console.log("\n=== First Evolutions ===");
const evolved1 = pokemon1.evolve();
const evolved2 = pokemon2.evolve();
const evolved3 = pokemon3.evolve();

console.log("\n=== Second Evolution ===");
const evolved1Final = evolved1.evolve();                    
const evolved2Final = evolved2.evolve();
const evolved3Final = evolved3.evolve();

console.log("\n=== Checking Levels (Encapsulation) ===");
console.log(`${pokemon1.name} Level: ${pokemon1.getLevel()}`);
pokemon1.levelUp();
console.log(`${pokemon1.name} Level after levelUp: ${pokemon1.getLevel()}`);