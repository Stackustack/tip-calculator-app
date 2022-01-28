import { CSSProperties, ReactChild } from "react";

import classes from "./Card.module.css";

type CardProps = {
  children?: ReactChild | ReactChild[];
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
