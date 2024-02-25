import { Route } from "@core/interfaces";
import { Router } from "express";
import OrderItemsController from "./order.items.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import OrderItemRequestDto from "./dtos/order.item.request.dto";

export default class OrderItemsRoute implements Route {
    public path = "/api/v1/orderitems";
    public router = Router();

    public controller = new OrderItemsController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path + "/:orderId", validationMiddleware(OrderItemRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:orderId/:id", 
            authMiddleware,
            validationMiddleware(OrderItemRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:orderId/:id", this.controller.getById);
        this.router.get(this.path + "/:orderId", this.controller.getAll);
        this.router.delete(this.path + "/:orderId/:id", authMiddleware, this.controller.remove);
    }
    
}