import classes from "./Button.module.css";
import { useContext } from "react";
import { CalcContext } from "../../../store/calc-context";

type ButtonType = {
  text?: string;
  className?: string;
  onClickss?: (e: any) => void;
};

const Button = ({ text, className, onClickss }: ButtonType) => {
  return (
    <button onClick={onClickss} className={`${classes.button} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
