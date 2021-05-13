import * as admin from 'firebase-admin';

const serviceAccount = require('./flipcoin-cryptobot-firebase-adminsdk-kngce-69e6541fcb.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://flipcoin-cryptobot-default-rtdb.europe-west1.firebasedatabase.app"
});
