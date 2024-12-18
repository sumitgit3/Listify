import React, { useState,useContext } from "react";
import { ItemContext } from "../Context/ItemContext";
import { toast } from "react-toastify";

const AddItemForm = () => {

  const {addItem} = useContext(ItemContext);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (newItem.name && newItem.quantity && newItem.category) {
      await addItem(newItem);
      setNewItem({ name: "", quantity: "", category: "" });
    } else {
      toast.warn("Please fill out all fields before adding an item.");
    }
  };

  return (
    <form
      onSubmit={handleAddItem}
      className="mb-8 p-4 border rounded-lg shadow-md bg-purple-100"
    >
      <h2 className="text-xl font-bold text-purple-700 mb-4">Add a New Item</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="name" className="block text-purple-600 font-medium">Item Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="E.g., Bananas"
            className="w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-purple-600 font-medium">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
            placeholder="E.g., 5"
            className="w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-purple-600 font-medium">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newItem.category}
            onChange={handleInputChange}
            placeholder="E.g., Fruits"
            className="w-full border rounded p-2 mt-1"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-purple-600 text-white px-6 py-2 rounded shadow-md hover:bg-purple-700"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
