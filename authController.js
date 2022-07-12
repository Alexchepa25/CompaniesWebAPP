const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const {secret} = require('./config');

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: '1d'});
}

class authController {
    async registration(req, res) {
        try {
            console.log('Body: ', req.body);///////
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Registration error', errors});
            }

            const {email, password} = req.body;
            const candidate = await User.findOne({ email });
            if(candidate) {
                return res.status(400).json({massage: `User with the email: ${ email } already exists`})
            }
            const hashPassword = bcrypt.hashSync(password, 6);
            const userRole = await Role.findOne({value: 'USER'});  //'USER' 'ADMIN'
            const user = new User({email, password: hashPassword, roles: [userRole.value]});
            await user.save();
            return res.status(201).json({message: 'User successfully registered'});
        } catch (e){            
            console.log(e);
            res.status(400).json({message: 'Registration error !!!'});
        }
    }
    async login(req, res) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Input data is incorrect', errors});
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({message: `User ${email} not found`});
            }
            const isValidPassword = bcrypt.compareSync(password, user.password);
            if(!isValidPassword){
                return res.status(400).json({message: `Invalid password`});
            }
            const token = generateAccessToken(user._id, user.roles);
            return res.json({token});
        } catch (e){
            console.log(e);
            res.status(400).json({message: 'Login error'});
        }
    }
    async getUsers(req, res) {
        try {
            // // Сохраняем роли в базе данных:
            // const userRole = new Role();
            // const adminRole = new Role({value: 'ADMIN'});
            // await userRole.save();
            // const managerRole = new Role({value: 'MANAGER'});
            // await managerRole.save();
            // await adminRole.save();
            const users = await User.find();
            res.json(users);
        } catch (e){
            console.log(e);
        }
    }
}

module.exports = new authController();