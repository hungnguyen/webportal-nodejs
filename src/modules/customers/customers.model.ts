import ICustomer from "./customers.interface";
import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    fullName: {
        type: String
    },
    idCard: {
        type: String
    },
    address: {
        type: String
    },
    country: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    status:{
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    lastLoginDate: {
        type: Date,
        default: Date.now
    },
    isOnline: {
        type: Boolean
    },
    city: {
        type: String
    },
    district: {
        type: String
    },
    birthday: {
        type: String
    },
    gender: {
        type: String
    },
    image: {
        type: String
    },
    ip: {
        type: String
    },
    browser: {
        type: String
    },
});

export default mongoose.model<ICustomer & mongoose.Document>('customer', CustomerSchema);