import * as mongoose from 'mongoose';
import webviewModel from '../models/webview';
import { CustomLogger } from '../config/Logger'


export class webviewDao {
    private webview = webviewModel;
    constructor() { }
    
    public async GpCreate(webviewData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into webviewDao.ts: GpCreate');

    let temp = new webviewModel(webviewData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from webviewDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}