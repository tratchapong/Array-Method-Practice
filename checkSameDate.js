// use toDateString() to cut of the time part

let d1 = new Date(2012, 1, 10, 0, 0)
let d2 = new Date(2012, 1, 10, 15, 59)
console.log(d1)
console.log(d2)
console.log(d1.getTime())
console.log(+d1)
console.log(d2.getTime())
console.log(d1.toDateString())
console.log(d2.toDateString())
// check same day or not?
console.log(d1.toDateString() === d2.toDateString())

function isSameDay(d1, d2) {
  return d1.toDateString() === d2.toDateString()
}
console.log(isSameDay(d1, d2))


