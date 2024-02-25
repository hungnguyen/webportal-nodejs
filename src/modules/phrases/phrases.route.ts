import { Route } from "@core/interfaces";
import { Router } from "express";
import PhrasesController from "./phrases.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import PhraseRequestDto from "./dtos/phrase.request.dto";

export default class PhrasesRoute implements Route {
    public path = "/api/v1/phrases";
    public router = Router();

    public controller = new PhrasesController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(PhraseRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(PhraseRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}