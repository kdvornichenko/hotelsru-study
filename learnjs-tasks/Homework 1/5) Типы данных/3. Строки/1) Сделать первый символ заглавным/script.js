function checkSpam(str) {
	let newStr = str.toLowerCase()
	newStr.includes('xxx') || newStr.includes('viagra')
		? console.log(true)
		: console.log(false)
}
checkSpam('XXX')