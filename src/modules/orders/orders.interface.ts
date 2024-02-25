import { IOrderItem } from "@modules/order_items";

export interface IOrder {
    _id: string;
    orderStatus: string;
    promotionCode: string;
    discount: number;
    totalAmount: number;
    fee: number;
    totalNetAmount: number;
    payMethod: string;
    payStatus: string;
    shippingName: string;
    shippingAddress: string;
    shippingPhone: string;
    shippingEmail: string;
    findUs: string;
    orderDate: Date;
    dateCompleted: Date;
    dateUpdate: Date;
    updatedBy: string;
    saleId: string;
    customerId: string;
    specialRequest: string;

    items: IOrderItem[]
}

