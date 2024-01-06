//require("./student")
//const studentName = require("./student")
// const student = require("./student")
// const {studentName, studentAge} = require("./student")
// console.log("hello")
// //console.log(studentName)
// console.log(student.studentName)
// console.log(student.studentAge)
// console.log(studentName)
// console.log(studentAge)

const users = require("./users")
// console.log(users)
// users()

users.userData()

var ans = users.add(2,3)
console.log(ans)

console.log(users.add(20,30))

console.log(users.getUserById(1))