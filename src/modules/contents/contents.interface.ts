import { IContentFile } from "@modules/content_files";

export default interface IContent {
    _id: string;
    image: string;
    urlName: string;
    status: string;
    viewCount: number;
    likeCount: number;
    typeCode: string;
    name: string;
    inCategories: string[];
    orderNumber: number;
    relateProduct: string[];
    isFeature: boolean;
    isHot: boolean;

    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
    text7: string;
    text8: string;
    text9: string;
    text10: string;
    text11: string;
    text12: string;
    text13: string;
    text14: string;
    text15: string;
    text16: string;
    text17: string;
    text18: string;
    text19: string;
    text20: string;

    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
    desc5: string;
    desc6: string;
    desc7: string;
    desc8: string;
    desc9: string;
    desc10: string;

    languageId: string;
    dateCreated: Date;
    createdBy: string;
    dateUpdated: Date;
    updatedBy: string;

    files: [IContentFile]
}

