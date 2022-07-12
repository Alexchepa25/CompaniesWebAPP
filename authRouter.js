const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');
//const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');

router.post('/registration', [
    //check('username', 'This field must be filled').notEmpty(),
    check('email', 'Email must be correct').isEmail(),
    //check('phone_number', 'Phone number must be correct').toInt().isMobilePhone(),
    check('password', 'Password must be between 5 and 8 characters').isLength({min: 5, max: 8})
], controller.registration);
router.post('/login', [
    check('email', 'Email must be correct').isEmail().normalizeEmail(),
    check('password', 'Input correct password').exists()
], controller.login);
router.get('/users', 
roleMiddleware(['USER', 'ADMIN']), 
controller.getUsers);

module.exports = router;