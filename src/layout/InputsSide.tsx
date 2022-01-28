import IconInput from "../components/UI/AmountInput/IconInput";
import FixedValGroup from "../components/FixedValGroup/FixedValGroup";

import personIcon from "./../images/icon-person.svg";
import dolarIcon from "./../images/icon-dollar.svg";

import classes from "./InputsSide.module.css";
import { useContext } from "react";
import { CalcContext } from "../store/calc-context";

type InputsSideType = {
  className: string;
};

const InputsSide = ({ className }: InputsSideType) => {
  const ctx = useContext(CalcContext);

  return (
    <div className={`${classes.inputsSide} ${className}`}>
      <IconInput
        hideError={!(ctx.isBillValueInputTouched && !ctx.isBillValueInputValid)}
        onElementTouched={ctx.onBillValueInputTouched}
        value={ctx.billValue ? ctx.billValue.toString() : ""}
        label="Bill"
        icon={dolarIcon}
        onValueChange={ctx.onBillChange}
      />
      <FixedValGroup />
      <IconInput
        onElementTouched={ctx.onNumberOfPeopleFieldTouched}
        hideError={!(ctx.isNumberOfPeopleTouched && !ctx.isNumberOfPeopleValid)}
        value={ctx.numberOfPeople ? ctx.numberOfPeople.toString() : ""}
        label="Number of People"
        icon={personIcon}
        onValueChange={ctx.onPeopleNumChange}
      />
    </div>
  );
};

export default InputsSide;
