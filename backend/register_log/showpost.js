const { DATE } = require('oracledb');
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 

handle.showblogpost = async(req , res , next) => 
{
    
    console.log("in register log showpost") 
    const query = `
    SELECT U.NAME , P.ID , P.BLOG_TITLE , P.BLOG_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , P.CATEGORY FROM BLOG P JOIN APP_USER U ON P.USER_ID = U.ID  ORDER BY TIME DESC`
    const binds={}
    const result = (await con.execute(query , binds , con.options))
    return result ; 
}



handle.showquestions = async(req , res , next) => 
{
    
    console.log("in register log showpost QUESTIONS ") 
    const query = `
    SELECT U.NAME , Q.ID , Q.QUES_CONTENT , to_char(Q.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , Q.CATEGORY FROM QUESTIONS Q JOIN APP_USER U ON Q.USER_ID = U.ID  ORDER BY TIME DESC`
    const binds={}
    const result = (await con.execute(query , binds , con.options))
    //console.log(result) ; 
    return result ; 
}
module.exports = handle ;
