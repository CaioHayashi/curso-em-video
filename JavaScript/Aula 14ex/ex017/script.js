function gerar() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {
        alert('Preencha o campo vazio!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            c++
            tab.appendChild(item)
        }
    }
}