const agora = new Date()
const diaSem = agora.getDay()
/*
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
        console.log('Hoje é domingo.')
        break
    case 1:
        console.log('Hoje é segunda-feira.')
        break
    case 2:
        console.log('Hoje é terça-feira.')
        break
    case 3:
        console.log('Hoje é quarta-feira.')
        break
    case 4:
        console.log('Hoje é quinta-feira.')
        break
    case 5:
        console.log('Hoje é sexta-feira.')
        break
    case 6:
        console.log('Hoje é sábado.')
        break
}

const hora = agora.getHours()
const minuto = agora.getMinutes()
if (minuto < 10) {
    minuto = '0' + minuto
}

if (hora < 12) {
    console.log(`Bom dia! Agora são ${hora}:${minuto} horas.`)
}
else if (hora < 18) {
    console.log(`Boa tarde! Agora são ${hora}:${minuto} horas.`)
}
else {
    console.log(`Boa noite! Agora são ${hora}:${minuto} horas.`)
}