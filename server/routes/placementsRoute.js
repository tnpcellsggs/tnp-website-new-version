const router = require("express").Router();
// const { response } = require("express");
const Placements = require("../models/placementsYearWise");
const GraphData = require("../models/graphModels");
const Department = require("../models/deptWise");

// YearWise Placement routes
// ROUTE 1: Placements Year Wise -> POST request "admin/placements/yearWise/create"
router.post("/yearWise/create", async (request, response) => {
    try {
        // creating a new document for every year record
        const usr = await Placements.create({
            Year: request.body.Year,
            BTechOnRoll: request.body.BTechOnRoll,
            BTechPlaced: request.body.BTechPlaced,
            MTechOnRoll: request.body.MTechOnRoll,
            MTechPlaced: request.body.MTechPlaced,
            TotalPlaced: request.body.TotalPlaced,
            AveragePackage: request.body.AveragePackage,
            PackageRange: request.body.PackageRange,
        });

        response.status(200).json({ usr });
    }
    catch (err) {
        console.log(err);
        response.status(400).send("Internal Error Occured");
    }
});

// ROUTE 2: Placements Year Wise -> GET request "admin/placements/yearWise/getAll"
router.get("/yearWise/getAll", async (request, response) => {
    try {
        let placementsInfo = await Placements.find();
        response.status(200).json({ placementsInfo });
    }
    catch (err) {
        response.status(400).send("Internal Error Occured");
    }
});

// ROUTE 3: Placements Year Wise -> DELETE request "admin/placements/yearWise/getAll"
router.delete("/yearWise/delete", async (request, response) => {
    try {
        // creating a new document for every year record
        let recordYear = request.body.Year;
        let record = await Placements.find({ Year: recordYear });
        if (record.length === 0) {
            response.status(400).send("Record Not Found");
        }
        else {
            record = await Placements.findOneAndDelete({ Year: recordYear });
            response.status(200).json({ "success": "Record deleted successfully" });
        }
    }
    catch (err) {
        response.status(400).send("Internal Error Occured");
    }
});

