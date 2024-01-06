const express = require('express');
const app = express();




//server creation using express...

const PORT= 3000

app.listen(PORT,()=>{
    console.log("server started on port "+ PORT)
})