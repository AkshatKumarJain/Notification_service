import transporter from "../config/nodemailer.config.js";
import type { IMail } from "../interfaces/mail.interface.js";

class Mail {
    async sendMail(mailOptions: IMail) {
        const mail = await transporter.sendMail(mailOptions);
        if(!mail)
        console.error("couldn't send mail");
        if(mail)
        console.log("Email sent successfully");
        return mail;
    }
}

export default new Mail();