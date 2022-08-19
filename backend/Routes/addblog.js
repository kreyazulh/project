const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../register_log/makepost');

router.post('/blog', async(req,res)=>{
    try{
      console.log("line 9")
      console.log(req.body);
      const {USER_ID , TIME , BLOG_TITLE , BLOG_CONTENT , CATEGORY} = req.body ; 
      console.log(USER_ID , TIME , BLOG_TITLE , BLOG_CONTENT, CATEGORY);
      const UPVOTES = Math.floor((Math.random() * 1000) + 1);
      //const T = SYSDATE()
      const result = await query.addnewblogpost(USER_ID ,UPVOTES, TIME , BLOG_TITLE  , BLOG_CONTENT, CATEGORY) ; 
      res.end();
    
    }
    catch(err){
      console.log(err)
    }  
})

module.exports = router