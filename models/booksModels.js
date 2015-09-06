//Schema definition for the book model

var mongoose = require('mongoose')

var bookModels = mongoose.Schema({
    className: String, 
    bookTitle: String,
    email: String, 
    condition: String, 
    Price: String
})

module.exports = mongoose.models('book', bookModels)
