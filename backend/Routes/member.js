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

router.post('/update' , async(req , res) =>
{
    try
    {
        console.log("in member update") ; 
       
        const {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID} = req.body ; 
        console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID)
        const result = await query.update( NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID) 
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/delete' , async(req , res) =>
{
    try
    {
        console.log("in member delete") ; 
       
        const { ID} = req.body ; 
        console.log( ID)
        const result = await query.delete(  ID) 
       
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

router.get('/user/:ID' , async(req , res )=>
{
    
    try 
    {
        const ID =  await req.params.ID ; 
        console.log("ID:")
        console.log(ID) ; 
        const result = await query.getuser(ID) ;
        console.log(result) 
        res.json(result) ; 
    }
    catch(error)
    {
        console.log(error) ; 
    }
})




module.exports = router  ; 