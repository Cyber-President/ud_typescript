"use strict";
console.log('ここにコードを追加します');
function add(n1, n2, shoeResult, phrase) {
    const result = n1 + n2;
    if (shoeResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
