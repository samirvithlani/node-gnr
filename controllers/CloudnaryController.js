const cloundinary = require('cloudinary').v2;


const uploadFile = async(file)=>{

cloundinary.config({
    cloud_name:"dpjoxqisl",
    api_key:"292199526794599",
    api_secret:"KKZHWhEwjA1Q0zUx4gVfcsvcVRY"
})

    const result = await cloundinary.uploader.upload(file.path);
    console.log(result);
    return result;

}
module.exports = {
    uploadFile
}