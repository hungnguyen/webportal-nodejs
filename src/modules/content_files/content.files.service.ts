import { HttpException } from "@core/exceptions";
import IContentFile from "./content.files.interface";
import ContentFileRequestDto from "./dtos/content.file.request.dto";
import { ContentSchema } from "@modules/contents";

const modelName = "Content";

class ContentFileService {
    public modelSchema = ContentSchema;
    
    public async create(contentId: string, model: ContentFileRequestDto): Promise<IContentFile[]> {
        const content = await this.modelSchema.findById(contentId).exec();

        if(!content) throw new HttpException(400, `${modelName} not found`);

        const newItem = {
            name: model.name,
            detail: model.detail,
            fileName: model.fileName,
            link: model.link,
            orderNumber: model.orderNumber,
            status: model.status,
        };

        content.files.push(newItem as IContentFile);
        await content.save();
        return content.files;
    }

    public async update(contentId: string, id: string, model: ContentFileRequestDto): Promise<IContentFile[]>{
        const updateContent = await this.modelSchema.findOneAndUpdate(
            { _id: contentId, "files._id": id },
            { 
                $set: {
                    "files.$": model
                }
            }).exec();

        if (!updateContent) throw new HttpException(400, `Update not success`);

        return updateContent.files;
    }

    public async getAll(contentId: string): Promise<IContentFile[]>{
        const content = await this.modelSchema.findById(contentId).exec();

        if(!content) throw new HttpException(400, `${modelName} not found`);

        return content.files;
    }

    public async getById(contentId: string, id: string): Promise<IContentFile>{
        const content = await this.modelSchema.findById(contentId).exec();

        if(!content) throw new HttpException(400, `${modelName} not found`);

        return content.files.find(f => f._id === id) as IContentFile;
    }

    public async remove(contentId: string, id: string): Promise<IContentFile[]>{
        const updateContent = await this.modelSchema.findOneAndUpdate(
            { _id: contentId, "files._id": id },
            { 
                $pull: {
                    "files.$._id": id
                }
            }).exec();

        if (!updateContent) throw new HttpException(400, `Remove not success`);

        return updateContent.files;
    }
}

export default ContentFileService;