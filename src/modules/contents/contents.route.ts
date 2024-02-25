import { Route } from "@core/interfaces";
import { Router } from "express";
import ContentsController from "./contents.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import ContentRequestDto from "./dtos/content.request.dto";

export default class ContentsRoute implements Route {
    public path = "/api/v1/contents";
    public router = Router();

    public controller = new ContentsController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(ContentRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(ContentRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}