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

function printListCycleReverse(list) {
	let arr = []
	let step = list

	while (step) {
		arr.push(step.value)
		step = step.next
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		console.log('Цикл:' + arr[i])
	}
}

printListCycleReverse(list)

function printListRecursionReverse(list) {
	if (list.next) {
		printListRecursionReverse(list.next)
	}
	console.log('Рекурсия: ' + list.value)
}

printListRecursionReverse(list)
