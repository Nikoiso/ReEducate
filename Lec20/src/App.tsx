import { useState } from 'react'
import BillInput from './Components/BillInput'
import PeopleInput from './Components/PeopleInput'
import TipInput from './Components/TipInput'
import "./App.css";

export default function App() {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [tip, setTip] = useState(0)

  const tipAmountPerPerson = people > 0 ? (bill * (tip / 100)) / people : 0
  const totalPerPerson = people > 0 ? (bill + bill * (tip / 100)) / people : 0



return (
  <div className="calculator-wrapper">
    <h1 className="logo">
      SPLI <br /> TTER
    </h1>

    <div className="calculator-container">
      <div className="left-panel">
        <BillInput bill={bill} setBill={setBill} />
        <TipInput tip={tip} setTip={setTip} />
        <PeopleInput people={people} setPeople={setPeople} />
      </div>

      <div className="right-panel">
        <div className="results-wrapper">
          <div className="result-row">
            <div>
              <div className="result-title">Tip Amount</div>
              <div className="result-subtitle">/ person</div>
            </div>
            <div className="result-value">${tipAmountPerPerson.toFixed(2)}</div>
          </div>
          <div className="result-row">
            <div>
              <div className="result-title">Total</div>
              <div className="result-subtitle">/ person</div>
            </div>
            <div className="result-value">${totalPerPerson.toFixed(2)}</div>
          </div>
        </div>

        <button
          className="reset-btn"
          disabled={bill === 0 && tip === 0 && people === 1}
          onClick={() => {
            setBill(0);
            setPeople(1);
            setTip(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  </div>
);
}