const mongoose = require('mongoose');

// Define the schema for each member
const memberSchema = new mongoose.Schema({
    name: { type: String,  },
    
    imageLink: { type: String }, // Assuming imageLink is a URL or filename
    phoneNo: { type: String},
    emailId: { type: String},
    linkedinId: { type: String  },
    post: { type: String},
});

// Define the schema for each post


// Define the schema for the entire team structure


// Create and export the model
const Team = mongoose.model('Team', memberSchema);

module.exports = Team;
