const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
	Brand: { type: String },
	Price: { type: Number },
	Name: { type: String },
	category: { type: String },
	Image: { type: String },
	rating: { type: Number },
	discount: { type: Number },
	OlderPrice: { type: Number },
	quantity: { type: Number },
	status: { type: Boolean },
	size: { type: String },
	qty: { type: String },
	user_id: { type: String },
});

const CartModel = mongoose.model("cartitem", CartSchema);

module.exports = { CartModel };
