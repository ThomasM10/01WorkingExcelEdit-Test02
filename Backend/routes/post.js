const express = require('express');
const router = express.Router();

//controllers
const PostCtrl = require('../controllers/post');
//saving new posts to DB 
router.post('/',  PostCtrl.createPost);

//export
module.exports = router;