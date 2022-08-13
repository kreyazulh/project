const express  = require('express') ; 
const router = express.Router({mergeParams:true})
const handle = require('../sql') 
const member = require('./member') 
const addblog = require('./addblog')
const askques = require('./addques');

//const problemset = require('./problems') 
//const post = require('./post') 
//const ask = require('./ask') 
//const answer = require('./answer') 
router.use('/member' , member) ; 
router.use('/addblog' , addblog) ;
router.use('/addques',askques) 
//router.use('/problems' , problemset) ; 
//router.use('/ask' , ask) ; 
//router.use('/post' , post) ; 
//router.use('/answer' , answer) ; 
module.exports = router 