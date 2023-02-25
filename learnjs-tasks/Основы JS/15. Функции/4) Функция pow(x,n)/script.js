// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, n) {
	let result = x

	for (let i = 1; i < n; i++) {
		result *= x
	}

	return result
}

let x = prompt('Введите число x')
let n = prompt('Введите степень n')

n < 1
	? alert(`Степень ${n} не поддерживается, используйте натуральное число`)
	: alert(pow(x, n))
