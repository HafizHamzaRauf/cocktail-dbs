import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import { useContext } from "react";
import { ProductContext } from "../store/context";
import LoadingSpinner from "./LoadingSpinner";
const ProductList = () => {
  const context = useContext(ProductContext);
  const content = context.items?.map((val) => {
    return (
      <li className={classes["list-items"]}>
        <ProductItem
          imagePath={val.strDrinkThumb}
          id={val.idDrink}
          heading={val.strDrink}
          type={val.strAlcoholic}
          description={"description"}
        ></ProductItem>
      </li>
    );
  });

  return (
    <div className={classes["list-container"]}>
      <h1 className={classes.heading}>Cocktails</h1>
      {context.isLoading && <LoadingSpinner></LoadingSpinner>}
      {!context.isLoading && <ul className={classes.list}>{content}</ul>}
    </div>
  );
};
export default ProductList;
