let arr = [5, 3, 8, 1]

function filterRangeInPlace(array, a, b) {
	arr = array.filter((item) => item >= a && item <= b)
}

filterRangeInPlace(arr, 1, 4)

console.log(arr)
