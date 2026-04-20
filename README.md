# 🎮 Pokémon OOJS

> Revisiting Object-Oriented JavaScript concepts — no classes, just prototypes.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![OOP](https://img.shields.io/badge/OOP-Vanilla_JS-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-learning-green?style=flat-square)

---

## 📖 About

A study lab that uses the Pokémon universe to explore the pillars of OOP with plain JavaScript. Each concept is applied intentionally: encapsulation with closures, inheritance via `call()`, and behavior sharing through function references — no `class`, no `extends`, just JavaScript as it really works under the hood.

---

## 🧠 Concepts covered

### 🔒 Encapsulation
The `_level` property is private, accessible only through the `getLevel()` and `levelUp()` methods defined in the constructor. This is achieved via **closure** — `_level` lives in the constructor's scope and is never exposed directly on the object.

```js
function Pokemon(name, type) {
    let _level = 1; // private via closure

    this.getLevel = function() {
        return _level;
    };

    this.levelUp = function() {
        _level++;
    };
}
```

---

### 🧬 Inheritance with `call()`
Each specific Pokémon (Bulbassaur, Charmander, etc.) inherits base properties by calling `Pokemon.call(this, name, type)` inside its own constructor. This is the classic pre-`class` way of doing inheritance in JavaScript.

```js
function Charmander(name, type) {
    Pokemon.call(this, name, type); // inherits name, type, and Pokemon methods
    this.evolve = evolve;
}
```

---

### 🔄 Shared behavior via function reference
The `evolve()` function is defined once and assigned as a method across all constructors. Its behavior is determined at runtime by the value of `this.name`, making the same function context-aware depending on which object calls it.

```js
function evolve() {
    if (this.name === "Charmander") {
        return new Charmeleon("Charmeleon", this.type);
    }
    // ...
}
```

---

### 📦 Scope & context (`this`)
Using `this` inside `evolve()` ensures the function always operates on the object that invoked it. This highlights how execution context is central to how shared methods work in JavaScript.

---

## 🐾 Pokémon implemented

| Chain | Type | Forms |
|-------|------|-------|
| 🌿 Bulbassaur | Grass/Poison | Bulbassaur → Ivysaur → Venusaur |
| 🔥 Charmander | Fire | Charmander → Charmeleon → Charizard |
| 💧 Squirtle | Water | Squirtle → Wartortle → Blastoise |

---

## 🚀 Getting started

Clone the repo and run it with Node.js:

```bash
node pokemon.js
```

Or drop it into a `<script>` tag in any HTML file and check the browser console.

---

## 🧪 Usage example

```js
// Pick your starter
const starter = new Charmander("Charmander", "Fire");

// First evolution
const evolved = starter.evolve();
// → "Charmander evolved into Charmeleon!"

// Second evolution
const final = evolved.evolve();
// → "Charmeleon evolved into Charizard!"

// Encapsulation in action
starter.levelUp();
console.log(starter.getLevel()); // 2
console.log(starter._level);     // undefined — private property!
```

---

## 📂 Code structure

```
pokemon.js
├── Pokemon()          → base constructor with encapsulation
├── evolve()           → shared function (behavior by reference)
├── Bulbassaur()       → extends Pokemon, receives evolve
├── Ivysaur()          → extends Pokemon, receives evolve
├── Venusaur()         → extends Pokemon, receives evolve
├── Charmander()       → extends Pokemon, receives evolve
├── Charmeleon()       → extends Pokemon, receives evolve
├── Charizard()        → extends Pokemon, receives evolve
├── Squirtle()         → extends Pokemon, receives evolve
├── Wartortle()        → extends Pokemon, receives evolve
└── Blastoise()        → extends Pokemon, receives evolve
```

---

## 💡 Things to think about

This project is intentionally simple to keep the concepts visible. Some ideas to take it further:

- Use `prototype` to share methods without recreating functions on every instance
- Replace the `if/else` chain in `evolve()` with an evolution map object (`evolutionMap`)
- Explore the difference between prototypal and classical inheritance with `class extends`
- Use `Object.defineProperty` for truly non-enumerable private properties

---

*Built to revisit OOJS without modern abstractions — just JavaScript, prototypes, and `this`.*
