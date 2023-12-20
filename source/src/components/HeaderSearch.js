import { Search } from "react-router-dom";

function HeaderSearch({value,handleSubmit}){
   return(
        <div>

            <input type='text' placeholder="i am looking for.." value={value} onChange={(e)=>handleSubmit(e.target.value)}/>
         
        </div>

        
    );
}
export default HeaderSearch;