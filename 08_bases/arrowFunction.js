const user ={
    username:"sujit",
    price:345,

    welcomemessage:function () {
        console.log(`${this.username} welcome `);
    }
}

user.welcomemessage()// sujit welcome

user.username="spk";
user.welcomemessage()// spk welcome

// console.log(this)// {}

// function chai(){
//     let username="sujit"
//     console.log(this.username);//undefined 
// }
// chai()// undefined


// const chai =function(){
//     let username = "sujit"
//          console.log(this.username);//undefined
// }
// chai()


const chai =  ()=> {
    let username = "sujit"
    console.log(this.username);//undefined
    console.log(this);// {}
}
chai()// undefined 



// const addTwo =(num1,num2)=>{
//   return num1 +num2;
// }
// console.log(addTwo(4, 5));// 9

// const addTwo = (num1, num2) =>  num1 + num2;

const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(4, 5));// 9

const addTwo34 = (num1, num2) => ({username:"sujit"});




