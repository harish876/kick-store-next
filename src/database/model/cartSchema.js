import { Schema, model, models } from "mongoose";

const cartSchema = new Schema({
  key: String,
  name: String,
  color: String,
  primary: String,
  watermark: String,
  heading: String,
  subHeading: String,
  description: String,
  image: String,
  price: Number,
  prevPrice: Number,
  basePrice: Number,
  discount: Number,
  quantity: Number,
  angles: Array,
  size: Number,
  user: Object,
  expires: String,
  isDiscount: Boolean,
  customModel: Object,
});

const CartCollection =
  models.cart_collection || model("cart_collection", cartSchema);

export default CartCollection;
