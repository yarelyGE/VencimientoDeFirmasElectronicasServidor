var moment = require('moment');
const email = require('./sendMail');
const utilsCtrl = {};

utilsCtrl.dateComparison = async (req, res, next) => {
    
    var hoy = moment(new Date());
    var expiration1 = moment(req.data.expirationDate);
    var expiration2 = moment(req.data.legalRepresentativeExpirationDate);

    let expirationDate = expiration1.diff(hoy, 'days');
    let legalRepresentativeExpirationDate = expiration2.diff(hoy, 'days');

    if (expirationDate <= 29) {
        console.log('Mandar correo expirationDate');
        email.sendEmail({
            data: req.data
        });
    }

    if (legalRepresentativeExpirationDate <= 29) {
        console.log('Mandar correo legalRepresentativeExpirationDate');
        email.sendEmail({
            data: req.data
        });
    }

};

module.exports = utilsCtrl;
