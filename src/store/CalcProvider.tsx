import { useReducer } from "react";
import { CalcContext } from "./calc-context";

const defaultCalcState = {
  selectedTipValue: 10,
  billValue: 0,
  isBillValueInputTouched: false,
  isBillValueInputValid: false,
  numberOfPeople: 0,
  isNumberOfPeopleTouched: false,
  isNumberOfPeopleValid: false,
  calculatedTipPerPerson: 0.0,
  calculatedTotalPerPerson: 0.0,
};

const calcReducer = (state: any, action: any) => {
  switch (action.type) {
    case "RESET":
      return defaultCalcState;
    case "USERS_SETS_BILL_VALUE":
      return {
        ...state,
        billValue: parseInt(action.value),
        isBillValueInputValid: action.value.trim().length > 0,
      };
    case "USERS_SETS_PEOPLE_VALUE":
      return {
        ...state,
        numberOfPeople: parseInt(action.value),
        isNumberOfPeopleValid: action.value.trim().length > 0,
      };
    case "USERS_SETS_TIP_VALUE_BY_BUTTON":
      return { ...state, selectedTipValue: action.value };
    case "CALCULATE":
      const roundToSecondDecimalPlace = (v: number): number => {
        return Math.round(v * 100) / 100;
      };

      const calculatedTip = state.billValue * (state.selectedTipValue / 100);
      const calculatedTipPerPerson = calculatedTip / state.numberOfPeople;
      const calculatedTotalPerPerson =
        (state.billValue + calculatedTip) / state.numberOfPeople;

      return {
        ...state,
        calculatedTipPerPerson: roundToSecondDecimalPlace(
          calculatedTipPerPerson
        ),
        calculatedTotalPerPerson: roundToSecondDecimalPlace(
          calculatedTotalPerPerson
        ),
      };
    case "USER_TOUCHED_BILL_INPUT":
      return { ...state, isBillValueInputTouched: true };
    case "USER_TOUCHED_PEOPLE_INPUT":
      return { ...state, isNumberOfPeopleTouched: true };
    default:
      return state;
  }
};

export const CalcProvider = (props: any) => {
  const [calcState, dispatch] = useReducer(calcReducer, defaultCalcState);

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  const onBillChangeHandler = (e: any) => {
    dispatch({ type: "USERS_SETS_BILL_VALUE", value: e.target.value });
  };

  const onPeopleNumChange = (e: any) => {
    dispatch({ type: "USERS_SETS_PEOPLE_VALUE", value: e.target.value });
  };

  const selectTipButtonHandler = (id: any) => {
    dispatch({ type: "USERS_SETS_TIP_VALUE_BY_BUTTON", value: id });
  };

  const calculateHandler = () => {
    dispatch({ type: "CALCULATE" });
  };

  const onBillValueInputTouchedHandler = () => {
    dispatch({ type: "USER_TOUCHED_BILL_INPUT" });
  };

  const onNumberOfPeopleFieldTouchedHandler = () => {
    dispatch({ type: "USER_TOUCHED_PEOPLE_INPUT" });
  };

  const calcContext = {
    calculatedTipPerPerson: calcState.calculatedTipPerPerson,
    calculatedTotalPerPerson: calcState.calculatedTotalPerPerson,

    billValue: calcState.billValue,
    isBillValueInputTouched: calcState.isBillValueInputTouched,
    onBillValueInputTouched: onBillValueInputTouchedHandler,
    isBillValueInputValid: calcState.isBillValueInputValid,

    numberOfPeople: calcState.numberOfPeople,
    isNumberOfPeopleTouched: calcState.isNumberOfPeopleTouched,
    onNumberOfPeopleFieldTouched: onNumberOfPeopleFieldTouchedHandler,
    isNumberOfPeopleValid: calcState.isNumberOfPeopleValid,

    selectedTipValue: calcState.selectedTipValue,
    reset: resetHandler,
    onBillChange: onBillChangeHandler,
    onPeopleNumChange: onPeopleNumChange,
    selectTipButton: selectTipButtonHandler,
    calculate: calculateHandler,
  };

  return (
    <CalcContext.Provider value={calcContext}>
      {props.children}
    </CalcContext.Provider>
  );
};
