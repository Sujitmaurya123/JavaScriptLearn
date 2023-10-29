const score =400

const balance =new Number(100)

console.log(balance);//100

console.log(balance.toString())// string ho jayega 100

console.log(balance.toFixed(2));// 100.00


const flota =123.8765

console.log(flota.toPrecision(3));// 124




//++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math);// object hai yah 

console.log(Math.round(5.675));

console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4

console.log(Math.random()*10+1);//2.344764542765

console.log(Math.floor(Math.random()*10)+1);



const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1))+min) // 10 se upar aayega 
