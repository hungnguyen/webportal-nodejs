export default interface IMailBox {
    _id: string;
    fromEmail: string;
    toEmail: string;
    cc: string;
    bcc: string;
    subject: string;
    body: string;
    orderId: number;
    languageId: string;
    dateCreated: Date;
}