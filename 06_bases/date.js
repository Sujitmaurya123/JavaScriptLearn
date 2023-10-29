let myDate =new Date() // Date() ak Object hai


console.log(myDate.toString());


let myCreatedDate = new Date(2023 ,0, 23)

console.log(myCreatedDate.toDateString());// Mon Jan 23 2023


let newDate =new Date("2023-01-23")

console.log(newDate.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);// 12321354345
console.log(myDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newdate2 =new Date()

console.log(newdate2.getMonth())
console.log(newdate2.getDay())
console.log(newdate2.getFullYear())
console.log(newdate2.getSeconds())

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:""

})


