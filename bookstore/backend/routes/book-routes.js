const express = require('express')
const Book = require('../model/book.js')
const { getAllBooks, addBook, getById, updateBook, deleteBook } = require('../controllers/book-controller.js')

const router = express.Router()

router.get('/', getAllBooks)
router.post('/add', addBook)
router.get('/:id', getById)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router