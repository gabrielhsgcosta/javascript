function verificar() {
    var ano = new Date()
    var atual = ano.getFullYear()
    var nascimento = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (nascimento.value.length == 0 || Number(nascimento.value) > atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('escolhasexo')
        var idade = atual - Number(nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        resultado.appendChild(img)
    }
}
