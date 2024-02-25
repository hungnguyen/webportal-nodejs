import { Route } from "@core/interfaces";
import { Router } from "express";
import CategoriesController from "./categories.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import CategoryRequestDto from "./dtos/category.request.dto";

export default class CategoriesRoute implements Route {
    public path = "/api/v1/categories";
    public router = Router();

    public controller = new CategoriesController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(CategoryRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(CategoryRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}