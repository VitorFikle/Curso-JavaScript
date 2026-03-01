function parimp(n){
    if (n%2==0){
        return 'Par!'
    }
    else{
        return 'Ímpar!'
    }
}
// let res = parimp(4)
const arrayy = [1, 2, 3, 4, 5, 6]
let res2 = arrayy.map(parimp)
// console.log(res)
console.log(`Os números do array são: ${arrayy.join(', ')}.`)
console.log(res2)

console.log('------------------------------')
function soma(n1, n2){
    return n1 + n2
}

console.log(`A soma entre 5 e 20 é ${soma(20)}`)
console.log('------------------------------')

function fatorial (n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(`O fatorial de 5 é ${fatorial(5)}`)
console.log('------------------------------')
//função recursiva
function fatorial(n){
    if (n == 1){
        return 1
    }
    else{
        return n * fatorial(n-1)}
    }

console.log(`O fatorial de 9 é ${fatorial(9)}`)
