//delete item dengan method splice
const fruits = ['apple', 'banana', 'cherry']
fruits.splice(0, 1) // menghapus 1 item di index 0
console.log(fruits) // ['banana', 'cherry']

//replace item dengan method replice
const fruits_2 = ['apple', 'banana', 'cherry']
fruits_2.splice(0, 1, 'mango') 
// menghapus 1 item di index 0 dan menambah 'mango' di index 0
console.log(fruits_2) // ['mango', 'banana', 'cherry']

//add item dengan method splice
const fruits_3 = ['apple', 'banana', 'cherry']
fruits_3.splice(0, 0, 'mango') 
// menambah 1 item di index 0 
console.log(fruits_3) // [ 'mango', 'apple', 'banana', 'cherry' ]

// Metode splice() bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.