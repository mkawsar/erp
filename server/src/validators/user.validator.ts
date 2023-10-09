import { body } from 'express-validator';

//PASSWORD VALIDATOR FUNCTION
const password = (field: any) => {
    return body(field)
        .trim()
        .escape()
        .isString()
        .isLength({ min: 6 })
        .withMessage(
            `${
                field === 'password' ? 'Password' : 'Confirm password'
            } should not be empty and at a minimum six characters.`
        )
        .bail()
        .custom((value, { req }) => {
            if (field === 'confirm_password' && value !== req.body.password) {
                throw new Error(
                    'Password confirmation does not match password'
                );
            }
            return true;
        });
};

//RESET PASSWORD VALIDATOR FUNCTION
const resetPassword = (field: any) => {
    return body(field)
        .trim()
        .escape()
        .isString()
        .isLength({ min: 6 })
        .withMessage(
            `${field} should not be empty and at a minimum six characters.`
        )
        .bail()
        .custom((value, { req }) => {
            if (field === 'confirmationPassword' && value !== req.body.newPassword) {
                throw new Error('Confirmation password does not match password');
            }
            return true;
        });
};

export { password, resetPassword };
