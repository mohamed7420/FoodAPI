const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');


router.get('/' , (req , res , next) =>{

    res.status(200).json({
        products: [
            {
                id: 1,
                title: "jacket",
                description: "This jacket is good and egyptan cotton",
                rate: 4.5,
                isliked: false,
                images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
            }

        ]
    });

});

router.post('/product' , (req , res , next) =>{
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result =>{
        console.log(`The result is ${result}`);
    }).catch(error => {console.log(error)}); // store in the data base
    res.status(201).json({
        message: "Product created successfully!",
        product: product
    });
    
});

router.get('/:id' , (req, res , next)=>{
    const id = req.params.id;
    Product.findById(id).exec().then(doc => {
        res.status(200).json(doc)
    }).catch(error => console.log(error));
});



module.exports = router;