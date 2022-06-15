import React from 'react'
import {Button} from "@mui/material";
import '../styles/Item.css';

export default function Item({itemToCreate, onReturn}) {
  
  return (
    <div class="item-information-container">
      <img src={itemToCreate.thumbnail} />
      <div class="item-info">
        <h1>{itemToCreate.title}</h1>
        <span>{"$ "+itemToCreate.price}</span>
        <span>{itemToCreate.address.city_name}</span>
        <Button onClick={onReturn}>
          Volver
        </Button>
      </div>
    </div>
  );
}
