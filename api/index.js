const express = require('express')
const webPush = require('web-push');
const cors = require('cors');

const app = express()
app.use(cors());

const publicKey = 'BGU3_27KUD02YNwLOBzM1Jn2mH3bz3dOfppTwKEc4Oa27oWrfEWXf6e0B3F5JdPr4BSBtFKWUgUZA8S5SLv0SjM'
const privateKey = 'xiAkGRrmPW7pf7BjPLu43YlB-LGpYwM5p9nHhyOyMu8'

webPush.setVapidDetails(
    'mailto:example@qq.com',
    publicKey,
    privateKey
);

const subscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fGBXaGgqUjI:APA91bHDKY-Z5bzxicgBPFL7258rtL2rYIxAg4b06oRfWAnMacGOR7cUZiyRZI-BOxVPkkjsi_gDA8zhCzmygpFpFg-PVXzuwJuBBE5xzMUJkESwdBVqdD3BZ9UupQ2m2I_fN_cXp_MJ",
    keys: {
        auth: "Zu_CTmLAdkNSZmOodlsy1A",
        p256dh: "BOEKe7a9O7fZRnuGW9KRNKjTK1njgLxESATT0pGsIMMa_-ViOTm2SkoIJaqF2370uy3JWHXu0n0LJNd18EtxII8"
    }
};


app.post('/', (req, res) => {
    const payload = JSON.stringify({ title: 'test', message: 'test' });
    webPush.sendNotification(subscription, payload)
    res.status(200).send()
})

// const port = 3001
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// module.exports = (req, res) => {
//     app(req, res);
// };

module.exports = (req, res) => {
    res.status(200).send('Hello, Vercel!');
};