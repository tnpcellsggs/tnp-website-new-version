const router = require("express").Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const mime = require('mime-types');

// const host = process.env.REACT_APP_REQURL;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }
});

// 1) endpoint where the form is uploaded as a file
// same name as formData.append('file', file); i.e 'file' as 1st parameter
router.post('/uploaded', upload.array('file'), async (req, res) => {
  res.send("req");

  const emailFrom = req.body.from;
  const emailSub = req.body.subject;
  const emailSpecifications = req.body.specifications;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_USER,
      pass: process.env.REACT_APP_PASSWD
    }
  });

  const filesAttatched = req.files.map((file) => {
    return {
      filename: file.originalname,
      path: file.path,
      encoding: 'base64',
      contentType: mime.lookup(file.originalname) || 'application/octet-stream',
      contentDisposition: 'attachment',
    }
  });

  const mailOptions = {
    from: `To T&P cell <2021bit046@sggs.ac.in>`,
    to: 'tnpcell@sggs.ac.in',
    subject: emailSub,
    text: `From: ${emailFrom}\n\n\nMessage: ${emailSpecifications}\n\n\nPlease find the attachment`,
    attachments: filesAttatched,
    // replyTo: emailFrom, // Set the replyTo field with the dynamic email
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('File uploaded and email sent successfully');
    }
  });

});

// 2) endpoint where the form is submitted by fillin manually
router.post('/filled', upload.none(), async (req, res) => {
  res.send("filled");
  let jafFormData = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_USER,
      pass: process.env.REACT_APP_PASSWD
    },
  });

  const mailOptions = {
    from: `To T&P cell <2021bit046@sggs.ac.in>`,
    // from: '2021bit046@sggs.ac.in',
    to: 'tnpcell@sggs.ac.in',
    subject: 'JAF For Recruitment',
    text: `From: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.anyMessage}\n\nJAF:\nAbout The Organisation:\n\nName of Organisation: ${jafFormData.nameOrg}\nPostal Address: ${jafFormData.postalAdd}\nWebsite Link(optional): ${jafFormData.websiteLink}\n\nJob Profile:\n\nJob Designation: ${jafFormData.jobDesig}\nJob Description: ${jafFormData.jobDesc}\nJob Location: ${jafFormData.jobLoc}\n\nType Of Organisation:\n${jafFormData.typeOfOrg}\n${jafFormData.typeOfOrgArea}\n\nIndustry Sector:\n${jafFormData.industrySector}\n${jafFormData.industrySectorArea}\n\nContact Details:\n\nHR Head:Name:${jafFormData.HRname}\nEmail:${jafFormData.HRemail}\nPhone:${jafFormData.HRnumber}\nMobile:${jafFormData.HRphone}\n\nFirst Person Contact:Name:${jafFormData.fstname}\nEmail:${jafFormData.fstemail}\nPhone:${jafFormData.fstnumber}\nMobile:${jafFormData.fstphone}\n\nSecond Person Contact:Name:${jafFormData.secname}\nEmail:${jafFormData.secemail}\nPhone:${jafFormData.secnumber}\nMobile:${jafFormData.secphone}\n\nSalary Break Up:\n\nCTC: ${jafFormData.ctc}\nStipend: ${jafFormData.stipend}\nBonus/Perks/Incentives: ${jafFormData.bonus}\n\nEligibility Criteria:\nCGPA: ${jafFormData.cgpa}\nXII %: ${jafFormData.secondaryEdu}\nX %: ${jafFormData.primaryEdu}\n\nSelection Process:\n${jafFormData.personalInterview}\n${jafFormData.selectionCriteria}\n\nRounds:${jafFormData.rounds}\nOffers:${jafFormData.offers}\nPeriod:${jafFormData.period}\n\nLogistics Requirements:\nBTech:\n${jafFormData.btechBranches}\n\nMTech:\n${jafFormData.mtechBranches}\n\n`,
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('File uploaded and email sent successfully');
    }
  });

});

// 3) endpoint for company interest form
router.post('/interestForm', upload.none(), async (req, res) => {
  res.send("interestForm");
  let jafFormData = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_USER,
      pass: process.env.REACT_APP_PASSWD
    },
  });

  const mailOptions = {
    from: `To T&P cell <2021bit046@sggs.ac.in>`,
    // from: '2021bit046@sggs.ac.in',
    to: 'tnpcell@sggs.ac.in',
    subject: 'Company Interest Form',
    text: `From: ${jafFormData.ThisisFrom}\n\n\nMessage:\n${jafFormData.specifications}\n\nCompany Details:\n\nCompany Name: ${jafFormData.companyName}\nOfficial Email-Id: ${jafFormData.companyEmail}\nCompany's Website Link(optional): ${jafFormData.websiteLink}\n\nContact Information:\n\nHR Mobile No: ${jafFormData.HRmobNo}\nAlternate Contact No: ${jafFormData.HRalterateNo}\nHR Mail ID: ${jafFormData.HRmail}\n\n`,
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('File uploaded and email sent successfully');
    }
  });

});

module.exports = router;