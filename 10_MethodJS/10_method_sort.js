const myNum = [11, 18, 100, 25, 30]
const print_num = myNum.sort()
console.log(print_num)

const number = [11, 18, 100, 25, 30]
const sort_number = number.sort(function(a,b){return a- b})
console.log(sort_number) 
// output -> [ 11, 18, 25, 30, 100 ]

const numbernumber = [11, 18, 100, 25, 30]
const number_sort = numbernumber.sort(function(a,b){return b - a})
console.log(number_sort)
// output -> [ 100, 30, 25, 18, 11 ]

// Sesuai namanya, method sort digunakan untuk mengurutkan item dalam sebuah array.