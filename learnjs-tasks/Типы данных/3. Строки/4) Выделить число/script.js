function extractCurrencyValue(str) {
	console.log(+str.slice(1))
}
extractCurrencyValue('$1200')

// Но логичнее было бы использовать регулярное выражение
