//ROLE ENUMS
export enum RoleType {
    USER = 'user',
    ADMIN = 'admin',
    CLIENT = 'client',
    SUPPLIER = 'supplier',
    EMPLOYEE = 'employee',
    CONTRACTORS = 'contractors'
}

//USER ACCOUNT STATUS ENUMS
export enum AccountStatus {
    Active = 'activate',
    DEACTIVE = 'deactivate',
}

//OTP SEND TYPE ENUMS
export enum OtpType {
    FORGET = 'forget',
    VERIFICATION = 'verification',
}