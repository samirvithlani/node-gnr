const express = require("express");
const app = express();

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
    }
]

app.get("/users", (req, res) => {

    res.json({
        data:users,
        message:"Users list fetched successfully",
    })

})




const PORT = 3000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
