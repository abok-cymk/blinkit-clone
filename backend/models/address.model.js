import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    address_line: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    zip_code: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

const addressModel = mongoose.model("addresses", addressSchema);

export default addressModel;