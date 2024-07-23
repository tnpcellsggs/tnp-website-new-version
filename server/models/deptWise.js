const mongoose = require("mongoose");

// Each year will hold the record of placements department wise
const PlacementsDepartmentWiseSchema = mongoose.Schema({
    Year: {
        type: String,
        required: true,
    },
    Department: {
        type: String,
        required: true
    },
    UndergradTotal: {
        type: Number,
        required: true
    },
    UndergradPlaced: {
        type: Number,
        required: true
    },
    PostgradTotal: {
        type: Number,
        required: true
    },
    PostgradPlaced: {
        type: Number,
        required: true
    },
    TotalOffers: {
        type: Number,
        required: true
    }
},
    { collection: "placementsDeptWise" }
);

module.exports = mongoose.model("placementsDeptWise", PlacementsDepartmentWiseSchema);
