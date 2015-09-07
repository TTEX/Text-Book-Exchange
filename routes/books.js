var books = require('../models/booksModels')


exports.postBooks = function(req, res) {

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

       var newBook = new books();

         newBook.department = req.body.department;
         newBook.courseNumber = req.body.courseNumber;
         newBook.bookTitle = req.body.title;
         newBook.email = req.body.email;
         newBook.condition = req.body.condition;
         newBook.price = req.body.price;

         newBook.save(function(err) {
             if(err) {
                 res.send(err);
                 res.statusCode = 404;
                 res.end();
             }

            res.send("Book added successfully");
            res.statusCode = 200;
            res.end();
             
         })
}

//Returns all the books 
exports.getAllBooks = function(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    
    books.find(function(err, book) {
        if(err) {
            res.send(err); 
            res.statusCode = 404;
            res.end():
        }

        res.send(book);
        res.statusCode = 200;
        res.end();
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