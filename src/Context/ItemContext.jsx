import React, { createContext, useState, useEffect} from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

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
  const [items, setItems] = useState([]);

  // Fetch items with useQuery
  const { data, loading, refetch, error } = useQuery(GET_ITEMS);


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
      toast.success("Item added");
    },
    onError: (err) => {
      toast.error(`Error adding item: ${err.message}`);
    },
  });

  // Update Item Mutation
  const [updateItemMutation] = useMutation(UPDATE_ITEM, {
    onCompleted: () => {
      refetch(); // Automatically refetch items to sync state with backend
      toast.success("Item updated");
    },
    onError: (err) => {
      toast.error(`Error updating item:${err.message}`);
    },
  });

  // Delete Item Mutation
  const [deleteItemMutation] = useMutation(DELETE_ITEM, {
    onCompleted: () => {
      refetch(); // Automatically refetch items to sync state with backend
      toast.success("Item removed");
    },
    onError: (err) => {
      toast.error(`Error deleting item:${err.message}`);
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


