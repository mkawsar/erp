import { extractToken } from '../utils';
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

// AUTHORIZATION HEADER VALIDATOR FUNCTION
const authorization = () => {
    return header('authorization')
        .trim()
        .escape()
        .exists()
        .notEmpty()
        .withMessage('Missing authentication header')
        .bail()
        .customSanitizer((token, { location }) => {
            if (location === 'headers') {
                return extractToken(token);
            }
        })
        .isJWT()
        .withMessage(
            'Invalid Authorization header, must be Bearer authorization'
        );
};

//EXPORT
export {
    authorization,
    emailAddressValidation,
    loginPasswordValidation,
};
