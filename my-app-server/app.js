const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer')

app.use(bodyParser.json())
app.use(cors())
const uri = 'mongodb://localhost:27017/LotteryDB'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isWinner: { type: Boolean, required: true },
    lotteryNo: { type: Number, required: true },
    filePath: { type: String, required: true }
}, {
    collection: 'users'
})
const Users = mongoose.model('UserModel', UserSchema)
// console.log(Users)
const port = 2500;

const connect = async () => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to Mongodb")
    }
    catch (error) {
        console.error(error);
    }
}
connect();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../src/uploadImages/')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('avatar')

app.get('/users/:name/:lotteryno', async (req, res) => {
    // console.log(req.params)
    const participantArr = lotteryParticipants.filter((item, index) => {
        if (item.name === req.params.name) {
            return item
        }
    })
    const winnerArr = lotteryParticipants.filter((item, index) => {
        // console.log(item.lotteryNo, req.params.lotteryno)
        if (item.name === req.params.name && item.isWinner === true && item.lotteryNo.toString() === req.params.lotteryno) {
            return item
        }
    })
    let winnerMsg = ''
    if (participantArr.length > 0 && winnerArr.length === 0) {
        winnerMsg = "Try next time"
    } else if (winnerArr.length > 0) {
        winnerMsg = "COngrats you won"
    } else {
        winnerMsg = "You are not participant"
    }
    res.json({
        name: req.params.name,
        message: winnerMsg
    })
})

app.listen(port, () => {
    console.log(`Server runnning on port ${port}`);
});

app.post('/participants', upload, async (req, res, next) => {
    try {
        req.body.filePath = req.file.filename
        console.log(req.body)
        Users.create(req.body)
        res.json({
            message: "participants added with Image!!",
            LotteryDetail: req.body
        })
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/participants', async (req, res) => {
    try {
        Users.find({})
            .then(result => {
                res.json({
                    message: "Participants List",
                    detail: result
                })
            })
        //other methods
        // Users.find({}, (error, users) => {
        //     if (error) {
        //         res.send("something went wrong!!");
        //         next();
        //     }
        //     res.json(users)
        // })
    }
    catch (err) {
        console.log(err)
    }
})

app.put('/participants', async (req, res) => {
    // console.log(req.body)
    try {
        Users.findOneAndUpdate({ name: req.body.name }, {
            $set: { isWinner: true }
        })
            .then(result => {
                res.json({
                    message: "info updated",
                    detail: result
                })
            })
    }
    catch (err) {
        console.log(err)
    }
})

app.delete('/participants', async (req, res) => {
    try {
        Users.deleteOne({ name: req.body.name })
            .then(result => {
                res.json({
                    message: "participant deleted",
                    detail: result
                })
            })
    }
    catch (err) {
        console.log(err)
    }
})


// image upload sample
// app.post('/profile', upload, (req, res, next) => {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log(req)
//     res.send({
//         message: "File uploaded!!",
//         detail: req.file
//     })
// })

