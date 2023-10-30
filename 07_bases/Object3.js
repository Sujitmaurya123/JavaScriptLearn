const course ={
    coursename:"Js in Learn",
    price:"234",
    courseInstructor:"sujit"
}

// course.courseInstructor

// const {courseInstructor}=course

// console.log(courseInstructor)//sujit

const { courseInstructor: instr } = course
console.log(instr);// sujit

// destruster kiya ja raha hai object ka

// const navbar = ({company})=> {

// }
// const  navbar=(props.company)=>{

// }
// navbar(company="sujit")


// json format   API 

// {
// "name":"sujit",
// "coursename":"js in Learn",
// "price":"345"
// }]

// array form me API json
// [
//     {
        // id:"s1"
//     },
//     {

//     }
// ]
