const mailer = require("nodemailer");

const sendMail = async (to, subject, text) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "pythonforsamir@gmail.com",
      pass: "xddqntwrfwwxtlgc",
    },
  });

  const mailoptions = {
    from: "pythonforsamir@gmail.com",
    to: to,
    subject: subject,
    // text: text,
    html: `<h1>${text} <br> HELLO WELCOME TO MY APP..</h1>`,
    // attachments: [
    //     {
    //         filename: "task.txt",
    //         path: "../task.txt"
    //     }
    // ]
  };

  const mailres = await transporter.sendMail(mailoptions);
  console.log(mailres);
  return mailres;
};

//sendMail("samir.vithlani83955@gmail.com", "Test", "This is a test mail");
module.exports = {
    sendMail,
}