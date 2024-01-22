import { ICategory } from '../interfaces';
import mongoose, { Document, Schema } from 'mongoose';

//EXPORT INTERFACE WITH MONGOOSE DOCUMENT
export interface ICategoryModel extends ICategory, Document {};

//DEFINE Category SCHEMA
const CategorySchema: Schema = new Schema(
    {
        name: {
            type: String,
            default: '',
            unique: true,
        },
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories',
            default: null
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            default: null
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            default: null
        }
    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<ICategoryModel>('categories', CategorySchema);