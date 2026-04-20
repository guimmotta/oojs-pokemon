# 🎮 Pokémon OOJS

> Revisitando conceitos de Orientação a Objetos com JavaScript — sem classes, só protótipos.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![OOP](https://img.shields.io/badge/OOP-Vanilla_JS-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-estudo-green?style=flat-square)

---

## 📖 Sobre o projeto

Um laboratório de estudo que usa o universo Pokémon para explorar os pilares de OOP com JavaScript puro. Cada conceito é aplicado de forma intencional: encapsulamento com closures, herança via `call()`, e compartilhamento de comportamento por referência de função — sem `class`, sem `extends`, só JavaScript de verdade.

---

## 🧠 Conceitos abordados

### 🔒 Encapsulamento
A propriedade `_level` é privada, acessível somente pelos métodos `getLevel()` e `levelUp()` definidos no constructor. Isso é feito via **closure** — a variável `_level` existe no escopo da função construtora e não é exposta diretamente no objeto.

```js
function Pokemon(name, type) {
    let _level = 1; // privado via closure

    this.getLevel = function() {
        return _level;
    };

    this.levelUp = function() {
        _level++;
    };
}
```

---

### 🧬 Herança com `call()`
Cada Pokémon específico (Bulbassaur, Charmander, etc.) herda as propriedades base chamando `Pokemon.call(this, name, type)` dentro de seu próprio constructor. É a forma clássica de herança em JavaScript antes de `class`.

```js
function Charmander(name, type) {
    Pokemon.call(this, name, type); // herda name, type e métodos de Pokemon
    this.evolve = evolve;
}
```

---

### 🔄 Comportamento compartilhado via referência
A função `evolve()` é definida uma única vez e atribuída como método para todos os constructors. O comportamento é determinado em runtime pelo valor de `this.name`, tornando a mesma função responsiva a diferentes contextos de execução.

```js
function evolve() {
    if (this.name === "Charmander") {
        return new Charmeleon("Charmeleon", this.type);
    }
    // ...
}
```

---

### 📦 Escopo e contexto (`this`)
O uso de `this` dentro de `evolve()` garante que a função sempre opera sobre o objeto que a chamou. Isso demonstra como o contexto de execução é fundamental para o funcionamento de métodos compartilhados em JavaScript.

---

## 🐾 Pokémon implementados

| Cadeia | Tipos | Formas |
|--------|-------|--------|
| 🌿 Bulbassaur | Grass/Poison | Bulbassaur → Ivysaur → Venusaur |
| 🔥 Charmander | Fire | Charmander → Charmeleon → Charizard |
| 💧 Squirtle | Water | Squirtle → Wartortle → Blastoise |

---

## 🚀 Como usar

Clone o repositório e execute com Node.js:

```bash
node pokemon.js
```

Ou abra diretamente no navegador com um `<script>` tag e veja os logs no console.

---

## 🧪 Exemplo de uso

```js
// Criando um starter
const starter = new Charmander("Charmander", "Fire");

// Primeira evolução
const evolved = starter.evolve();
// → "Charmander evolved into Charmeleon!"

// Segunda evolução
const final = evolved.evolve();
// → "Charmeleon evolved into Charizard!"

// Encapsulamento em ação
starter.levelUp();
console.log(starter.getLevel()); // 2
console.log(starter._level);     // undefined — propriedade privada!
```

---

## 📂 Estrutura do código

```
pokemon.js
├── Pokemon()          → constructor base com encapsulamento
├── evolve()           → função compartilhada (comportamento por referência)
├── Bulbassaur()       → herda de Pokemon, recebe evolve
├── Ivysaur()          → herda de Pokemon, recebe evolve
├── Venusaur()         → herda de Pokemon, recebe evolve
├── Charmander()       → herda de Pokemon, recebe evolve
├── Charmeleon()       → herda de Pokemon, recebe evolve
├── Charizard()        → herda de Pokemon, recebe evolve
├── Squirtle()         → herda de Pokemon, recebe evolve
├── Wartortle()        → herda de Pokemon, recebe evolve
└── Blastoise()        → herda de Pokemon, recebe evolve
```

---

## 💡 Pontos de reflexão

Este projeto é intencionalmente simples para deixar os conceitos visíveis. Algumas melhorias possíveis para evoluir o estudo:

- Usar `prototype` para compartilhar métodos sem recriar funções em cada instância
- Substituir o `if/else` em `evolve()` por um mapa de evolução (`evolutionMap`)
- Explorar a diferença entre herança prototipal e herança clássica com `class extends`
- Adicionar `Object.defineProperty` para propriedades verdadeiramente não-enumeráveis

---

*Feito para revisitar OOJS sem abstrações modernas — só JavaScript, protótipos e `this`.*
