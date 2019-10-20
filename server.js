var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noha.gazzaz@gmail.com',
        pass: 'Nahn00ha'
    }
});

var mailOptions = {
    from: 'karolann.stark8@ethereal.email',
    to: 'karolann.stark8@ethereal.email',
    subject: 'Test Nodemailer with Mailtrap',

    html: '<h1>Attachments</h1>',

};
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});

export function testing( () => {
    console.log('ok')
});