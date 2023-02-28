function camelize(str) {
	return str
		.split('-')
		.map((item, index) =>
			index >= 1 ? item[0].toUpperCase() + item.slice(1) : item
		)
		.join('')
}

camelize('background-color') == 'backgroundColor'
camelize('list-style-image') == 'listStyleImage'
camelize('-webkit-transition') == 'WebkitTransition'
