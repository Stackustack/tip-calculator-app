import classes from "./Input.module.css";

type InputType = {
  placeholder?: string;
  className?: string;
  value: string;
  onValueChange: (e: any) => void;
  onElementTouched?: (e: any) => void;
};

const Input = ({
  placeholder,
  className,
  value,
  onValueChange,
  onElementTouched,
}: InputType) => {
  return (
    <input
      onBlur={onElementTouched}
      onChange={onValueChange}
      className={`${classes.input} ${className}`}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
