const express = require('express')
const cors = require('cors')
const chalk = require('chalk')
const mongoose = require('mongoose')

const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

const port = 3001
const app = express()


app.use(cookieParser())
app.use(express.json())

app.use(cors())


app.use(express.urlencoded({
    extended: true
}))

app.use('/api/auth', authRoute)
app.use('/api/posts/', postRoute)


mongoose.connect("mongodb://mongodb root@176.57.213.226:27017/testdb").then(() => {
    app.listen(port, () => {
        console.log(chalk.green(`Server has been started on port ${port}...`))
    })
})
//
// docker run --rm --name mongo -p 27017:27017 -d \
// -e MONGO_INITDB_DATABASE=testdb mongo
// 'mongodb://localhost:27017/testdb'