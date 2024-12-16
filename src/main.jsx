import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client'
import client from './Graphql/client.jsx'
import  {AuthProvider}  from './Context/AuthContext.jsx'
import { ItemProvider } from './Context/ItemContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <AuthProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </AuthProvider>
  </ApolloProvider>,
  </StrictMode>,
)
