var moment = require('moment');
const email = require('./sendMail');
const utilsCtrl = {};

utilsCtrl.dateComparison = async (req, res, next) => {
    
    var hoy = moment(new Date());
    var expiration1 = moment(req.data.expirationDate);
    var expiration2 = moment(req.data.legalRepresentativeExpirationDate);
    var expiration3 = moment(req.data.selloExpirationDate);
    var expiration4 = moment(req.data.imssExpirationDate);

    let expirationDate = expiration1.diff(hoy, 'days');
    let legalRepresentativeExpirationDate = expiration2.diff(hoy, 'days');
    let selloExpirationDate = expiration3.diff(hoy, 'days');
    let imssExpirationDate = expiration4.diff(hoy, 'days');

    //FIEL cliente
    if (expirationDate <= 29) {
        console.log('Mandar correo expirationDate');
        email.sendEmail({
            data: req.data,
            mesage: "La FIEL del CLIENTE " + req.data.nameClient + " (" +  req.data.rfc + ") tiene fecha de expiración del " + req.data.expirationDate + " se recomienda renovarla lo antes posible." 
        });
    }

    //FIEL representante legal
    if (legalRepresentativeExpirationDate <= 29) {
        console.log('Mandar correo legalRepresentativeExpirationDate');
        email.sendEmail({
            data: req.data,
            mesage: "La FIEL del REPRESENTANTE LEGAL " + req.data.legalRepresentative + " (" + req.data.legalRepresentativeRfc + ") tiene fecha de expiración del " + req.data.legalRepresentativeExpirationDate + " se recomienda renovarla lo antes posible." 
        });
    }

    //Sello cliente
    if (selloExpirationDate <= 29){
        console.log('Mandar correo selloExpirationDate');
        email.sendEmail({
            date: req.date,
            mesage: "El SELLO del cliente " + req.data.nameClient + " (" + req.data.rfc + ") tiene fecha de expiración del " + req.data.selloExpirationDate + "se recomienda renovarlo lo mas pronto posible."
        });
    }

    //IMSS cliente
    if (imssExpirationDate <= 29){
        console.log('Mandar correo imssExpirationDate');
        email.sendEmail({
            date: req.date,
            mesage: "El IMSS del cliente " + req.data.nameClient + " (" + req.data.rfc + ") tiene fecha de expiración del " + req.data.imssExpirationDate + "se recomienda renovarlo lo mas pronto posible."
        });
    }
};

module.exports = utilsCtrl;
