import IPhrase from "./phrases.interface";
import mongoose from "mongoose";

const PhraseSchema = new mongoose.Schema({
    key: {
        type: String,
        require: true
    },
    value: {
        type: String
    },
    languageId: {
        type: String
    },
    isPin: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model<IPhrase & mongoose.Document>('phrase', PhraseSchema);