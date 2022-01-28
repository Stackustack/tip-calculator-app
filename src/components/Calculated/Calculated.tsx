import classes from "./Calculated.module.css";
import { useContext } from "react";
import { CalcContext } from "../../store/calc-context";

type CalculatedType = {
  label: string;
  value: number;
};

const Calculated = ({ label, value }: CalculatedType) => {
  return (
    <div className={classes.calculated}>
      <div className={classes["calculated__value"]}>${value.toFixed(2)}</div>
      <div className={classes["calculated__label-top"]}>{label}</div>
      <div className={classes["calculated__label-bottom"]}>/ person</div>
    </div>
  );
};

export default Calculated;
