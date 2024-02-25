import IBanner from "./banners.interface";
import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
    image: {
        type: String
    },
    status: {
        type: String
    },
    link: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    position: {
        type: String
    },
    inCategories: {
        type: [String]
    },
    orderNumber: {
        type: Number
    },
    languageId: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String
    },
    detail: {
        type: String
    }
});

export default mongoose.model<IBanner & mongoose.Document>('banner', BannerSchema);