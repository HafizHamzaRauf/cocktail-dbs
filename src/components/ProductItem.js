import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
import classes from "./ProductItem.module.css";
const ProductItem = ({ id, imagePath, heading, description, type }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    const url = "/details/" + e.target.id;
    console.log(url);
    navigate(url);
  };
  return (
    <>
      <div id={id} className={classes["productItem"]}>
        <img className={classes.img} src={imagePath} alt={"drink image"} />
        <div className={classes["product-description"]}>
          <h1 className={classes["product-heading"]}>{heading}</h1>
          <h3 className={classes["description"]}>{description}</h3>
          <p className={classes["product-type"]}>{type}</p>
          <Button
            id={id}
            onClick={clickHandler}
            customClass={classes.customBtn}
          >
            Details
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
