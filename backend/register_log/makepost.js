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



handle.addans=async(USER_ID , TIME ,QUESTION_ID, ANS_CONTENT,SUPPORT) =>
{
    console.log("in makepost , creating answer for ques no") ; 
    console.log(USER_ID , TIME ,QUESTION_ID, ANS_CONTENT,SUPPORT) 
    TIME = new Date(TIME) ; 
   

    const query = `INSERT INTO C##PROJECT.ANSWERS (USER_ID , QUESTION_ID, TIME ,  ANS_CONTENT, SUPPORT )
    VALUES (:USER_ID ,:QUESTION_ID, :TIME ,  :ANS_CONTENT, :SUPPORT )
    `
    

    const binds = {USER_ID , TIME ,QUESTION_ID, ANS_CONTENT,SUPPORT}

    const result = (await con.execute(query , binds , con.options));
   // console.log(result) ;

    return result ; 
}



handle.addcomment=async(USER_ID , TIME ,BLOG_ID, COMMENTS) =>
{
    console.log("in makepost , creating comment for blogs ") ; 
    console.log(USER_ID , TIME ,BLOG_ID, COMMENTS) 
    TIME = new Date(TIME) ; 
   

    const query = `INSERT INTO C##PROJECT.COMMENTS (USER_ID , BLOG_ID ,COMMENTS, TIME  )
    VALUES (:USER_ID ,:BLOG_ID , :COMMENTS , :TIME )
    `
    

    const binds = {USER_ID , TIME ,BLOG_ID, COMMENTS}

    const result = (await con.execute(query , binds , con.options));
   // console.log(result) ;

    return result ; 
}

module.exports = handle ;
