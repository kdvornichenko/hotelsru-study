function readNumber() {
	let num

	do {
		num = prompt('Введите число')
	} while (!isFinite(num))

	if (num === null || num === '') return null

	return +num
}

alert(readNumber())
