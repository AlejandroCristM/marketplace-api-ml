import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import Item from "./Item";

export default function Items({query}) {
  
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);
  
  useEffect(()=>{
    axios
      .get(`https://api.mercadolibre.com/sites/MCO/search?&q=${query}`)
      .then(({data})=>{
        setItems(data.results);
      })
  },[query]);

  useEffect(()=>{
    console.log(itemSelected)
  },[item]);


  const getInfo = () =>{
    if(itemSelected){
      console.log("hola1")
      return(<Item itemToCreate={item} onReturn={()=>{setItemSelected(false);setItem([]);}} />);
    }
    console.log("hola2")
    return(
      <>
        <h1>Resultados</h1>
        {componentItems}
      </>
    );
  }

  const componentItems = items.map((item2) => {

    return (
      <div>
        <h2>{item2.title}</h2>
        <img src={item2.thumbnail} />
        <p>{item2.price}</p>
        <Button onClick={(e)=> {
                  setItem(item2);
                  setItemSelected(true); //bool which indicate when a item was clicked 
                }}>Show</Button>
        </div>
    );
  });


  return (
    <div>
      {
        getInfo()
      }
    </div>
  )

}