const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Config/db");
const { signupRouter } = require("./Routes/signup.route");
const { loginRouter } = require("./Routes/login.route");
const { productController } = require("./Routes/Product.router");
const { adminController } = require("./Routes/admin.router");
const { cartController } = require("./Routes/cart.route");

const port = process.env.PORT || 5001;
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome my server");
});

app.use("/admin", adminController);
app.use("/product", productController);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/cart", cartController);

app.listen(port, async () => {
	try {
		await connection;
		console.log("Connected to Database");
	} catch (error) {
		console.log(error);
		console.log("Not connected");
	}
	console.log(`Listning at PORT ${port}`);
});
