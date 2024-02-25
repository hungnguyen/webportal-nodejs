import { IsNotEmpty } from "class-validator";

export default class OrderItemRequestDto {
    constructor(
        orderId: string,
        productId: string,
        price: number,
        quantity: number,
        amount: number,
    ){
        this.orderId = orderId;
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;
        this.amount = amount;
    }
    @IsNotEmpty()
    public orderId: string;
    @IsNotEmpty()
    public productId: string;
    public price: number;
    public quantity: number;
    public amount: number;
}