import React, { Fragment } from "react";

import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>HungerHub</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img
          className={styles["main-image img"]}
          src={mealsImage}
          alt="A pic of meals"
        />
      </div>
    </Fragment>
  );
};

export default Header;
