// array


const myArr =[0,2,4,5,6];// object hai yah ak

const myHeros =["shaktiman","naagraj"]


const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);//0


myArr.push(7)
console.log(myArr);// '0' 2 34 5 6 7

myArr.pop()// 7 remove ho jayega

myArr.unshift(0)//0 ak aur add ho jayega begin me

myArr.shift()//0 begin ka remove kar dega


// slice , splice

console.log("A",myArr);

const myn1 =myArr.slice(1,3)

console.log(myn1);// A [0,1,2,3,45,]
console.log("B",myArr);// B [2,3,45,5] ak ex only hai



const arrayinside =[1,2,3 ,[3,4,5,[5,6]]]

const realarrays= arrayinside.flat(Infinity)

console.log(realarrays);// [1,2,3,3,4,5,5,6] ak hi array me sab aa jayega 


console.log(Array.isArray("sujit"));//false

console.log(Array.from("Sujit"));// ["S",'u','j','i','t']

let score1=234
let score2 = 345
let score3 = 346
let score4 = 347

console.log(Array.of(score1,score2,score3,score4))//[234,345,346,347
