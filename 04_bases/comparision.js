console.log(2>1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);// true

console.log(null >0);//false
console.log(null == 0);//false
console.log(null >= 0);//true


console.log(undefined > 0);//false  and == or >= sab me false hai

// === 

console.log("2"==2);// yes true 
console.log("2" === 2);// not same datatype so false 





//++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) copy milta hai , Heap (Non -primitive ) refence milata hai 



let myYoutubename ="skmp"

let anothername =myYoutubename

console.log(anothername)



let user ={
    email :"user@gmail.com",
    name:"sujit"
}
let userTwo=user

userTwo.email="skm@gmail.com";

console.log(user.email);// skm@gmail.com
console.log(userTwo.email);// skm@gmail.com

