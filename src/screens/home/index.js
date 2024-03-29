import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunk";
import { Product } from "./components/Product";
import "./styles/products.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((s) => {
    const searchQuery = s.inp.toLowerCase().trim();
    const filteredProducts = s.x.products?.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery);
    });
    return filteredProducts;
    // return s.x.products;
  });

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);

  if (products === null) return <h1>Loading ...</h1>;
  if (products.length === 0)
    return <h2 style={{ textAlign: "center" }}>"No Products Found"</h2>;
  return (
    <div className="products-list">
      {products.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  );
};

export default HomeScreen;
