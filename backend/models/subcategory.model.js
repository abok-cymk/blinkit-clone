import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    category: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "categories",
        }
    ],
}, {
    timestamps: true
});

const subCategoryModel = mongoose.model("subCategories", subCategorySchema);

export default subCategoryModel;