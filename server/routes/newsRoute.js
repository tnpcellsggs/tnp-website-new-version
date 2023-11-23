const router = require("express").Router();
const NewsUpdate = require("../models/news");

// News & Updates Section routes
// ROUTE 1: Post request "/newsUpdates/create"
router.post("/create", async (request, response) => {
    try {
        const usr = await NewsUpdate.create({
            Title: request.body.Title,
            Description: request.body.Description,
            Date: request.body.Date,
            ImageLink: request.body.ImageLink,
            ID: request.body.Title + request.body.Date
        });

        response.status(200).json({ usr });
    }
    catch (err) {
        console.log(err);
        response.status(400).send("Internal Error Occured");
    }

});

// ROUTE 2: Post request "/newsUpdates/getAllNews"
router.get("/getAllNews", async (request, response) => {
    try {
        let newsInfo = await NewsUpdate.find();
        response.status(200).json({ newsInfo });
    }
    catch (err) {
        response.status(400).send("Internal Error Occured");
    }
});
// ROUTE 3: Post request "/newsUpdates/editNews"
router.put("/editNews", async (request, response) => {
    try {
        // creating a new document for every year record
        let ID = request.body.ID
        const newRecord = {
            Title: request.body.Title,
            Description: request.body.Description,
            Date: request.body.Date,
            ImageLink: request.body.ImageLink,
            ID: request.body.Title + request.body.Date
        }
        let record = await NewsUpdate.find({ ID:ID });
        if (record.length === 0) {
            response.status(400).send("Record Not Found");
        }
        else {
            record = await NewsUpdate.findOneAndUpdate(
                {
                    ID:ID
                },
                {
                    $set: newRecord
                },
                {
                    new: true
                }
            );
            response.status(200).json(record);
        }
    }
    catch (err) {
        response.status(400).send("Internal Error Occured");
    }
});
// ROUTE 4: Post request "/newsUpdates/delete"
router.delete("/delete", async (request, response) => {
    try {
        // creating a new document for every year record
        let ID = request.body.ID;
        let record = await NewsUpdate.find({ ID: ID });
        if (record.length === 0) {
            response.status(404).send("Record Not Found");
        }
        else {
            record = await NewsUpdate.findOneAndDelete({ ID: ID });
            response.status(200).json({ "success": "Record deleted successfully" });
        }
    }
    catch (err) {
        response.status(400).send("Internal Error Occured");
    }
});


module.exports = router;