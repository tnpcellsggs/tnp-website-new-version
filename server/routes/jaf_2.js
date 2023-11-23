// const router = require("express").Router();
// const formData = require('form-data');
// require('dotenv').config();
// const Mailgun = require('mailgun.js');
// // const mailgun = new Mailgun(formData);
// // const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere' });

// const API_KEY = process.env.API_KEY;
// const DOMAIN = process.env.DOMAIN;

// // import formData from 'form-data';
// // import Mailgun from 'mailgun.js';

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({ username: 'api', key: API_KEY });
// console.log(process.env.MAILGUN_API_KEY)
// router.post('/interestForm', async (req, res) => {

//     const messageData = {
//         from: 'Excited User <2021bit046@sggs.ac.in>',
//         to: 'shivharehariom68@gmail.com',
//         subject: 'Hello',
//         text: 'Testing some Mailgun awesomeness!'
//     };

//     client.messages.create(DOMAIN, messageData)
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((err) => {
//             console.error(err);
//         });

// });

// module.exports = router;