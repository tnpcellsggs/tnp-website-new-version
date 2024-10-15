import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB limit
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [linkedinId, setLinkedinId] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        // Check file size
        if (file && file.size > MAX_FILE_SIZE) {
            alert(`File size should not exceed ${MAX_FILE_SIZE / 1024 / 1024} MB.`);
            setImage(null); 
        } else {
            setImage(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!image) {
            alert('Please select an image before submitting.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64String = reader.result;

            const userData = {
                name,
                email,
                phoneNo,
                linkedinId,
                post,
                image: base64String
            };

            console.log('User Data:', userData);

            try {
                const response = await axios.post('https://tnp-website-server.vercel.app/teamform/add', userData, {
                    headers: { 'Content-Type': 'application/json' },
                });
                alert('User data and image submitted successfully!');
            } catch (error) {
                console.error('Error submitting user data', error);
                alert('Error submitting user data');
            }
        };

        reader.readAsDataURL(image);
    };

    return (
        <div className="w-[95%] mx-auto my-4 border-2 h-5/6 nav-light-shadows rounded-xl p-6">
        <h2 className="pt-4 text-3xl text-center text-black">New Team Member</h2>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-6 space-y-4">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center">
                {image && (
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Profile Preview"
                        className="w-[150px] h-[150px] object-cover rounded-full shadow-lg mb-4"
                    />
                )}
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" 
                    required 
                />
            </div>

            {/* Name Input */}
            <div className="w-[80%]">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Email Input */}
            <div className="w-[80%]">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Phone Number Input */}
            <div className="w-[80%]">
                <input
                    type="text"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    placeholder="Enter Phone Number"
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* LinkedIn ID Input */}
            <div className="w-[80%]">
                <input
                    type="text"
                    value={linkedinId}
                    onChange={(e) => setLinkedinId(e.target.value)}
                    placeholder="Enter LinkedIn ID"
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Post Input */}
            <div className="w-[80%]">
                <input
                    type="text"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    placeholder="Enter Post"
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Submit
            </button>
        </form>
    </div>
    );
};

export default UserForm;