// ROUTE 4: Placements Year Wise -> GET request "admin/placements/yearWise/edit"
router.put("/yearWise/edit", async (request, response) => {
    try {
        // creating a new document for every year record
        let year = request.body.Response[0]["Year"];
        const newRecord = {
            Year: request.body.Response[1].Year,
            BTechOnRoll: request.body.Response[1].BTechOnRoll,
            BTechPlaced: request.body.Response[1].BTechPlaced,
            MTechOnRoll: request.body.Response[1].MTechOnRoll,
            MTechPlaced: request.body.Response[1].MTechPlaced,
            TotalPlaced: request.body.Response[1].TotalPlaced,
            AveragePackage: request.body.Response[1].AveragePackage,
            PackageRange: request.body.Response[1].PackageRange
        }
        let record = await Placements.find({ Year: year });
        if (record.length === 0) {
            response.status(400).send("Record Not Found");
        }
        else {
            record = await Placements.findOneAndUpdate(
                {
                    Year: year
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

// YearWise Placement routes for Graph
// ROUTE 1: Graph Data Year Wise -> POST request "admin/placements/graph/create"
router.post("/graph/create", async (request, response) => {
    try {
        let record = {
            Year: request.body.Year,
            UnderGraduate: request.body.UnderGraduate,
            PostGraduate: request.body.PostGraduate,
            Total: request.body.Total
        }

        const data = await GraphData.create(record);
        response.status(200).json(data);
    }
    catch (err) {
        response.status(400).send("Server Error occured");
    }
});

// ROUTE 2: Graph Data Year Wise -> GET request "admin/placements/graph/getAll"
router.get("/graph/getAll", async (request, response) => {
    try {
        let record = await GraphData.find();
        if (record.length === 0) {
            response.status(400).send("Record Not Found");
        }
        else {
            response.status(200).json(record);
        }
    }
    catch (err) {
        response.status(400).send("Server Error occured");
    }
});

// ROUTE 3: Graph Data Year Wise -> PUT request "admin/placements/graph/editRecord"
router.put("/graph/editRecord", async (request, response) => {
    try {
        let year = request.body.Response[0].Year;
        let newRecord = {
            Year: request.body.Response[1].Year,
            UnderGraduate: request.body.Response[1].UnderGraduate,
            PostGraduate: request.body.Response[1].PostGraduate,
            Total: request.body.Response[1].Total
        }
        let record = await GraphData.find({ Year: year });
        if (record.length === 0) {
            response.status(400).send("Record Not Found");
        }
        else {
            record = await GraphData.findOneAndUpdate(
                {
                    Year: year
                },
                {
                    $set: newRecord
                },
                {
                    new: true
                }
            );
            response.status(200).send("Record changed successfully");
        }
    }
    catch (err) {
        response.status(400).send("Server Error occured");
    }
});

// ROUTE 4: Graph Data Year Wise -> POST request "admin/placements/graph/delete"
router.delete("/graph/delete", async (request, response) => {
    try {
        let year = request.body.Year;
        let record = await GraphData.find({ Year: year });
        if (record.length === 0) {
            response.status(400).send("Record not found");
        }
        else {
            record = await GraphData.findOneAndDelete({ Year: year });
            response.status(200).json({ "success": "Record deleted successfully" });
        }
    }
    catch (err) {
        response.status(400).send("Server Error occured");
    }
});

// Department Wise Routes
// ROUTE 1: Department Wise -> POST request "admin/placements/department/create"
router.post("/department/create", async (request, response) => {
    try {
        let record = {
            Year: request.body.Year,
            Department: request.body.Department,
            UndergradTotal: request.body.UndergradTotal,
            UndergradPlaced: request.body.UndergradPlaced,
            PostgradTotal: request.body.PostgradTotal,
            PostgradPlaced: request.body.PostgradPlaced
        }

        const data = await Department.create(record);
        response.status(200).json(data);
    }
    catch (err) {
        response.status(400).send("Server Error occured");
    }
});

// ROUTE 2: Department Wise -> GET request "admin/placements/department/getAll"
router.get("/department/getAll", async (request, response) => {
    try {
        let record = await Department.find();
        const aggregationPipeline = [
            {
                $group: {
                    _id: '$Year', // Group by the "year" field
                    "departments": {
                        $push: '$$ROOT', // Include all fields for each document
                    }
                },
            },
        ];
        const result = await Department.aggregate(aggregationPipeline);
        if (result.length === 0) {
            response.status(400).send('Record Not Found');
        } else {
            response.status(200).json(result);
        }
        // if (record.length === 0) {
        //     response.status(400).send("Record Not Found");
        // }
        // else {
        //     response.status(200).json(record);
        // }
    }
    catch (err) {
        response.status(400).send("Server Error occured");
    }
});

// ROUTE 3: Department Wise -> PUT request "admin/placements/department/editRecord"
router.put("/department/editRecord", async (request, response) => {
    try {
        let _id  = request.body.Response[0]._id;
        let newRecord = {
            Year: request.body.Response[1].Year,
            Department: request.body.Response[1].Department,
            UndergradTotal: request.body.Response[1].UndergradTotal,
            UndergradPlaced: request.body.Response[1].UndergradPlaced,
            PostgradTotal: request.body.Response[1].PostgradTotal,
            PostgradPlaced: request.body.Response[1].PostgradPlaced
        }
        let record = await Department.findById({_id:_id });
        if (!record) {
            return response.status(400).send("Record Not Found");
        }
        else {
            // console.log(record);
            record = await Department.findOneAndUpdate(
                {
                    _id:_id
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
        response.status(400).send("Server Error occured");
    }
});

// ROUTE 4: Department Wise -> POST request "admin/placements/department/delete"
router.delete("/department/delete", async (request, response) => {
    try {
        let year = request.body.Year;
        let department = request.body.Department;
        let record = await Department.find({ Year: year, Department: department });
        if (record.length === 0) {
            response.status(400).send("Record not found");
        }
        else {
            record = await Department.findOneAndDelete({ Year: year, Department: department });
            response.status(200).json({ "success": "Record deleted successfully" });
        }

    }
    catch (err) {
        response.status(400).send("Server Error occured");
    }
});

module.exports = router;


