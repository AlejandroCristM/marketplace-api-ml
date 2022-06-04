import './App.css';
import React, { useState } from 'react';
import { Input, Button } from "@mui/material";
import axios from 'axios';


function App() {

  const [items, setItems] = useState([]);

  const getVal=()=>{
    const val = document.getElementById('search-input').value;
    axios.get(`https://api.mercadolibre.com/sites/MCO/search?&q=`+val)
      .then(res => {
        setItems(res.data.results);
      });
  }

  return (
    <div className="App">
      <h1>Alejandro Cristancho</h1>
      <Input type="text" placeholder="Enter text" id="search-input"/>
      <Button onClick={getVal}>Search</Button>   
    </div>
  );
}

export default App;