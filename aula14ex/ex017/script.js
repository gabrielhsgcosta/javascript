function calcular() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('[ERRO] Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``

        for (c; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.setAttribute(`value`, `valor${c}`)
            tab.appendChild(item)
        }
    }
}