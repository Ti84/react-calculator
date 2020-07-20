import React, { useState } from 'react';
import './App.scss';
import buttons from './data/buttons';
import CalculatorButton from './components/CalculatorButton';

function App() {
  const [arg1, setArg1] = useState('0');
  const [operator, setOperator] = useState('');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');

  const onCalcBtnClick = (btnValue) => {
    switch (btnValue) {
      case '0':
        if (displayValue === '0') {
          return;
        }
      // eslint-disable-next-line
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (displayValue === '0' || clearDisplay) {
          setDisplayValue(btnValue);
          if (clearDisplay) {
            setClearDisplay(false);
          }
        } else {
          setDisplayValue(displayValue + btnValue);
        }
        break;
      case 'AC':
        setArg1('');
        setOperator('');
        setDisplayValue('0');
        break;
      case '+/-':
        setDisplayValue(String(displayValue * -1));
        break;
      case '%':
        setDisplayValue(String(displayValue * 0.01));
        break;
      case '.':
        if (displayValue.includes('.')) {
          return;
        }
        setDisplayValue(displayValue + '.');
        break;
      case '÷':
        setArg1(displayValue);
        setOperator('/');
        setClearDisplay(true);
        break;
      case 'x':
        setArg1(displayValue);
        setOperator('*');
        setClearDisplay(true);
        break;
      case '-':
        setArg1(displayValue);
        setOperator('-');
        setClearDisplay(true);
        break;
      case '+':
        setArg1(displayValue);
        setOperator('+');
        setClearDisplay(true);
        break;
      case '=':
        // eslint-disable-next-line
        setDisplayValue(String(eval(`${arg1}${operator}${displayValue}`)));
        setClearDisplay(true);
        break;
      default:
        console.error('how?');
    }
  };

  return (
    <div className="App">
      <section className="display-area">
        <span>{displayValue}</span>
      </section>
      <section className="buttons">
        {buttons.map(({ value: btnValue, type }) => (
          <CalculatorButton
            buttonValue={btnValue}
            buttonType={type}
            handleClick={onCalcBtnClick}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
