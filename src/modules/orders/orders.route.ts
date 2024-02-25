import { Route } from "@core/interfaces";
import { Router } from "express";
import OrdersController from "./orders.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import OrderRequestDto from "./dtos/order.request.dto";

export default class OrdersRoute implements Route {
    public path = "/api/v1/orders";
    public router = Router();

    public controller = new OrdersController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(OrderRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(OrderRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}