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
  // const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // function handleAddItems(item) {
  //   const updatedItems = [item,...items]
  //   setItems(updatedItems);
  // }
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

function Item({item}){
  return(
    <li style={{textDecoration: item.packed ? 'line-through' : 'none'}}>
      {item.description} x{item.quantity}
      <Button title="Delete"/>
    </li>
  )
}

function PackingList({items}) {
  return (  
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    const updatedItems = [item,...items]
    setItems(updatedItems);
  }
  function handleDeleteItems(item) {
    const DeleteItems = item.filter(!item)
    setItems(DeleteItems);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
