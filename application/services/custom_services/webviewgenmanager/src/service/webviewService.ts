import { Request, Response } from 'express';
import {webviewDao} from '../dao/webviewDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let webview = new webviewDao();

export class webviewService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into webviewService.ts: GpCreate')
     let  webviewData = req.body;
     webview.GpCreate(webviewData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from webviewService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}