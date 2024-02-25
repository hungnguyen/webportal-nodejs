import { NextFunction, Request, Response } from "express";
import ContentFileRequestDto from "./dtos/content.file.request.dto";
import IContentFile from "./content.files.interface";
import ContentFileService from "./content.files.service";

export default class ContentFilesController {
    private service = new ContentFileService();
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const contentId = req.params.contentId;
            const model: ContentFileRequestDto = req.body;
            const result = await this.service.create(contentId, model);
            res.status(201).json(result);
        } catch (e) {
            next(e);
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const model: ContentFileRequestDto = req.body;
            const contentId = req.params.contentId;
            const id = req.params.id;
            const result = await this.service.update(contentId, id, model);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const contentId = req.params.contentId;
            const result: IContentFile[] = await this.service.getAll(contentId);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const contentId = req.params.contentId;
            const id = req.params.id;
            const result: IContentFile = await this.service.getById(contentId, id);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public remove = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const contentId = req.params.contentId;
            const id = req.params.id;
            const result = await this.service.remove(contentId, id);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
}