import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, handleDeleteItem, handleUpdateItem,handleIncreaseItem, handleDecreaseItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              type={item.type}
              handleDeleteItem={handleDeleteItem}
              handleUpdateItem={handleUpdateItem}
              handleIncreaseItem={handleIncreaseItem}
              handleDecreaseItem={handleDecreaseItem}
            />
          ))}
        </ul>
      </div>
    );
  }
  export default PackingList; 