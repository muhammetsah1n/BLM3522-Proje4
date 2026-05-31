const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const orderRoutes = require("./routes/orders");

dotenv.config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/products");

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "admin.html"));
});

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "cart.html"));
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda calisiyor`);
});