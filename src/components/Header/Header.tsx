import logo from "../../images/logo.svg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
