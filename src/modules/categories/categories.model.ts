import { Status } from "@modules/enums/status";
import ICategory from "./categories.interface";
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    orderNumber: {
        type: Number,
        default: 1
    },
    parentId: {
        type: Number
    },
    status: {
        type: String,
        default: Status.Active
    },
    typeCode: {
        type: String
    },
    isPopular:{
        type: Boolean,
        default: false
    },
    image: {
        type: String
    },
    displayType: {
        type: String
    },
    description: {
        type: String
    },
    metaTitle: {
        type: String
    },
    metaKey: {
        type: String
    },
    metaDescription: {
        type: String
    },
    urlName: {
        type: String
    },
    link: {
        type: String
    },
    icon: {
        type: String
    },
    shortDescription: {
        type: String
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
    isOnTop: {
        type: Boolean,
        default: false
    },
    isOnRight: {
        type: Boolean,
        default: false
    },
    isOnBottom: {
        type: Boolean,
        default: false
    },
    isOnLeft: {
        type: Boolean,
        default: false
    },
    isOnCenter: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model<ICategory & mongoose.Document>('category', CategorySchema);