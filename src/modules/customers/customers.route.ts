import { Route } from "@core/interfaces";
import { Router } from "express";
import CustomersController from "./customers.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import CustomerRequestDto from "./dtos/customer.request.dto";

export default class CustomersRoute implements Route {
    public path = "/api/v1/customers";
    public router = Router();

    public controller = new CustomersController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(CustomerRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(CustomerRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}