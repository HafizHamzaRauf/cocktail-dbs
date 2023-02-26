import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Navigation = ({ children }) => {
  return (
    <>
      <nav className={classes.navigation}>
        <h1 className={classes["primary-heading"]}>
          The<span className={classes.cocktail}>CockTail</span>DB
        </h1>
        <div className={classes.links}>
          <Link className={classes.link} to={"/"}>
            Home
          </Link>
          <Link className={classes.link} to={"/about"}>
            About
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
};
export default Navigation;
