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
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
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

      from: `Website Redirected <${emailFrom}>`,
      // to: 'tnpcell@sggs.ac.in',
      to: "2021bit046@sggs.ac.in",
      subject: emailSub,
      text: `This mail is redirected from <tnpcellsggs@sggs.ac.in>\n\nFrom: ${emailFrom}\n\n\nMessage: ${emailSpecifications}\n\n\nPlease find the attachment`,
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

      from: `Website Redirected <${jafFormData.ThisisFrom}>`,

      // to: 'tnpcell@sggs.ac.in',
      to: "2021bit046@sggs.ac.in",
      subject: 'JAF For Recruitment',
      // text: `This mail is redirected from <tnpcellsggs@sggs.ac.in>\n\nFrom: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.anyMessage}\n\nJAF:\nAbout The Organisation:\n\nName of Organisation: ${jafFormData.nameOrg}\nPostal Address: ${jafFormData.postalAdd}\nWebsite Link(optional): ${jafFormData.websiteLink}\n\nJob Profile:\n\nJob Designation: ${jafFormData.jobDesig}\nJob Description: ${jafFormData.jobDesc}\nJob Location: ${jafFormData.jobLoc}\n\nType Of Organisation:\n${jafFormData.typeOfOrg}\n${jafFormData.typeOfOrgArea}\n\nIndustry Sector:\n${jafFormData.industrySector}\n${jafFormData.industrySectorArea}\n\nContact Details:\n\nHR Head:Name:${jafFormData.HRname}\nEmail:${jafFormData.HRemail}\nPhone:${jafFormData.HRnumber}\nMobile:${jafFormData.HRphone}\n\nFirst Person Contact:Name:${jafFormData.fstname}\nEmail:${jafFormData.fstemail}\nPhone:${jafFormData.fstnumber}\nMobile:${jafFormData.fstphone}\n\nSecond Person Contact:Name:${jafFormData.secname}\nEmail:${jafFormData.secemail}\nPhone:${jafFormData.secnumber}\nMobile:${jafFormData.secphone}\n\nSalary Break Up:\n\nCTC: ${jafFormData.ctc}\nStipend: ${jafFormData.stipend}\nBonus/Perks/Incentives: ${jafFormData.bonus}\n\nEligibility Criteria:\nCGPA: ${jafFormData.cgpa}\nXII %: ${jafFormData.secondaryEdu}\nX %: ${jafFormData.primaryEdu}\n\nSelection Process:\n${jafFormData.personalInterview}\n${jafFormData.selectionCriteria}\n\nRounds:${jafFormData.rounds}\nOffers:${jafFormData.offers}\nPeriod:${jafFormData.period}\n\nLogistics Requirements:\nBTech:\n${jafFormData.btechBranches}\n\nMTech:\n${jafFormData.mtechBranches}\n\n`,
      html: `<!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          margin: 0;
                          padding: 0;
                          background-color: #ffffff;
                          color: #0a0a02;
                      }
                      .container {
                          padding: 20px;
                          background-color: #272822;
                      }
                      .content {
                          background-color: #ffffff;
                          padding: 20px;
                          border-radius: 8px;
                          font-size: 14px;
                          line-height: 1.5;
                      }
                      h2 {
                          color: #0a0a02;
                      }
                      .highlight {
                          color: #f92672;
                      }
                      .section-title {
                          margin-top: 20px;
                          font-size: 18px;
                          color: #0a0a02;
                      }
                      .info {
                          margin: 10px 0;
                      }
                      @media (prefers-color-scheme: dark) {
                          body {
                              background-color: #121212;
                              color: #e0e0e0;
                          }
                          .container {
                              background-color: #2c2c2c;
                          }
                          .content {
                              background-color: #333333;
                              color: #e0e0e0;
                          }
                      }
                      @media (max-width: 600px) {
                          body {
                              font-size: 16px;
                          }
                          .section-title {
                              font-size: 16px;
                          }
                      }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <div class="content">
                          <div><strong><span style="color: #0a0a02;">This mail is redirected from &lt;</span><span class="highlight">tnpcellsggs@sggs.ac.in</span><span style="color: #0a0a02;">&gt;</span></strong></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">From: ${jafFormData.ThisisFrom}</span></strong></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Message:</span></strong></div>
                          <div><span style="color: #0a0a02;">${jafFormData.anyMessage}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">JAF:</span></strong></div><br>
                          <div><strong><span style="color: #0a0a02;">About The Organisation:</span></strong></div>
                          <br>
                          <div><span style="color: #0a0a02;">Name of Organisation<strong>:</strong> ${jafFormData.nameOrg}</span></div>
                          <div><span style="color: #0a0a02;">Postal Address: ${jafFormData.postalAdd}</span></div>
                          <div><span style="color: #0a0a02;">Website Link (optional): ${jafFormData.websiteLink}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Job Profile:</span></strong></div>
                          <br>
                          <div><span style="color: #0a0a02;">Job Designation: ${jafFormData.jobDesig}</span></div>
                          <div><span style="color: #0a0a02;">Job Description: ${jafFormData.jobDesc}</span></div>
                          <div><span style="color: #0a0a02;">Job Location: ${jafFormData.jobLoc}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Type Of Organisation:</span></strong></div>
                          <br>
                          <div><span style="color: #0a0a02;">${jafFormData.typeOfOrg}</span></div><br>
                          <div><span style="color: #0a0a02;">${jafFormData.typeOfOrgArea}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Industry Sector:</span></strong></div>
                          <div><span style="color: #0a0a02;">${jafFormData.industrySector}</span></div>
                          <div><span style="color: #0a0a02;">${jafFormData.industrySectorArea}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Contact Details:</span></strong></div>
                          <br>
                          <div><span style="color: #0a0a02;">HR Head: Name: ${jafFormData.HRname}</span></div>
                          <div><span style="color: #0a0a02;">Email: ${jafFormData.HRemail}</span></div>
                          <div><span style="color: #0a0a02;">Phone: ${jafFormData.HRnumber}</span></div>
                          <div><span style="color: #0a0a02;">Mobile: ${jafFormData.HRphone}</span></div>
                          <br>
                          <div><span style="color: #0a0a02;">First Person Contact: Name: ${jafFormData.fstname}</span></div>
                          <div><span style="color: #0a0a02;">Email: ${jafFormData.fstemail}</span></div>
                          <div><span style="color: #0a0a02;">Phone: ${jafFormData.fstnumber}</span></div>
                          <div><span style="color: #0a0a02;">Mobile: ${jafFormData.fstphone}</span></div>
                          <br>
                          <div><span style="color: #0a0a02;">Second Person Contact: Name: ${jafFormData.secname}</span></div>
                          <div><span style="color: #0a0a02;">Email: ${jafFormData.secemail}</span></div>
                          <div><span style="color: #0a0a02;">Phone: ${jafFormData.secnumber}</span></div>
                          <div><span style="color: #0a0a02;">Mobile: ${jafFormData.secphone}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Salary Break Up:</span></strong></div>
                          <br>
                          <div><span style="color: #0a0a02;">CTC: ${jafFormData.ctc}</span></div>
                          <div><span style="color: #0a0a02;">Stipend: ${jafFormData.stipend}</span></div>
                          <div><span style="color: #0a0a02;">Bonus/Perks/Incentives: ${jafFormData.bonus}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Eligibility Criteria:</span></strong></div>
                          <div><span style="color: #0a0a02;">CGPA: ${jafFormData.cgpa}</span></div>
                          <div><span style="color: #0a0a02;">XII %: ${jafFormData.secondaryEdu}</span></div>
                          <div><span style="color: #0a0a02;">X %: ${jafFormData.primaryEdu}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Selection Process:</span></strong></div>
                          <div><span style="color: #0a0a02;">${jafFormData.personalInterview}</span></div>
                          <div><span style="color: #0a0a02;">${jafFormData.selectionCriteria}</span></div>
                          <br>
                          <div><span style="color: #0a0a02;">Rounds: ${jafFormData.rounds}</span></div>
                          <div><span style="color: #0a0a02;">Offers: ${jafFormData.offers}</span></div>
                          <div><span style="color: #0a0a02;">Period: ${jafFormData.period}</span></div>
                          <br>
                          <div><strong><span style="color: #0a0a02;">Logistics Requirements:</span></strong></div>
                          <div><span style="color: #0a0a02;">BTech:</span></div>
                          <div><span style="color: #0a0a02;">${jafFormData.btechBranches}</span></div>
                          <br>
                          <div><span style="color: #0a0a02;">MTech:</span></div>
                          <div><span style="color: #0a0a02;">${jafFormData.mtechBranches}</span></div>
                      </div>
                  </div>
              </body>
              </html>
`
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
    console.log(jafFormData);

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

      from: `Website Redirected <${jafFormData.ThisisFrom}>`,
      // to: 'tnpcell@sggs.ac.in',
      to: "2021bit046@sggs.ac.in",
      subject: 'Company Interest Form',
      // text: `This mail is redirected from <tnpcellsggs@sggs.ac.in>\n\nFrom: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.specifications}\n\nCompany Details:\n\nCompany Name: ${jafFormData.companyName}\nOfficial Email-Id: ${jafFormData.companyEmail}\nCompany's Website Link(optional): ${jafFormData.websiteLink}\n\nContact Information:\n\nHR Mobile No: ${jafFormData.HRmobNo}\nAlternate Contact No: ${jafFormData.HRalterateNo}\nHR Mail ID: ${jafFormData.HRmail}\n\n`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #ffffff;
                  color: #000000;
              }
              .container {
                  padding: 20px;
                  background-color: #e1eaeb;
              }
              .content {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
              }
              h2 {
                  color: #0a0a02;
              }
              .highlight {
                  color: #f92672;
              }
              .section-title {
                  margin-top: 20px;
                  font-size: 18px;
                  color: #0a0a02;
              }
              .info {
                  margin: 10px 0;
              }
              @media (prefers-color-scheme: dark) {
                  body {
                      background-color: #121212;
                      color: #e0e0e0;
                  }
                  .container {
                      background-color: #2c2c2c;
                  }
                  .content {
                      background-color: #333333;
                      color: #e0e0e0;
                  }
              }
              @media (max-width: 600px) {
                  body {
                      font-size: 16px;
                  }
                  .section-title {
                      font-size: 16px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="content">
                  <span><strong>This mail is redirected from &lt;</strong></span>
                  <span class="highlight"><strong>tnpcellsggs@sggs.ac.in</strong></span>
                  <span><strong>&gt;</strong></span>
                  <br><br>
                  <div class="info"><strong>From:</strong> <i>${jafFormData.ThisisFrom}</i></div>
                  
                  <h2>Company Details:</h2>
                  <div class="info">Company Name: <i>${jafFormData.companyName}</i></div>
                  <div class="info">Official Email-Id: <i>${jafFormData.companyEmail}</i></div>
                  <div class="info">Company's Website Link: <i>${jafFormData.websiteLink}</i></div>

                  <h2>Contact Information:</h2>
                  <div class="info">HR Mobile No: <i>${jafFormData.HRmobNo}</i></div>
                  <div class="info">HR Alternate No: <i>${jafFormData.HRalterateNo}</i></div>
                  <div class="info">HR Email: <i>${jafFormData.HRmail}</i></div>
                  
                  <h2>Any Specifications:</h2>
                  <div class="info">Specifications: <i>${jafFormData.specifications}</i></div>
              </div>
          </div>
      </body>
      </html>
`

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
    res.status(535).send(err);
  }

});

module.exports = router;