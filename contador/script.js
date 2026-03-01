const submit = document.querySelector('#submit')
const res = document.querySelector('#res')

submit.addEventListener('click', function () {
    let start = Number(document.querySelector('#start').value)
    let end = Number(document.querySelector('#end').value)
    let step = Number(document.querySelector('#step').value)

    res.innerHTML = "" //esvazia a div res do HTML

    if (step === 0) {
        step = 1
    }
    if (end > start) {
        //Crescente
        for (let i = start; i <= end; i += step) {
            res.innerHTML += `${i} \u{1F449}` //reescreve no mesmo espaço que está o res do HTML
        }
    }
    else{
        //crescente
        for(let i = start; i >= end; i-= step){
            res.innerHTML += `${i} 	\u{1F448}`
        }
    }
})