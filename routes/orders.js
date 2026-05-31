const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
    try {
        const { items, totalPrice } = req.body;

        const order = await Order.create({
            items,
            totalPrice
        });

        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({
            message: "Siparis olusturulamadi",
            error: error.message
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Siparisler getirilemedi" });
    }
});

module.exports = router;