import { useState} from "react";
import { Search } from  'react-bootstrap-icons';

function HeaderSearch({checkHeader}){
    const[value,setHeadeValue]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {value};
        checkHeader(data);
        // setHeadeValue('');
    }


    return(
        <div>
            <form onSubmit={handleSubmit} action=" ">
            <input type='text' placeholder='i am looking for...' value={value} onChange={(e)=>setHeadeValue(e.target.value)}/>
            <button type="submit"><Search/></button> 
            </form>
        </div>
    );
}
export default HeaderSearch;