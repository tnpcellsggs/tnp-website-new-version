// imports for the endpoints

const router = require("express").Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const multer = require('multer');
const mime = require('mime-types');
const path = require('path');
require('dotenv').config();

// disk storage of server to store the uploaded files locally to send after the request is fullfilled and deletes file after request is fulfilled
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
      to: 'shivharehariom68@gmail.com',
      from: `Website Redirected <2021bit046@sggs.ac.in>`,
      // to: 'tnpcell@sggs.ac.in',
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
      from: `Website Redirected <2021bit046@sggs.ac.in>`,
      to: 'shivharehariom68@gmail.com',
      // to: 'tnpcell@sggs.ac.in',
      subject: 'JAF For Recruitment',
      // text: `This mail is redirected from <2021bit046@sggs.ac.in>\n\nFrom: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.anyMessage}\n\nJAF:\nAbout The Organisation:\n\nName of Organisation: ${jafFormData.nameOrg}\nPostal Address: ${jafFormData.postalAdd}\nWebsite Link(optional): ${jafFormData.websiteLink}\n\nJob Profile:\n\nJob Designation: ${jafFormData.jobDesig}\nJob Description: ${jafFormData.jobDesc}\nJob Location: ${jafFormData.jobLoc}\n\nType Of Organisation:\n${jafFormData.typeOfOrg}\n${jafFormData.typeOfOrgArea}\n\nIndustry Sector:\n${jafFormData.industrySector}\n${jafFormData.industrySectorArea}\n\nContact Details:\n\nHR Head:Name:${jafFormData.HRname}\nEmail:${jafFormData.HRemail}\nPhone:${jafFormData.HRnumber}\nMobile:${jafFormData.HRphone}\n\nFirst Person Contact:Name:${jafFormData.fstname}\nEmail:${jafFormData.fstemail}\nPhone:${jafFormData.fstnumber}\nMobile:${jafFormData.fstphone}\n\nSecond Person Contact:Name:${jafFormData.secname}\nEmail:${jafFormData.secemail}\nPhone:${jafFormData.secnumber}\nMobile:${jafFormData.secphone}\n\nSalary Break Up:\n\nCTC: ${jafFormData.ctc}\nStipend: ${jafFormData.stipend}\nBonus/Perks/Incentives: ${jafFormData.bonus}\n\nEligibility Criteria:\nCGPA: ${jafFormData.cgpa}\nXII %: ${jafFormData.secondaryEdu}\nX %: ${jafFormData.primaryEdu}\n\nSelection Process:\n${jafFormData.personalInterview}\n${jafFormData.selectionCriteria}\n\nRounds:${jafFormData.rounds}\nOffers:${jafFormData.offers}\nPeriod:${jafFormData.period}\n\nLogistics Requirements:\nBTech:\n${jafFormData.btechBranches}\n\nMTech:\n${jafFormData.mtechBranches}\n\n`,
      html: `<div style="color: #f8f8f2; background-color: #272822; font-family: 'Droid Sans Mono', 'monospace', monospace; font-weight: normal; font-size: 14px; line-height: 19px; white-space: pre;">
      <div><strong><span style="color: #f8f8f2;">This mail is redirected from &lt;</span><span style="color: #f92672;">2021bit046@sggs.ac.in</span><span style="color: #f8f8f2;">&gt;</span></strong></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> From: ${jafFormData.ThisisFrom}</span></strong></div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Message:</span></strong></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.anyMessage}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> JAF:</span></strong></div>
      <div><strong><span style="color: #f8f8f2;"> About The Organisation:</span></strong></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> Name of Organisation<strong>:</strong> ${jafFormData.nameOrg}</span></div>
      <div><span style="color: #f8f8f2;"> Postal Address: ${jafFormData.postalAdd}</span></div>
      <div><span style="color: #f8f8f2;"> Website Link(optional): ${jafFormData.websiteLink}</span></div>
      <div><strong>&nbsp;</strong></div>
      <div><strong><span style="color: #f8f8f2;"> Job Profile:</span></strong></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> Job Designation: ${jafFormData.jobDesig}</span></div>
      <div><span style="color: #f8f8f2;"> Job Description: ${jafFormData.jobDesc}</span></div>
      <div><span style="color: #f8f8f2;"> Job Location: ${jafFormData.jobLoc}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Type Of Organisation:</span></strong></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.typeOfOrg}</span></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.typeOfOrgArea}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Industry Sector:</span></strong></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.industrySector}</span></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.industrySectorArea}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Contact Details:</span></strong></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> HR Head:Name:${jafFormData.HRname}</span></div>
      <div><span style="color: #f8f8f2;"> Email:${jafFormData.HRemail}</span></div>
      <div><span style="color: #f8f8f2;"> Phone:${jafFormData.HRnumber}</span></div>
      <div><span style="color: #f8f8f2;"> Mobile:${jafFormData.HRphone}</span></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> First Person Contact:Name:${jafFormData.fstname}</span></div>
      <div><span style="color: #f8f8f2;"> Email:${jafFormData.fstemail}</span></div>
      <div><span style="color: #f8f8f2;"> Phone:${jafFormData.fstnumber}</span></div>
      <div><span style="color: #f8f8f2;"> Mobile:${jafFormData.fstphone}</span></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> Second Person Contact:Name:${jafFormData.secname}</span></div>
      <div><span style="color: #f8f8f2;"> Email:${jafFormData.secemail}</span></div>
      <div><span style="color: #f8f8f2;"> Phone:${jafFormData.secnumber}</span></div>
      <div><span style="color: #f8f8f2;"> Mobile:${jafFormData.secphone}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Salary Break Up:</span></strong></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> CTC: ${jafFormData.ctc}</span></div>
      <div><span style="color: #f8f8f2;"> Stipend: ${jafFormData.stipend}</span></div>
      <div><span style="color: #f8f8f2;"> Bonus/Perks/Incentives: ${jafFormData.bonus}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Eligibility Criteria:</span></strong></div>
      <div><span style="color: #f8f8f2;"> CGPA: ${jafFormData.cgpa}</span></div>
      <div><span style="color: #f8f8f2;"> XII %: ${jafFormData.secondaryEdu}</span></div>
      <div><span style="color: #f8f8f2;"> X %: ${jafFormData.primaryEdu}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Selection Process:</span></strong></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.personalInterview}</span></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.selectionCriteria}</span></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> Rounds:${jafFormData.rounds}</span></div>
      <div><span style="color: #f8f8f2;"> Offers:${jafFormData.offers}</span></div>
      <div><span style="color: #f8f8f2;"> Period:${jafFormData.period}</span></div>
      <div>&nbsp;</div>
      <div><strong><span style="color: #f8f8f2;"> Logistics Requirements:</span></strong></div>
      <div><span style="color: #f8f8f2;"> BTech:</span></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.btechBranches}</span></div>
      <div>&nbsp;</div>
      <div><span style="color: #f8f8f2;"> MTech:</span></div>
      <div><span style="color: #f8f8f2;"> ${jafFormData.mtechBranches}</span></div>
      </div>`
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
      to: 'shivharehariom68@gmail.com',
      from: `Website Redirected <2021bit046@sggs.ac.in>`,
      // to: 'tnpcell@sggs.ac.in',
      subject: 'Company Interest Form',
      // text: `This mail is redirected from <2021bit046@sggs.ac.in>\n\nFrom: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.specifications}\n\nCompany Details:\n\nCompany Name: ${jafFormData.companyName}\nOfficial Email-Id: ${jafFormData.companyEmail}\nCompany's Website Link(optional): ${jafFormData.websiteLink}\n\nContact Information:\n\nHR Mobile No: ${jafFormData.HRmobNo}\nAlternate Contact No: ${jafFormData.HRalterateNo}\nHR Mail ID: ${jafFormData.HRmail}\n\n`,
      html: `
      <div style="color: #f8f8f2;background-color: #272822;font-size: 14px;">
          <span style="color: #f8f8f2;"><strong>This mail is redirected from &lt;</strong></span>
          <span style="color: #f92672;"><strong>2021bit046@sggs.ac.in</strong></span><span
              style="color: #f8f8f2;"><strong>&gt;</strong></span><br><span style="color: #f8f8f2;">&nbsp; &nbsp;
              <strong>From</strong>: ${jafFormData.ThisisFrom}</span><br><span style="color: #f8f8f2;">&nbsp; &nbsp;
              <strong></strong><span class="fr-clone" data-id="0" data-type="true"
                  style="display: none; line-height: 0;"></span><strong>Message:</strong><span class="fr-clone"
                  data-id="0" data-type="false" style="display: none; line-height: 0;"></span></span><span
              style="color: #f8f8f2;">&nbsp; &nbsp; ${jafFormData.specifications}</span><br><span
              style="color: #f8f8f2;">&nbsp; &nbsp; <strong>Company Details:</strong></span><br><span
              style="color: #f8f8f2;">&nbsp; &nbsp; <strong>Company Name</strong>:
              ${jafFormData.companyName}</span><span style="color: #f8f8f2;">&nbsp; &nbsp; Official Email-Id:
              ${jafFormData.companyEmail}</span><span style="color: #f8f8f2;">&nbsp; &nbsp; <strong>Company&apos;s
                  Website Link(optional):</strong> ${jafFormData.websiteLink}</span><br><span
              style="color: #f8f8f2;">&nbsp; &nbsp; <strong>Contact
                  Informatio</strong><strong>n</strong>:</span><br><span style="color: #f8f8f2;">&nbsp; <strong>&nbsp;
                  HR Mobile No:</strong> ${jafFormData.HRmobNo}</span><span style="color: #f8f8f2;">&nbsp; &nbsp;
              Alternate Contact No: ${jafFormData.HRalterateNo}</span><span style="color: #f8f8f2;">&nbsp; &nbsp; HR
              Mail ID: ${jafFormData.HRmail}</span><br><br>
      </div>`
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