function parimp(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

var resultado = parimp(12)
console.log(`O valor é ${resultado}`)