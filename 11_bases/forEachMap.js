// const coding =["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values);
// js
// ruby
// java
// python
// cpp
// undefined

// const myNums=[1,3,5,6,7,10]

// let newNums=myNums.filter((num)=>num>4 )

// console.log(newNums);// [ 5, 6, 7, 10 ]

// let newNums = myNums.filter((num) => {
//     return num>4
// })
// console.log(newNums);//[ 5, 6, 7, 10 ]

// const newnum=[]

// newnum.forEach((num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
// })
// console.log(newnum);// [4]

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// let userBooks=books.filter((bk)=>bk.genre==='History')

// userBooks=books.filter((bk)=>{
//     return bk.publish<=2000})

// console.log(userBooks);


const myNums=[1,3,5,6,8,9]

// myNums.map((num)=> num+10)
// myNums.map((num) =>{
//     return  num + 10
// })

// console.log(myNums);//[ 1, 3, 5, 6, 8, 9 ]

// const chai=myNums
//     .map((num)=>num*10)
//     .map((num)=>num+1)
    

// console.log(chai);//  [ 11, 31, 51, 61, 81, 91 ]

const chai = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num)=> num>=40)


console.log(chai);// [ 51, 61, 81, 91 ]



