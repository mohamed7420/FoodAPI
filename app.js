const express = require('express');
const app = express();
const morgan = require('morgan');
const productsRouter = require('./api/routes/products');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mogoosURL = "mongodb+srv://mohamed7420:mo128899@cluster0.efkpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mogoosURL, {useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/products' , productsRouter);
app.use((req , res, next)=>{
res.header("Access-Control-Allow-Origin" , "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
});

app.use((req , res , next)=>{
    const error = Error('error found');
    res.status(404);
    next(error);
});

app.use((error , req , res , next)=>{

    res.status(error.status || 500);
    res.json({
        error: {
            message: "Kosom Elzamalek"
        }
    });

});

module.exports = app;