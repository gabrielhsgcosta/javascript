var conteudo = document.getElementById('conteudo')
var txt = document.getElementById('txt')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

if(hora >= 0 && hora < 5) {
    img.src = 'imagens/madrugada.jpg'
    txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong>.</p> <p>Boa Madrugada!</p>`
    conteudo.style.background = '#3a1d3a'
    document.body.style.background = '#532853'

} else if(hora >= 5 && hora < 12) {
    img.src = 'imagens/amanhecer.jpg'
    txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong>.</p> <p>Bom Dia!</p>`
    conteudo.style.background = '#799aeb'
    document.body.style.background = '#537fee'

} else if(hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.jpg'
    txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong>.</p> <p>Boa Tarde!</p>`
    conteudo.style.background = '#c1d3f4'
    document.body.style.background = '#9ebefa'
    txt.style.color = 'black'

} else {
    img.src = 'imagens/noite.jpg'
    txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong>.</p> <p>Boa Noite!</p>`
    conteudo.style.background = '#000000'
    document.body.style.background = '#000000dd'
}