import React, { useState } from "react";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];



function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({handleAddItems}) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
 
  function handleDescription(e) {
        setDescription(e.target.value);
      }
  function handleQuantity(e) {
        setQuantity(e.target.value);
      }
  function handleSubmit(e) {
    e.preventDefault(); 
    const newItem = { id: Date.now(), description: description, quantity: quantity, packed: false };
    handleAddItems(newItem);
    setDescription(""); 
    setQuantity(1); 
      }
  return (
    <form className="add-form"  onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={handleQuantity}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="text" onChange={handleDescription} value={description} placeholder="Items..."/>
      <button>ADD</button>
    </form>
  );
}

function Item({ item, handleDeleteItem, handleUpdateItem, handleIncreaseItem, handleDecreaseItem }) {
  return (
    <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleUpdateItem(item.id)}
        />
        <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
          {item.description} x{item.quantity}
        </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      <button onClick={() => handleIncreaseItem(item.id)}>⬆️</button>
      <button onClick={() => handleDecreaseItem(item.id)}>⬇️</button>
    </li>
  );
}



function PackingList({ items, handleDeleteItem, handleUpdateItem,handleIncreaseItem, handleDecreaseItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
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



function Stats({ items }) {
  const total = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const percentagePacked = total > 0 ? Math.round((packedCount / total) * 100) : 0;
  return (
    <footer className="stats">
      {percentagePacked === 100 ? (
        <em>You got everything!</em>
      ) : (
        <em>
          You have {total} item{total !== 1 ? "s" : ""} in the list. You already packed{" "}
          {packedCount} ({percentagePacked}%).
        </em>
      )}
    </footer>
  );
}


function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    const AddItems = [item,...items]
    setItems(AddItems);
  }
  function handleDeleteItem(id) {
    const DeleteItems = items.filter((item) => item.id !== id);
    setItems(DeleteItems);
  }
  function handleUpdateItem(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  }
  function handleIncreaseItem(id) {
    const IncreaseItems = items.map((item) =>
    item.id === id ? {...item, quantity: item.quantity + 1} : item
  );
  setItems(IncreaseItems)
  }
  function handleDecreaseItem(id) {
    const DecreaseItems = items.map((item) =>
    item.id === id ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1} : item
  );
  setItems(DecreaseItems)
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} handleIncreaseItem={handleIncreaseItem} handleDecreaseItem={handleDecreaseItem} />
      <Stats items={items} />
    </div>
  );
}

export default App;
