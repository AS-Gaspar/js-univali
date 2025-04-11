function addNumbers(event) {
    event.preventDefault()
    const firstNumber = Number(document.getElementById('firstNumber').value)
    const secondNumber = Number(document.getElementById('secondNumber').value)
    const inputSum = document.getElementById('result')
    const container = document.getElementsByName('main')[0]
    const helloWorld = document.getElementsByClassName('helloWorld')[0]

    inputSum.innerHTML = ''

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber
        const textResult = document.createElement('h3')
        textResult.innerText = `Resultado ${sum}`
        inputSum.appendChild(textResult)
        inputSum.removeAttribute('hidden');
        container.style.boxShadow = '2px 2px 10px rgb(34, 197, 94)'
        helloWorld.style.fontSize = '45px'
    } else {
        inputSum.innerText = 'Por favor, insira dois números válidos.';
        inputSum.removeAttribute('hidden');
    }
}



