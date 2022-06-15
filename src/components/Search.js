import React, {useState,} from 'react'
import { Input, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import Items from './Items';
import '../styles/Search.css';

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
            <div className='search-container'>
                <label className='search-label' htmlFor='search-input'>
                    <Input 
                        className="search-input"
                        type="text"
                        placeholder="Buscar..."
                        value={value}
                        onChange={handleChange}
                        sx={{ width:'40%', fontSize:'1.8rem'}}
                    />
                    <IconButton className="search-button" onClick={handleOnClick}>
                        <SearchIcon/>    
                    </IconButton>
                </label>
            </div>
            <Items query={currentValue}/>
        </div>
      );    

}

export default Search;
