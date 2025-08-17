import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import './index.css'
import '/src/assets/js/jarallax.js.download'
// import '/src/assets/js/bootstrap.bundle.min.js.download'
import '/src/assets/js/navbar-dropdown.js'
import '/src/assets/js/scroll-gallery.js'
import '/src/assets/js/smooth-scroll.js'
//import '/src/assets/js/index.js.download'
import '/src/assets/js/script.js'
import '/src/assets/js/formoid.min'
import '/src/assets/js/preview.js'

// Create Apollo client with Vite environment variable
const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPHQL_ENDPOINT_URL, // Access the environment variable
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);