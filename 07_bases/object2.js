// const tinderUser = new Object() // singleton
const tinderUser3={} // non singleton


tinderUser3.id="123abc";
tinderUser3.name="Sammy"
tinderUser3.isLoggedIn=false

console.log(tinderUser3)// { id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sujit",
            lastname:"Kumar"
        }
    }
}
console.log(regularUser.fullname)//{ userfullname: { firstname: 'sujit', lastname: 'Kumar' } }

console.log(regularUser.fullname.userfullname.firstname)// sujit



const obj1 ={
    1:"a",
    2:'b'
}
const obj2 = {
    3: "a",
    4: 'b'
}

// const obj3={obj1,obj2}
// console.log(obj3);

// const obj3 =Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1, obj2)

// const obj3 ={...obj1,...obj2}
console.log(obj3);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



const users =[
    {
        id:1,
        email:"sujit.com"
    },
    {
        id: 2,
        email: "sujit.com"
    },
    {
        id: 3,
        email: "sujit.com"
    },

]

users[1].email

console.log(tinderUser3);

console.log(Object.keys(tinderUser3));// ['id' ,'name','isLoggedIn']

console.log(Object.values(tinderUser3));// ['123abc','Sammy','false']

console.log(Object.entries(tinderUser3));// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser3.hasOwnProperty('isLoggedIn'));// true



