import { HttpException } from "@core/exceptions";
import ICustomer from "./customers.interface";
import CustomerSchema from "./customers.model"
import CustomerRequestDto from "./dtos/customer.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "Customer";

class CustomerService {
    public modelSchema = CustomerSchema;

    public async create(model: CustomerRequestDto): Promise<ICustomer> {
        const newItem = new CustomerSchema({
            userName: model.userName,
            password: model.password,
            email: model.email,
            fullName: model.fullName,
            idCard: model.idCard,
            address: model.address,
            country: model.country,
            phoneNumber: model.phoneNumber,
            status: model.status,
            city: model.city,
            district: model.district,
            birthday: model.birthday,
            gender: model.gender,
            image: model.image,
            ip: model.ip,
            browser: model.browser,
        });
        const item = await newItem.save();
        return item;
    }

    public async update(id: string, model: CustomerRequestDto): Promise<ICustomer>{
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

    public async getAll(): Promise<ICustomer[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<ICustomer>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<ICustomer>>{
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
        } as IPagination<ICustomer>;
    }

    public async remove(id: string): Promise<ICustomer>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default CustomerService;