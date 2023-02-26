import { useContext } from "react";
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { ProductContext } from "../store/context";

const Main = () => {
  const { items } = useContext(ProductContext);
  return (
    <Navigation>
      <SearchBar></SearchBar>
      {items.length === 0 && (
        <p style={{ fontSize: "2rem", textAlign: "center" }}>No Drink Found</p>
      )}
      {items.length > 0 && <ProductList></ProductList>}
    </Navigation>
  );
};
export default Main;
