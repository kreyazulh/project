const { DATE } = require('oracledb');
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 

handle.addnewblogpost = async(USER_ID , UPVOTES , TIME , BLOG_TITLE  , BLOG_CONTENT) => 
{
    console.log("in makepost , add new blog post") ; 
    
    
    
    console.log(USER_ID ,UPVOTES, TIME , BLOG_TITLE  , BLOG_CONTENT) 
    TIME = new Date(TIME) ; 
    console.log(typeof(USER_ID)) ; 
    console.log(typeof(USER_ID)) ; console.log(typeof(UPVOTES)) ; console.log(typeof(TIME)) ; 
    console.log(typeof(BLOG_CONTENT)) ; console.log(typeof(BLOG_TITLE)) ; 



    const query = `INSERT INTO C##PROJECT.BLOG (USER_ID , UPVOTES, TIME , BLOG_TITLE  , BLOG_CONTENT )
    VALUES (:USER_ID ,:UPVOTES, :TIME , :BLOG_TITLE  , :BLOG_CONTENT )
    `
    

    const binds = {USER_ID , UPVOTES, TIME , BLOG_TITLE  , BLOG_CONTENT}

    const result = (await con.execute(query , binds , con.options))
   // console.log(result) ;

    //return result ; 
}
module.exports = handle;