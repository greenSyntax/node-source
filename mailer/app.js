var mailer = require('nodemailer');

var transpoter = mailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'don.coolbuddy.xxx@gmail.com',
    pass: 'xmetasploit'

  }
});

var options = {
  from: 'don.coolbuddy.xxx@gmail.com',
  to: 'abhishek.ravi@innovationm.com',
  subject: 'Hi Abhishek',
  text: 'This is my Text.'
};

transpoter.sendMail(options, function(error, info){

  console.log("Sending...");

  if(error){
    console.log(error);
  }
  else{
    console.log("Mail Send"+info.response);
    //console.log(info);
  }
});
