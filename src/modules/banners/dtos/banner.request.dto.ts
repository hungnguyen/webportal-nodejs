import { IsNotEmpty } from "class-validator";

export default class BannerRequestDto {
    constructor(
        image: string,
        status: string,
        link: string,
        name: string,
        position: string,
        inCategories: string[],
        orderNumber: number,
        languageId: string,
        createdBy: string,
        updatedBy: string,
        detail: string,
    ){
        this.image = image;
        this.status = status;
        this.link = link;
        this.name = name;
        this.position = position;
        this.inCategories = inCategories;
        this.orderNumber = orderNumber;
        this.languageId = languageId;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.detail = detail;
    }
    public image: string;
    public status: string;
    public link: string;

    @IsNotEmpty()
    public name: string;
    public position: string;
    public inCategories: string[];
    public orderNumber: number;
    public languageId: string;
    public createdBy: string;
    public updatedBy: string;
    public detail: string;
}