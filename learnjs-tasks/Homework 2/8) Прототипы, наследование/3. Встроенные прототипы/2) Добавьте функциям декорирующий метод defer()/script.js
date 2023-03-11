function f(a, b) {
	console.log(a + b)
}

Function.prototype.defer = function (timeout) {
	let f = this
	return function (...args) {
		setTimeout(() => f.apply(this, args), timeout)
	}
}

f.defer(1000)(1, 2)
