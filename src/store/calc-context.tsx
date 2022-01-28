import React from "react";

export const CalcContext = React.createContext({
  calculatedTipPerPerson: 0,
  calculatedTotalPerPerson: 0,

  billValue: 0,
  onBillValueInputTouched: () => {},
  isBillValueInputTouched: false,
  isBillValueInputValid: false,

  numberOfPeople: 0,
  onNumberOfPeopleFieldTouched: () => {},
  isNumberOfPeopleTouched: false,
  isNumberOfPeopleValid: false,

  selectedTipValue: 0,
  reset: () => {},
  onBillChange: (e: any) => {},
  onPeopleNumChange: (e: any) => {},
  selectTipButton: (id: number) => {},
  calculate: () => {},
});
