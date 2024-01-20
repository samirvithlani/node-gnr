const userModel = require('../models/UserModel');

const getAllUserFromDB = async(req,res)=>{

        const users = await userModel.find()

        res.status(200).json({
            message:"success",
            data:users
        })



}

module.exports = {
    getAllUserFromDB
}