window.onLoad = () => {

    const botao = document.querySelector('#submit')
    const resultado = document.querySelector('#resultado')
    const idadeInput = document.querySelector('#idade')
    const sexoInput = document.querySelector('#sexo')


    botao.addEventListener('click', function () {
        let idade = Number(idadeInput.value)
        let sexo = sexoInput.value

        if (idade > 120 || idade < 0 || isNaN(idade)) {
            window.alert('Idade inválida. Por favor, insira uma idade entre 0 e 120 anos.')
            return
        }
        else if (sexo !== 'mas' && sexo !== 'fem') {
            window.alert('Sexo inválido. Por favor, selecione um dos dois sexos disponíveis.')
            return
        }

        const img = document.createElement('img')

        if (sexo === 'mas' && idade < 18) { //homem
            img.src = 'imgs/menino.webp'
        }
        else if (sexo === 'mas' && idade >= 60) {
            img.src = 'imgs/velho.webp'
        }
        else if (sexo === 'mas' && idade >= 18) {
            img.src = 'imgs/homem.webp'
        }

        else if (sexo === 'fem' && idade >= 60) { //mulher
            img.src = 'imgs/velha.webp'
        }
        else if (sexo === 'fem' && idade < 18) {
            img.src = 'imgs/menina.webp'
        }
        else if (sexo === 'fem' && idade >= 18) {
            img.src = 'imgs/mulher.webp'
        }

        resultado.innerHTML = ''
        resultado.appendChild(img)
    })


}
