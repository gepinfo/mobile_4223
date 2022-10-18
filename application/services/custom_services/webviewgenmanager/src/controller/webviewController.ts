import { Request, Response } from 'express';
import { webviewService } from '../service/webviewService';
import { CustomLogger } from '../config/Logger'
let webview = new webviewService();

export class webviewController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
webview.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into webviewController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from webviewController.ts: GpCreate');
    })}


}