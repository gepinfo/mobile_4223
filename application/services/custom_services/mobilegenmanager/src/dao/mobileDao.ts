import * as mongoose from 'mongoose';
import mobileModel from '../models/mobile';
import { CustomLogger } from '../config/Logger'


export class mobileDao {
    private mobile = mobileModel;
    constructor() { }
    
    public async GpDelete(mobileId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mobileDao.ts: GpDelete');

    

    
    
    
    this.mobile.findByIdAndRemove(mobileId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mobileDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(mobileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mobileDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(mobileData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.mobile.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mobileDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(mobileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mobileDao.ts: GpUpdate');

    

    
    
    
    this.mobile.findOneAndUpdate({ _id: mobileData._id }, mobileData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mobileDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(mobileId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mobileDao.ts: GpGetNounById');

    

    
    
    
    this.mobile.findById(mobileId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mobileDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into mobileDao.ts: GpGetAllValues');

    

    
    
    
    this.mobile.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mobileDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(mobileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mobileDao.ts: GpCreate');

    let temp = new mobileModel(mobileData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mobileDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(mobileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mobileDao.ts: GpSearchForUpdate');

    

    
    
    
    this.mobile.findOneAndUpdate({ _id: mobileData._id }, mobileData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mobileDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}