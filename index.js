const express = require('express');
const mongoose = require('mongoose');
//const config = require('config');
const authRouter = require('./authRouter');
//const companyRouter = require('./companyRouter');
const {mongoURI} = require('./config');
const corsMiddleware = require('./middleware/cors.middleware.js');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/auth', authRouter);
//app.use('/company', companyRouter);

const start = async () => {
    try {
        await mongoose.connect(mongoURI);
            //'mongodb+srv://Alex:alex123@cluster0.yjtq9.mongodb.net/?retryWrites=true&w=majority'        
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();