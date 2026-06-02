var numero = []

function finalizar() {
    var resultados = document.getElementById('resultados')
    resultados.innerHTML = ''
    if (numero.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
         var dados = document.createElement('p')
         numero.sort((a, b) => a - b)
         dados.innerHTML =
         `
         <p>Ao todo, temos ${numero.length} números cadastrados.</p>
         <p>O maior valor informado foi ${numero[numero.length-1]}</p>
         <p>O menor valor informado foi ${numero[0]}</p>
         <p>Somando todos os valores, temos ${somar()}</p>
         <p>A média dos valores digitados é ${media()}</p>
         `
         resultados.appendChild(dados)
    }
}

function adicionar() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if ((num.value.length) == 0 || Number(num.value) <= 0 || Number(num.value) > 100) {
        alert('[ERRO] Digite um valor válido!')

    } else if (numero.indexOf(Number(num.value)) == -1) {
        var n = Number(num.value)
        numero.push(n)
        num.value = ''
        num.focus()     

        var item = document.createElement('li')
        item.textContent = `Valor ${n} adicionado.`
        res.appendChild(item) 
            
    } else {  
        alert('[ERRO] Valor já encontrado na lista.') 
        num.value = ''
        num.focus()   
    }
}

function somar() {
    var c = 0
    var soma = 0
    while (c <= numero.length - 1) {
        soma += numero[c]
        c++
    }
    return soma
}

function media() {
    var valor = somar()
    return valor / numero.length
}