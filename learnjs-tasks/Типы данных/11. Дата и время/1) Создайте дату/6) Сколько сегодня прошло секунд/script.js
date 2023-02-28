function getSecondsToday() {
	let date = new Date()
	console.log(
		date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
	)
}
