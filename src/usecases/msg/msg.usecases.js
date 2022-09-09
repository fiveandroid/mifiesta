const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = async ( msgData ) =>{

    msgData.from = 'jvreyesa@hotmail.com'

    
    // const msg = {
        
    // to: 'juan.reyes.aguilar@gmail.com', // Change to your recipient
    // from: 'jvreyesa@hotmail.com', // Change to your verified sender
    // subject: 'Sending with SendGrid is Fun',
    // text: 'and easy to do anywhere, even with Node.js',
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // }
    

    return await sgMail
    .send(msgData)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}

module.exports = sendMail