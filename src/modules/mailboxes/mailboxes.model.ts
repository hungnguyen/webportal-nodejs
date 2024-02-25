import IMailBox from "./mailboxes.interface";
import mongoose from "mongoose";

const MailBoxSchema = new mongoose.Schema({
    fromEmail: {
        type: String
    },
    toEmail: {
        type: String
    },
    cc: {
        type: String
    },
    bcc: {
        type: String
    },
    subject: {
        type: String
    },
    body: {
        type: String
    },
    orderId: {
        type: Number
    },
    languageId: {
        type: Number
    },
    DateCreated: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<IMailBox & mongoose.Document>('mailBox', MailBoxSchema);