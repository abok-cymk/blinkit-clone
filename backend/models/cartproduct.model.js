import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "products",
    },
    quantity: {
      type: Number,
      default: null,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const cartProductModel = mongoose.model("cartProducts", cartProductSchema);

export default cartProductModel;
