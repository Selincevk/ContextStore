import { useContext } from "react";
import { ProductContext } from "../../components/context/productContext";
import Card from "../../components/Card";

const Home = () => {
  // ProductContext ile bağlantı kurulduğunu kontrol ediyoruz.
  const { products, selectedCategory } = useContext(ProductContext);


  return (
    <div className="mt-4 container">
      <h1>{products.length}  products found</h1>
      <h1>{selectedCategory !="all" && <p>
    <span className="text-primary">{selectedCategory}</span> for results
  </p>}</h1>

      <div className="wrapper">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Home;
