const express = require("express");
const app = express();
const dbConnection = require("./util/Db");
dbConnection();
//db connection

const userModel = require("./models/UserModel");


app.get("/users",async(req,res)=>{


    const users = await userModel.find() 
    res.status(200).json({
        message:"users list",
        data:users
    })


})

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
