const Product = require("../models/productModel");


//@desc add a new Product
//@params POST /api/product
//@acces PRIVATE - admin
exports.addProduct = async (req , res) => {
    try {
        const newProduct = await  Product.create({...req.body})
         return res.status(201).json(newProduct)
    } catch (error) {
       return res.status(500).json({ msg: "somthing went wrong !" });
    }
};

//@desc get a list of all Product
//@params GET /api/product
//@acces PUBLIC
exports.getProducts = async (req , res) => {
    try {
        const Products = await  Product.find()
         return res.status(201).json(Products)
    } catch (error) {
       return res.status(500).json({ msg: "somthing went wrong !" });
    }
};

//@desc update Product by id
//@params PUT /api/product/:prodId
//@acces PRIVATE  admin
exports.updateProduct = async (req , res) => {
    try {
        await  Product.findByIdAndUpdate(
            req.params.prodId ,
             {...res.body},
             {new:true}     
             );
         return res.status(200).json({msg :'product update'})
    } catch (error) {
       return res.status(500).json({ msg: "somthing went wrong !" });
    }
};

//@desc delete Product by id
//@params DELETE /api/product/:prodId
//@acces PRIVATE  admin
exports.deleteProduct = async (req , res) => {
    try {
        await  Product.findByIdAndDelete(req.params.prodId);
         return res.status(200).json({msg :'product delete'})
    } catch (error) {
       return res.status(500).json({ msg: "somthing went wrong !" });
    }
};