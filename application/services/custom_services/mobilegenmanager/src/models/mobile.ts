
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const mobileSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },

})

const mobileModel = mongoose.model('mobile', mobileSchema, 'mobile');
export default mobileModel;
