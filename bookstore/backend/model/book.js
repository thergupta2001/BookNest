const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
     name: {
          type: String,
          required: true
     },
     author: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     price: {
          type: String,
          required: true
     },
     available: {
          type: Boolean,
     },
     image: {
          type: String,
          required: true
     }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book