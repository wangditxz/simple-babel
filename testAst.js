const acorn = require('./lib/acorn');
// console.dir(acorn.parse('export { encrypt as enc } from "crypto";'),{depth:20})
console.dir(acorn.parse('var a={b:1,...c,...d}'), {depth: 20})