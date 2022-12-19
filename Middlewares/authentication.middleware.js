const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.json({ msg: "Please login again" });
	}
	const token = req.headers?.authorization?.split(" ")[1];
	if (token) {
		try {
			var decode = jwt.verify(token, process.env.SECRET_KEY);
			req.body.userId = decode.userId;
			next();
		} catch (error) {
			res.send({ msg: "Please login again" });
		}
	} else {
		return res.send({ msg: "Please login first" });
	}
};

module.exports = { authentication };
