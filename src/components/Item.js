import React from 'react'

export default function Item({itemToCreate}) {

  return (
    <div>
      {console.log(`Soy ${itemToCreate}`)}
      <h1>{itemToCreate.title}</h1>
    </div>
  );
}
