import { Request, Response } from 'express';
import {mobileDao} from '../dao/mobileDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let mobile = new mobileDao();

export class mobileService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mobileService.ts: GpDelete')
     let  mobileId = req.params.id;
     mobile.GpDelete(mobileId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mobileService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mobileService.ts: GpSearch')
     let  mobileData = req.query;
     mobile.GpSearch(mobileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mobileService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mobileService.ts: GpUpdate')
     let  mobileData = req.body;
     mobile.GpUpdate(mobileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mobileService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mobileService.ts: GpGetNounById')
     let  mobileId = req.params.id;
     mobile.GpGetNounById(mobileId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mobileService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mobileService.ts: GpGetAllValues')
     
     mobile.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from mobileService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mobileService.ts: GpCreate')
     let  mobileData = req.body;
     mobile.GpCreate(mobileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mobileService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mobileService.ts: GpSearchForUpdate')
     let  mobileData = req.body;
     mobile.GpSearchForUpdate(mobileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mobileService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
    
    
    
}