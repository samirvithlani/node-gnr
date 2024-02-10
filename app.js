const express = require("express");
const app = express();
const dbConnection = require("./util/Db");
dbConnection();
//db connection

app.use(express.json()); //it will to get data in req.body as json format


const userRoutes = require("./routes/UserRoutes");
const prodCategoryRoutes = require("./routes/ProdCategoryRoutes");
const productRoutes = require("./routes/ProductRoutes");
const employeeRoutes = require("./routes/EmployeeRoutes")


app.use("/users", userRoutes);
app.use("/category", prodCategoryRoutes);
app.use("/product", productRoutes);
app.use("/employee",employeeRoutes)

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
