
let d1 = new Date(2012, 1, 10, 0, 0)
let d2 = new Date(2012, 1, 10, 15, 59)
let d3 = new Date(2012, 1, 11, 15, 59)

function isSameDay(d1, d2) {
  return d1.toDateString() === d2.toDateString()
}

console.log(isSameDay(d1, d2))
console.log(isSameDay(d2, d3))


