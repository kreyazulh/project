const express = require('express') 
const router = express.Router({mergeParams:true}) 
const query = require('../register_log/showpost') ; 
router.post('/blgupvotes' , async(req , res) =>
{
    try
    {
        console.log("in blog upvotes") ; 
           
         const {BLOG_ID} = req.body ; 
         console.log(req.body)
        const result = await query.upvoteblog(BLOG_ID ) 
        console.log(result);
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


module.exports = router  ; 