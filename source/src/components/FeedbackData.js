function FeedbackData(){

    var data=localStorage.getItem("data");
  
    
    return(
        <div>
            <h1 style={{textAlign:"center",padding:"60px"}}>Customer Feedback</h1>
        <div  style={{textAlign:"center"}}><textarea name id="comment" cols="30" rows="10">{data}</textarea></div>

        </div>
    );
}export default FeedbackData;