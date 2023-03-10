// Цикл
function sumToCycle(n) {
	let sum = 0
	for (let i = 0; i <= n; i++) {
		sum += i
	}
	return sum
}
console.log('Цикл: ' + sumToCycle(10))

// Рекурсия
function sumToRecursion(n) {
	if (n == 1) return 1
	return n + sumToRecursion(n - 1)
}
console.log('Рекурсия: ' + sumToRecursion(11))

// С использованием формулы арифметической прогрессии
function sumToProgression(n) {
	return (n * (n + 1)) / 2
}
console.log('Прогрессия: ' + sumToProgression(12))
