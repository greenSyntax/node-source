var mailer = require('nodemailer');

var transpoter = mailer.createTransport({
  host: 'lax.crystalregistry.com',
  port: 587,
  secure: false,
  auth: {
      user: 'support@greensyntax.co.in',
      pass: 'xxx'// Your password
  }
});

// Mail Options
var options = {
  from: 'support@greensyntax.co.in',
  to: 'abhishek.ravi@innovationm.com',
  subject: 'This is a Subject',
  text: 'This is my Text.'
};

transpoter.sendMail(options, function(error, info){

  console.log("Sending...");

  if(error){
    return console.log(error);
  }
  else{
    console.log("Mail Send"+info.response);
    console.log(info);
  }
});
