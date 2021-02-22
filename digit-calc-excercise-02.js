
// แบบฝึกหัด: หาผลรวมของเลขโดดที่น้อยที่สุด ที่มีค่า 2 เท่าของผลรวมเลขโดด input / 22Feb21 
// เลขผลลัพธ์นั้นต้องมีค่ามากกว่า n

function calc(n) {
  let r = [...String(n)].reduce( (a,c) => a+Number(c),0) * 2
  let rs = String(r%9==0? '' : r%9) + String('9').repeat(Math.floor(r/9))
  let x = (Number(rs)<n)? n : Number(rs)
    while( [...String(x)].reduce( (a,c) => a+Number(c),0) <r ) x +=1      
  return x
}

console.log(calc(99))
console.log(calc(10))
console.log(calc(20))
console.log(calc(202))
console.log(calc(29))
console.log(calc(90))




