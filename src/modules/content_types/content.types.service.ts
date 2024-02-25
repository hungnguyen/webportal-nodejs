import { HttpException } from "@core/exceptions";
import IContentType from "./content.types.interface";
import ContentTypeSchema from "./content.types.model"
import ContentTypeRequestDto from "./dtos/content.type.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "ContentType";

class ContentTypeService {
    public modelSchema = ContentTypeSchema;

    public async create(model: ContentTypeRequestDto): Promise<IContentType> {
        const newItem = new ContentTypeSchema({
            code: model.code,
            status: model.status,
            isPublic: model.isPublic,
            name: model.name,
            languageId: model.languageId,
            
            text1: model.text1,
            text2: model.text2,
            text3: model.text3,
            text4: model.text4,
            text5: model.text5,
            text6: model.text6,
            text7: model.text7,
            text8: model.text8,
            text9: model.text9,
            text10: model.text10,
            text11: model.text11,
            text12: model.text12,
            text13: model.text13,
            text14: model.text14,
            text15: model.text15,
            text16: model.text16,
            text17: model.text17,
            text18: model.text18,
            text19: model.text19,
            text20: model.text20,

            desc1: model.desc1,
            desc2: model.desc2,
            desc3: model.desc3,
            desc4: model.desc4,
            desc5: model.desc5,
            desc6: model.desc6,
            desc7: model.desc7,
            desc8: model.desc8,
            desc9: model.desc9,
            desc10: model.desc10,
        });
        const item = await newItem.save();
        return item;
    }

    public async update(id: string, model: ContentTypeRequestDto): Promise<IContentType>{
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

    public async getAll(): Promise<IContentType[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<IContentType>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<IContentType>>{
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
        } as IPagination<IContentType>;
    }

    public async remove(id: string): Promise<IContentType>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default ContentTypeService;