var nodemailer = require('nodemailer');


function SendEmail(fileName){
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
  subject: 'File Uploaded using Node.js',
  text: 'File Uploaded' + fileName
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
};
//SendEmail()
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/gaurav/NodeJS/FileUploadFolder/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
      SendEmail(files.filetoupload.name);
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

