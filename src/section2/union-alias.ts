type Combinable = number | string; //エイリアス型　// | union型
type ConversionDescription = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescription) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString + input2.toString();
    }
    return result;
}

// function combine(input1: number | string, input2: number | string, ){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     } else {
//         result = input1.toString + input2.toString();
//     }
//     return result;
// }

// const combineAges = combine(30, 26);
// console.log(combineAges);
//
// const combineName = combine('Max', 'Anna');
// console.log(combineAges);