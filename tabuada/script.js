const submit = document.querySelector('#submit')
var i = 1
const res = document.querySelector('#res')

submit.addEventListener('click', function () {
    const input = document.querySelector('#num')

    if (input.value === "") {
        window.alert('Digite algum número.')
        return
    }

    const num = Number(input.value)
    res.innerHTML = ' '

    for (let i = 1; i <= 10; i++) {
        const resultado = num * i
        res.innerHTML += `${num} x ${i} = ${resultado} <br> `
    }

})