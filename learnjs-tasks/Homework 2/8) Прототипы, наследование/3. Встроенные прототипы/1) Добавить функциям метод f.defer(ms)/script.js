function f() {
	console.log('Hello!')
}

Function.prototype.defer = function (timeout) {
	setTimeout(this, timeout)
}

f.defer(1000)
