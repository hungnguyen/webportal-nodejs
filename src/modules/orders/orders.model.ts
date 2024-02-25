import { PayStatus } from "@modules/enums/pay.status";
import { IOrder } from "./orders.interface";
import mongoose from "mongoose";
import { PayMethod } from "@modules/enums/pay.method";
import { OrderStatus } from "@modules/enums/order.status";

const OrderItemSchema = new mongoose.Schema({
    orderId: {
        type: String
    },
    productId: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    amount: {
        type: Number
    },
});

const OrderSchema = new mongoose.Schema({
    orderStatus: {
        type: String,
        default: OrderStatus.NewOrder
    },
    promotionCode: {
        type: String
    },
    discount: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
    fee: {
        type: Number
    },
    totalNetAmount: {
        type: Number
    },
    payMethod: {
        type: String,
        default: PayMethod.Cash
    },
    payStatus: {
        type: String,
        default: PayStatus.UnPaid
    },
    shippingName: {
        type: String
    },
    shippingAddress: {
        type: String
    },
    shippingPhone: {
        type: String
    },
    shippingEmail: {
        type: String
    },
    findUs: {
        type: String
    },
    updatedBy: {
        type: String
    },
    saleId: {
        type: String
    },
    customerId: {
        type: String
    },
    specialRequest: {
        type: String
    },
    
    orderDate: {
        type: Date,
        default: Date.now
    },
    dateCompleted: {
        type: Date,
    },
    dateUpdate: {
        type: Date,
        default: Date.now
    },
    
    items: [OrderItemSchema]
});

export default mongoose.model<IOrder & mongoose.Document>('order', OrderSchema);