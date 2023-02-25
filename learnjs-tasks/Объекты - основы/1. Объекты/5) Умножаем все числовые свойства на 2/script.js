// до вызова функции
let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
}

multiplyNumeric(menu)

function multiplyNumeric(menu) {
	for (let prop in menu) {
		if (typeof menu[prop] == 'number') {
			menu[prop] *= 2
		}
	}
}

console.log(menu)
// после вызова функции
// menu = {
// 	width: 400,
// 	height: 600,
// 	title: 'My menu',
// }
