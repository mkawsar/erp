import { IUser } from './user.interface'

export interface ICategory {
    name: string,
    parentId: any,
    createdBy: IUser,
    updatedBy: IUser
}
