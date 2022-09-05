# Metagross

A simple, efficient wrapper for [PokeAPI/api-data](https://github.com/PokeAPI/api-data).

## Usage

To look up a specific Pokemon, simply pass in the Pokemon's name.

```js
const metagross = require('metagross');
const pokemon = metagross.getPokemon('pikachu');
console.log(pokemon);
```

Alternatively, a Pokemon's id can be provided instead of its name.

```js
const metagross = require('metagross');
const pokemon = metagross.getPokemon(25);
console.log(pokemon);
```

All types of data present in `api-data` are also available via `metagross`.

```js
const metagross = require('metagross');
const move = metagross.getMove('iron-tail');
console.log(move);
```
