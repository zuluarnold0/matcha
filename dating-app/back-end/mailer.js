require('dotenv').config();
const nodemailer = require('nodemailer');

/*const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});
*/

var email_smtp = nodemailer.createTransport({      
    host: "smtp.gmail.com",
    auth: {
      type: "login", // default
      user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
  });

module.exports = {
    sendEmail(from, to, subject, html) {
        return email_smtp.sendMail({ from, subject, to, html }, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}