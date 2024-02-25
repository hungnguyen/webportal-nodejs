import { HttpException } from "@core/exceptions";
import ICategory from "./categories.interface";
import CategorySchema from "./categories.model"
import CategoryRequestDto from "./dtos/category.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "Category";

class CategoryService {
    public modelSchema = CategorySchema;

    public async create(model: CategoryRequestDto): Promise<ICategory> {
        const newItem = new CategorySchema({
            name: model.name,
            orderNumber: model.orderNumber,
            parentId: model.parentId,
            status: model.status,
            typeCode: model.typeCode,
            isPopular: model.isPopular,
            image: model.image,
            displayType: model.displayType,
            description: model.description,
            metaTitle: model.metaTitle,
            metaKey: model.metaKey,
            metaDescription: model.metaDescription,
            urlName: model.urlName,
            link: model.link,
            icon: model.icon,
            shortDescription: model.shortDescription,
            languageId: model.languageId,
            createdBy: model.createdBy,
            updatedBy: model.updatedBy,
            isOnTop: model.isOnTop,
            isOnRight: model.isOnRight,
            isOnBottom: model.isOnBottom,
            isOnLeft: model.isOnLeft,
            isOnCenter: model.isOnCenter,
        });
        const item = await newItem.save();
        return item;
    }

    public async update(id: string, model: CategoryRequestDto): Promise<ICategory>{
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

    public async getAll(): Promise<ICategory[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<ICategory>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<ICategory>>{
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
        } as IPagination<ICategory>;
    }

    public async remove(id: string): Promise<ICategory>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default CategoryService;