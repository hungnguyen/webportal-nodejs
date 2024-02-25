import { NextFunction, Request, Response } from "express";
import MailBoxRequestDto from "./dtos/mailbox.request.dto";
import IMailBox from "./mailboxes.interface";
import MailBoxService from "./mailboxes.service";

export default class MailBoxesController {
    private service = new MailBoxService();
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const model: MailBoxRequestDto = req.body;
            const result = await this.service.create(model);
            res.status(201).json(result);
        } catch (e) {
            next(e);
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const model: MailBoxRequestDto = req.body;
            const id = req.params.id;
            const result = await this.service.update(id, model);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: IMailBox[] = await this.service.getAll();
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const result: IMailBox = await this.service.getById(id);
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