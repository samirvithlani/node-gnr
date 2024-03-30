const cloundinary = require('cloudinary').v2;


const uploadFile = async(file)=>{

cloundinary.config({
    cloud_name:"dpjoxqisl",
    api_key:"add your",
    api_secret:"add your"
})

    const result = await cloundinary.uploader.upload(file.path);
    console.log(result);
    return result;

}
module.exports = {
    uploadFile
}