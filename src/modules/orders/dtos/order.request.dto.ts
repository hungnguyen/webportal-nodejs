import { IsNotEmpty } from "class-validator";

export default class OrderRequestDto {
    constructor(
        orderStatus: string,
        promotionCode: string,
        discount: number,
        totalAmount: number,
        fee: number,
        totalNetAmount: number,
        payMethod: string,
        payStatus: string,
        shippingName: string,
        shippingAddress: string,
        shippingPhone: string,
        shippingEmail: string,
        findUs: string,
        dateCompleted: Date,
        dateUpdate: Date,
        updatedBy: string,
        saleId: string,
        customerId: string,
        specialRequest: string,
    ){
        this.orderStatus = orderStatus;
        this.promotionCode = promotionCode;
        this.discount = discount;
        this.totalAmount = totalAmount;
        this.fee = fee;
        this.totalNetAmount = totalNetAmount;
        this.payMethod = payMethod;
        this.payStatus = payStatus;
        this.shippingName = shippingName;
        this.shippingAddress = shippingAddress;
        this.shippingPhone = shippingPhone;
        this.shippingEmail = shippingEmail;
        this.findUs = findUs;
        this.dateCompleted = dateCompleted;
        this.dateUpdate = dateUpdate;
        this.updatedBy = updatedBy;
        this.saleId = saleId;
        this.customerId = customerId;
        this.specialRequest = specialRequest;
    }
    public orderStatus: string;
    public promotionCode: string;
    public discount: number;
    public totalAmount: number;
    public fee: number;
    public totalNetAmount: number;
    public payMethod: string;
    public payStatus: string;
    public shippingName: string;
    public shippingAddress: string;
    public shippingPhone: string;
    public shippingEmail: string;
    public findUs: string;
    public dateCompleted: Date;
    public dateUpdate: Date;
    public updatedBy: string;
    public saleId: string;
    public customerId: string;
    public specialRequest: string;
}