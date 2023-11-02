const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc ${acc} and currval ${currval}`);
//     return acc+currval

// },0)

// console.log(myTotal);//6

// acc 0 and currval 1
// acc 1 and currval 2
// acc 3 and currval 3
// 6



const myTotal1=myNums.reduce((acc,currval)=> acc+currval,0)

console.log(myTotal1);//6

const shoppingCard= [
    {
        itemsName:"js course",
        price:299
    },
    {
        itemsName: "py course",
        price: 999
    },
    {
        itemsName: "mobile course",
        price: 5999
    },
]
const priec=shoppingCard.reduce((acc,item)=>(acc+item.price),0)

console.log(priec);//7297

