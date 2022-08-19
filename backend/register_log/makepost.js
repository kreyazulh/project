const { DATE } = require('oracledb');
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 

handle.addnewblogpost = async(USER_ID , UPVOTES , TIME , BLOG_TITLE  , BLOG_CONTENT, CATEGORY) => 
{
    console.log("in makepost , add new blog post") ; 
    
    
    
    console.log(USER_ID ,UPVOTES, TIME , BLOG_TITLE  , BLOG_CONTENT, CATEGORY) 
    TIME = new Date(TIME) ; 
    console.log(typeof(USER_ID)) ; 
    console.log(typeof(USER_ID)) ; console.log(typeof(UPVOTES)) ; console.log(typeof(TIME)) ; 
    console.log(typeof(BLOG_CONTENT)) ; console.log(typeof(BLOG_TITLE)) ; 



    const query = `INSERT INTO C##PROJECT.BLOG (USER_ID , UPVOTES, TIME , BLOG_TITLE  , BLOG_CONTENT, CATEGORY )
    VALUES (:USER_ID ,:UPVOTES, :TIME , :BLOG_TITLE  , :BLOG_CONTENT , :CATEGORY)
    `
    

    const binds = {USER_ID , UPVOTES, TIME , BLOG_TITLE  , BLOG_CONTENT, CATEGORY}

    const result = (await con.execute(query , binds , con.options))
   // console.log(result) ;

    //return result ; 
}


handle.addnewques = async(USER_ID , TIME ,  QUES_CONTENT, UPVOTES,CATEGORY) => 
{
    console.log("in makepost , add new ques") ; 
    
    
    
    console.log(USER_ID , TIME ,  QUES_CONTENT, UPVOTES,CATEGORY) 
    TIME = new Date(TIME) ; 
    console.log(typeof(USER_ID)) ; 
    console.log(typeof(USER_ID)) ; console.log(typeof(UPVOTES)) ; console.log(typeof(TIME)) ; 
    console.log(typeof(BLOG_CONTENT)) ; console.log(typeof(BLOG_TITLE)) ; 



    const query = `INSERT INTO C##PROJECT.QUESTIONS (USER_ID , TIME ,  QUES_CONTENT, UPVOTES,CATEGORY )
    VALUES (:USER_ID , :TIME ,  :QUES_CONTENT, :UPVOTES,:CATEGORY )
    `
    

    const binds = {USER_ID , TIME ,  QUES_CONTENT, UPVOTES,CATEGORY}

    const result = (await con.execute(query , binds , con.options));
   // console.log(result) ;

    //return result ; 
}
module.exports = handle ;
