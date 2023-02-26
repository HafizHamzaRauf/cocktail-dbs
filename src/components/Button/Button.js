import classes from "./Button.module.css";
const Button = ({ id, customClass, onClick, children }) => {
  return (
    <button
      id={id}
      className={`${classes.btn} ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
