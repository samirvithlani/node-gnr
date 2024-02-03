const categoryModel = require('../models/ProdCategoryModel');

const createCategory = async (req, res) => {


        try{

            const createdCategory = await categoryModel.create(req.body);
            res.status(201).json({
                message: "Category created successfully",
                data: createdCategory
            })


        }catch(err){

            res.staus(500).json({
                message: "Error in creating category",
            })

        }
}
module.exports = {
    createCategory
}
