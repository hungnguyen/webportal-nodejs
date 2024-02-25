import { NextFunction, Request, Response } from "express";
import ContentTypeRequestDto from "./dtos/content.type.request.dto";
import IContentType from "./content.types.interface";
import ContentTypeService from "./content.types.service";

export default class ContentTypesController {
    private service = new ContentTypeService();
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const model: ContentTypeRequestDto = req.body;
            const result = await this.service.create(model);
            res.status(201).json(result);
        } catch (e) {
            next(e);
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const model: ContentTypeRequestDto = req.body;
            const id = req.params.id;
            const result = await this.service.update(id, model);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: IContentType[] = await this.service.getAll();
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const result: IContentType = await this.service.getById(id);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getAllPaging = async (req: Request, res: Response, next: NextFunction) => { 
        try {
            const page: number = Number(req.params.page);
            const keyword = req.params.keyword || '';
            const result = await this.service.getAllPaging(keyword, page);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public remove = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const result = await this.service.remove(id);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
}