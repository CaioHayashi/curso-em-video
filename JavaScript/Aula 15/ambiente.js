let num = [5, 8, 2, 9, 3]


num.push(1)
num.sort()
console.log(`nosso array é o ${num}`)
console.log(`o array tem ${num.length} posições`)
console.log(` O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


/*
let n = [5, 8, 4]
num[3] = 6
num.push(7)
console.log(num)
num.length
num.sort()
*/