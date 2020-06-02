const admin = require('firebase-admin');

const firebaseCtrl = {};
const utils = require('./utils');

let serviceAccount = require('../assets/firmaselectronicas.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

firebaseCtrl.getData = async (req, res, next) => {
    db.collection('clients')/*.where('born', '<', 1900)*/.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {

            utils.dateComparison({
                // id: doc.id,
                data: doc.data()
            });
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
};

module.exports = firebaseCtrl;
