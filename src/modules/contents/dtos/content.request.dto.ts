import { IsNotEmpty } from "class-validator";

export default class ContentRequestDto {
    constructor(
        image: string,
        urlName: string,
        status: string,
        viewCount: number,
        likeCount: number,
        typeCode: string,
        name: string,
        inCategories: string[],
        orderNumber: number,
        relateContent: string[],
        isFeature: boolean,
        isHot: boolean,

        text1: string,
        text2: string,
        text3: string,
        text4: string,
        text5: string,
        text6: string,
        text7: string,
        text8: string,
        text9: string,
        text10: string,
        text11: string,
        text12: string,
        text13: string,
        text14: string,
        text15: string,
        text16: string,
        text17: string,
        text18: string,
        text19: string,
        text20: string,

        desc1: string,
        desc2: string,
        desc3: string,
        desc4: string,
        desc5: string,
        desc6: string,
        desc7: string,
        desc8: string,
        desc9: string,
        desc10: string,

        languageId: string,
        createdBy: string,
        updatedBy: string,
    ){
        this.image = image;
        this.status = status;
        this.name = name;
        this.urlName = urlName;
        this.viewCount = viewCount;
        this.likeCount = likeCount;
        this.relateContent = relateContent;
        this.typeCode = typeCode;
        this.isFeature = isFeature;
        this.isHot = isHot;

        this.text1 = text1;
        this.text2 = text2;
        this.text3 = text3;
        this.text4 = text4;
        this.text5 = text5;
        this.text6 = text6;
        this.text7 = text7;
        this.text8 = text8;
        this.text9 = text9;
        this.text10 = text10;
        this.text11 = text11;
        this.text12 = text12;
        this.text13 = text13;
        this.text14 = text14;
        this.text15 = text15;
        this.text16 = text16;
        this.text17 = text17;
        this.text18 = text18;
        this.text19 = text19;
        this.text20 = text20;

        this.desc1 = desc1;
        this.desc2 = desc2;
        this.desc3 = desc3;
        this.desc4 = desc4;
        this.desc5 = desc5;
        this.desc6 = desc6;
        this.desc7 = desc7;
        this.desc8 = desc8;
        this.desc9 = desc9;
        this.desc10 = desc10;

        this.inCategories = inCategories;
        this.orderNumber = orderNumber;
        this.languageId = languageId;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
    }
    public image: string;
    public urlName: string;
    public status: string;
    public viewCount: number;
    public likeCount: number;
    public typeCode: string;

    @IsNotEmpty()
    public name: string;
    public inCategories: string[];
    public orderNumber: number;
    public relateContent: string[];
    public isFeature: boolean;
    public isHot: boolean;

    public text1: string;
    public text2: string;
    public text3: string;
    public text4: string;
    public text5: string;
    public text6: string;
    public text7: string;
    public text8: string;
    public text9: string;
    public text10: string;
    public text11: string;
    public text12: string;
    public text13: string;
    public text14: string;
    public text15: string;
    public text16: string;
    public text17: string;
    public text18: string;
    public text19: string;
    public text20: string;

    public desc1: string;
    public desc2: string;
    public desc3: string;
    public desc4: string;
    public desc5: string;
    public desc6: string;
    public desc7: string;
    public desc8: string;
    public desc9: string;
    public desc10: string;

    public languageId: string;
    public createdBy: string;
    public updatedBy: string;
}