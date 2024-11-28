import React, { useState } from "react";

function Form({handleAddItems, handleClearAll,setFilterType,handlePackAll,handleSuggestItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isPriority, setIsPriority] = useState(false);
    const [type,setType] = useState("Clothing")

  function handleFilterChange(e) {
    setFilterType(e.target.value); 
  }
   
    function handleDescription(e) {
          setDescription(e.target.value);
        }
    function handleQuantity(e) {
          setQuantity(Number(e.target.value));
        }
    function handleType(e) {
          setType(e.target.value);
        }
    function handlePriority(e) {
          setIsPriority(e.target.checked); 
        }
        
        function handleSubmit(e) {
            e.preventDefault(); 
            const newItem = { 
              id: Date.now(), 
              description, 
              quantity, 
              packed: false, 
              isPriority,
              type, 
            };
            handleAddItems(newItem);
            setDescription(""); 
            setQuantity(1);
            setIsPriority(false); 
            setType('Clothing');
          }
        
          return (
            <div className="add-form">
            <form className="add-form" onSubmit={handleSubmit}>
              <h3>What do you need to pack?</h3>
              <select value={quantity} onChange={handleQuantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select value={type} onChange={handleType}>
                <option value="Clothing">Clothing</option>
                <option value="Hygiene">Hygiene</option>
                <option value="Electronics">Electronics</option>
                <option value="Others">Others</option>
              </select>
              <input 
                type="text" 
                onChange={handleDescription} 
                value={description} 
                placeholder="Items..."
              />
              <label>
                Priority
                <input 
                  type="checkbox" 
                  checked={isPriority} 
                  onChange={handlePriority} 
                />
              </label>
              <button>ADD</button>
            </form>
            <button onClick={handleSuggestItems}>Auto Suggest Items</button>
            <button onClick={handlePackAll}>Pack All</button>
            <button onClick={handleClearAll}>Clear All</button>
            <text>Filter:</text>
            <select onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Clothing">Clothing</option>
                <option value="Hygiene">Hygiene</option>
                <option value="Electronics">Electronics</option>
                <option value="Others">Others</option>
            </select>
            </div>
          );
        }

  export default Form;