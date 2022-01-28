import classes from "./LabelWithValidation.module.css";

type LabelWithValidationTypes = {
  labelText: string;
  hideError?: boolean;
};

const LabelWithValidation = ({
  labelText,
  hideError,
}: LabelWithValidationTypes) => {
  return (
    <div className={classes.labelWithValidation}>
      <div className={classes.labelWithValidation__label}>{labelText}</div>
      <div
        className={classes.labelWithValidation__validationText}
        style={hideError ? { display: "none" } : {}}
      >
        Can't be zero
      </div>
    </div>
  );
};

export default LabelWithValidation;
