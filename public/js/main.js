function addNumbers(event) {
    event.preventDefault()
    const firstNumber = Number(document.getElementById('firstNumber').value)
    const secondNumber = Number(document.getElementById('secondNumber').value)
    const inputSum = document.getElementById('result')
    const container = document.getElementsByName('container')[0]
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber
        const textResult = inputSum.appendChild('h3')
        textResult.innerText = `Resultado ${sum}`
        inputSum.classList.remove('hidden');
        container.style.boxShadow = '2px 2px 10px rgb(34, 197, 94)'
    } else {
        inputSum.innerText = 'Por favor, insira dois números válidos.';
        inputSum.classList.remove('hidden');
    }
}



