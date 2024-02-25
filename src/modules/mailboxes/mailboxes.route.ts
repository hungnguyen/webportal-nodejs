import { Route } from "@core/interfaces";
import { Router } from "express";
import MailBoxesController from "./mailboxes.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import MailBoxRequestDto from "./dtos/mailbox.request.dto";

export default class MailBoxesRoute implements Route {
    public path = "/api/v1/mailboxes";
    public router = Router();

    public controller = new MailBoxesController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(MailBoxRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(MailBoxRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}