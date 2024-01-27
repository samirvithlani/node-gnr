const express = require("express");
const app = express();
const dbConnection = require("./util/Db");
dbConnection();
//db connection

app.use(express.json()); //it will to get data in req.body as json format


const userRoutes = require("./routes/UserRoutes");
app.use("/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
