    window.onload = () => {
        const agora = new Date()
        const hora = agora.getHours()
        let minuto = agora.getMinutes()
        const body = document.querySelector('body')

        const horario = document.querySelector('#horasAgora')
        const img = document.querySelector('#img')

        if (minuto < 10) { //Adiciona um zero à esquerda do minuto.
            minuto = '0' + minuto
        }

        if (hora >= 6 && hora < 12) { //Verifica o horário e exibe a imagem correspondente.
            horario.innerHTML = `Agora são ${hora}:${minuto} da manhã.`
            img.src = 'img/manha.jpg'
            body.style.backgroundColor = '#eaea39'
        }
        else if (hora >= 12 && hora < 18) {
            horario.innerHTML = `Agora são ${hora}:${minuto} da tarde.`
            img.src = 'img/tarde.jpg'
            body.style.backgroundColor = '#f5ac1a'
        }
        else if (hora >= 18 && hora < 24) {
            horario.innerHTML = `Agora são ${hora}:${minuto} da noite.`
            img.src = 'img/noite.jpg'
            body.style.backgroundColor = '#203cb8'
        }
        else {
            horario.innerHTML = `Agora são ${hora}:${minuto} da madrugada.`
            img.src = 'img/madrugada.jpg'
            body.style.backgroundColor = '#0f0070'
        }
    }