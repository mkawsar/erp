import { body, header } from 'express-validator';

//EMAIL VALIDATOR FUNCTION
const emailAddressValidation = () => {
    return body('email')
        .trim()
        .escape()
        .exists()
        .notEmpty()
        .withMessage('Email address is required')
        .bail()
        .isLength({
            min: 3,
            max: 100
        })
        .withMessage('Email address must be between 3 and 100 characters')
        .bail()
        .isEmail()
        .withMessage('Email address is not valid')
        .customSanitizer((email) => {
            return email.toLowerCase();
        });
};

//LOGIN PASSWORD VALIDATOR FUNCTION
const loginPasswordValidation = () => {
    return body('password')
        .trim()
        .escape()
        .exists()
        .notEmpty()
        .withMessage('Password address is required')
        .isString()
        .isLength({
            max: 255,
        })
        .withMessage('Password is not valid');
};

//EXPORT
export {
    emailAddressValidation,
    loginPasswordValidation,
};
