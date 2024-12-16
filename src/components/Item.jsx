import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import icons for edit and delete

const Item = ({ name, quantity, category, purchased, onTogglePurchased, onDelete, onEdit }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
      {/* Item Info */}
      <div>
        <h3 className="text-lg font-bold text-purple-800">{name}</h3>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
      <button
          onClick={onTogglePurchased}
          className={`px-4 py-2 text-sm font-bold rounded-full shadow ${
            purchased
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {purchased ? "Purchased" : "Mark as Purchased"}
        </button>
        <button
          onClick={onEdit}
          className="text-blue-600 hover:text-blue-800 px-2 py-1 flex items-center justify-center"
        >
          <FaEdit />
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-800 px-2 py-1 flex items-center justify-center"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Item;
