const Commentlist = ({comment , title }) => {
    //console.log(comment) ; 
   
      return (
        <div className="blog-list">
          <center><h2>{ title }</h2></center>
          {
            comment.map((comnt)=>{
             // console.log(comnt.COMMENTS) ; 
              return <div>
                      <h2>Commented by {comnt.NAME}</h2>
                      <h1>{comnt.COMMENTS}</h1>
                      </div>
            
            }
            )
          }
        </div>
      );
    }
     
    export default Commentlist;