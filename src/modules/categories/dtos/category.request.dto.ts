import { IsNotEmpty } from "class-validator";

export default class CategoryRequestDto {
    constructor(
        name: string,
        orderNumber: number,
        parentId: string,
        status: string,
        typeCode: string,
        isPopular: boolean,
        image: string,
        displayType: string,
        description: string,
        metaTitle: string,
        metaKey: string,
        metaDescription: string,
        urlName: string,
        link: string,
        icon: string,
        shortDescription: string,
        languageId: string,
        createdBy: string,
        updatedBy: string,
        isOnTop: boolean,
        isOnRight: boolean,
        isOnBottom: boolean,
        isOnLeft: boolean,
        isOnCenter: boolean,
    ){
        this.image = image;
        this.status = status;
        this.link = link;
        this.name = name;
        this.parentId = parentId;
        this.typeCode = typeCode;
        this.orderNumber = orderNumber;
        this.languageId = languageId;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isPopular = isPopular;
        this.displayType = displayType;
        this.description = description;
        this.metaTitle = metaTitle;
        this.metaKey = metaKey;
        this.metaDescription = metaDescription;
        this.urlName = urlName;
        this.icon = icon;
        this.shortDescription = shortDescription;
        this.isOnTop = isOnTop;
        this.isOnRight = isOnRight;
        this.isOnBottom = isOnBottom;
        this.isOnLeft = isOnLeft;
        this.isOnCenter = isOnCenter;
    }
    @IsNotEmpty()
    public name: string;
    public orderNumber: number;
    public parentId: string;
    public status: string;
    public typeCode: string;
    public isPopular: boolean;
    public image: string;
    public displayType: string;
    public description: string;
    public metaTitle: string;
    public metaKey: string;
    public metaDescription: string;
    public urlName: string;
    public link: string;
    public icon: string;
    public shortDescription: string;
    public languageId: string;
    public createdBy: string;
    public updatedBy: string;
    public isOnTop: boolean;
    public isOnRight: boolean;
    public isOnBottom: boolean;
    public isOnLeft: boolean;
    public isOnCenter: boolean;
}