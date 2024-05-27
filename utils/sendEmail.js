// const nodeMailer = require("nodemailer");
// // options are pass as arg from userController
// const sendEmail = async (options) => {

//     const transporter = nodeMailer.createTransport({
//           //Simple Mail Transfer Protocol (SMTP) (write any thing but that make sense. its env fi)
//         host: process.env.SMTP_HOST, // "smtp.gmail.com"
//         port: process.env.SMTP_PORT,  // 465,
//         service: process.env.SMTP_SERVICE, // gmail
//         auth: {
//             // this our email and pass wich one we use for sending mail
//             user: process.env.SMTP_MAIL,
//             pass: process.env.SMTP_PASSWORD,
//         },
//     });


//     const mailOptions = {
//         from: process.env.SMPT_MAIL,
//         to: options.email,
//         //subject: options.subject,
//         //text: options.message, 
//         subject:"Please verify email",
//         html:"<h1 style=\"color:red; background-color:yellow;\">Click on the link below to verify your email</h1><a href=\"http://localhost:3000/verifyemail?email="+to_email+"\">Click to verify</a>"
//     };

//     await transporter.sendMail(mailOptions);

    
// }



// module.exports = sendEmail;

const{createTransport}=require("nodemailer");
var nodemailer = require ('nodemailer');
async function sendVerifyEmail(to_email)
{
var transport = nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:465,
    secure:false,
    auth:{
        user:"anuragbansal241@gmail.com",
        pass:"yyyq yhbu zumw nsjw"
        
    }
})

var info = transport.sendMail({
    to:to_email,
    from:"anuragbansal241@gmail.com",  
    subject:"Please verify email ",
    html:"<h1 style=\"color:red; background-color:yellow;\">Click on the link below to verify your email</h1><a href=\"http://localhost:3000/verifyemail?email="+to_email+"\">Click to verify</a>"
    });
}

module.exports=sendVerifyEmail;

