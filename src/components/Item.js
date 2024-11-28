import React, { useState } from "react";
function Item({ item, handleDeleteItem, handleUpdateItem, handleIncreaseItem, handleDecreaseItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleUpdateItem(item.id)}
      />
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
          color: item.isPriority ? "yellow" : "#F4F1BB", 
        }}
      >
        {item.isPriority && "⭐"} 
        {item.description} x{item.quantity} ({item.type})
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      <button onClick={() => handleIncreaseItem(item.id)}>⬆️</button>
      <button onClick={() => handleDecreaseItem(item.id)}disabled={item.quantity === 1}>⬇️</button>
    </li>
  );
}

  
export default Item;  