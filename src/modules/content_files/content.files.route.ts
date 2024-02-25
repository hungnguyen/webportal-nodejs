import { Route } from "@core/interfaces";
import { Router } from "express";
import ContentFilesController from "./content.files.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import ContentFileRequestDto from "./dtos/content.file.request.dto";

export default class ContentFilesRoute implements Route {
    public path = "/api/v1/contentfiles";
    public router = Router();

    public controller = new ContentFilesController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path + "/:contentId", validationMiddleware(ContentFileRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:contentId/:id", 
            authMiddleware,
            validationMiddleware(ContentFileRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:contentId/:id", this.controller.getById);
        this.router.get(this.path + "/:contentId", this.controller.getAll);
        this.router.delete(this.path + "/:contentId/:id", authMiddleware, this.controller.remove);
    }
    
}