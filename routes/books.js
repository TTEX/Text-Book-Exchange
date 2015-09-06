var books = require('../models/booksModels')


exports.postBooks = function(req, res) {

       var newBook = new books();

         newBook.department = req.body.departmentNo;
         newBook.courseNumber = req.body.courseNumber;
         newBook.bookTitle = req.body.bookTitle;
         newBook.email = req.body.email;
         newBook.condition = req.body.condition;
         newBook.price = req.body.price;

         newBook.save(function(err) {
             if(err) {
                 res.send(err)

                 res.send({"Book added successfuly"})
             }
         })
}

//Returns all the books 
exports.getallBooks = function(req, res) {
    books.find( function(err, book) {

        if(err)
            res.send(err);

        res.json(books);
    })
}

exports.putBooks = function(req, res) {

}

exports.deleteBooks = function(req, res) {

}