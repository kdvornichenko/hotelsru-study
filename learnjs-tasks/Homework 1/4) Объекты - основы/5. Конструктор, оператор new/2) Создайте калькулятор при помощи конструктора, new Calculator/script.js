function Calculator() {
	this.read = function () {
		this.x = +prompt('Введите x')
		this.y = +prompt('Введите y')
	}
	this.sum = function () {
		return this.x + this.y
	}
	this.mul = function () {
		return this.x * this.y
	}
}

let calculator = new Calculator()
calculator.read()

alert('Sum=' + calculator.sum())
alert('Mul=' + calculator.mul())
