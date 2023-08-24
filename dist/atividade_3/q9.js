"use strict";
const dobrar = (arr) => arr.map(n => n * 2);
const somar = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const array3 = [1, 2, 3, 4, 5];
console.log(dobrar(array2)); // [2, 4, 6, 8, 10]
console.log(somar(array2)); // 15
