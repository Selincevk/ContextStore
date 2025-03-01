import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { UserProvider } from "./components/context/userContext.jsx"; 
import { ProductProvider } from './components/context/productContext.jsx'
import {BasketProvider} from './components/context/basketContext.jsx'
import'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(

  <BasketProvider>
  <ProductProvider>
  <StrictMode>
  <ToastContainer />
    <App />
  </StrictMode>
 </ProductProvider>
 </BasketProvider>
)
