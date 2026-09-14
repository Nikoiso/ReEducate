interface TipInputProps {
  tip: number;
  setTip: (value: number) => void;
}

export default function TipInput({ tip, setTip }: TipInputProps) {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="input-group">
      <label className="input-label">Select Tip %</label>
      <div className="tip-grid">
        {tipOptions.map((option) => (
          <button
            key={option}
            onClick={() => setTip(option)}
            className={`tip-btn ${tip === option ? "active" : ""}`}
          >
            {option}%
          </button>
        ))}
        <input
          type="number"
          min="0"
          placeholder="Custom"
          value={!tipOptions.includes(tip) && tip !== 0 ? tip : ""}
          onChange={(e) => setTip(Number(e.target.value))}
          className="custom-tip-input"
        />
      </div>
    </div>
  );
}