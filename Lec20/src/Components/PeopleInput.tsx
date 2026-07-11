interface PeopleInputProps {
  people: number;
  setPeople: (value: number) => void;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
  const isZero = people === 0;

  return (
    <div className="input-group">
      <div className="label-row">
        <label className="input-label">Number of People</label>
        {isZero && <span className="error-message">Can't be zero</span>}
      </div>
      <div className="input-wrapper">
        <span className="input-icon">👤</span>
        <input
          type="number"
          placeholder="1"
          value={people === 0 ? "" : people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className={`calculator-input ${isZero ? "input-error" : ""}`}
        />
      </div>
    </div>
  );
}