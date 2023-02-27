function sumInput() {
	let arr = []

	while (true) {
		let val = prompt('Введите значение')

		if (val === '' || val === null || !isFinite(val)) break

		arr.push(+val)
	}

	let sum = 0

	for (let num of arr) {
		sum += num
	}
	return sum
}
alert(sumInput())
