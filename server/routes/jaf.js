// imports for the endpoints

const router = require("express").Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const multer = require('multer');
const mime = require('mime-types');
const path = require('path');
require('dotenv').config();

// storage to store the uploaded files locally to send after the request is fullfilled
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, './tmp/');
    let tempDir = '/tmp';
    cb(null, path.join(tempDir, ''));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


// uploads the files to the local storage
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }
});

// Authorization for the the access
const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENT_ID, process.env.OAUTH_CLIENT_SECRET, process.env.REDIRECT_URI);

// sets the credentials
oAuth2Client.setCredentials({
  access_token: process.env.OAUTH_ACCESS_TOKEN
});

// 1) endpoint where the form is uploaded as a file
// same name as formData.append('file', file); i.e 'file' as 1st parameter
router.post('/uploaded', upload.array('file'), async (req, res) => {
  // console.log( path.join(__dirname, '../uploads'))
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    // generates the access token after it expires
    const accessTokens = await oAuth2Client.getAccessToken();

    // email contents as request from the frontend
    const emailFrom = req.body.from;
    const emailSub = req.body.subject;
    const emailSpecifications = req.body.specifications;

    // creates a email transfer protocol (smtp)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USERNAME,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessTokens
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    // files variable as attatchment
    const filesAttatched = req.files.map((file) => {
      return {
        filename: file.originalname,
        path: file.path,
        // path: file.id.toString(), // uses the file ID from GridFS
        encoding: 'base64',
        contentType: mime.lookup(file.originalname) || 'application/octet-stream',
        contentDisposition: 'attachment',
      }
    });

    // mail objects
    const mailOptions = {
      // to: 'shivharehariom68@gmail.com',
      from: `Website Redirected <2021bit046@sggs.ac.in>`,
      to: 'tnpcell@sggs.ac.in',
      subject: emailSub,
      text: `This mail is redirected from <2021bit046@sggs.ac.in>\n\nFrom: ${emailFrom}\n\n\nMessage: ${emailSpecifications}\n\n\nPlease find the attachment`,
      attachments: filesAttatched,
      // replyTo: emailFrom, // Set the replyTo field with the dynamic email
    }

    // verifies the mail transport protocol
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    // sends the mail
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error, "Error sending email");
          reject(error, `Error sending email, ${error.message}`);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          resolve(info, "File uploaded and email sent successfully");
          res.status(200).send('File uploaded and email sent successfully');
        }
      });
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Some error occured", path.join(__dirname, '../uploads'));
  }

});

// 2) endpoint where the form is submitted by fillin manually
router.post('/filled', upload.none(), async (req, res) => {
  try {
    // const accessToken_ = await oAuth2Client.getAccessToken();
    const accessTokens = await oAuth2Client.getAccessToken();
    let jafFormData = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USERNAME,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessTokens
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    const mailOptions = {
      // from: '2021bit046@sggs.ac.in',
      // to: 'shivharehariom68@gmail.com',
      from: `Website Redirected <2021bit046@sggs.ac.in>`,
      to: 'tnpcell@sggs.ac.in',
      subject: 'JAF For Recruitment',
      text: `This mail is redirected from <2021bit046@sggs.ac.in>\n\nFrom: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.anyMessage}\n\nJAF:\nAbout The Organisation:\n\nName of Organisation: ${jafFormData.nameOrg}\nPostal Address: ${jafFormData.postalAdd}\nWebsite Link(optional): ${jafFormData.websiteLink}\n\nJob Profile:\n\nJob Designation: ${jafFormData.jobDesig}\nJob Description: ${jafFormData.jobDesc}\nJob Location: ${jafFormData.jobLoc}\n\nType Of Organisation:\n${jafFormData.typeOfOrg}\n${jafFormData.typeOfOrgArea}\n\nIndustry Sector:\n${jafFormData.industrySector}\n${jafFormData.industrySectorArea}\n\nContact Details:\n\nHR Head:Name:${jafFormData.HRname}\nEmail:${jafFormData.HRemail}\nPhone:${jafFormData.HRnumber}\nMobile:${jafFormData.HRphone}\n\nFirst Person Contact:Name:${jafFormData.fstname}\nEmail:${jafFormData.fstemail}\nPhone:${jafFormData.fstnumber}\nMobile:${jafFormData.fstphone}\n\nSecond Person Contact:Name:${jafFormData.secname}\nEmail:${jafFormData.secemail}\nPhone:${jafFormData.secnumber}\nMobile:${jafFormData.secphone}\n\nSalary Break Up:\n\nCTC: ${jafFormData.ctc}\nStipend: ${jafFormData.stipend}\nBonus/Perks/Incentives: ${jafFormData.bonus}\n\nEligibility Criteria:\nCGPA: ${jafFormData.cgpa}\nXII %: ${jafFormData.secondaryEdu}\nX %: ${jafFormData.primaryEdu}\n\nSelection Process:\n${jafFormData.personalInterview}\n${jafFormData.selectionCriteria}\n\nRounds:${jafFormData.rounds}\nOffers:${jafFormData.offers}\nPeriod:${jafFormData.period}\n\nLogistics Requirements:\nBTech:\n${jafFormData.btechBranches}\n\nMTech:\n${jafFormData.mtechBranches}\n\n`,
    }

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error, "Error sending email");
          reject(error, "Error sending email");
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          resolve(info, "Email sent successfully");
          res.send('Email sent successfully');
        }
      });
    });
  }
  catch (err) {
    res.send("Some error occured");
  }

});

// 3) endpoint for company interest form
router.post('/interestForm', upload.none(), async (req, res) => {
  try {

    const accessTokens = await oAuth2Client.getAccessToken();
    let jafFormData = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USERNAME,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessTokens
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    const mailOptions = {
      // to: 'shivharehariom68@gmail.com',
      from: `Website Redirected <2021bit046@sggs.ac.in>`,
      to: 'tnpcell@sggs.ac.in',
      subject: 'Company Interest Form',
      text: `This mail is redirected from <2021bit046@sggs.ac.in>\n\nFrom: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.specifications}\n\nCompany Details:\n\nCompany Name: ${jafFormData.companyName}\nOfficial Email-Id: ${jafFormData.companyEmail}\nCompany's Website Link(optional): ${jafFormData.websiteLink}\n\nContact Information:\n\nHR Mobile No: ${jafFormData.HRmobNo}\nAlternate Contact No: ${jafFormData.HRalterateNo}\nHR Mail ID: ${jafFormData.HRmail}\n\n`,
    }
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });


    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error, "Error sending email");
          reject(error, "Error sending email");
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          resolve(info, "Email sent successfully");
          res.send('Email sent successfully');
        }
      });
    });
  }
  catch (err) {
    res.send("some error occured");
  }

});

module.exports = router;