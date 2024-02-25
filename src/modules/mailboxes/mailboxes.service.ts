import { HttpException } from "@core/exceptions";
import IMailBox from "./mailboxes.interface";
import MailBoxSchema from "./mailboxes.model"
import MailBoxRequestDto from "./dtos/mailbox.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "MailBox";

class MailBoxService {
    public modelSchema = MailBoxSchema;

    public async create(model: MailBoxRequestDto): Promise<IMailBox> {
        const newItem = new MailBoxSchema({
            fromEmail: model.fromEmail,
            toEmail: model.toEmail,
            cc: model.cc,
            bcc: model.bcc,
            subject: model.subject,
            body: model.body,
            orderId: model.orderId,
            languageId: model.languageId,
        });
        const item = await newItem.save();
        return item;
    }

    public async update(id: string, model: MailBoxRequestDto): Promise<IMailBox>{
        const updateId = await this.modelSchema.findByIdAndUpdate(
            id,
            {
                ...model
            },
            {
                new: true
            }
        ).exec();
        if(!updateId) throw new HttpException(400, `${modelName} is not found`);

        return updateId;
    }

    public async getAll(): Promise<IMailBox[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<IMailBox>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<IMailBox>>{
        const pageSize: number = Number(process.env.PAGE_SIZE || 10);

        let query = {};
        if(keyword){
            query = {
                $or: [{text: keyword}]
            };
        }

        const items = await this.modelSchema.find(query)
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .exec();

        const rowCount = await this.modelSchema.find(query).countDocuments().exec();

        return {
            total: rowCount,
            page,
            pageSize,
            items
        } as IPagination<IMailBox>;
    }

    public async remove(id: string): Promise<IMailBox>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default MailBoxService;