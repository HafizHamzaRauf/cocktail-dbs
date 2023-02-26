import classes from "./LoadingSpinner.module.css";
function LoadingSpinner() {
  return (
    <div>
      {
        <div className={classes.loading}>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
        </div>
      }
    </div>
  );
}

export default LoadingSpinner;
