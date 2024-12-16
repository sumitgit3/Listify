import React, { createContext, useState, useEffect, useContext } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { AuthContext } from "./AuthContext";

// GraphQL Queries and Mutations
const GET_ITEMS = gql`
  query GetShoppingList {
    getShoppingList {
      id
      name
      quantity
      category
      purchased
    }
  }
`;

const ADD_ITEM = gql`
  mutation AddItem($name: String!, $quantity: Int!, $category: String!) {
    addItem(name: $name, quantity: $quantity, category: $category) {
      id
      name
      quantity
      category
      purchased
    }
  }
`;

const UPDATE_ITEM = gql`
  mutation UpdateItem(
    $id: ID!
    $name: String
    $quantity: Int
    $category: String
    $purchased: Boolean
  ) {
    updateItem(
      id: $id
      name: $name
      quantity: $quantity
      category: $category
      purchased: $purchased
    ) {
      id
      name
      quantity
      category
      purchased
    }
  }
`;

const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id)
  }
`;

// Context Creation
const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null); // Error state to track any issues

  // Fetch items with useQuery
  const { data, loading, refetch, error: queryError } = useQuery(GET_ITEMS);

  // Update error state for query errors
  useEffect(() => {
    if (queryError) {
      setError(queryError.message);
    }
  }, [queryError]);

  // Update local state when data changes
  useEffect(() => {
    if (data && data.getShoppingList) {
      setItems(data.getShoppingList);
    }
  }, [data]);

  // Add Item Mutation
  const [addItemMutation] = useMutation(ADD_ITEM, {
    onCompleted: () => {
      refetch(); // Automatically refetch items to sync state with backend
      setError(null); // Clear error on success
    },
    onError: (err) => {
      console.error("Error adding item:", err);
      setError(err.message);
    },
  });

  // Update Item Mutation
  const [updateItemMutation] = useMutation(UPDATE_ITEM, {
    onCompleted: () => {
      refetch(); // Automatically refetch items to sync state with backend
      setError(null); // Clear error on success
    },
    onError: (err) => {
      console.error("Error updating item:", err);
      setError(err.message);
    },
  });

  // Delete Item Mutation
  const [deleteItemMutation] = useMutation(DELETE_ITEM, {
    onCompleted: () => {
      refetch(); // Automatically refetch items to sync state with backend
      setError(null); // Clear error on success
    },
    onError: (err) => {
      console.error("Error deleting item:", err);
      setError(err.message);
    },
  });

  // Handlers for mutation actions
  const addItem = async ({ name, quantity, category }) => {
      await addItemMutation({
        variables: { name, quantity: parseInt(quantity, 10), category },
      });
  };

  const updateItem = async ({ id, name, quantity, category, purchased }) => {
      await updateItemMutation({
        variables: {
          id,
          name,
          quantity: quantity !== undefined ? parseInt(quantity, 10) : undefined,
          category,
          purchased,
        },
      });
  };

  const deleteItem = async (id) => {
      await deleteItemMutation({ variables: { id } });
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        loading,
        error,
        refetch,
        addItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };


