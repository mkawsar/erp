import Role from '../models/role';
import { jsonAll } from '../utils/general';
import { NextFunction, Request, Response } from 'express';

//CREATE AUTOMATIC ROLE AT FIRST WHEN WE CREATE NEW DB
export function createRole() {
    Role.estimatedDocumentCount((err: any, count: number) => {
        if (!err && count === 0) {
            new Role({
                name: 'user',
            }).save((err) => {
                if (err) {
                    console.log('error', err);
                }
                console.log("added 'user' to roles collection");
            });

            new Role({
                name: 'admin',
            }).save((err) => {
                if (err) {
                    console.log('error', err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}
