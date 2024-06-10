const express = require('express')
const app = express()

app.use(express.json())
const db = require('./models')
const cors = require('cors');
app.use(cors());

const postRouter = require('./routes/Posts')

app.use("/posts", postRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server started")
    })
})
