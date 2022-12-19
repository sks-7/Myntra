const { body, validationResult } = require('express-validator');

const validator = (req, res, next) => {
    body("email", "Enter valid email").isEmail()
    body("password", "Password must be atleast 6 char").isLength(6)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.Array() })
    }
    next()
};

module.exports = { validator };