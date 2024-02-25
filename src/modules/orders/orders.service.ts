import { HttpException } from "@core/exceptions";
import {IOrder} from "./orders.interface";
import OrderSchema from "./orders.model"
import OrderRequestDto from "./dtos/order.request.dto";
import { IPagination } from "@core/interfaces";

const modelName = "Order";

class OrderService {
    public modelSchema = OrderSchema;

    public async create(model: OrderRequestDto): Promise<IOrder> {
        const newItem = new OrderSchema({
            orderStatus: model.orderStatus,
            promotionCode: model.promotionCode,
            discount: model.discount,
            totalAmount: model.totalAmount,
            fee: model.fee,
            totalNetAmount: model.totalNetAmount,
            payMethod: model.payMethod,
            payStatus: model.payStatus,
            shippingName: model.shippingName,
            shippingAddress: model.shippingAddress,
            shippingPhone: model.shippingPhone,
            shippingEmail: model.shippingEmail,
            findUs: model.findUs,
            dateCompleted: model.dateCompleted,
            dateUpdate: model.dateUpdate,
            updatedBy: model.updatedBy,
            saleId: model.saleId,
            customerId: model.customerId,
            specialRequest: model.specialRequest,
        });
        const item = await newItem.save();
        return item;
    }

    public async update(id: string, model: OrderRequestDto): Promise<IOrder>{
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

    public async getAll(): Promise<IOrder[]>{
        const items = await this.modelSchema.find().sort({updatedDate:-1}).exec();
        return items;
    }

    public async getById(id: string): Promise<IOrder>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(404, `${modelName} is not found`);
        return item;
    }

    public async getAllPaging(keyword: string, page: number): Promise<IPagination<IOrder>>{
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
        } as IPagination<IOrder>;
    }

    public async remove(id: string): Promise<IOrder>{
        const item = await this.modelSchema.findById(id).exec();
        if(!item) throw new HttpException(400, `${modelName} is not found`);
        await item.deleteOne();
        return item;
    }
}

export default OrderService;