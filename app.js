const express = require('express');

const app = express();

const morgan = require('morgan');

const productsRouter = require('./api/routes/products');

app.use(morgan('dev'));

app.use('/products' , productsRouter);

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