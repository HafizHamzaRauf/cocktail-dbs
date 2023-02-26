import { createContext, useEffect, useState } from "react";
const url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
export const ProductContext = createContext({
  items: [],
  isLoading: true,
  changeItems(newItems) {},
});

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const changeItems = (newItems) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(({ drinks }) => {
        const newArray = drinks.filter((val) => {
          return val.strDrink.includes(newItems);
        });
        setItems(newArray);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.drinks);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ProductContext.Provider value={{ items, isLoading, changeItems }}>
      {children}
    </ProductContext.Provider>
  );
};
