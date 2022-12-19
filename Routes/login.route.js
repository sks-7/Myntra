const express = require("express");
const { UserModel } = require("../Models/User.model");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
require('dotenv').config()

loginRouter.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email });

        if (user.length > 0) {
            const hashed_password = user[0].password;
            bcrypt.compare(password, hashed_password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
                    res.send({ message: "Login successfull", token: token });
                }
                else {
                    res.send({ message: "Login failed" });
                }
            });
        } else {
            res.send({ message: "Login failed" });
        }
    } catch (error) {
        res.send("Something went wrong Please try again!");
    }
    // res.send("Welcome to login page");
});

module.exports = { loginRouter };
