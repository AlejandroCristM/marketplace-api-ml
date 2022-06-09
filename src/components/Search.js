import React, {useState,useContext} from 'react'
import { Input, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import Items from './Items';


function Search (){

    const [value, setValue] = useState("");
    const [currentValue, setCurrentValue] = useState("");
    
    const handleChange=(event)=>{
        setValue(event.target.value);
    }

    const handleOnClick=()=>{
        setCurrentValue(value);
    }


    return (
        <div className="container">
            {/* Heading */}
            <h2 className="heading">Busqueda de productos</h2>
            <label className='search-label' htmlFor='search-input'>
                <Input type="text" placeholder="Buscar..." value={value} onChange={handleChange}/>
                <IconButton onClick={handleOnClick}>
                    <SearchIcon/>    
                </IconButton>
                <Items query={currentValue}/>
            </label>
        </div>
      );    

}

export default Search;
