const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../register_log/makepost');

router.post('/ques', async(req,res)=>{
    try{
      console.log("line 9")
      console.log(req.body);
      const {USER_ID , TIME , QUES_CONTENT} = req.body ; 
      console.log(USER_ID , TIME ,  QUES_CONTENT);
      const UPVOTES = Math.floor((Math.random() * 1000) + 1);
      //const T = SYSDATE()
      const result = await query.addnewques(USER_ID , TIME ,  QUES_CONTENT, UPVOTES) ; 
      res.end();
    
    }
    catch(err){
      console.log(err)
    }  
})

module.exports = router