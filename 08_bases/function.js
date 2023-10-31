 

 function sayMyName(){
     console.log("sk");
     console.log("sk");
     console.log("sk");
     console.log("sk");
     console.log("sk");
 }

//  sayMyName()

// function addTwoNumbers(num1,num2){// parametar
//     console.log(num1 + num2);
// } console.log("Result",result);// undefined



function addTwoNumbers(num1, num2) {// parametar
    // let result=num1+num2;
    return num1 + num2;
}
   const result=addTwoNumbers(3,4)
//    console.log("Result",result);// 7


function loginUserMessage(username){

    if(username===undefined){ // ! username 
        console.log("Please enter a username")
        return 
    }

    return `${username} just logged in`// value na pass karne par undefind aayega

}

console.log(loginUserMessage("sujit kumar"));// sujit kumar just logged in



function calculateCartPrice(...num1){// rest oprater
    return num1;
}

console.log(calculateCartPrice(200,400,500));//[200,400,500]

const user ={
    username:"sujit",
    price:199
}

function handObject(anyobject){
    console.log(`Username is ${anyobject.username} and price ${anyobject.price}`);
}

handObject(user)// Username is sujit and price 199

handObject({
    username:"sk",
    price:123
})// aise bhi value pass kar sakte hai


const myArray =[200,500,400]

function returnSecval(grtArray){
    return grtArray[1]
}
console.log(returnSecval(myArray));//500





//++++++++++++++++++++++++++++++++++++++++++++++++



function one(){

const username ="sujit"

function two(){
    const website ="youtube"
    console.log(username);
}
// console.log(website);// not excess bro 

two()
}
one()


if(true){
    const username="skm"
    if(username==="skm"){
        const website="sp"
        console.log(username+website);// skmsp
    }
    // console.log(website);// error aayega
}
// console.log((username));// error aayega 


//++++++++++++++++++ interesting ++++++++++++++++

console.log(addone(5));//6

function addone(num){
    return num+1;

}
// addone(5)



// addtwo(5)// error aayega
const addtwo=function(num){
    return num+2
}
// addtwo(5)