// Таблицу с id="age-table".
let table = document.getElementById('age-table')
console.log(table)
// Все элементы label внутри этой таблицы (их три).
console.log(document.querySelectorAll('#age-table label'))
// Первый td в этой таблице (со словом «Age»).
console.log(table.rows[0].cells[0])
// Форму form с именем name="search".
let form = document.querySelector('form[name="search"]')
console.log(form)
// Первый input в этой форме.
console.log(form.querySelector('input'))
// Последний input в этой форме.
let inputs = form.querySelectorAll('input')
console.log(inputs[inputs.length - 1])
