import { HttpException } from "@core/exceptions";
import { IOrderItem } from "./order.items.interface";
import OrderItemRequestDto from "./dtos/order.item.request.dto";
import { OrderSchema } from "@modules/orders";

const modelName = "Order";

class OrderItemService {
    public modelSchema = OrderSchema;
    
    public async create(orderId: string, model: OrderItemRequestDto): Promise<IOrderItem[]> {
        const order = await this.modelSchema.findById(orderId).exec();

        if(!order) throw new HttpException(400, `${modelName} not found`);

        const newItem = {
            orderId: model.orderId,
            productId: model.productId,
            price: model.price,
            quantity: model.quantity,
            amount: model.amount,
        };

        order.items.push(newItem as IOrderItem);
        await order.save();
        return order.items;
    }

    public async update(orderId: string, id: string, model: OrderItemRequestDto): Promise<IOrderItem[]>{
        const updateOrder = await this.modelSchema.findOneAndUpdate(
            { _id: orderId, "items._id": id },
            { 
                $set: {
                    "items.$": model
                }
            }).exec();

        if (!updateOrder) throw new HttpException(400, `Update not success`);

        return updateOrder.items;
    }

    public async getAll(orderId: string): Promise<IOrderItem[]>{
        const order = await this.modelSchema.findById(orderId).exec();

        if(!order) throw new HttpException(400, `${modelName} not found`);

        return order.items;
    }

    public async getById(orderId: string, id: string): Promise<IOrderItem>{
        const order = await this.modelSchema.findById(orderId).exec();

        if(!order) throw new HttpException(400, `${modelName} not found`);

        return order.items.find(i => i._id === id) as IOrderItem;
    }

    public async remove(orderId: string, id: string): Promise<IOrderItem[]>{
        const updateOrder = await this.modelSchema.findOneAndUpdate(
            { _id: orderId, "items._id": id },
            { 
                $pull: {
                    "items.$._id": id
                }
            }).exec();

        if (!updateOrder) throw new HttpException(400, `Remove not success`);

        return updateOrder.items;
    }
}

export default OrderItemService;