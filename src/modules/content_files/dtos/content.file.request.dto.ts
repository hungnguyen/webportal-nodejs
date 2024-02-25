import { IsNotEmpty } from "class-validator";

export default class ContentFileRequestDto {
    constructor(
        name: string,
        detail: string,
        fileName: string,
        link: string,
        orderNumber: string,
        status: string,
    ){
        this.name = name;
        this.detail = detail;
        this.fileName = fileName;
        this.link = link;
        this.orderNumber = orderNumber;
        this.status = status;
    }
    @IsNotEmpty()
    public name: string;
    public detail: string;
    public fileName: string;
    public link: string;
    public orderNumber: string;
    public status: string;
}