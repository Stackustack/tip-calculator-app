import Input from "../Input/Input";
import LabelWithValidation from "../Label/LabelWithValidation";
import classes from "./IconInput.module.css";
import { useContext } from "react";
import { CalcContext } from "../../../store/calc-context";

type IconInputType = {
  icon: string;
  label: string;
  value: string;
  hideError: boolean;
  onValueChange: (e: any) => void;
  onElementTouched?: (e: any) => void;
};

const IconInput = ({
  icon,
  label,
  value,
  hideError,
  onValueChange,
  onElementTouched,
}: IconInputType) => {
  const ctx = useContext(CalcContext);

  return (
    <div>
      <LabelWithValidation labelText={label} hideError={hideError} />
      <div className={classes["iconInput"]}>
        <Input
          onElementTouched={onElementTouched}
          onValueChange={onValueChange}
          placeholder="0"
          value={value}
          className={classes["iconInput__input"]}
        />
        <img src={icon} className={classes["iconInput__icon"]} alt="" />
      </div>
    </div>
  );
};

export default IconInput;
