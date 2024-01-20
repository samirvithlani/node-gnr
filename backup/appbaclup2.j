//server creation using express...

// app.get("/user", (req, res) => {
//   console.log("user  api called...");
//   //res.send("USER API CALLED...")
//   res.json({
//     name: "Raj",
//     age: 21,
//   });
// });

var users = [
    {
        id:1,
        name:"Raj",
        age:21
    },
    {
        id:2,
        name:"Rahul",
        age:22
    },
    {
        id:3,
        name:"Ramesh",
        age:23
    },
    {
        id:3,
        name:"Ramesh",
        age:23
    }
]

app.get("/users", (req, res) => {

    res.json({
        data:users,
        message:"Users list fetched successfully",
    })

})

app.get("/user1",(req,res)=>{

    res.status(200).json({
        data:users,
        message:"Users list fetched successfully",
    })
})

//:id is a dynamic parameter / wildcard parameter
// app.get("/user/:id/:name",(req,res)=>{


//     const id = req.params.id
//     console.log(id)

//     console.log(req.params)
//     res.status(200).json({
//         message:"api called....."
//     })
// })


app.get("/user/:id",(req,res)=>{

    const user = users.find((u)=>req.params.id == u.id)
    if(user!=undefined || user!=null){
        res.status(200).json({
            data:user,
            message:"User fetched successfully",
        })
    }
    else{
        res.status(404).json({
            message:"User not found",
        })
    }
        

    // res.status(200).json({
    //     data:user,
    //     message:"User fetched successfully",
    // })


})


// const userModel = require("./models/UserModel");


// app.get("/users",async(req,res)=>{


//     const users = await userModel.find() 
//     res.status(200).json({
//         message:"users list",
//         data:users
//     })


// })
