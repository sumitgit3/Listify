import React, { createContext, useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

// GraphQL Queries for Authentication
const SIGN_IN = gql`
  mutation SignIn($username: String!, $email: String!, $password: String!) {
  signIn(username: $username, email: $email, password: $password)
  }
`;

const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sign-In Mutation
  const [signInMutation] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn);
      setUser({ token: data.signIn });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Sign-Up Mutation
  const [signUpMutation] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      setUser({ token: data.signUp });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Sign-In Handler
  const signIn = async (username, email, password) => {
      await signInMutation({ variables: { username, email, password } });
  };

  // Sign-Up Handler
  const signUp = async (username, email, password) => {
      await signUpMutation({ variables: { username, email, password } });
  };

  // Logout Handler
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Check for token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
