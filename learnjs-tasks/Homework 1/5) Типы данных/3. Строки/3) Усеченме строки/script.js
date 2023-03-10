function truncate(str, maxLength) {
	str.length > maxLength
		? console.log(str.slice(0, maxLength - 1) + '...')
		: console.log(str)
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)
