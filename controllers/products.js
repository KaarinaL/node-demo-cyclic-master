const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const router = express.Router();

const dbURI = 'mongodb+srv://'+ process.env.DBUSER +':'+ process.env.DBPASSWD +''+ process.env.CLUSTER +'.mongodb.net/'+ process.env.DB +'?retryWrites=true&w=majority'
mongoose.connect(dbURI); 
const Product = require('../models/Product');

// home/root
const home = (req,res) => {
    res.send('My MVC App!');
}


// Get one product
const getProduct = async (req,res) => {
    try {
        const id = req.params.id;
        //console.log(id);
        const product = await Product.findById(id);     
        console.log(product);
        res.render('index', {
            product : product.toJSON()
        }); 
    }
    catch(err) {
        res.status(404).render('error-404');
    } 
}

module.exports = {
    home,
    getProduct
};