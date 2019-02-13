const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {user:'me'});
});

//router.get('/albums',()=>}{})


module.exports = router;
