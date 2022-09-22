import { Request, Response } from 'express';
import { mobileService } from '../service/mobileService';
import { CustomLogger } from '../config/Logger'
let mobile = new mobileService();

export class mobileController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
mobile.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mobileController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mobileController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
mobile.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mobileController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mobileController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
mobile.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mobileController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mobileController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
mobile.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mobileController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mobileController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
mobile.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mobileController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mobileController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
mobile.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mobileController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mobileController.ts: GpCreate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
mobile.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mobileController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mobileController.ts: GpSearchForUpdate');
    })}


}