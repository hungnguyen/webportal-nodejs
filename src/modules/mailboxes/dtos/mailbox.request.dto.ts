import { IsNotEmpty } from "class-validator";

export default class MailBoxRequestDto {
    constructor(
        fromEmail: string,
        toEmail: string,
        cc: string,
        bcc: string,
        subject: string,
        body: string,
        orderId: number,
        languageId: string,
    ){
        this.fromEmail = fromEmail;
        this.toEmail = toEmail;
        this.cc = cc;
        this.bcc = bcc;
        this.subject = subject;
        this.body = body;
        this.orderId = orderId;
        this.languageId = languageId;
    }
    public fromEmail: string;
    public toEmail: string;
    public cc: string;
    public bcc: string;
    @IsNotEmpty()
    public subject: string;
    public body: string;
    public orderId: number;
    public languageId: string;
}