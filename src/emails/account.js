const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'laremy.rowe@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}.  Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'laremy.rowe@gmail.com',
        subject: 'Goodbye for now',
        text: `${name}, thanks for trying our service.  If there is anything we could have done better please reach out.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
