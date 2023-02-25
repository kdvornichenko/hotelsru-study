function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no()
}

// ask(
// 	'Вы согласны?',
// 	function () {
//
// 	},
// 	function () {
// 		alert('Вы отменили выполнение.')
// 	}
// )

ask(
	'Вы согласы?',
	() => {
		alert('Вы согласились.')
	},
	() => {
		alert('Вы отменили выполнение.')
	}
)
