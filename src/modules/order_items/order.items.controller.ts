import { NextFunction, Request, Response } from "express";
import OrderItemRequestDto from "./dtos/order.item.request.dto";
import { IOrderItem } from "./order.items.interface";
import OrderItemService from "./order.items.service";

export default class OrderItemsController {
    private service = new OrderItemService();
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderId = req.params.orderId;
            const model: OrderItemRequestDto = req.body;
            const result = await this.service.create(orderId, model);
            res.status(201).json(result);
        } catch (e) {
            next(e);
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const model: OrderItemRequestDto = req.body;
            const orderId = req.params.orderId;
            const id = req.params.id;
            const result = await this.service.update(orderId, id, model);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderId = req.params.orderId;
            const result: IOrderItem[] = await this.service.getAll(orderId);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderId = req.params.orderId;
            const id = req.params.id;
            const result: IOrderItem = await this.service.getById(orderId, id);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public remove = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderId = req.params.orderId;
            const id = req.params.id;
            const result = await this.service.remove(orderId, id);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
}