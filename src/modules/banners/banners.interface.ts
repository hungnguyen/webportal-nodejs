export default interface IBanner {
    _id: string;
    image: string;
    status: string;
    link: string;
    name: string;
    position: string;
    inCategories: string[];
    orderNumber: number;
    languageId: string;
    dateCreated: Date;
    createdBy: string;
    dateUpdated: Date;
    updatedBy: string;
    detail: string;
}