// singleton
// object.create

// object literals

const mySym=Symbol("key1")

const JsUser ={
    name:"sujit",
    age:21,
    [mySym]:"mykey1",
    email:"suj@gmail.com",
    isLoggedIn:false,
    lastDay:["Monday","Saturday"],
    "fullname":"sujit kumar"

}

console.log(JsUser.email)

console.log(JsUser["email"])

console.log(JsUser["fullname"]);

console.log(typeof JsUser.mySym)// string

console.log(JsUser[mySym])// mykey1 


JsUser.email="sujit@gmail.com"

// Object.freeze(JsUser)

// JsUser.email="skm@gmail.com"
console.log(JsUser);// email change nahi hoga kyo ki freeze kar diya hai

/* 
{
  name: 'sujit',
  age: 21,
  email: 'sujit@gmail.com',
  isLoggedIn: false,
  lastDay: [ 'Monday', 'Saturday' ],
  fullname: 'sujit kumar',
  [Symbol(key1)]: 'mykey1'
}
*/


JsUser.greeting =function(){
    console.log("Hello Users ")
}
console.log(JsUser.greeting);//[ function (anonymous)]

console.log(JsUser.greeting());// Hello Users



JsUser.greetingTwo = function () {
    console.log(`Hello Users ,${this.name}`)
}

console.log(JsUser.greetingTwo())// hello Users , sujit


