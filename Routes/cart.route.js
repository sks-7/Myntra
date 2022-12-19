const { Router } = require("express");
const { authentication } = require("../Middlewares/authentication.middleware");

const cartController = Router();
const { CartModel } = require("../Models/Cart.model");

//Get All Cart Data

cartController.get("/", authentication, async (req, res) => {
	const payload = req.body.user;
	const CartItems = await CartModel.find({ user_id: payload });
	console.log(CartItems);
	res.send(CartItems);
});

// ADDING ITEMS TO CART WITH REFERENCE TO USER_ID
cartController.post("/", authentication, async (req, res) => {
	const {
		Brand,
		Price,
		Name,
		category,
		Image,
		rating,
		discount,
		OlderPrice,
		quantity,
		status,
		size,
		qty,
		user_id,
	} = req.body;

	const AlreadyPresent = await CartModel.find({
		user_id: user,
		Name: Name,
	});
	if (AlreadyPresent.length > 0) {
		res.send("Product Already In The Cart");
	} else {
		const newCartItem = new CartModel({
			Brand: Brand,
			Price: Price,
			Name: Name,
			category: category,
			Image: Image,
			rating: rating,
			discount: discount,
			OlderPrice: OlderPrice,
			quantity: quantity,
			status: status,
			size: size,
			qty: qty,
			user_id: user_id,
		});
		await newCartItem.save();
		console.log(newCartItem);
		res.send("Added To Bag Successfully");
	}
});

// DELETE SINGLE ITEMS WITH RESPECT USER_ID IF THE USRE REMOVES IT FROM CART

cartController.delete("/:deleteid", authentication, async (req, res) => {
	const payload = req.params.deleteid;
	const payload1 = req.body.user;
	const mydelete = await CartModel.deleteMany({
		_id: payload,
		user_id: payload1,
	});
	res.send("Item Deleted From Cart");
});

module.exports = { cartController };
