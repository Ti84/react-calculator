import React from "react";

const CalculatorButton = ({ buttonValue, buttonType, handleClick }) => {
  const getBtnClass = () => {
    switch (buttonType) {
      case "operator":
        return "calc-btn calc-btn--operator";
      case "short":
        return "calc-btn calc-btn--short";
      default:
        return "calc-btn";
    }
  };

  return (
    <input
      type="button"
      className={getBtnClass()}
      value={buttonValue}
      onClick={(e) => handleClick(e.target.value)}
    />
  );
};

export default CalculatorButton;
