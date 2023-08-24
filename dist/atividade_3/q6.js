"use strict";
const exibir = (...args) => {
    args.forEach(arg => console.log(arg));
};
exibir("a", "b"); // a b
exibir("a", "b", "c"); // a b c
exibir("a", "b", "c", "d"); // a b c d
