const express = require('express');
const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
const router = express.Router();
const Team = require('../models/team');

dotenv.config(); 
// Load environment variables

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware to parse JSON data
router.use(express.json());

// POST route to handle user form submission
router.post('/add', async (req, res) => {
    try {
        const { name, email, phoneNo, linkedinId, post, image } = req.body;
        console.log(req.body);

        let imageUrl = '';

        // Check if the image is provided and decode it
        if (image) {
            // Remove the metadata from the Base64 string
            const base64Image = image.split(';base64,').pop(); // Get the base64 part

            // Upload the image to Cloudinary
            const result = await cloudinary.uploader.upload(`data:image/jpg;base64,${base64Image}`, {
                resource_type: 'image',
            });

            imageUrl = result.secure_url; // Assign the uploaded image URL
        }

        // Create a new team member record
        const newMember = new Team({
            name,
            imageLink: imageUrl,
            phoneNo,
            emailId: email,
            linkedinId,
            post,
        });

        // Save the new member to the database
        await newMember.save();
        console.log(newMember);
        res.status(200).json({ message: 'User added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error adding user' });
    }
});

module.exports = router;
