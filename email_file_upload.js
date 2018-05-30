var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var nodemailer = require('nodemailer');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var emailEvent = function(){

};

eventEmitter.on('emailEvent', emailEvent);



http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/gaurav/NodeJS/FileUploadFolder/' + files.filetoupload.name;
      console.log('new path', newpath)
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
      console.log('Sendigg email after file upload')
      eventEmitter.emit('emailEvent')
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

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deadpoet911@gmail.com',
    pass: '123456@abAB1'
  }
});

var mailOptions = {
  from: 'deadpoet911@gmail.com',
  to: 'gauravgupta93@gmail.com',
  subject: 'Uploaded file successfully',
  text: 'Uploaded file successfully'
};

var emailEvent = function(){
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
}var nodemailer = require('nodemailer');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var emailEvent = function(){

};

eventEmitter.on('emailEvent', emailEvent);



http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/gaurav/NodeJS/FileUploadFolder/' + files.filetoupload.name;
      console.log('new path', newpath)
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
      console.log('Sendigg email after file upload')
      eventEmitter.emit('emailEvent')
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

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deadpoet911@gmail.com',
    pass: '123456@abAB1'
  }
});

var mailOptions = {
  from: 'deadpoet911@gmail.com',
  to: 'gauravgupta93@gmail.com',
  subject: 'Uploaded file successfully',
  text: 'Uploaded file successfully'
};

var emailEvent = function(){
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
};
var nodemailer = require('nodemailer');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var emailEvent = function(){

};

eventEmitter.on('emailEvent', emailEvent);



http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/gaurav/NodeJS/FileUploadFolder/' + files.filetoupload.name;
      console.log('new path', newpath)
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
      console.log('Sendigg email after file upload')
      eventEmitter.emit('emailEvent')
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

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deadpoet911@gmail.com',
    pass: '123456@abAB1'
  }
});

var mailOptions = {
  from: 'deadpoet911@gmail.com',
  to: 'gauravgupta93@gmail.com',
  subject: 'Uploaded file successfully',
  text: 'Uploaded file successfully'
};

var emailEvent = function(){
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
};
;

