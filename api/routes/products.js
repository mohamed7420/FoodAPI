const express = require('express');

const router = express.Router();

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

router.post('/product' , () =>{

});

module.exports = router;