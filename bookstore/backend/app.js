const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes.js')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/books', router)

mongoose.connect('mongodb://127.0.0.1:27017/cluster0')
     .then(() => {
          console.log('Database connected')
     })
     .catch((err) => {
          console.log('Error during connection ', err)
     })

app.listen(5000, () => {
     console.log('Server on 5000')
})