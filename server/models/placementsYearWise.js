const mongoose = require("mongoose");

// Schema for Year Wise placements
const PlacementsYearWiseSchema = mongoose.Schema(
    {
        Year: {
            type: String,
            required: true,
            unique: true
        },
        BTechOnRoll: {
            type: Number,
            required: true
        },
        BTechPlaced: {
            type: Number,
            required: true
        },
        MTechOnRoll: {
            type: Number,
            required: true
        },
        MTechPlaced: {
            type: Number,
            required:true
        },
        TotalPlaced: {
            type: Number,
            required:true
        },
        TotalOffers: {
            type: Number,
            required:true
        },
        AveragePackage: {
            type: String,
            required:true
        },
        PackageRange: {
            type: String,
            required:true
        }
    },
    { collection: "placementsYearWise" }
);

// collection name: placementsYearWise
module.exports = mongoose.model("placementsYearWise", PlacementsYearWiseSchema);
