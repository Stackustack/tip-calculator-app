import Calculated from "../components/Calculated/Calculated";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Button from "../components/UI/Button/Button";

import classes from "./TipCalc.module.css";
import InputsSide from "./InputsSide";
import { useContext, useEffect } from "react";
import { CalcContext } from "../store/calc-context";

const TipCalculator = () => {
  const ctx = useContext(CalcContext);

  useEffect(() => {
    if (ctx.billValue && ctx.numberOfPeople) {
      ctx.calculate();
    }
  }, [ctx.billValue, ctx.numberOfPeople, ctx.selectedTipValue]);

  return (
    <div className="app">
      <Header />

      <Card className={classes["app-wrapper"]}>
        <InputsSide className={classes["app-wrapper__inputs"]} />

        <Card className={classes["app-wrapper__calculated"]}>
          <div className={classes["calculated__calculations"]}>
            <Calculated value={ctx.calculatedTipPerPerson} label="Tip Amount" />
            <Calculated value={ctx.calculatedTotalPerPerson} label="Total" />
          </div>
          <Button
            className={classes["calculated__reset-button"]}
            text="RESET"
            onClickss={ctx.reset}
          />
        </Card>
      </Card>
    </div>
  );
};

export default TipCalculator;
