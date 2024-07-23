const mongoose = require("mongoose");

// Schema for Year Wise placements
const GraphDataSchema = mongoose.Schema(
    {
        Year: {
            type: String,
            required: true
        },
        UnderGraduate: {
            type: Number,
            required: true
        },
        PostGraduate: {
            type: Number,
            required: true
        },
        TotalOffers: {
            type: Number,
            required: true
        },
        Total: {
            type: Number,
            required: true
        }
    },
    { collection: "graphYearWise" }
);

// collection name: placementsYearWise
module.exports = mongoose.model("graphYearWise", GraphDataSchema);
