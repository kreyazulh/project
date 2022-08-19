const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../register_log/showpost');

router.get('/showblogs', async(req,res)=>{
    try{
      console.log("line 9 in routes showpost")
      
      const result = await query.showblogpost();
      
      console.log("RESULT") 
      
      res.json(result);
      
     
    
    }
    catch(err){
      console.log(err)
    }  
})
router.get('/showquestions', async(req,res)=>{
  try{
    console.log("line 9 in routes showpost")
    
    const result = await query.showquestions();
    
    console.log("RESULT") 
   // console.log(result)
    
    res.json(result);
    
   
  
  }
  catch(err){
    console.log(err)
  }  
})
module.exports = router