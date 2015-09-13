var books = require('../models/booksModels')

//TODO: Send the right error messages


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
                 res.statusCode = 404;
                 res.send(err);
             }

            res.statusCode = 200;
            res.send("Book added successfully");
            
             
         })
}

//Returns all the books 
exports.getAllBooks = function(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    books.find(function(err, book) {
        //TODO: Get to send the right error messages.
        if(err) {
            res.statusCode = 404;
            res.send(err); 
        }
        else {
          res.statusCode = 200;
          res.send(book);
          
        }
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

exports.findBook = function(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

   //Get the query string and parse it
   var queryString = req.param('search')

   book.textSearch(queryString, function(err, output) {
       if(err) {
           res.statusCode = 404;
           res.send(err); 
           
       }

      //TODO: Get to send the right error messages
       res.statusCode = 200;
      res.send(output);
    
   })


}

