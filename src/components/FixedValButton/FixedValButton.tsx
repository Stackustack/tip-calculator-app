import classes from "./FixedValButton.module.css";
import Button from "../UI/Button/Button";
import { useContext } from "react";
import { CalcContext } from "../../store/calc-context";

type FixedValButtonType = {
  id: number;
  isSelected?: boolean;
  onSelect?: (e: any) => void;
};

const FixedValButton = ({ id, isSelected, onSelect }: FixedValButtonType) => {
  const { selectTipButton, selectedTipValue } = useContext(CalcContext);

  const cssClasses = `
    ${classes.button} 
    ${selectedTipValue === id ? `${classes.selected}` : ""}
  `;

  return (
    <Button
      text={id.toString()}
      onClickss={selectTipButton.bind(null, id)}
      className={cssClasses}
    />
  );
};

export default FixedValButton;
