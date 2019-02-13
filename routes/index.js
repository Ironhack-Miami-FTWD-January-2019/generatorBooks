const express = require('express');
const router  = express.Router();
const Books = require('../models/book')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res, next) => {
  Books.find().then(booksFromDb => {
    //console.log(booksFromDb)
    res.render('books', { booksForHBS:booksFromDb })
  })
});

router.get('/book/:bookId', (req, res, next) => {
  Books.findOne({'_id': req.params.bookId})
    .then(theBook => {
      console.log(theBook)
      res.render('book-details', { book: theBook });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});


module.exports = router;
