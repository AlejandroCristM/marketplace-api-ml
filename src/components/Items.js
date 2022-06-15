import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Card, CardMedia, CardActions, CardContent, Typography} from "@mui/material";
import Item from "./Item";
import '../styles/Items.css';


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


  const getInfo = () =>{
    if(itemSelected){
      console.log(item);
      return(<Item itemToCreate={item} onReturn={()=>{setItemSelected(false);setItem([]);}} />);
    }
    return(
      <>
        <h1 class="subtitle-sec">Resultados</h1>
        <div class="items-container">
          {componentItems}
        </div>
      </>
    );
  }

  
  const componentItems = items.map((item2) => {

    return (
        <Card sx={{ minWidth: 300 }}>
          <CardMedia
            component="img"
            height="250"
            width="300"
            image={item2.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item2.title}
            </Typography>
            <Typography variant="body" color="text.secondary">
              {"$ "+item2.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={(e)=> {
                      setItem(item2);
                      setItemSelected(true); //bool which indicate when a item was clicked 
                    }}>Show
            </Button>
          </CardActions>
        </Card>
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