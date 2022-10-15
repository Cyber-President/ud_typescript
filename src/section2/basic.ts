console.log('ここにコードを追加します')

function add(n1: number, n2: number, shoeResult: boolean,  phrase: string){
    const result = n1 +n2;
    if (shoeResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}