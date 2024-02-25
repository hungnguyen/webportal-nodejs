import { HttpException } from "@core/exceptions";
import IContent from "./contents.interface";
import ContentSchema from "./contents.model"
import ContentRequestDto from "./dtos/content.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "Content";

class ContentService {
    public modelSchema = ContentSchema;

    public async create(model: ContentRequestDto): Promise<IContent> {
        const newItem = new ContentSchema({
            image: model.image,
            urlName: model.urlName,
            status: model.status,
            typeCode: model.typeCode,
            name: model.name,
            inCategories: model.inCategories,
            orderNumber: model.orderNumber,
            relateContent: model.relateContent,
            isFeature: model.isFeature,
            isHot: model.isHot,
            languageId: model.text1,
            createdBy: model.createdBy,
            updatedBy: model.updatedBy,

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

    public async update(id: string, model: ContentRequestDto): Promise<IContent>{
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

    public async getAll(): Promise<IContent[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<IContent>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<IContent>>{
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
        } as IPagination<IContent>;
    }

    public async remove(id: string): Promise<IContent>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default ContentService;