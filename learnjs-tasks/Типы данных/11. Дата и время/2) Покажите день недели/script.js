let date = new Date(2012, 0, 3)

function getWeekDay(date) {
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

	return days[date.getDay()]
}

console.log(getWeekDay(date))
