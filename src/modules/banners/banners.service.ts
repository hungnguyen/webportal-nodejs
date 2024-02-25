import { HttpException } from "@core/exceptions";
import IBanner from "./banners.interface";
import BannerSchema from "./banners.model"
import BannerRequestDto from "./dtos/banner.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "Banner";

class BannerService {
    public modelSchema = BannerSchema;

    public async create(model: BannerRequestDto): Promise<IBanner> {
        const newItem = new BannerSchema({
            image: model.image,
            status: model.status,
            link: model.link,
            name: model.name,
            position: model.position,
            inCategories: model.inCategories,
            orderNumber: model.orderNumber,
            languageId: model.languageId,
            createdBy: model.createdBy,
            updatedBy: model.updatedBy,
            detail: model.detail,
        });
        const item = await newItem.save();
        return item;
    }

    public async update(id: string, model: BannerRequestDto): Promise<IBanner>{
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

    public async getAll(): Promise<IBanner[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<IBanner>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<IBanner>>{
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
        } as IPagination<IBanner>;
    }

    public async remove(id: string): Promise<IBanner>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default BannerService;