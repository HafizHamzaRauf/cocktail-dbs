import { useContext, useState } from "react";
import { ProductContext } from "../store/context";
import classes from "./SearchBar.module.css";
const SearchBar = () => {
  const context = useContext(ProductContext);
  const [searchedInput, setSearchedInput] = useState();
  const changeHanlder = (e) => {
    context.changeItems(e.target.value);
  };
  return (
    <section className={classes["search-section"]}>
      <h2 className={classes["secondary-heading"]}>
        Search Your Favorite Cocktail
      </h2>
      <input
        value={searchedInput}
        onChange={changeHanlder}
        className={classes["search-bar"]}
      />
    </section>
  );
};

export default SearchBar;
