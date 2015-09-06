var books = require('../models/booksModels')


exports.postBooks = function(req, res) {

       var newBook = new books();

         newBook.department = req.body.department;
         newBook.courseNumber = req.body.courseNumber;
         newBook.bookTitle = req.body.title;
         newBook.email = req.body.email;
         newBook.condition = req.body.condition;
         newBook.price = req.body.price;

         newBook.save(function(err) {
             if(err) {
                 res.send(err)

                 res.send({"Succes": "1"})
             }
         })
}

//Returns aall the books 
exports.getAllBooks = function(req, res) {
    books.find(function(err, book) {
        if(err)
            res.send(err);

        res.json(book);
    })
}

//Returns a book by a certain course number
/*exports.getBookByCourseNumber = function (req, res){
    books.find({, function (err, book) {

    });
}*/
exports.putBooks = function(req, res) {

}

exports.deleteBooks = function(req, res) {

}