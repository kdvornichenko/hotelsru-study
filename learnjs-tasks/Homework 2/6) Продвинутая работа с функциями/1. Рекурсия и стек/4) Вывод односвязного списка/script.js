let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

function printListCycle(list) {
	let step = list

	while (step) {
		console.log('Цикл: ' + step.value)
		step = step.next
	}
}

printListCycle(list)

function printListRecursion(list) {
	console.log('Рекурсия: ' + list.value)
	if (list.next) {
		printListRecursion(list.next)
	}
}

printListRecursion(list)
