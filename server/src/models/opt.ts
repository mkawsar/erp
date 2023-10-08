import { IOtp } from '../interfaces';
import { OtpType } from '../utils/enums/';
import mongoose, { Document, Schema } from 'mongoose';

//EXPORT INTERFACE WITH MONGOOSE DOCUMENT
export interface IOtpModel extends IOtp, Document {}

//DEFINE OTP SCHEMA
const OtpSchema: Schema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        type: {
            type: String,
            enum: Object.values(OtpType),
        },
        otp: {
            type: String,
            required: true,
        },
        otpExpiration: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<IOtpModel>('Otp', OtpSchema);
