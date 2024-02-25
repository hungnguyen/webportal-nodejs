import ILanguage from "./languages.interface";
import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String
    },
    isDefault: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model<ILanguage & mongoose.Document>('language', LanguageSchema);