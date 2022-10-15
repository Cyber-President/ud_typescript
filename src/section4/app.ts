// Arrow関数　ファンクションを省略する
const add4 = (a: number, b: number) => a + b;
console.log(add4(2, 5));

// スプレッド演算子
const person4 = {
    name: 'Max',
    age: 30,
}
const copiedPerson4 = {
    ...person4
}