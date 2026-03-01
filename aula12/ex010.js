const agora = new Date()
const hora = agora.getHours()
let minuto = agora.getMinutes()
if (minuto < 10) {
    minuto = '0' + minuto
}

if (hora >= 6 && hora < 12) {
    console.log(`Bom dia! Agora são ${hora}:${minuto} horas.`)
}
else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde! Agora são ${hora}:${minuto} horas.`)
}
else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite! Agora são ${hora}:${minuto} horas.`)
}
else {
    console.log(`Boa madrugada! Agora são ${hora}:${minuto} horas.`)
}

