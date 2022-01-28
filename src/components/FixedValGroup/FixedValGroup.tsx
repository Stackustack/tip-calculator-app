import FixedValButton from "../FixedValButton/FixedValButton";
import Input from "../UI/Input/Input";

import classes from "./FixedValGroup.module.css";
import { useContext } from "react";
import { CalcContext } from "../../store/calc-context";

const FixedValGroup = () => {
  const ctx = useContext(CalcContext);

  return (
    <div>
      <label className={classes.fixedValGroup__label}>Select Tip %</label>
      <div className={classes.fixedValGroup__inputs}>
        <FixedValButton id={10} />
        <FixedValButton id={20} />
        <FixedValButton id={30} />
        <FixedValButton id={40} />
        <FixedValButton id={50} />
        <Input
          onValueChange={ctx.onPeopleNumChange}
          value="TODO"
          placeholder="Custom"
        />
        {/* <FixedValButton id={60} /> */}
      </div>
    </div>
  );
};

export default FixedValGroup;
