const employeeModel = require("../models/EmployeeModel")

const createEmployee = async(req,res)=>{


    try{
        const savedEmployee = await employeeModel.create(req.body)
        res.status(201).json({
            message:"employee Saved successfully",
            data:savedEmployee
        })

    }catch(err){
        res.status(500).json({
            message:"Error",
            data:err
        })

    }

}
const getAllEmployee = async(req,res)=>{

    try{

        const employees = await employeeModel.find();
        res.status(200).json({
            message:"success...",
            data:employees

        })

    }catch(err){

        res.status(500).json({
            message:"Error",
            data:err
        })

    }



}
module.exports = {
    createEmployee,
    getAllEmployee
}