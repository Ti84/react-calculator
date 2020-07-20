import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <section className="display-area">
        <span>0</span>
      </section>
      <section className="buttons">
        <input type="button" className="calc-btn" value="AC" onClick={() => window.alert('AC')} />
        <input type="button" className="calc-btn" value="+/-" onClick={() => window.alert('+/-')} />
        <input type="button" className="calc-btn" value="%" onClick={() => window.alert('%')} />
        <input type="button" className="calc-btn calc-btn--operator" value="÷" onClick={() => window.alert('÷')} />
        <input type="button" className="calc-btn" value="7" onClick={() => window.alert('7')} />
        <input type="button" className="calc-btn" value="8" onClick={() => window.alert('8')} />
        <input type="button" className="calc-btn" value="9" onClick={() => window.alert('9')} />
        <input type="button" className="calc-btn calc-btn--operator" value="X" onClick={() => window.alert('X')} />
        <input type="button" className="calc-btn" value="4" onClick={() => window.alert('4')} />
        <input type="button" className="calc-btn" value="5" onClick={() => window.alert('5')} />
        <input type="button" className="calc-btn" value="6" onClick={() => window.alert('6')} />
        <input type="button" className="calc-btn calc-btn--operator" value="-" onClick={() => window.alert('-')} />
        <input type="button" className="calc-btn" value="1" onClick={() => window.alert('1')} />
        <input type="button" className="calc-btn" value="2" onClick={() => window.alert('2')} />
        <input type="button" className="calc-btn" value="3" onClick={() => window.alert('3')} />
        <input type="button" className="calc-btn calc-btn--operator" value="+" onClick={() => window.alert('+')} />
        <input type="button" className="calc-btn" value="0" onClick={() => window.alert('0')} />
        <input type="button" className="calc-btn calc-btn--annoying-period" value="." onClick={() => window.alert('.')} />
        <input type="button" className="calc-btn calc-btn--operator" value="=" onClick={() => window.alert('=')} />
      </section>
    </div>
  );
}

export default App;
