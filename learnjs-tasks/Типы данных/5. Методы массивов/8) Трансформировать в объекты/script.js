let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 28 }

let arr = [vasya, petya, masha]

function sortByAge(arr) {
	arr.sort((a, b) => (a.age > b.age ? 1 : -1))
}

sortByAge(arr)

console.log(arr[0].name)
console.log(arr[1].name)
