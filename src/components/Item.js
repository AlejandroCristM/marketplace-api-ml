import React from 'react'
import {Button} from "@mui/material";

export default function Item({itemToCreate, onReturn}) {
  
  return (
    <div>
      {console.log(`Soy ${itemToCreate}`)}
      <h1>{itemToCreate.title}</h1>
      <img src={itemToCreate.thumbnail} />
      <p>{itemToCreate.price}</p>
      <Button onClick={onReturn}>
        Return
      </Button>
    </div>
  );
}
