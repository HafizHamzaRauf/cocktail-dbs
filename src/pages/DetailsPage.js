import Navigation from "../components/Navigation";
import Details from "../components/Details";
import { useParams } from "react-router-dom";

import { useContext } from "react";
import { ProductContext } from "../store/context";
const DetailsPage = () => {
  const { id } = useParams();
  const { items } = useContext(ProductContext);
  const drink = items?.find((val) => {
    return val.idDrink === id;
  });
  if (!drink) {
    return <p style={{ fontSize: "2rem" }}>product Not found</p>;
  }
  return (
    <Navigation>
      <Details
        imagePath={drink.strDrinkThumb}
        heading={drink.strDrink}
        name={drink.strCategory}
        category={drink.strAlcoholic}
        info={drink.strInstructionsDE?.slice(-10)}
        glass={drink.strGlass}
        instructions={drink.strInstructionsIT?.slice(-5)}
        ingredients={drink.strIngredient1}
      ></Details>
    </Navigation>
  );
};
export default DetailsPage;
