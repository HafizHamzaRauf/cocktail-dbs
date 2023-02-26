import Button from "./Button/Button";
import classes from "./Details.module.css";
import { useNavigate } from "react-router-dom";
const Details = ({
  heading,
  imagePath,
  name,
  category,
  info,
  glass,
  instructions,
  ingredients,
}) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <section className={classes["details-section"]}>
      <Button onClick={clickHandler}>Back to Home</Button>
      <h1 className={classes.heading}> {heading}</h1>
      <div className={classes.descriptions}>
        <img src={imagePath} className={classes.image} />
        <div className={classes.info}>
          <div className={classes.item}>
            <p className={classes.name}>Name:</p>
            <p className={classes.value}> {name}</p>
          </div>
          <div className={classes.item}>
            <p className={classes.name}>category:</p>
            <p className={classes.value}> {category}</p>
          </div>
          <div className={classes.item}>
            <p className={classes.name}>info:</p>
            <p className={classes.value}> {info}</p>
          </div>
          <div className={classes.item}>
            <p className={classes.name}>glass:</p>
            <p className={classes.value}> {glass}</p>
          </div>
          <div className={classes.item}>
            <p className={classes.name}>instructions:</p>
            <p className={classes.value}> {instructions}</p>
          </div>
          <div className={classes.item}>
            <p className={classes.name}>ingredients:</p>
            <p className={classes.value}> {ingredients}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
