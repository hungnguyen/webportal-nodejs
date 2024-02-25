import IContentType from "./content.types.interface";
import mongoose from "mongoose";

const ContentTypeSchema = new mongoose.Schema({
    code: {
        type: String
    },
    status: {
        type: String
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        require: true
    },
    languageId: {
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
});

export default mongoose.model<IContentType & mongoose.Document>('contentType', ContentTypeSchema);