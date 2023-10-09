import nodemailer from 'nodemailer';
import Logging from '../library/Logging';
import { MailInterface } from '../interfaces';


export class MailService {
    private static instance: MailService;
    private transporter: nodemailer.Transporter;

    private constructor() {
        //TODO
    };

    //INTSTANCE CREATE FOR MAIL
    static getInstance() {
        if (!MailService.instance) {
            MailService.instance = new MailService();
        }
        return MailService.instance;
    }

    //CREATE TRANSPOTER
    getTransporter() {
        return this.transporter;
    }

    //CREATE CONNECTION FOR LIVE
    async createConnection() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,

        });
    }

}
