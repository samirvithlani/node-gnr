const mongoose = require('mongoose');

const dbConnection = async () => {

    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/node_gnr_club")
    console.log("DB Connected Successfully...")
    return connection

}
module.exports = dbConnection