import './scomment.css'

const Commentlist = ({comment , title }) => {
    //console.log(comment) ; 
   
      return (
        <div className="blog-list" id='commentlist'>
          <center><h2>{ title }</h2></center>
          {
            comment.map((comnt)=>{
             // console.log(comnt.COMMENTS) ; 
              return <div id='commentbox'>
                      <h2>Commented by {comnt.NAME}</h2>
                      <h1 id='comment'>{comnt.COMMENTS}</h1>
                      </div>
            
            }
            )
          }
        </div>
      );
    }
     
    export default Commentlist;