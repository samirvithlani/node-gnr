const userData = ()=>{
    console.log("hello from users.js")
}
const add = (a,b)=>{

    return a+b
}

const users = [
    {
        id:1,
        name:"john",
        age:27
    },
    {
        id:22,
        name:"jane",
        age:24
    }
]


const getUserById =(id)=>{

    return users.find((user)=>user.id===id)
}

module.exports = {userData,add,getUserById}