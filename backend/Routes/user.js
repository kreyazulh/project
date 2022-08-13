const express  = require('express') ; 
const router = express.Router({mergeParams:true})
const handle = require('../sql') 
const member = require('./member') 
//const problemset = require('./problems') 
//const post = require('./post') 
//const ask = require('./ask') 
//const answer = require('./answer') 
router.use('/member' , member) ; 
//router.use('/problems' , problemset) ; 
//router.use('/ask' , ask) ; 
//router.use('/post' , post) ; 
//router.use('/answer' , answer) ; 
module.exports = router 