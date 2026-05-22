var agora = new Date()
var diaSem = agora.getDay()

/*
    PARA O JAVASCRIPT:
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch (diaSem) {
    case 0:
        console.log('HOJE É DOMINGO')
        break
    case 1:
        console.log('HOJE É SEGUNDA')
        break
    case 2:
        console.log('HOJE É TERÇA')
        break
    case 3:
        console.log('HOJE É QUARTA')
        break
    case 4:
        console.log('HOJE É QUINTA')
        break
    case 5:
        console.log('HOJE É SEXTA')
        break
    case 6:
        console.log('HOJE É SÁBADO')
        break
    default: 
        console.log('ERROR...')
}