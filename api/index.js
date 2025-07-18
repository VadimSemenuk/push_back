const express = require('express')
const webPush = require('web-push');
const cors = require('cors');
const crypto = require("crypto");

const app = express()
app.use(cors());

const publicKey = 'BGU3_27KUD02YNwLOBzM1Jn2mH3bz3dOfppTwKEc4Oa27oWrfEWXf6e0B3F5JdPr4BSBtFKWUgUZA8S5SLv0SjM'
const privateKey = 'xiAkGRrmPW7pf7BjPLu43YlB-LGpYwM5p9nHhyOyMu8'

webPush.setVapidDetails(
    'mailto:example@qq.com',
    publicKey,
    privateKey
)


// local
const subscription0 = {
    endpoint: "https://fcm.googleapis.com/fcm/send/cVUl7QygHTE:APA91bELEmYhYN9tQqQ9j-s5wMVW4qeXwga8cxuWSil6KHfR-ihLzP-5AXhsEM8LVCuSBC-oiPg0r47xsDvIfx2MnX0e6Zs5EzOrr3yPm0vKpIJiogjQhL4H0x6LmNn9ngbYXOLQLlkB",
    keys: {
        auth: "OnLpFw5R9KZ9eBXbLAqaxA",
        p256dh: "BIaMmwg2LynAt08WW5VggrWtnzbjWBKDcR50kyh8e7aeSx9e8FPqtr7uIK9-6bZqOXrnW8BEtS7mVdMHTouYBSo"
    }
};

const subscription1 = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fmR74_ft4IE:APA91bFW4FKV68MA8_g-wpuRQq6uijCSvgCJvORWv679uN7WYEec_sc3imJj8TGR4qvlYSwu-Ldq1KEJ5drUfhXz8x7OwZ_WUHsrqCgikdocfQ-pOpMXc1M9IObILm1pXKMM0UpUfJzF",
    keys: {
        auth: "FbJbtTBXXqrUbuNUBl9mrQ",
        p256dh: "BMsgIHw0ungZXxAL81UlQPJQcUxoqoe4sVwOeozV_xzzrAbkFLeQ1_DAm1PCT51Shc0EjYDUqteRMx7jO0f_8dg"
    }
};

const subscription2 = {
    endpoint: "https://web.push.apple.com/QEufW5qTQPaPySiCxJ99Ygzs0-J6eaUnwev8ZA2IjIDGJq2DaNq9acWZPJeCvnsvbOkwzX_qJ3K81RiCEhRu68pqyJXYvKKq-ou_i2FF1_UabtWfhX6tDChRtIK4rlukWivB5anasZ5OKvgs5M1Dhi7XOJCMoDHNxx8TjJIqqVU",
    keys: {
        auth: "dggLolo4Xgupl6g3TDopKg",
        p256dh: "BIeTOEoPoAl9mBpZE7ETW5cFHU_12d9C6PiNWIm6pb9awmpjCvTqr7iNrkGGnNUbaVAccv_4GYIJW7jrNvEvVLc"
    }
};

app.post('/0', (req, res) => {
    sendNotification(subscription0)
    res.status(200).send("0")
})

app.post('/1', (req, res) => {
    sendNotification(subscription1)
    res.status(200).send("0")
})

app.post('/2', (req, res) => {
    sendNotification(subscription2)
    res.status(200).send("0")
})

const sendNotification = (subscription) => {
    const uuid = crypto.randomUUID();
    const payload = JSON.stringify({ title: uuid.toString(), message: uuid.toString() });
    webPush.sendNotification(subscription, payload)
}

const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// module.exports = (req, res) => {
//     app(req, res);
// };

module.exports = app