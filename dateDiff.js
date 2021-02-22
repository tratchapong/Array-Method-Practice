// https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript

let d1=new Date(2021,0,1); 
let d2=new Date(); // now

console.log(d1)
console.log(d2)

let diff=d2-d1,sign=diff<0?-1:1,milliseconds,seconds,minutes,hours,days;
diff/=sign; // or diff=Math.abs(diff);
diff=(diff-(milliseconds=diff%1000))/1000;
diff=(diff-(seconds=diff%60))/60;
diff=(diff-(minutes=diff%60))/60;
days=(diff-(hours=diff%24))/24;

console.log(sign===1?"Elapsed: ":"Remains: ",
             days+" days, ",
             hours+" hours, ",
             minutes+" minutes, ",
             seconds+" seconds, ",
             milliseconds+" milliseconds.");
