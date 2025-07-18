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
// const subscription = {
//     endpoint: "https://fcm.googleapis.com/fcm/send/cVUl7QygHTE:APA91bELEmYhYN9tQqQ9j-s5wMVW4qeXwga8cxuWSil6KHfR-ihLzP-5AXhsEM8LVCuSBC-oiPg0r47xsDvIfx2MnX0e6Zs5EzOrr3yPm0vKpIJiogjQhL4H0x6LmNn9ngbYXOLQLlkB",
//     keys: {
//         auth: "OnLpFw5R9KZ9eBXbLAqaxA",
//         p256dh: "BIaMmwg2LynAt08WW5VggrWtnzbjWBKDcR50kyh8e7aeSx9e8FPqtr7uIK9-6bZqOXrnW8BEtS7mVdMHTouYBSo"
//     }
// };

// const subscription = {
//     endpoint: "https://fcm.googleapis.com/fcm/send/fmR74_ft4IE:APA91bFW4FKV68MA8_g-wpuRQq6uijCSvgCJvORWv679uN7WYEec_sc3imJj8TGR4qvlYSwu-Ldq1KEJ5drUfhXz8x7OwZ_WUHsrqCgikdocfQ-pOpMXc1M9IObILm1pXKMM0UpUfJzF",
//     keys: {
//         auth: "FbJbtTBXXqrUbuNUBl9mrQ",
//         p256dh: "BMsgIHw0ungZXxAL81UlQPJQcUxoqoe4sVwOeozV_xzzrAbkFLeQ1_DAm1PCT51Shc0EjYDUqteRMx7jO0f_8dg"
//     }
// };

const subscription = {
    endpoint: "https://web.push.apple.com/QKVO5t5dmLQcy2EDslboEBOZB1g23wFBBN6VJScdRuIOmgl-LMFpG2lv_PjD97K-T0RQmU3hubkq00eH740cl2v9NxKocgwLVQCJddZgctgt8Uo_n8QxhRuGabmbA9gKDNZoXFBFGZ0otIWEBWtoefoiunkn-N_QdpzYy3GgQiY",
    keys: {
        auth: "uFL7y9e6c39fwBy7liIBCw",
        p256dh: "BBkNtG6ImOBjDEvdz9M2grXvGYAcW63nzFouirztpmQkh41ElaHVBCnUREF9FisVHC10JaGbNebtSXfGJxPEYWI"
    }
};

app.post('/', (req, res) => {
    const uuid = crypto.randomUUID();
    const payload = JSON.stringify({ title: uuid.toString(), message: uuid.toString() });
    webPush.sendNotification(subscription, payload)
    res.status(200).send("2")
})

const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// module.exports = (req, res) => {
//     app(req, res);
// };

module.exports = app