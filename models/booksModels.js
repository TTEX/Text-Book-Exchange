//Schema definition for the book model

var mongoose = require('mongoose')

var bookModels = mongoose.Schema({
    departmentNo: String,
    courseNumber: String, 
    bookTitle: String,
    email: String, 
    condition: String, 
    price: String
})

module.exports = mongoose.model('book', bookModels)
