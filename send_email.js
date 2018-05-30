var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deadpoet911@gmail.com',
    pass: '123456abAB'
  }
});

var mailOptions = {
  from: 'deadpoet911@gmail.com',
  to: 'gauravgupta93@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
