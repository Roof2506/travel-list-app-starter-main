import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packing";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];


function App() {
  const [items, setItems] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [journeyType, setJourneyType] = useState("General");
  const suggestions = {
    General: ["Toothbrush", "Clothes", "Shoes"],
    Beach: ["Swimsuit", "Sunscreen", "Flip-flops"],
    Hiking: ["Hiking Boots", "Backpack", "Water Bottle"],
    Business: ["Suit", "Laptop", "Notebook"],
    International: ["Passport", "Travel Adapter", "Currency"],
  };

  function handleSuggestItems() {
    const suggestedItems = suggestions[journeyType].map((item, index) => ({
      id: Date.now() + index,
      description: item,
      quantity: 1,
      packed: false,
      isPriority: false,
      type: "Others", // Default type
    }));
    setItems((prevItems) => [...suggestedItems, ...prevItems]);
  }
  function handlePackAll(item) {
    const packedItems = items.map((item) => ({ ...item, packed: true }));
    setItems(packedItems);
  }
  function handleJourneyChange(e) {
    setJourneyType(e.target.value);
  }
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
  function handleClearAll() {
    setItems([]);
  }
  const filteredItems = filterType === "All"
  ? items
  : items.filter((item) => item.type === filterType);
  return (
    <div className="app">
      <Logo journeyType={journeyType} handleJourneyChange={handleJourneyChange} />
      <Form handleAddItems={handleAddItems} handleClearAll={handleClearAll} setFilterType={setFilterType} handlePackAll={handlePackAll} handleSuggestItems={handleSuggestItems} />
      <PackingList items={filteredItems} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} handleIncreaseItem={handleIncreaseItem} handleDecreaseItem={handleDecreaseItem}/>
      <Stats items={filteredItems} />
    </div>
  );
}

export default App;
