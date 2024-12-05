import asyncHandler from 'express-async-handler';
import GymProducts from '../model/Suplement.js';


// Fetch a limited number of products
export const getProduct = asyncHandler(async (req, res) => {
    try {
        console.log('Fetching a limited number of products...');
        const data = await GymProducts.find().limit(3);
        console.log('Products fetched:', data);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching limited products:', error.message);
        res.status(500).json({ error: 'Failed to fetch products', details: error.message });
    }
});

// Fetch all products
export const getProducts = asyncHandler(async (req, res) => {
    try {
        console.log('Fetching all products...');
        const products = await GymProducts.find();
        console.log('All products fetched:', products);
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching all products:', error.message);
        res.status(500).json({ error: 'Failed to fetch all products', details: error.message });
    }
});


// Create products
export const postProduct = asyncHandler(async (req, res) => {
    try {
       
        const product=req.body;
        const newProduct = new GymProducts(req.body);
        await newProduct.save();
        
        res.status(201).json(req.body);



    } catch (error) { 
        console.error('Error creating product:', error.message);
    }

});

