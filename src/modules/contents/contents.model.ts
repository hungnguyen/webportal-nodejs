import { Status } from "@modules/enums/status";
import IContent from "./contents.interface";
import mongoose from "mongoose";

const ContentFileSchema = new mongoose.Schema({
    name:{
        type: String
    },
    detail:{
        type: String
    },
    fileName:{
        type: String,
        require: true
    },
    link:{
        type: String
    },
    orderNumber:{
        type: Number
    },
    status:{
        type: String
    },
});

const ContentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    status: {
        type: String,
        default: Status.Active
    },
    inCategories: {
        type: [String]
    },
    relateContent: {
        type: [String]
    },
    orderNumber: {
        type: Number,
        default: 1
    },
    viewCount: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    languageId: {
        type: String
    },
    urlName: {
        type: String
    },
    typeCode: {
        type: String
    },
    isHot: {
        type: Boolean,
        default: false
    },
    isFeature: {
        type: Boolean,
        default: false
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
    text1: {
        type: String
    },
    text2: {
        type: String
    },
    text3: {
        type: String
    },
    text4: {
        type: String
    },
    text5: {
        type: String
    },
    text6: {
        type: String
    },
    text7: {
        type: String
    },
    text8: {
        type: String
    },
    text9: {
        type: String
    },
    text10: {
        type: String
    },
    text11: {
        type: String
    },
    text12: {
        type: String
    },
    text13: {
        type: String
    },
    text14: {
        type: String
    },
    text15: {
        type: String
    },
    text16: {
        type: String
    },
    text17: {
        type: String
    },
    text18: {
        type: String
    },
    text19: {
        type: String
    },
    text20: {
        type: String
    },

    desc1: {
        type: String
    },
    desc2: {
        type: String
    },
    desc3: {
        type: String
    },
    desc4: {
        type: String
    },
    desc5: {
        type: String
    },
    desc6: {
        type: String
    },
    desc7: {
        type: String
    },
    desc8: {
        type: String
    },
    desc9: {
        type: String
    },
    desc10: {
        type: String
    },

    files: [ContentFileSchema]
});

export default mongoose.model<IContent & mongoose.Document>('content', ContentSchema);