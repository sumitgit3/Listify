import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// HTTP Link to the GraphQL server
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URI, // Replace with your GraphQL server's URL
});

// Middleware to add the Authorization header
const authLink = setContext((_, { headers }) => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}` : "", // Include token if available
    },
  };
});

// Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Combine authLink and httpLink
  cache: new InMemoryCache(),
});

export default client;
