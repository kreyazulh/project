
import './qlist.css'
const Questionlist = ({ Questionlist, title}) => {
    console.log(typeof(Questionlist))
    let nblog = Object.entries(Questionlist);
    console.log(nblog[1])
  
      return (
        <div className="blog-list">
          <center><h2>{ title }</h2></center>
          {
          
          nblog[1][1].map(Question => (
          <div className="blog-preview"  >
           
              <h1>{ Question.QUES_CONTENT }</h1>
              <h3>Asked by {Question.NAME}</h3>
              <h4>TIME : {Question.TIME}</h4>
              <h4>Category : {Question.CATEGORY}</h4>
              
  
              
  
              
  
  
            </div>
          ))}
        </div>
      );
    }
     
    export default Questionlist;