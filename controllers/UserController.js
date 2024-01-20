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
    const id  = req.params.uuid // req {params {id }}
    console.log("id....",id)
    console.log("req.params",req.params)

    //const user = await userModel.find({_id:id})
    const user = await userModel.findById(id)
    res.status(200).json({
        message:"success",
        data:user
    })


}

module.exports = {
    getAllUserFromDB,
    getUserByID
}