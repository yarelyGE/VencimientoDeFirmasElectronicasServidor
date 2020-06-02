// Requerimos el paquete
var nodemailer = require('nodemailer');

const emailCtrl = {};

// Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'yagari2017@gmail.com',
        pass: 'YAGARIINC2017!'
    }
});

emailCtrl.sendEmail = async (req, res, next) => {
    var mailOptions = {
        from: 'firmaselectronicas@gmail.com',
        to: 'yaregomeze1826@gmail.com',
        subject: 'Notificacion de firmas electronicas',
        html:  req.mesage 
    };
    console.log(req);
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Error: ' + error);
        } else {
          console.log('Correo enviado');
        }
    });

};
module.exports = emailCtrl;

