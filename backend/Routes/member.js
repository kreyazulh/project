const express = require('express') 
const router = express.Router({mergeParams:true}) 
const query = require('../register_log/create') ; 
router.post('/signup' , async(req , res) =>
{
    try
    {
        console.log("in member signup") ; 
       
        const {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE } = req.body ; 
         console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE)
        const result = await query.create( NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) 
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/login' , async(req , res)=>
{
   
    try
    {
        console.log("in member login") ; 
       console.log(req.body) ; 
       
       const { EMAIL , PASSWORD } = req.body ; 
       const result = await query.verify(EMAIL , PASSWORD ) ; 

       console.log(result) ; 
       res.json(result) ;
    }
    catch(err)
    {
        console.log(err) ; 
    }
}
)



module.exports = router  ; 