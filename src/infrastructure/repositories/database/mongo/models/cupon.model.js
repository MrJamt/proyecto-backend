const mongoose = require("mongoose");

const cuponSchema = new mongoose.Schema({
    code: { type: String, required: true },
    discount: { type: Number, required: true, default: 0 },
    fromDate: { type: Date, required: true, default: Date.now },
    toDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Cupon", cuponSchema);