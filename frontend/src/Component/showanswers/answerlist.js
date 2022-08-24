const Answerlist = ({answer  }) => {
    console.log(answer) ; 
   
      return (
        <div className="blog-list">
          <div className="blog-preview">
          {
            answer.map((ans)=>{
              console.log(ans.ANS_CONTENT) ; 
              return <div>
                <h2>Answered by {ans.NAME}</h2>
                <h2>Time : {ans.TIME}</h2>
                      <h3>{ans.ANS_CONTENT}</h3>
                      </div>
            
            }
            )
          }
          </div>
        </div>
      );
    }
     
    export default Answerlist;