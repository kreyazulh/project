
const con = require('../Connection') ; 

const handle = {} 


handle.create = async(NAME , PASSWORD , COUNTRY , EMAIL) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL) 
    
    const query = `INSERT INTO C##PROJECT.APP_USER (NAME , PASSWORD , COUNTRY , EMAIL )
    VALUES (:NAME ,  :PASSWORD ,  :COUNTRY , :EMAIL )
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL}

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}

handle.verify = async(email , password)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE EMAIL =:email AND PASSWORD =:password`
    console.log("here in create verify")
    console.log(email , password)  ; 
    const binds = {email : email , password: password } 
    const result = (await con.execute(query , binds , con.options)).rows
    console.log(result) ; 
    return result ; 
}



module.exports = handle ; 