import React, { useContext, useState, useEffect } from "react";
import Item from "../components/Item";
import EditModal from "../components/EditModal";
import Calculator from "../components/Calculator";
import { FaCalculator } from "react-icons/fa"; // Import the calculator icon
import { AuthContext } from "../Context/AuthContext";
import { ItemContext } from "../Context/ItemContext";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import AddItemForm from "../components/AddItemForm";

const ShoppingListPage = () => {
  const { user } = useContext(AuthContext);
  const { items, loading, error,refetch, updateItem, deleteItem } = useContext(ItemContext);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);

  const togglePurchased = async (id, purchased) => {
    await updateItem({
      id,
      name: undefined,
      quantity: undefined,
      category: undefined,
      purchased: !purchased
    });
  };

  const deleteItemHandler = async (id) => {
    await deleteItem(id);
  };

  const openEditModal = (item) => {
    setCurrentItem(item);
    setModalOpen(true);
  };

  const closeEditModal = () => {
    setModalOpen(false);
    setCurrentItem(null);
  };

  const saveEdits = async (updatedItem) => {
    await updateItem(updatedItem);
    closeEditModal();
  };

  const toggleCalculator = () => {
    setIsCalculatorVisible((prev) => !prev);
  };

  const closeCalculator = () => {
    setIsCalculatorVisible(false);
  };

  if (loading) return <p className="text-center"><Spinner/></p>;
  if (error) return <p className="text-center text-red-600"> <ErrorMessage message={error}></ErrorMessage> </p>;

  //rerender list on user change
  useEffect(()=>{
    async function refectItems(){
      await refetch();
    }
    refectItems();
  },[user]);

  return (
    <>
     {user &&<div className="min-h-screen bg-gradient-to-b from-blue-300 via-purple-200 to-pink-300 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Page Title */}
          <h1 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">My Shopping List</h1>
          {/* Calculator Button */}
          <div className="text-center mb-4">
            <button
              onClick={toggleCalculator}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 flex items-center justify-center"
            >
              <FaCalculator className="h-6 w-6" />
            </button>
          </div>

          {/* Add Item Form */}
          <AddItemForm/>

          {/* List of Items */}
          <div className="space-y-4">
            {items.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                purchased={item.purchased}
                onTogglePurchased={() => togglePurchased(item.id, item.purchased)}
                onDelete={() => deleteItemHandler(item.id)}
                onEdit={() => openEditModal(item)}
              />
            ))}
          </div>

          {/* Edit Modal */}
          {modalOpen && currentItem && (
            <EditModal
              item={currentItem}
              onSave={saveEdits}
              onClose={closeEditModal}
            />
          )}

          {/* Calculator Modal */}
          {isCalculatorVisible && (
            <Calculator onClose={closeCalculator} />
          )}
        </div>
      </div>}
    </>

  );
};

export default ShoppingListPage;
