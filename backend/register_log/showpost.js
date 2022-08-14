const { DATE } = require('oracledb');
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 

handle.showblogpost = async(req , res , next) => 
{
    console.log("in SHOWPOST , show blog post") ; 
    
    
    
    console.log("in register log showpost") 
   



    const query = `SELECT * FROM c##PROJECT.BLOG ORDER BY TIME DESC`
    
    

    const binds={}

    const result = (await con.execute(query , binds , con.options))
   // console.log(result) ;

    return result.rows ; 
}
module.exports = handle ;
