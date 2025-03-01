import { createContext, useEffect, useState } from "react";
import api from "../../api";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, SetProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    // istek atacak url belirle
    const url = selectedCategory === "all"? "/products" : `/products/category/${selectedCategory}`;
    // api istek at 
    api.get(url).then((res) => SetProducts(res.data))}, [selectedCategory]);
  return (
    <ProductContext.Provider value={{ products, SetProducts , setSelectedCategory,selectedCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
