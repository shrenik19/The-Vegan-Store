var nodemailer = require('nodemailer');

var demo={

 sendMail:function(demo,callback){   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kavishshah84@gmail.com',
    pass: '47466768'
  }
});

var mailOptions = {
  from: 'kavishshah84@gmail.com',
  to: demo.to,
  subject:demo.subject,
  text: demo.message
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
}
module.exports=demo;