//Schema definition for the book model

var mongoose = require('mongoose')
var textSearch = require('mongoose-text-search')

var bookModels = mongoose.Schema({
    department: String,
    courseNumber: String, 
    bookTitle: String,
    email: String, 
    condition: String, 
    price: String
})

//Enabling text search in our schema
bookModels.plugin(textSearch);

//text index
gameSchema.index({ tags: 'text' });


module.exports = mongoose.model('book', bookModels)
