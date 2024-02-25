import { Route } from "@core/interfaces";
import { Router } from "express";
import BannersController from "./banners.controller";
import { authMiddleware, validationMiddleware } from "@core/middlewares";
import BannerRequestDto from "./dtos/banner.request.dto";

export default class BannersRoute implements Route {
    public path = "/api/v1/banners";
    public router = Router();

    public controller = new BannersController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, validationMiddleware(BannerRequestDto,true), this.controller.create);
        this.router.put(this.path + "/:id", 
            authMiddleware,
            validationMiddleware(BannerRequestDto, true),
            this.controller.update);

        this.router.get(this.path + "/:id", this.controller.getById);
        this.router.get(this.path, this.controller.getAll);
        this.router.get(this.path + "/paging/:page", this.controller.getAllPaging);
        this.router.delete(this.path + "/:id", authMiddleware, this.controller.remove);
    }
    
}