import { HttpException } from "@core/exceptions";
import IPhrase from "./phrases.interface";
import PhraseSchema from "./phrases.model"
import PhraseRequestDto from "./dtos/phrase.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "Phrase";

class PhraseService {
    public modelSchema = PhraseSchema;

    public async create(model: PhraseRequestDto): Promise<IPhrase> {
        const newItem = new PhraseSchema({
            key: model.key,
            isPin: model.isPin,
            value: model.value,
            languageId: model.languageId
        });
        const item = await newItem.save();
        return item;
    }

    public async update(id: string, model: PhraseRequestDto): Promise<IPhrase>{
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

    public async getAll(): Promise<IPhrase[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<IPhrase>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<IPhrase>>{
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
        } as IPagination<IPhrase>;
    }

    public async remove(id: string): Promise<IPhrase>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default PhraseService;