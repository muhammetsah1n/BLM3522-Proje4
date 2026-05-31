const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB baglantisi basarili");
    } catch (error) {
        console.error("MongoDB baglanti hatasi:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;