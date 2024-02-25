import { Route } from "@core/interfaces";
import { Router } from "express";
import ContentTypesController from "./content.types.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import ContentTypeRequestDto from "./dtos/content.type.request.dto";

export default class ContentTypesRoute implements Route {
    public path = "/api/v1/contenttypes";
    public router = Router();

    public controller = new ContentTypesController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(ContentTypeRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(ContentTypeRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}