function addNumbers(event) {
    event.preventDefault()
    const firstNumber = Number(document.getElementById('firstNumber').value)
    const secondNumber = Number(document.getElementById('secondNumber').value)
    const inputSum = document.getElementById('result')
    const boxShadow = document.getElementsByTagName('main')
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber
        inputSum.innerText = `Resultado ${sum}`
        inputSum.classList.remove('hidden');
        boxShadow.style.boxShadow = '2px 2px 4px rgb(34, 197, 94)'
    } else {
        inputSum.innerText = 'Por favor, insira dois números válidos.';
        inputSum.classList.remove('hidden');
    }
}



