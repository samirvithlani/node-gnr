const userModel = require('../models/UserModel');

const getAllUserFromDB = async(req,res)=>{

        const users = await userModel.find()

        res.status(200).json({
            message:"success",
            data:users
        })

}


const getUserByID =  async(req,res)=>{

    //params
    const id  = req.params.id // req {params {id }}
    console.log("id....",id)
    console.log("req.params",req.params)

    //const user = await userModel.find({_id:id}) //array
    const user = await userModel.findById(id)
    res.status(200).json({
        message:"success",
        data:user
    })


}



const addUser = async(req,res)=>{

        //req.body

       // const user = req.body
        // console.log("user",user)

        // res.status(200).json({
        //     message:"success",
        // })

        const savedUser = await userModel.create(req.body) //whatever data coming from cline tin req.body objecy it will save in db

        res.status(201).json({
            message:"success",
            data:savedUser
        })

}

module.exports = {
    getAllUserFromDB,
    getUserByID,
    addUser
}