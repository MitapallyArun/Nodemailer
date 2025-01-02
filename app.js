const nodemailer = require('nodemailer');


    'madhankishore111@gmail.com',
    'recipient2@example.com',
    'meenamounu@gmail.com',
    
    null,
    'invalid-email',
    'recipient5@example.com',
    
];


const defaultEmail = 'default@example.com';


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
        user: 'mittapallyarun123@gmail.com', 
        pass: 'tczt agjx xtfl dqol',    
    },
});


const subject = "Testing NodeMailer - Bulk Email";
const htmlContent = `<h1>Welcome to Our Platform</h1><p>This is a test email with a picture attachment.</p>`;
const attachmentPath = './path_to_image.jpg'
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


const sendEmail = async (recipient) => {
    try {
        const mailOptions = {
            from: 'your_email@gmail.com',
            to: isValidEmail(recipient) ? recipient : defaultEmail,
            subject: subject,
            html: htmlContent,
            attachments: [
                {
                    filename: 'download.jpg', 
                    path: './download.jpg',
                },
            ],
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${recipient || defaultEmail}: ${info.response}`);
    } catch (error) {
        console.error(`Failed to send email to ${recipient || defaultEmail}:`, error.message);
    }
};


(async () => {
    for (let i = 0; i < emailList.length; i++) {
        await sendEmail(emailList[i]);
    }
    console.log('All emails processed!');
})();
