let valores = [1, 3, 4, 6, 2, 9, 0]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} corresponde ao valor ${valores[pos]}`)
}

console.log('-------------------')
console.log('Agora eles reordenados.')
valores.sort()

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} corresponde ao valor ${valores[pos]}`)
}