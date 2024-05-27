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

