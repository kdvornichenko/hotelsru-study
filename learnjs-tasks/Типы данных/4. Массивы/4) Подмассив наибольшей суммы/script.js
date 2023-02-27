function getMaxSubSum(arr) {
	let maxSum = 0
	let sum = 0

	for (let num of arr) {
		sum += num
		maxSum = Math.max(maxSum, sum)
		if (sum < 0) sum = 0
	}

	console.log(maxSum)
}
getMaxSubSum([-2, -1, 1, 2])
