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
)


// local
const subscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/cVUl7QygHTE:APA91bELEmYhYN9tQqQ9j-s5wMVW4qeXwga8cxuWSil6KHfR-ihLzP-5AXhsEM8LVCuSBC-oiPg0r47xsDvIfx2MnX0e6Zs5EzOrr3yPm0vKpIJiogjQhL4H0x6LmNn9ngbYXOLQLlkB",
    keys: {
        auth: "OnLpFw5R9KZ9eBXbLAqaxA",
        p256dh: "BIaMmwg2LynAt08WW5VggrWtnzbjWBKDcR50kyh8e7aeSx9e8FPqtr7uIK9-6bZqOXrnW8BEtS7mVdMHTouYBSo"
    }
};

app.post('/', (req, res) => {
    const payload = JSON.stringify({ title: 'test', message: 'test' });
    webPush.sendNotification(subscription, payload)
    res.status(200).send("1")
})

const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// module.exports = (req, res) => {
//     app(req, res);
// };

module.exports = app