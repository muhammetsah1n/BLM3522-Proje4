const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Urunler getirilemedi" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;

        const product = await Product.create({
            name,
            description,
            price,
            stock
        });

        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({
            message: "Urun eklenemedi",
            error: error.message
        });
    }
});

module.exports = router;