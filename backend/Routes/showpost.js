const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../register_log/showpost');

router.get('/showblogs', async(req,res)=>{
    try{
      console.log("line 9 in routes showpost")
      
      const result = await query.showblogpost();
      
      console.log("RESULT") 
      //console.log(result)
      //const retval = JSON.stringify(result) ;
      //console.log(retval) ; 
      res.send(result);
      //console.log(res.text()) ; 
      res.end();
    
    }
    catch(err){
      console.log(err)
    }  
})

module.exports = router