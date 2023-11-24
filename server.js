const express = require('express')
const router = require('./router/ruangans')
const app = express()
const connectDB = require('./config/db')

const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Ini adalah tugas UAS 23_541211101_Khanif Yunan Pratama!')
})

app.use(router)

connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})