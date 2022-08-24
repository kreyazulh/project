
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 

handle.create = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) 
    
    const query = `INSERT INTO C##PROJECT.APP_USER (NAME , PASSWORD , COUNTRY , EMAIL , IMAGE )
    VALUES (:NAME ,  :PASSWORD ,  :COUNTRY , :EMAIL , :IMAGE )
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE }

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



handle.getuser = async(ID)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE ID = :ID `
    console.log("here in create GETUSER")
    console.log(ID)  ; 
    const binds = {ID:ID } 
    const result = (await con.execute(query , binds , con.options)).rows
    console.log(result) ; 
    return result ; 
}

handle.update = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE, ID  ) 
   
    const query = ` UPDATE APP_USER
    SET NAME = :NAME , PASSWORD= :PASSWORD , EMAIL = :EMAIL , IMAGE= :IMAGE , COUNTRY = :COUNTRY 
    WHERE ID = :ID
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID  }

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}


handle.delete = async(ID ) => 
{
    console.log(ID) 
   
    const query = `  DELETE FROM APP_USER 
    WHERE ID = :ID
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}

module.exports = handle ; 